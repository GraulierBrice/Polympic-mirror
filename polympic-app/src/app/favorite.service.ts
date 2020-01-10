import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const STORAGE_KEY_COMPETITION = 'favoriteCompet';
const STORAGE_KEY_NATION = 'favoriteCountry';
const STORAGE_KEY_ATHLETE = 'favoriteAthlete';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(public storage: Storage) { }
 
  isFavoriteCompet(itemId) {
    this.storage.remove("Christophe Lemaire");
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
 
  favoriteCompet(itemId) {
    return this.getAllCompetFavorite().then(result => {
      if (result) {
        result.push(itemId);
        return this.storage.set(STORAGE_KEY_COMPETITION, result);
      } else {
        return this.storage.set(STORAGE_KEY_COMPETITION, [itemId]);
      }
    });
  }
 
  favoriteNation(itemId) {
    return this.getAllNationFavorite().then(result => {
      if (result) {
        result.push(itemId);
        return this.storage.set(STORAGE_KEY_NATION, result);
      } else {
        return this.storage.set(STORAGE_KEY_NATION, [itemId]);
      }
    });
  }
 
  favoriteAthlete(itemId) {
    return this.getAllAthleteFavorite().then(result => {
      if (result) {
        result.push(itemId);
        return this.storage.set(STORAGE_KEY_ATHLETE, result);
      } else {
        return this.storage.set(STORAGE_KEY_ATHLETE, [itemId]);
      }
    });
  }
 
  unfavoriteCompet(itemId) {
    return this.getAllCompetFavorite().then(result => {
      if (result) {
        var index = result.indexOf(itemId);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY_COMPETITION, result);
      }
    });
  }
 
  unfavoriteNation(itemId) {
    return this.getAllNationFavorite().then(result => {
      if (result) {
        var index = result.indexOf(itemId);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY_NATION, result);
      }
    });
  }
 
  unfavoriteAthlete(itemId) {
    return this.getAllAthleteFavorite().then(result => {
      if (result) {
        var index = result.indexOf(itemId);
        result.splice(index, 1);
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
}
