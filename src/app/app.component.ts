import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import firebase from 'firebase';
import { AuthService } from '../services/auth';
import { DisplayPage } from '../pages/display/display';
import { SigninPage } from '../pages/signin/signin';

@Component({
  templateUrl: 'app.html'
  
})
export class MyApp {
  rootPage:any = HomePage;
  isAuthenticated = false;
  @ViewChild('nav') nav: NavController;


  constructor(platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
  private authService: AuthService) {
      firebase.initializeApp({
        
        apiKey: "AIzaSyCU3eUGc6BrfYVFI3yBM7GL4DcCP5IOPx4",
        authDomain: "p5summers-58bfe.firebaseapp.com"

      })
      platform.ready().then(() => {
     

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

