import { Team } from '../../models/team.model';
import { TeamsService } from '../services/teams/teams.service';
import { EventsService } from '../services/events/events.service';
import { Component } from '@angular/core';
import { FavoriteService } from '../services/favorite/favorite.service';
import { AthletesService } from '../services/athletes/athletes.service';
import { AlertController, ToastController } from '@ionic/angular';
import { SportsFavoriteService } from '../services/sports-favorite/sports-favorite.service';
import { Favoriseable } from 'src/models/favorisable.model';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  private editButtonColor: string = "warning";
  private isEditing: boolean = false;
  private addingFavorite: boolean = false;

  private allTypes = ['event','country','athlete','sport'];

  private addables: Favoriseable[];
  private favoriteItems: Favoriseable[];
  private displayFavorite: Favoriseable[];
  private toAdd: Favoriseable[];
  private filters: string;
 
  constructor(private athletesService: AthletesService, private favoriteService: FavoriteService, private alertCtrl: AlertController,
              private eventsService: EventsService, private teamsService: TeamsService, private sportsFavoriteService: SportsFavoriteService,
              private toast: ToastController) {}

  ionViewDidEnter() {
    this.favoriteItems = this.favoriteService.getAllFavorites();
    this.displayFavorite = [];
    this.addables = this.favoriteService.getAllFavorisable();
    this.filters = "all";
  }

  update(list) {
    this.displayFavorite = list;
  }

  removeSelectedClass(n) {
    for(let t of this.allTypes) {
      document.getElementById(t+n).classList.remove("selected");
    }
  }

  choice(type) {
    this.removeSelectedClass("2");
    if (this.filters !== type) {
      document.getElementById(type+"2").classList.add("selected");
      this.filters = type;
    } else {
      this.filters = 'all';
    }
  }

  filter(type) {
    this.removeSelectedClass("1");
    this.displayFavorite = [];
    if(this.filters !== type) {
      document.getElementById(type+"1").classList.add("selected");
      this.favoriteItems.forEach(e => {
        if(e.category === type) {
          this.displayFavorite.push(e);
        }
      });
      this.filters = type;
    } else {
      this.filters = 'all';
    }
    this.favoriteService.setDisplayFav(this.displayFavorite);
  }

  onSearchChange(input) {
    console.log(input.detail.value);
    if(this.addingFavorite) {
      this.addables = this.favoriteService.getAllFavorisable().filter(e=> {
        return e.name.toLocaleLowerCase().includes(input.detail.value.toLocaleLowerCase());
      });
    } else {
      if(input.detail.value === "") {
        const oldFilter = this.filters
        this.filters = 'all';
        this.filter(oldFilter);
      } else {
        const toFilter = (this.filters==='all') ? this.favoriteItems: this.displayFavorite;
        this.displayFavorite = toFilter.filter(e=> {
          return e.name.toLocaleLowerCase().includes(input.detail.value.toLocaleLowerCase());
        });
      }
    }
  }

  addNewFavorite() {
    this.addingFavorite = !this.addingFavorite;
    this.toAdd = [];
    this.filters = 'all';
    this.removeSelectedClass("1");
  }

  addFavorite(item) {
    const index = this.toAdd.indexOf(item);
    if (index === -1) {
      this.toAdd.push(item);
      this.selectToast();
    } else {
      this.toAdd.splice(index, 1);
      this.unselectToast();
    }
  }

  async selectToast() {
    const select = await this.toast.create({
      message: 'Élément sélectionné',
      duration: 1000,
      position: "bottom",
    });
    select.present();
  }

  async unselectToast() {
    const select = await this.toast.create({
      message: 'Élément désélectionné',
      duration: 1000,
      position: "bottom",
    });
    select.present();
  }

  confirmAdding() {
    this.toAdd.forEach(add=> {
      this.favoriteService.addFavorite(add);
    });
    this.favoriteItems = this.favoriteService.getAllFavorites();
    this.addingFavorite = !this.addingFavorite;
    this.displayFavorite = [];
    this.filters = 'all';
    this.removeSelectedClass("2");
  }

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