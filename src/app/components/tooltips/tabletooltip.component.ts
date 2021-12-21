import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { createPopper } from "@popperjs/core";

@Component({
  selector: "app-tabletooltip",
  template: `<div class="flex flex-wrap">
  <div class="w-full text-center">
    <button #btnRef (mouseenter)="toggleTooltip()" (mouseleave)="toggleTooltip()" class="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
top red
    </button>
  </div>
</div>`
})
export class TableTooltipComponent implements OnInit {
    popoverShow = false;
    @ViewChild('btnRef',{ static: false }) btnRef!:ElementRef;
    popper:any = document.createElement("div");
    ngOnInit() {
      this.popper.innerHTML = `<div class="bg-red-600 border-0 mb-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg">
    <div>
      <div class="bg-red-600 text-white opacity-75 font-semibold p-3 mb-0 border-b border-solid border-blueGray-100 uppercase rounded-t-lg">
        red tooltip title
      </div>
      <div class="text-white p-3">
        And here's some amazing content. It's very engaging. Right?
      </div>
    </div>
  </div>`;
    }
    toggleTooltip(){
      if(this.popoverShow){
        this.popoverShow = false;
        this.destroyPopper();
      } else {
        this.popoverShow = true;
        this.createPoppper();
      }
    }
    destroyPopper(){
      this.popper.parentNode.removeChild(this.popper);
    }
    createPoppper(){
      createPopper(this.btnRef.nativeElement, this.popper, {
        placement: "top"
      });
      this.btnRef.nativeElement.parentNode.insertBefore(this.popper, this.btnRef.nativeElement.nextSibling);
  
    }

}
