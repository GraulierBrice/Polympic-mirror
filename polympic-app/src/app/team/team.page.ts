import { FavoriteService } from '../services/favorite/favorite.service';
import { Chart } from 'chart.js';
import { SPORTS_ICONS_MOCKED } from './../../mocks/sportIcons.mock';
import { TeamsService } from '../services/teams/teams.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Team } from 'src/models/team.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {

  @ViewChild("pieCanvas", {static: false}) barCanvas : ElementRef;

  teamId: number;
  country: Team;
  medalsNumber : Number;
  bronzeNumber : Number;
  silverNumber: Number;
  goldNumber : Number;
  isFavorite: boolean;
  private barChart: Chart;
  pathOnClick = '/athletes/';


  constructor(private activatedRoute: ActivatedRoute, private teamsService: TeamsService, private favoriteService: FavoriteService) { }

  
  favoriteTeam() {
    this.favoriteService.addFavorite(this.teamsService.getTeam(this.teamId));
    this.isFavorite = true;
  }
 
  unfavoriteTeam() {
    this.favoriteService.removeFavorite(this.teamsService.getTeam(this.teamId));
    this.isFavorite = false;
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('teamId')) {
        //redirect
        return;
      }
      
      const teamId = Number(paramMap.get('teamId'));
      this.teamId = teamId;
      this.country = this.teamsService.getTeam(teamId);
      console.log(this.country)
      this.isFavorite = this.favoriteService.isFavorite(this.country);
      console.log(this.favoriteService.getAllFavorites())
  })

  this.drawChart();
  this.calculateMedalsNumber();
}

calculateMedalsNumber() {
  const team = this.getTeam();

  this.bronzeNumber = this.teamsService.calculateBronzeMedals(team);
  this.silverNumber = this.teamsService.calculateSilverMedals(team);
  this.goldNumber = this.teamsService.calculateGoldMedals(team);

  this.medalsNumber = this.teamsService.calculateMedalsNumber(team);
}


getAthleteCountryFlag(flag) {
  return 'flag-icon flag-icon-' + flag;
}

getSportIcon(sport) {
  return SPORTS_ICONS_MOCKED[sport];
}

getMembers() {
  return this.teamsService.getMembers(this.teamId);
}

drawChart() {
  setTimeout( () => {
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
  }, 1000 )
}

getAllSports() {
  return this.teamsService.getAllSports(this.getTeam());
}

getTeam() {
  return this.teamsService.getTeam(this.teamId);
}

getMembersSports(sport: String) {
  return this.teamsService.getMembersSports(this.teamId, sport);
}

}
