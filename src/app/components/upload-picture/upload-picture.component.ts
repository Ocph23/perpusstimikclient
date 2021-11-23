import { HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';
import { RestService } from 'src/app/services/rest.service';


@Component({
  selector: 'app-upload-picture',
  templateUrl: './upload-picture.component.html',
  styleUrls: ['./upload-picture.component.scss']
})
export class UploadPictureComponent implements OnInit {
  @Input() image: any; 
  @Input() url: any;


  
  @Output() uploadEvent = new EventEmitter<boolean>();
  @ViewChild('fileInput') fileInput:any;
  isUploading = false;
  progressPercent: number=0;
  hasChange!: boolean;
  constructor(private restService:RestService,private helperService:HelperService) { }

  ngOnInit(): void {
  }
  
  handleFile(event:any) {
    this.progressPercent = 0;
    this.image = event.target.files[0];
    const reader = new FileReader();
  // tslint:disable-next-line:no-shadowed-variable
    reader.onload = (event: any) => {
       this.image = event.target.result;
       this.hasChange=true;
    };
    reader.readAsDataURL(this.image);
  }


  onUpload() {
    const fd = new FormData();
    this.isUploading = true;
    fd.append('image', this.fileInput.nativeElement.files[0]);

    var header = this.restService.getHeader();
    ///api/buku/uploadcover/1
    this.restService.httpClient.post(this.helperService.apiUrl+this.url, fd, {
      headers:{
        Authorization:header.headers.Authorization
      },
      reportProgress: true,
      observe: 'events'
   })
    .subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
         this.progressPercent = Math.round((event.loaded / (!event.total?0:event.total)) * 100);
      } else if (event.type === HttpEventType.Response) {
         console.log(event);
         this.isUploading = false;
         this.uploadEvent.emit(true);
      }
   }, err=>{
      var a = 1;

   });
  }

}
