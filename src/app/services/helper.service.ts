import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  //apiUrl = "http://localhost/perpusstimik/webapp/public";
  //apiUrl = "https://perpusstimikapi.stimiksepnop.ac.id";
  apiUrl = "http://localhost:8000";

  constructor() { }

}
