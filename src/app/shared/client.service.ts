import { Client } from './client.model';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  formData: Client;
  readonly rootURL = 'http://localhost:52223/api';
  list: Client[];
  constructor(private http: HttpClient) { }

  postClient() {
    return this.http.post(this.rootURL + '/Clients',this.formData)
  }

  putClient() {
    return this.http.put(this.rootURL + '/Clients?id=' + this.formData.clientID, this.formData)
  }

  deleteClient(clientId) {
    return this.http.delete(this.rootURL + '/Clients/' + clientId)
  }

  refreshList() {
    this.http.get(this.rootURL + '/Clients')
      .toPromise()
      .then(res => this.list = res as Client[]);
  }
}
