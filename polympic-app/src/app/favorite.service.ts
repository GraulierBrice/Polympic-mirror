import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

const STORAGE_KEY_COMPETITION = 'favoriteCompet';
const STORAGE_KEY_NATION = 'favoriteCountry';
const STORAGE_KEY_ATHLETE = 'favoriteAthlete';
const STORAGE_KEY_SPORT = 'favoriteSport';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(public storage: Storage, private toastController : ToastController) {
    this.storage.set(STORAGE_KEY_COMPETITION, []);
    this.storage.set(STORAGE_KEY_ATHLETE, []);
    this.storage.set(STORAGE_KEY_NATION, []);
    this.storage.set(STORAGE_KEY_SPORT, []);
   }

  isFavoriteSport(itemId) {
    return this.getAllSportFavorite().then(result => {
      return result && result.indexOf(itemId) !== -1;
    });
  }
 
  isFavoriteCompet(itemId) {
    return this.getAllCompetFavorite().then(result => {
      return result && result.indexOf(itemId) !== -1;
    });
  }
 
  isFavoriteNation(itemId) {
    return this.getAllNationFavorite().then(result => {
      return result && result.indexOf(itemId) !== -1;
    });
  }
 
  isFavoriteAthlete(itemId) {
    return this.getAllAthleteFavorite().then(result => {
      return result && result.indexOf(itemId) !== -1;
    });
  }

  favoriteSport(itemId) {
    return this.getAllSportFavorite().then(result => {
      if (result) {
        result.push(itemId);
        this.favoriteAddedToast();
        return this.storage.set(STORAGE_KEY_SPORT, result);
      } else {
        this.favoriteAddedToast();
        return this.storage.set(STORAGE_KEY_SPORT, [itemId]);
      }
    });
  }
 
  favoriteCompet(itemId) {
    return this.getAllCompetFavorite().then(result => {
      if (result) {
        result.push(itemId);
        this.favoriteAddedToast();
        return this.storage.set(STORAGE_KEY_COMPETITION, result);
      } else {
        this.favoriteAddedToast();
        return this.storage.set(STORAGE_KEY_COMPETITION, [itemId]);
      }
    });
  }
 
  favoriteNation(itemId) {
    return this.getAllNationFavorite().then(result => {
      if (result) {
        result.push(itemId);
        this.favoriteAddedToast();
        return this.storage.set(STORAGE_KEY_NATION, result);
      } else {
        this.favoriteAddedToast();
        return this.storage.set(STORAGE_KEY_NATION, [itemId]);
      }
    });
  }
 
  favoriteAthlete(itemId) {
    return this.getAllAthleteFavorite().then(result => {
      if (result) {
        result.push(itemId);
        this.favoriteAddedToast();
        return this.storage.set(STORAGE_KEY_ATHLETE, result);
      } else {
        this.favoriteAddedToast();
        return this.storage.set(STORAGE_KEY_ATHLETE, [itemId]);
      }
    });
  }
 
  unfavoriteCompet(itemId) {
    return this.getAllCompetFavorite().then(result => {
      if (result) {
        var index = result.indexOf(itemId);
        result.splice(index, 1);
        this.unfavoriteAddedToast();
        return this.storage.set(STORAGE_KEY_COMPETITION, result);
      }
    });
  }
 
  unfavoriteNation(itemId) {
    return this.getAllNationFavorite().then(result => {
      if (result) {
        var index = result.indexOf(itemId);
        result.splice(index, 1);
        this.unfavoriteAddedToast();
        return this.storage.set(STORAGE_KEY_NATION, result);
      }
    });
  }
 
  unfavoriteSport(itemId) {
    return this.getAllSportFavorite().then(result => {
      if (result) {
        var index = result.indexOf(itemId);
        result.splice(index, 1);
        this.unfavoriteAddedToast();
        return this.storage.set(STORAGE_KEY_SPORT, result);
      }
    });
  }

  unfavoriteAthlete(itemId) {
    return this.getAllAthleteFavorite().then(result => {
      if (result) {
        var index = result.indexOf(itemId);
        result.splice(index, 1);
        this.unfavoriteAddedToast();
        return this.storage.set(STORAGE_KEY_ATHLETE, result);
      }
    });
  }
 
  getAllCompetFavorite() {
    return this.storage.get(STORAGE_KEY_COMPETITION);
  }
 
  getAllNationFavorite() {
    return this.storage.get(STORAGE_KEY_NATION);
  }
 
  getAllAthleteFavorite() {
    return this.storage.get(STORAGE_KEY_ATHLETE);
  }

  getAllSportFavorite() {
    return this.storage.get(STORAGE_KEY_SPORT);
  }

  async favoriteAddedToast() {
    const toast = await this.toastController.create({
      message: 'Ajouté aux favoris avec succès',
      duration: 1000
    });
    toast.present();
  }

  async unfavoriteAddedToast() {
    const toast = await this.toastController.create({
      message: 'Retiré des favoris avec succès',
      duration: 1000
    });
    toast.present();
  }
}
