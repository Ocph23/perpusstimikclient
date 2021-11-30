import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lokasi, Penelitian } from 'src/app/models/buku.model';
import { HelperService } from 'src/app/services/helper.service';
import { LokasiService } from 'src/app/services/lokasi.service';
import { PenelitianService } from 'src/app/services/penelitian.service';

@Component({
  selector: 'app-add-penelitian',
  templateUrl: './add-penelitian.component.html',
  styleUrls: ['./add-penelitian.component.scss']
})
export class AddPenelitianComponent implements OnInit {

  model: Penelitian = { id: 0 } as Penelitian;
  imageCover: any;
  imageBibliografi: any;
  uploadCoverUrl: any = "/api/Penelitian/uploadcover/" + this.model.id;
  dataLokasi!: Lokasi[];

  constructor(private lokasiService: LokasiService, private activedRouter: ActivatedRoute, private helperService: HelperService,
    private PenelitianService: PenelitianService, private httpClient: HttpClient) {
    lokasiService.get().then(response => {
      this.dataLokasi = response as Lokasi[];
      var param1: any = this.activedRouter.snapshot.paramMap.get('id');
      var id = parseInt(param1);
      if (id) {
        PenelitianService.getById(id).then(response => {
          this.model = response as Penelitian;
          this.imageCover = this.model.cover ? helperService.apiUrl + '/uploads/covers/' + this.model.cover : "";
          this.uploadCoverUrl = "/api/penelitian/uploadcover/" + this.model.id;

        }, err => {

        })
      }
    });


  }

  ngOnInit(): void {
  }

  save(model: Penelitian) {
    if (model.id > 0) {
      this.PenelitianService.update(model).then(response => {
        this.model = response as Penelitian;
      })
    } else {
      this.PenelitianService.post(model).then(response => {
        var result = response as Penelitian;
        model.id = result.id;
        this.uploadCoverUrl = "/api/penelitian/uploadcover/" + this.model.id;
      })
    }

  }
  delete(model: Penelitian) {

  }


  onUpload(event: boolean) {

  }


}
