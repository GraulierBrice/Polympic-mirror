import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
//import { HeaderColor } from '@ionic-native/header-color/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    //private headerColor: HeaderColor
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      //this.statusBar.styleDefault();
      this.statusBar.styleBlackTranslucent()
      this.statusBar.overlaysWebView(true);
      this.statusBar.backgroundColorByHexString('#3171e0');
      this.statusBar.show();

      //this.headerColor.tint('#3171e0');

      this.splashScreen.hide();
    });
  }
}
