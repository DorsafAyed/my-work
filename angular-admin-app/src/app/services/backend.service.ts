import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {




  private backendUrl = 'http://192.168.1.5:7080/backend-admin/hello'; // Update this URL to match your reverse proxy configuration

  constructor(private http: HttpClient) {}

  getHello(): Observable<string> {
    return this.http.get(this.backendUrl, { responseType: 'text' });
  }
}
