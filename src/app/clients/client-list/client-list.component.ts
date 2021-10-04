import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
import { Client } from '../../shared/client.model';
import { ToastrService } from 'ngx-toastr';

import { ClientComponent } from '../client/client.component';


@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styles: []
})
export class ClientListComponent implements OnInit {

  constructor(private service: ClientService, 
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(cl: Client) {
    this.service.formData = Object.assign({},cl);
  }

  

  onDelete(clientId) {
    if (confirm('Are you sure you want to delete this record? ' + clientId)) {
      this.service.deleteClient(clientId).subscribe(
        res => {
          this.toastr.warning('Deleted Successfuly', 'Client Management System');
          this.service.refreshList();
        },
        err => {
          console.log(err);
        }
      )
    }
  }

}
