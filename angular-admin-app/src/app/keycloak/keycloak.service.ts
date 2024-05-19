import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';
import { UserProfile } from './user-profile';

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {

 
private _keycloak: Keycloak | undefined  
private _profile: UserProfile |undefined

//Singleton Pattern to initialize one keycloak instance
get Keycloak() {
if(!this._keycloak){ 
  this._keycloak = new Keycloak(
    {
url: 'http://172.29.208.1:7080/auth',
realm: 'master',
clientId: 'my-admin-app'
    });
}
return this._keycloak;
}


get profile(): UserProfile | undefined
{
  return this._profile ;
} 

async init() {
  console.log("AUTHENTICATING THE USER...");
  const authentication = await this.Keycloak?.init({
    onLoad: 'login-required'
  });
  if(!authentication)
    {
   this._profile= await this.Keycloak?.loadUserProfile() as UserProfile;
   
   this._profile.token =this.Keycloak?.token;
  }
  }
    

login(){
  return this.Keycloak?.login();
}

logout()
{
return this.Keycloak?.logout({
  redirectUri: 'http://192.168.1.5:7080/angular-admin/'

})
}



 


  constructor() { }



}
