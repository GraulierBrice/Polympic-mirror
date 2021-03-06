import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Favoriseable } from 'src/models/favorisable.model';
import { FavoriteService } from '../services/favorite/favorite.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-favorite-display',
  templateUrl: './favorite-display.component.html',
  styleUrls: ['./favorite-display.component.scss'],
})
export class FavoriteDisplayComponent implements OnInit {

  @Input()
  favorite: Favoriseable;

  @Output()
  toDisplay: EventEmitter<Favoriseable[]> = new EventEmitter();

  private wiki = 'https://fr.wikipedia.org/wiki/';

  constructor(private favoriteService: FavoriteService, private alertCtrl: AlertController) { }

  ngOnInit() {}

  getEventColor(status: String) {
    switch(status) {
      case 'Terminé': return "danger";
      case 'A venir': return "medium";
      case 'En cours': return "success";
      case 'Bientot': return "warning"; break;
    }
  }

  unfavorite(item) {
    this.favoriteService.removeFavorite(item);
    this.toDisplay.emit(this.favoriteService.getDisplayFav());
  }

  openLink(fav) {
    window.open(this.wiki+fav.name, '_self');
  }

  async presentConfirm(type) {
    const alert = await this.alertCtrl.create({
      header: 'Confirm suppresion',
      subHeader: 'Are you sure of this deletion ?',
      message: type.name,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'danger',
          handler: (blah) => {
          }
        }, {
          text: 'Okay',
          role: 'okay',
          cssClass: 'warning',
          handler: () => {
            this.unfavorite(type);
          }
        }
      ]
    });
  
    await alert.present();
    let result = await alert.onDidDismiss();
  }

}
