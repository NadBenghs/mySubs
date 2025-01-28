import { Component, NgModule } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor(private authServ : AuthServiceService){
 
  }

email: string = "";
password : string ="" ;

signUpUser(){
if(this.email!=""&&this.password!="")
{
  this.authServ.signUp(this.email,this.password);
  
}
  

}


}
