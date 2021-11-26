import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Peminjaman } from 'src/app/models/buku.model';
import { MessageService } from 'src/app/services/message.service';
import { PeminjamanService } from 'src/app/services/peminjaman.service';

@Component({
  selector: 'app-peminjaman-detail',
  templateUrl: './peminjaman-detail.component.html',
  styleUrls: ['./peminjaman-detail.component.scss']
})
export class PeminjamanDetailComponent implements OnInit {

  model: any;

  constructor(
    private router:Router,
    activedRouter: ActivatedRoute, 
    private peminjamanService:PeminjamanService, 
    private message: MessageService,
    ) {
    var param1:any = activedRouter.snapshot.paramMap.get('id');
    peminjamanService.getById(param1).then(response => {
      this.model = response;
    });
  }


  ngOnInit(): void {
  }

  createPengembalian(){
    this.router.navigate(['/admin/pengembalian/'+this.model.id]);
  }

}
