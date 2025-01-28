import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), 
    provideFirebaseApp(() =>
     initializeApp({"projectId":"mysubs-fe7c4","appId":"1:132286101310:web:77a0a613bd5511dc571e6f","storageBucket":"mysubs-fe7c4.firebasestorage.app","apiKey":"AIzaSyDD2DVM4MAjf0O6mO-mzwvIhIVaWj-ROJY","authDomain":"mysubs-fe7c4.firebaseapp.com","messagingSenderId":"132286101310"})), 
    provideAuth(() => getAuth()), 
    provideFirestore(() => getFirestore()),
    provideRouter(routes), 
    provideHttpClient()

  ]
  

};
