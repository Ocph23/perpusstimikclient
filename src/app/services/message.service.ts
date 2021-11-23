import { Injectable } from '@angular/core';
import Swal  from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }






  private messageShow(icon: any, message: string) {
    Swal.fire({
      position: 'top-end',
      icon: icon,
      title: message,
      showConfirmButton: false,
      timer: 3000
    })
  }

  successMessage(message: string) {
    this.messageShow('success', message)
  }
  errorMessage(err: any) {
    var message = err;
    if (err.status) {
      switch (err.status) {
        case 401:
          message = 'Maaf anda tidak memiliki akses !';
          break;
        case 404:
          message = 'alamat/url tidak ditemukan !';
          break;
        case 500:
          message = 'Maaf Terjadi Kesalahan !, Coba Ulangi Lagi atau hubungi administrator';
          break;
        case 400:
          message = err.error.error ? err.error.error : err.message ? err.message:message;
          break;

        default:
          message = err.message ? err.message : err ? err : 'Maaf Terjadi Kesalahan !, Coba Ulangi Lagi !';
          break;
      }
    }

    this.messageShow('error', message)
  }
  infoMessage(message: string) {
    this.messageShow('info', message)
  }
  warningMessage(message: string) {
    this.messageShow('warning', message)
  }


  dialog(){
    return Swal;
  }




  busy() {
    Swal.fire({
      customClass: {
        popup: "busyid",
      },
      allowOutsideClick: false,
      //  timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
      },
      willClose: () => {

      }
    }).then((result) => {

    })
  }


  busyStop() {
    Swal.close();
  }

}
