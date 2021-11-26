import { Component, OnInit } from "@angular/core";
import { SettingService } from "src/app/services/setting.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent implements OnInit {

  model:any={buku:0, itembuku:'0 eksemplar', itempenelitian:'0 eksemplar', penelitian:0, anggota:0, belumkembali:0};
  constructor( private settingService:SettingService) {
    this.settingService.dashboard().then(result=>{
      var resultTemp = result as any;
      var data=resultTemp.data;
      this.model={buku:data.buku, itembuku: data.itembuku +" eksemplar", itempenelitian: data.itempenelitian+ " eksemplar", penelitian:data.penelitian, anggota:data.anggota, belumkembali:data.belumkembali};
    })


  }

  ngOnInit() {}
}
