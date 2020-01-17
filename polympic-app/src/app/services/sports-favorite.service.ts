import { FavoriteService } from './favorite.service';
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

  getSports(): SportFavorite[] {
    return this.sports;
  }

  getSport(athleteId: String): SportFavorite {
   return this.sports.find(athlete => {
     return athlete.id === athleteId;
   })}

 favoriteManage(sport: SportFavorite) {
   if(!sport.clicked) {
     this.favoriteService.addFavorite(sport);
   }
   else {
     this.favoriteService.removeFavorite(sport);
   }

   sport.clicked = !sport.clicked;
 }

 isFavorite(sport: SportFavorite) {
  console.log(this.favoriteService.getAllFavorites());
   return this.favoriteService.isFavorite(sport);
 }

 unfavorite(sportId: String) {
   console.log(this.getSport(sportId));
   this.getSport(sportId).clicked = !this.getSport(sportId).clicked;
   console.log(this.getSport(sportId));
 }
}
