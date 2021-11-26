import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BukuService } from 'src/app/services/buku.service';

@Component({
  selector: 'app-item-history',
  templateUrl: './item-history.component.html',
  styleUrls: ['./item-history.component.scss']
})
export class ItemHistoryComponent implements OnInit {

  datas:any[]=[];

  constructor(private bukuService:BukuService, private activedRouter:ActivatedRoute) { 
    var id:any = activedRouter.snapshot.paramMap.get('id');
    this.bukuService.getItemHistory(id).then(result=>{
        this.datas=result as any;  
    });
  }

  ngOnInit(): void {
  }

}
