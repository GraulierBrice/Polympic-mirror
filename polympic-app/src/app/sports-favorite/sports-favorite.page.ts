import { SportsFavoriteService } from './../services/sports-favorite.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sports-favorite',
  templateUrl: './sports-favorite.page.html',
  styleUrls: ['./sports-favorite.page.scss'],
})
export class SportsFavoritePage implements OnInit {

  constructor(private sportFavoriteService: SportsFavoriteService) { }

  ngOnInit() {
    /*
    this.getSports().forEach(sport => {
      this.sportFavoriteService.isFavorite(sport).then(response => {
        console.log(`For ${sport.name} : ${response}`);
      });
    })*/
  }

  getSports() {
    return this.sportFavoriteService.getSports();
  }

  favoriteManage(sport) {
    this.sportFavoriteService.favoriteManage(sport);
  }
  
}
