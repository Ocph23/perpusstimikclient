import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pengembalian } from 'src/app/models/buku.model';
import { MessageService } from 'src/app/services/message.service';
import { PengembalianService } from 'src/app/services/pengembalian.service';

@Component({
  selector: 'app-pengembalian-detail',
  templateUrl: './pengembalian-detail.component.html',
  styleUrls: ['./pengembalian-detail.component.scss']
})
export class PengembalianDetailComponent implements OnInit {
  model!: any;
  constructor(
    private router:Router,
    activedRouter: ActivatedRoute, 
    private pengembalianService:PengembalianService, 
    private message: MessageService,
    ) {
    var param1:any = activedRouter.snapshot.paramMap.get('id');
    pengembalianService.getById(param1).then(response => {
      this.model = response as any;
    });
  }
  ngOnInit(): void {
  }


  total(data:any[]){

    var result = data.reduce((x,y)=>{
       return (y.terlambat * y.harga) + x;        
    }, 0)
    return result;
  }


}
