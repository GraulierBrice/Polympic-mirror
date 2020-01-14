import { FavoriteService } from './../favorite.service';
import { Injectable } from '@angular/core';
import { SPORTS_FAVORITE_MOCKED } from 'src/mocks/sport-favorite.mock';
import { SportFavorite } from '../sport-favorite.model';

@Injectable({
  providedIn: 'root'
})
export class SportsFavoriteService {

  sports;
  constructor(private favoriteService: FavoriteService) {
    this.sports = SPORTS_FAVORITE_MOCKED;
   }

  getSports() {
    return [...this.sports];
  }

  getSport(athleteId: String) {
   return {...this.sports.find(athlete => {
     return athlete.id === athleteId;
   })}
 }

 favoriteManage(sport: SportFavorite) {
   if(!sport.clicked) {
     this.favoriteService.favoriteSport(sport.id);
   }
   else {
     this.favoriteService.unfavoriteSport(sport.id);
   }

   sport.clicked = !sport.clicked;
 }
}
