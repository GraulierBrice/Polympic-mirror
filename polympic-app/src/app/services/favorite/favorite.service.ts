import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import { Favoriseable } from 'src/models/favorisable.model';
import { COUNTRIES } from 'src/mocks/country.mock';
import { TEAMS_MOCKED } from 'src/mocks/team.mock';
import { EVENTS_MOCKED } from 'src/mocks/event.mock';
import { ATHLETES_MOCKED } from 'src/mocks/athlete.mock';
import { SPORTS_FILTERS_MOCKED } from 'src/mocks/sportFilter.mock';
import { Event } from 'src/models/event.model'

/*
const STORAGE_KEY_COMPETITION = 'favoriteCompet';
const STORAGE_KEY_NATION = 'favoriteCountry';
const STORAGE_KEY_ATHLETE = 'favoriteAthlete';
const STORAGE_KEY_SPORT = 'favoriteSport';
*/
@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  allFavoriseable: Favoriseable[] = [];
  favorite: Favoriseable[] = [];
  displayFav: Favoriseable[] = [];

  constructor(private toastController : ToastController) {
    TEAMS_MOCKED.forEach(e=> {
      this.allFavoriseable.push(e);
    });
    EVENTS_MOCKED.forEach(e=> {
      this.allFavoriseable.push(e);
    });
    ATHLETES_MOCKED.forEach(e=> {
      this.allFavoriseable.push(e);
    });
    SPORTS_FILTERS_MOCKED.forEach(e=> {
      this.allFavoriseable.push(e);
    });

   }
   
   getAllFavorisable() {
     return this.allFavoriseable;
   }

   getAllFavorites() {
     return this.favorite;
   }

   getDisplayFav() {
     if(this.displayFav.length !== 0)
      return this.displayFav;
    return this.favorite;
   }

   setDisplayFav(list) {
     this.displayFav = list;
   }

   isFavorite(item) {
      console.log("item is:");
      console.log(item)
     return this.favorite.includes(item);
   }

   hasFavoriteEvent() {
     return this.favorite.find(e=> e.category === 'event') !== undefined;
   }

   loadEvents() {
      return this.favorite.filter(e=> e.category === 'event') as Event[];
   }

   addFavorite(item) {
     this.favorite.push(item);
     this.addToast();
   }

   removeFavorite(item) {
     let index = this.favorite.indexOf(item);
     this.favorite.splice(index, 1);
     index = this.displayFav.indexOf(item);
     if(index !== -1) {
      this.displayFav.splice(index, 1);
     }
     this.removeToast();
   }

  async addToast() {
    const toast = await this.toastController.create({
      message: 'Ajouté aux favoris avec succès',
      duration: 1000,
      position: "middle",
    });
    toast.present();
  }

  async removeToast() {
    const toast = await this.toastController.create({
      message: 'Retiré des favoris avec succès',
      duration: 1000,
      position: "middle",
    });
    toast.present();
  }
}
