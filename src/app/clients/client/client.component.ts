import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';





@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styles: []
})
export class ClientComponent implements OnInit {

  constructor(private service: ClientService
    , private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {

    if(form!=null)
      form.resetForm();
    this.service.formData = {
      clientID: 0,
      clientName: '',
      clientAddress: '',
      clientCity: '',
      clientState: '',
      clientPostCode: '',
      clientCountry:''
    }
  }

  onSubmit(form: NgForm) {
    
    if ((this.service.formData.clientID && this.service.formData.clientID == 0) ||
        (!this.service.formData.clientID))
    {
      this.service.formData.clientID = 0;
      this.insertRecord(form);
      
    }
    else
      this.updateRecord(form);

  }

  onReset(form: NgForm){
    this.resetForm(form);
  }

  insertRecord(form: NgForm) {
    this.service.postClient().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Submitted Successfuly', 'Client Management System');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

  updateRecord(form: NgForm) {
    this.service.putClient().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Submitted Successfuly', 'Client Management System');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

}
