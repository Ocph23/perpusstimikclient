import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemKarya } from 'src/app/models/buku.model';
import { BukuService } from 'src/app/services/buku.service';
import { MessageService } from 'src/app/services/message.service';
import { PenelitianService } from 'src/app/services/penelitian.service';

@Component({
  selector: 'app-item-karya',
  templateUrl: './item-karya.component.html',
  styleUrls: ['./item-karya.component.scss']
})
export class ItemKaryaComponent implements OnInit {

  @Input() data: any;
  serviceCurrent: any;
  model: any;
  count: number = 0;

  constructor(private activedRouter: ActivatedRoute, private bukuService: BukuService, private message: MessageService,
    private penelitianService: PenelitianService) {
    var param1: any = this.activedRouter.snapshot.paramMap.get('id');
    var param2: any = this.activedRouter.snapshot.url[2].path;

    if (param2 && param2 == 'buku') {
      this.serviceCurrent = bukuService;
      bukuService.getById(param1).then(response => {
        this.model = response;
      });

    } else {
      this.serviceCurrent = penelitianService;
      penelitianService.getById(param1).then(response => {
        this.model = response;
        
      });
    }
  }

  ngOnInit(): void {
  }

  save(model: any, count: number) {
    var service = this.serviceCurrent as PenelitianService;
    service.createItems(model.id, count).then(response => {

    }, err => {


    });
  }


  addItems() {
    var swal = this.message.dialog();

    swal.fire({
      title: 'Tambah Jumlah Eksemplar ?',
      input: 'number',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Buat',
      showLoaderOnConfirm: true,
      preConfirm: (data) => {
        if (data) {
          if (this.serviceCurrent.controller == "api/penelitian") {
            var service = this.serviceCurrent as PenelitianService;
            service.createItems(this.model.id, data).then(response => {
             this.SetResponse(response as ItemKarya[]);
              this.message.infoMessage("Berhasil !")
            }, err => {


            });
          } else {
            var serviceBUku = this.serviceCurrent as BukuService;
            serviceBUku.createItems(this.model.id, data).then(response => {
              this.SetResponse(response as ItemKarya[]);
              this.message.infoMessage("Berhasil !")
            }, err => {


            });
          }
        }
      },
      allowOutsideClick: () => !swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
       // this.message.infoMessage("Berhasil !")
      }
    })
  }

  SetResponse(response: ItemKarya[]) {
    response.forEach(element => {
      this.model.items.push(element);
    });
}

}


