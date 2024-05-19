import {Component, OnInit} from '@angular/core';
import { AuthenticationRequest } from 'src/app/models/authentication-request';
import { KeycloakService } from '../../keycloak/keycloak.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 authRequest: AuthenticationRequest = {username: '', password: ''};
  errorMsg: Array<string> = [];

  constructor(
    private ss: KeycloakService
  ) {
  }

  async ngOnInit(): Promise<void> {
    await this.ss.init();
    await this.ss.login();
  }

  async logout (){
    this.ss.logout()
    }

}