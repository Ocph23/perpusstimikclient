import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Setting } from 'src/app/models/buku.model';
import { SettingService } from 'src/app/services/setting.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  model: Setting = { id: 0, lamaSewa: 0, denda: 0 };

  constructor(private settingService: SettingService) {
    this.settingService.getLast().then(response=>{
      if(response!=null){
         this.model=response as Setting;     
      }

    });
  }

  ngOnInit(): void {
  }

  save(model: Setting) {
    if (model.id <= 0) {
      this.settingService.post(model).then(x => {
         
      });
    } else {
      this.settingService.update(model);
    }
  }
}
