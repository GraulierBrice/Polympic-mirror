import { Component } from '@angular/core';
import { FavoriteService } from './../favorite.service';
import { AthletesService } from './../athletes.service';
import { Athlete } from '../athlete.model';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  private editButtonColor: string = "warning";
  private isEditing: boolean = false;
  private athleteItems : any;

  constructor(private athletesService: AthletesService, private favoriteService: FavoriteService) {}

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

  getEditButtonColor() {
    return this.editButtonColor;
  }

  toggleEdit(){
    if (this.isEditing){
      this.isEditing = false;
      this.editButtonColor = "warning";
    } else {
      this.isEditing = true;
      this.editButtonColor = "danger";
    }
  }

  

}
