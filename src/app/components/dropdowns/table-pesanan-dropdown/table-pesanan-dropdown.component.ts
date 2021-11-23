import { Component, AfterViewInit, ViewChild, ElementRef, Input, Output, EventEmitter } from "@angular/core";
import { createPopper } from "@popperjs/core";

@Component({
  selector: "app-table-pesanan-dropdown",
  templateUrl: "./table-pesanan-dropdown.component.html",
})
export class TablePesananDropdownComponent implements AfterViewInit {
  dropdownPopoverShow = false;

  @Output() cancelRequest = new EventEmitter<any>();
  @Output() verifikasiRequest = new EventEmitter<any>();
  @Input() pesanan: any;

  @ViewChild("btnDropdownRef", { static: false })
  btnDropdownRef!: ElementRef;
  @ViewChild("popoverDropdownRef", { static: false })
  popoverDropdownRef!: ElementRef;
  ngAfterViewInit() {
    createPopper(
      this.btnDropdownRef.nativeElement,
      this.popoverDropdownRef.nativeElement,
      {
        placement: "bottom-start",
      }
    );
  }
  toggleDropdown(event: any) {
    event.preventDefault();
    if (this.dropdownPopoverShow) {
      this.dropdownPopoverShow = false;
    } else {
      this.dropdownPopoverShow = true;
    }
  }

  cancelAction(event: any) {
    this.dropdownPopoverShow = false;
    this.cancelRequest.emit(this.pesanan);
  }


  verifikasiAction(event: any) {
    this.dropdownPopoverShow = false;
    this.verifikasiRequest.emit(this.pesanan);
  }

  showDetail(event: any) {



  }



}
