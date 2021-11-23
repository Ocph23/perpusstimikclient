import { Component, AfterViewInit, ViewChild, ElementRef, Input, Output, EventEmitter } from "@angular/core";
import { createPopper } from "@popperjs/core";
import { Peminjaman } from "src/app/models/buku.model";

@Component({
  selector: "app-table-peminjaman-dropdown",
  templateUrl: "./table-peminjaman-dropdown.html",
})
export class TablePeminjamanDropdown implements AfterViewInit {
  dropdownPopoverShow = false;
  @Output() verifikasiRequest = new EventEmitter<any>();
  @Input() model!: Peminjaman;

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

  verifikasiAction(event: any) {
    this.dropdownPopoverShow = false;
    this.verifikasiRequest.emit(this.model);
  }

  showDetail(event: any) {



  }



}
