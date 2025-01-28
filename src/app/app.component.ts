import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';
import { inject } from '@angular/core';
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, SignupComponent,NgxChartsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'suivi-abonnements';

  private auth = inject(Auth);
  private firestore = inject(Firestore);

  ngOnInit() {
    console.log('Auth:', this.auth);
    console.log('Firestore:', this.firestore);
}
}