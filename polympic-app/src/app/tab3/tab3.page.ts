import {
  Component
} from '@angular/core';
import {
  FavoriteService
} from './../favorite.service';
import {
  AthletesService
} from './../athletes.service';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  private editButtonColor: string = "warning";
  private isEditing: boolean = false;
  private athleteItems: any;

  constructor(private athletesService: AthletesService, private favoriteService: FavoriteService, private alertCtrl: AlertController) {}

  ionViewDidEnter() {
    this.athleteItems = [];
    this.favoriteService.getAllAthleteFavorite().then(results => {
      console.log('result')
      console.log(results)
      results.forEach(id => {
        this.athleteItems.push(this.athletesService.getAthlete(id));
      });
      console.log('athletes : ');
      console.log(this.athleteItems);
    });;
  }

  async presentConfirm(athlete) {
    const alert = await this.alertCtrl.create({
      header: 'Confirm suppresion',
      subHeader: 'Are you sure of this deletion',
      message: athlete.name,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'danger',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          role: 'okay',
          cssClass: 'warning',
          handler: () => {
            this.unfavoriteAthlete(athlete.id)
          }
        }
      ]
    });
  
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  unfavoriteAthlete(id) {
    this.favoriteService.unfavoriteAthlete(id);
    this.athleteItems = this.athleteItems.filter(item => item.id !== id);
    console.log('after changes')
    console.log(this.athleteItems)
  }

  getEditButtonColor() {
    return this.editButtonColor;
  }

  toggleEdit() {
    if (this.isEditing) {
      this.isEditing = false;
      this.editButtonColor = "warning";
    } else {
      this.isEditing = true;
      this.editButtonColor = "danger";
    }
  }



}