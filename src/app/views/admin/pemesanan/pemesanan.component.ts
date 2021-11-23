import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Pemesanan, Peminjaman, PeminjamanItem } from 'src/app/models/buku.model';
import { MessageService } from 'src/app/services/message.service';
import { PemesananService } from 'src/app/services/pemesanan.service';

@Component({
  selector: 'app-pemesanan',
  templateUrl: './pemesanan.component.html',
  styleUrls: ['./pemesanan.component.scss']
})
export class PemesananComponent implements OnInit {

  dropdownPopoverShow = false;
  datas: Pemesanan[] = [];
  sources: Pemesanan[]=[];

  @ViewChild("btnDropdownRef", { static: false })  btnDropdownRef!: ElementRef;
  @ViewChild("popoverDropdownRef", { static: false })  popoverDropdownRef!: ElementRef;

  constructor(private message:MessageService, private pemesananService:PemesananService) {
    pemesananService.get().then((result)=>{
        this.datas= result as Pemesanan[];
        this.sources= result as Pemesanan[];
      });
   }



   ngOnInit(): void {
   }



  toggleDropdown(event: any) {
    event.preventDefault();
    if (this.dropdownPopoverShow) {
      this.dropdownPopoverShow = false;
    } else {
      this.dropdownPopoverShow = true;
    }
  }



  cancelPesanan(event: any) {
    this.dropdownPopoverShow = false;
    console.log(event);
    
  }




  verifikasiPesanan(event: Pemesanan) {
    this.dropdownPopoverShow = false;
    var peminjaman = {pesananid:event.id } ;
    this.pemesananService.createPeminjaman(peminjaman).then(response=>{
      event.status="sukses"
    });
  }


  
  
  textChanged(textparam:any){
    var text = textparam.toString().toLowerCase();
    if(text){
      this.datas = this.sources.filter(
        x=>x.anggota.nama.toLowerCase().includes(text)||
        x.kode.toLowerCase().includes(text)||
        x.status.toLowerCase().includes(text)||
        x.tanggal.toString().toLowerCase().includes(text)
        );
      return;
    }
    this.datas= this.sources;
  }


}
