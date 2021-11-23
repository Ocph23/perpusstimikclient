import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  //apiUrl = "http://localhost/perpusstimik/webapp/public";
  apiUrl = "https://perpusstimikapi.stimiksepnop.ac.id";
  //apiUrl = "http://localhost:8000";


  constructor() { }


}
