import { Component, NgModule } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private authServ : AuthServiceService){
 
  }

email: string = "";
password : string ="" ;

loginUser(){
if(this.email!=""&&this.password!="")
{
  this.authServ.login(this.email,this.password);
  
}
  

}


}
