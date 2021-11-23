import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent implements OnInit {

  model:any={buku:1110, itembuku:'1000 eksemplar', itempenelitian:'1000 eksemplar', penelitian:200, anggota:100, belumkembali:100};
  constructor() {}

  ngOnInit() {}
}
