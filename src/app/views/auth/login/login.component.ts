import { Component, OnInit } from "@angular/core";
import { UserLogin } from "src/app/models/userlogin.model";
import { AuthService } from "src/app/services/auth.service";
import { MessageService } from "src/app/services/message.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {

  public user: UserLogin = {} as UserLogin;
  constructor(private authService: AuthService, private messageService: MessageService) { }
  ngOnInit(): void { }
  login(data: UserLogin) {
    this.authService.login(data).then(result => {
      if (this.authService.isInRole("admin"))
        this.authService.router.navigate(["/admin"]);
      else {
        this.messageService.warningMessage("Maaf Anda Bukan Administrator !");
      }
    }, err => {

      this.messageService.errorMessage("Maaf, Anda Tidak Memiliki Akses !");

    });

  }
}
