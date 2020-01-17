import { Team } from '../../models/team.model';
import { TeamsService } from './../services/teams/teams.service';
import { EventsService } from './../services/events/events.service';
import { Component } from '@angular/core';
import { FavoriteService } from '../services/favorite.service';
import { AthletesService } from '../services/athletes/athletes.service';
import { AlertController } from '@ionic/angular';
import { SportsFavoriteService } from '../services/sports-favorite.service';
import { Favoriseable } from 'src/models/favorisable.model';
import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  private editButtonColor: string = "warning";
  private isEditing: boolean = false;
  /*private athleteItems: any;
  private eventItems: any;
  private nationItems: Team[];
  private sportItems: any;*/

  private favoriteItems: Favoriseable[];
  private displayFavorite: Favoriseable[];
 
  constructor(private athletesService: AthletesService, private favoriteService: FavoriteService, private alertCtrl: AlertController,
              private eventsService: EventsService, private teamsService: TeamsService, private sportsFavoriteService: SportsFavoriteService) {}

  ionViewDidEnter() {
    this.favoriteItems = this.favoriteService.getAllFavorites();
    this.displayFavorite = [];
    /*this.athleteItems = [];
    this.eventItems = [];
    this.nationItems = [];
    this.sportItems = [];

    this.favoriteService.getAllSportFavorite().then(results => {
      console.log('result')
      console.log(results)
      results.forEach(id => {
        this.sportItems.push(id);
      })
    });

    this.favoriteService.getAllAthleteFavorite().then(results => {
      console.log('result')
      console.log(results)
      results.forEach(id => {
        this.athleteItems.push(this.athletesService.getAthlete(id));
      })
    });

      this.favoriteService.getAllCompetFavorite().then(results => {
        console.log('result')
        console.log(results)
        results.forEach(id => {
          this.eventItems.push(this.eventsService.getEvent(id));
        });
      })

      this.favoriteService.getAllNationFavorite().then(results => {
        console.log('result')
        console.log(results)
        results.forEach(id => {
          this.nationItems.push(this.teamsService.getTeam(id));
        });
      } )
      console.log('athletes : ');
      console.log(this.athleteItems);
      console.log('events : ');
      console.log(this.eventItems);
      console.log('teams : ');
      console.log(this.nationItems);
    ;*/
  }

  async presentConfirm(type, favoriteType: String) {
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
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          role: 'okay',
          cssClass: 'warning',
          handler: () => {
            /*switch(favoriteType) {
              case 'Team': this.unfavoriteNation(type); break;
              case 'Event': this.unfavoriteCompet(type); break;
              case 'Athlete': this.unfavoriteAthlete(type); break;
              case 'Sport': this.unfavoriteSport(type); break;
            }*/
            this.unfavorite(type);
          }
        }
      ]
    });
  
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  unfavorite(item) {
    this.favoriteService.removeFavorite(item);
    this.favoriteItems = this.favoriteService.getAllFavorites();
  }

  update(list) {
    this.displayFavorite = list;
  }

  favorite(item) {
    this.favoriteService.addFavorite(item);
    this.favoriteItems = this.favoriteService.getAllFavorites();
  }

  filter(type) {
    console.log("You click on the icon : "+type);
    this.displayFavorite = [];
    console.log(this.favoriteItems);
    this.favoriteItems.forEach(e => {
      console.log(e.category);
      if(e.category === type) {
        this.displayFavorite.push(e);
      }
    });
    console.log(this.displayFavorite);
    this.favoriteService.setDisplayFav(this.displayFavorite);
  }

  addNewFavorite() {
    alert('Add of new favorite not implemented yet');
  }

  /*getSportItems() {
    return this.favoriteService.getSportFavorites();
  }

  unfavoriteSport(item) {
    this.favoriteService.unfavoriteSport(item);
    this.sportItems = this.sportItems.filter(item => item.id !== item.id);
    this.sportsFavoriteService.unfavorite(item.id)
    console.log('after changes')
    console.log(this.sportItems)
  }

  unfavoriteAthlete(id) {
    this.favoriteService.unfavoriteAthlete(id);
    this.athleteItems = this.athleteItems.filter(item => item.id !== id);
    console.log('after changes')
    console.log(this.athleteItems)
  }

  unfavoriteCompet(id) {
    this.favoriteService.unfavoriteCompet(id);
    this.eventItems = this.eventItems.filter(item => item.id !== id);
    console.log('after changes')
    console.log(this.nationItems)
  }

  unfavoriteNation(id) {
    this.favoriteService.unfavoriteNation(id);
    this.nationItems = this.nationItems.filter(item => item.id !== id);
    console.log('after changes')
    console.log(this.nationItems)
  }*/

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

  lengthOfItem(item) {
    return item.length;
  }
}