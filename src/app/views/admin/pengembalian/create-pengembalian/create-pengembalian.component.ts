import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemKarya, Peminjaman,Pengembalian, PengembalianItem, PeminjamanItem, Setting } from 'src/app/models/buku.model';
import { MessageService } from 'src/app/services/message.service';
import { PeminjamanService } from 'src/app/services/peminjaman.service';
import { PengembalianService } from 'src/app/services/pengembalian.service';
import { SettingService } from 'src/app/services/setting.service';

@Component({
  selector: 'app-create-pengembalian',
  templateUrl: './create-pengembalian.component.html',
  styleUrls: ['./create-pengembalian.component.scss']
})
export class CreatePengembalianComponent implements OnInit {

setting:Setting={id:0, lamaSewa:0, denda:0};
public datas:PengembalianItem[]=[];
public searchText:string="";
  model!: Peminjaman;
  pengembalian!: Pengembalian;
  constructor( private router:Router, activatedRote:ActivatedRoute, private pengembalianService:PengembalianService, private peminjamanService:PeminjamanService, settingService:SettingService, message:MessageService) {
    
    
    settingService.getLast().then(x=>{
      if(x!=null){
       this.setting=x as Setting;
          var param1:any = activatedRote.snapshot.paramMap.get('id');
          if(param1!=0){
            this.searchText=param1;
            this.CariPeminjaman();
          }

      }else{
         message.errorMessage("Setting Peminjaman Belum Ada !"); 
      }
    })

   }

  ngOnInit(): void {
  }

  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }

  CariPeminjaman(){
    this.peminjamanService.GetByKaryaItemId(this.searchText).then(x=>{
      this.model = x as Peminjaman;
      this.pengembalian = {peminjaman:this.model, tanggal: new Date() } as Pengembalian;
      this.model.items.forEach(element => {
          let item:PengembalianItem = {peminjamanItem:element,keadaan:"Baik"} as PengembalianItem;
          
          var exsitsData = this.datas.find(x=>x.peminjamanItem.id==element.id);
          if(!exsitsData)
          {
            var selisih= this.hitungSelisihHari(element.tanggal_kembali);
            if(selisih>this.setting.lamaSewa){
              item.terlambat = selisih -this.setting.lamaSewa;
            }else{
              item.terlambat=0;
            }
            
            item.harga = this.setting.denda;
            this.datas.push(item);
          }
      });
      this.searchText="";
    })
  }


  hitungSelisihHari(tanggal:Date){
    // varibel miliday sebagai pembagi untuk menghasilkan hari
    var miliday = 24 * 60 * 60 * 1000;  
    var start = Date.parse(tanggal.toString());
    // expected output: starting timer...
    var d=Date.now();
    var selisih = (Date.now() - start)/miliday;
  return Math.floor(selisih);
    }

    totalDenda(items:PengembalianItem[]){
      var total = 0;
      items.forEach(element => {
        total+=element.terlambat*element.harga;
      });
      return total;
    }

    Save(){
        this.pengembalian.items=this.datas;
        this.pengembalianService.post(this.pengembalian).then(response=>{
          this.router.navigate(['/admin/pengembalian']);
        });

    }
}
