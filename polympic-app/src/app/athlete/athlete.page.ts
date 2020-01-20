import { SPORTS_ICONS_MOCKED } from '../../mocks/sportIcons.mock';
import { AthletesService } from '../services/athletes/athletes.service';
import { FavoriteService } from '../services/favorite/favorite.service';
import { Athlete } from '../../models/athlete.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';
import { faSwimmer, faFutbol, faRunning, faBicycle } from '@fortawesome/free-solid-svg-icons';
import { Favoriseable } from 'src/models/favorisable.model';
import { EventsService } from '../services/events/events.service';


@Component({
  selector: 'app-athlete',
  templateUrl: './athlete.page.html',
  styleUrls: ['./athlete.page.scss'],
})
export class AthletePage implements OnInit {
  faRunning = faRunning;
  @ViewChild("pieCanvas", {static: false}) barCanvas : ElementRef;

  private barChart: Chart;

  athlete: Athlete;
  medalsNumber : Number;
  bronzeNumber : Number;
  silverNumber: Number;
  goldNumber : Number;
  isFavorite : boolean;
  pathOnClick = '/teams/';

  constructor(private activatedRoute: ActivatedRoute, 
              private athletesService: AthletesService,
              private favoriteService: FavoriteService,
              private eventService: EventsService) 
  {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('athleteId')) {
        //redirect
        return;
      }
      
      const athleteId = Number(paramMap.get('athleteId'));
      this.athlete = this.athletesService.getAthlete(athleteId);
      
      this.isFavorite = this.favoriteService.isFavorite(this.athlete);
      console.log(this.isFavorite);
      console.log(this.eventService.getAthleteEvents(this.athlete));
    });

/*     setTimeout( () => {
      this.barChart = new Chart(this.barCanvas.nativeElement, {
        type: "pie",
        data: {
          labels: ["Bronze", "Argent", "Or"],
          datasets: [
            {
              label: "# of Votes",
              data: [this.bronzeNumber, this.silverNumber, this.goldNumber],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)"
              ],
              borderColor: [
                "rgba(255,99,132,1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)"
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }
      });
    }, 1000 ) */

    this.medalsNumber = this.calculateMedalsNumber();
  }
  
  favoriteAthlete() {
    this.favoriteService.addFavorite(this.athlete);
    this.isFavorite = true;
  }
 
  unfavoriteAthlete() {
    this.favoriteService.removeFavorite(this.athlete);
    this.isFavorite = false;
  }

  calculateMedalsNumber() {
    let number: any = 0;
    this.athlete.Medals.forEach(medal => {
      //console.log(medal.quantity)
      number += medal.quantity;
    })

    this.bronzeNumber = this.athlete.Medals.find(medal => {
      return medal.type === 'Bronze'
    }).quantity

    this.silverNumber = this.athlete.Medals.find(medal => {
      return medal.type === 'Argent'
    }).quantity

    this.goldNumber = this.athlete.Medals.find(medal => {
      return medal.type === 'Or'
    }).quantity
    //console.log(number)
    return number;
  }

  getEventColor(status: String) {
    switch(status) {
      case 'Terminé': return "danger"; break;
      case 'A venir': return "medium"; break;
      case 'En cours': return "success"; break;
      case 'Bientot': return "warning"; break;
    }
  }

  getAthleteCountryFlag(flag) {
    return 'flag-icon flag-icon-' + flag;
  }
  
  getSportIcon(sport) {
    return SPORTS_ICONS_MOCKED[sport];
  }

}
