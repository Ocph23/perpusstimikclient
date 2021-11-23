import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  //apiUrl = "http://localhost/perpusstimik/webapp/public";
  apiUrl = "http://perpusstimikapi.stimiksepnop.ac.id";
  //apiUrl = "http://localhost:8000";


  constructor() { }

  // private messageShow(icon: any, mesage: string) {
  //   Swal.fire({
  //     position: 'top-end',
  //     icon: icon,
  //     title: mesage,
  //     showConfirmButton: false,
  //     timer: 3000
  //   })
  // }

  // successMessage(mesage: string) {
  //   this.messageShow('success', mesage)
  // }
  // errorMessage(mesage: string) {
  //   this.messageShow('error', mesage)
  // }
  // infoMessage(mesage: string) {
  //   this.messageShow('info', mesage)
  // }
  // warningMessage(mesage: string) {
  //   this.messageShow('warning', mesage)
  // }


  // busy() {
  //   Swal.fire({
  //     customClass: {
  //       popup : "busyid",
  //     },
  //     allowOutsideClick: false,
  //   //  timerProgressBar: true,
  //     didOpen: () => {
  //       Swal.showLoading()
  //     },
  //     willClose: () => {
        
  //     }
  //   }).then((result) => {
      
  //   })
  // }


  // busyStop(){
  //   Swal.close();
  // }





}
