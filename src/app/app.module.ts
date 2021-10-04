import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientComponent } from './clients/client/client.component';
import { ClientListComponent } from './clients/client-list/client-list.component';
import { ClientService } from './shared/client.service';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';




@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ClientComponent,    
    ClientListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
