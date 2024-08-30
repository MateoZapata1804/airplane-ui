import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private httpClient: HttpClient) { 
  }

  async post(resource: string, body: any): Promise<any> {
    return lastValueFrom(this.httpClient.post(environment.getApiUrl() + resource, body));
  }

  async get(resource: string): Promise<any> {
    return lastValueFrom(this.httpClient.get(environment.getApiUrl() + resource));
  }

  async patch(resource: string, body: any): Promise<any> {
    return lastValueFrom(this.httpClient.patch(environment.getApiUrl() + resource, body));
  }
}
