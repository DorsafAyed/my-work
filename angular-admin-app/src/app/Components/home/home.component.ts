import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'src/app/keycloak/keycloak.service';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  message: string | undefined;

 
constructor(/*private keycloakservice : KeycloakService */private backendService: BackendService){

}

ngOnInit(): void {
  //throw new Error('Method not implemented.');
  this.backendService.getHello().subscribe(
    data => this.message = data,
    error => console.error('Error: ', error)
  );
}





}
