import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  data!:string;
  @Output() TextRequest = new EventEmitter<any>();
  constructor() { }
  ngOnInit(): void {
  }
  textChange(changeArg:any){
    var text="";
    var type = typeof changeArg;
    if(type=='string')
     {
       text=changeArg;  
     }else{
       text= changeArg.currentTarget.value;
     }
      this.TextRequest.emit(text);
  }

  keyEnterChange(event:any){
    this.textChange(this.data);
  }
}
