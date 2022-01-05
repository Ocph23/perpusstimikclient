import { Component, OnInit } from '@angular/core';
import { Anggota, Pemesanan, PemesananItem } from 'src/app/models/buku.model';
import { AnggotaService } from 'src/app/services/anggota.service';
import { MessageService } from 'src/app/services/message.service';
import { PemesananService } from 'src/app/services/pemesanan.service';
import { SettingService } from 'src/app/services/setting.service';

@Component({
  selector: 'app-create-peminjaman',
  templateUrl: './create-peminjaman.component.html',
  styleUrls: ['./create-peminjaman.component.scss']
})
export class CreatePeminjamanComponent implements OnInit {

  anggotaSource: Anggota[] = [];
  anggotas: Anggota[] = [];

  bookSource: any[] = [];
  books: any[] = [];
  items: any[] = [];

  Model: Pemesanan = { tanggal: new Date(), } as Pemesanan;
  anggota: any;
  book: any;
  Item!: any;
  constructor(private pemesanan:PemesananService, private anggotaService: AnggotaService, private setting: SettingService, private message: MessageService) { }
  ngOnInit(): void {
    this.anggotaService.get().then(response => {
      this.anggotaSource = response as Anggota[];
      this.anggotas = this.anggotaSource;
    })
  }

  showItem = false;
  showModal = false;
  showBook = false;
  selectedIndex: number = -1;
  selectedBookIndex: number = -1;
  selectedItemIndex: number = -1;

  setIndex(index: number, data: Anggota) {
    this.selectedIndex = index;
    this.anggota = data;
  }
  toggleModal() {
    this.showModal = !this.showModal;
    this.anggota = null;
  }
  selectAnggota() {
    this.showModal = false;
    this.Model.anggota = this.anggota as Anggota;
  }

  textChanged(param: string) {
    if (param && param.length >= 3) {
      param = param.toLocaleLowerCase();
      this.anggotas = this.anggotaSource.filter(x => x.nama.toLocaleLowerCase().includes(param) || x.nomor_induk.toLocaleLowerCase().includes(param)
        || x.kodeanggota.toLocaleLowerCase().includes(param));
    } else {
      this.anggotas = this.anggotaSource;
    }
  }

  toggleBook() {
    this.showBook = !this.showBook;
  }


  setBookIndex(index: number, data: any) {
    this.selectedBookIndex = index;
    this.book = data;
    var items = data.items as any[];
    this.book.items = items.filter(x => x.statuspinjam == 'tersedia');
  }


  addBook() {
    this.showBook = !this.showBook;
    this.book={};
    if (this.bookSource.length <= 0) {
      this.setting.getbookandpenelitian().then(response => {
        this.bookSource = response as [];
      });
    }
  }

  selectBook() {
    this.showBook = false;
    this.showItem = true;
    this.books = [];
  }


  textBookChanged(param: string) {
    if (param && param.length >= 3) {
      param = param.toLocaleLowerCase();
      this.books = this.bookSource.filter(x => x.kode.toLocaleLowerCase().includes(param)
        || x.penulis.toLocaleLowerCase().includes(param)
        || x.tahun.toString().includes(param)
        || x.judul.toLocaleLowerCase().includes(param));
    } else {
      this.books = [];
    }
  }

  setItemIndex(index: number, data: any) {
    this.selectedItemIndex = index;
    this.Item = { book: this.book, karyaItemId: data.id, ItemKarya: data };
  }

  toggleItem() {
    this.showItem = !this.showItem;
    this.book = {};
    this.Item = {};
  }


  selectItem() {
    this.showItem = false;
    if (this.items.length <= 1)
      if(this.items.find(x=>x.karyaItemId==this.Item.karyaItemId)){
        this.message.errorMessage("Sudah Ada !");
      }else{
        this.items.push(this.Item);
      }
    else {
      this.message.errorMessage("Maksimum Pinjam 2 buku");
    }
  }

  simpan() {
    if (this.items.length <= 0) {
      this.message.errorMessage("Silahkan Pilih Buku/Penelitian !");
      return;
    }
    if (!this.Model.anggota) {
      this.message.errorMessage("Anda Belum Memilih Anggota/Peminjam");
      return;
    }
    this.Model.items = this.items as PemesananItem[];
    this.pemesanan.CreatePemesananAndPeminjaman(this.Model).then(response=>{
      this.message.successMessage("Peminjaman Berhasil Dibuat !");
      this.Model={} as Pemesanan;
      this.items=[];
    });


  }


}
