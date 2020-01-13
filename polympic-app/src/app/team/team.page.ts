import { Chart } from 'chart.js';
import { SPORTS_ICONS_MOCKED } from './../../mocks/sportIcons.mock';
import { TeamsService } from './../services/teams/teams.service';
import { ActivatedRoute } from '@angular/router';
import { Team } from './../team.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Athlete } from '../athlete.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {

  @ViewChild("pieCanvas", {static: false}) barCanvas : ElementRef;

  team: Team;
  medalsNumber : Number;
  bronzeNumber : Number;
  silverNumber: Number;
  goldNumber : Number;
  Members: Athlete[];
  private barChart: Chart;
  pathOnClick = '/athletes/';


  constructor(private activatedRoute: ActivatedRoute, private teamsService: TeamsService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('teamId')) {
        //redirect
        return;
      }
      
      const teamId = paramMap.get('teamId');
      this.team = this.teamsService.getTeam(teamId);
  })

  this.drawChart();
  this.calculateMedalsNumber();
}

calculateMedalsNumber() {
  this.bronzeNumber = this.teamsService.calculateBronzeMedals(this.team);
  this.silverNumber = this.teamsService.calculateSilverMedals(this.team);
  this.goldNumber = this.teamsService.calculateGoldMedals(this.team);

  this.medalsNumber = this.teamsService.calculateMedalsNumber(this.team);
}


getAthleteCountryFlag(flag) {
  return 'flag-icon flag-icon-' + flag;
}

getSportIcon(sport) {
  return SPORTS_ICONS_MOCKED[sport];
}

getMembers(teamId: String) {
  this.Members = this.teamsService.getMembers(this.team.id);
  return this.Members;
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

}
