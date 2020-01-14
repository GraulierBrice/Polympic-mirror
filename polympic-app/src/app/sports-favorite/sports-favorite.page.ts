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
  }

  getSports() {
    return this.sportFavoriteService.getSports();
  }

  favoriteManage(sport) {
    this.sportFavoriteService.favoriteManage(sport);
  }
}
