import { Chart } from 'chart.js';
import { AthletesService } from './../athletes/athletes.service';
import { TEAMS_MOCKED } from './../../../mocks/team.mock';
import { Team } from './../../team.model';
import { Injectable, ElementRef } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  teams: Team[];

  constructor(private athletesService : AthletesService) {
    this.teams = TEAMS_MOCKED;
  }

  getTeams() {
    return [...this.teams];
  }

  getTeam(teamId: String) {
   return {...this.teams.find(team => {
     return team.id === teamId;
   })}
 }

 getMembers(teamId: String) {
   const team = this.getTeam(teamId);
   var arr;
  arr = this.athletesService.getAthletes().filter(function(athlete) {
    return team.Members.indexOf(Number(athlete.id)) !== -1;
  } )

  return arr;
}

calculateBronzeMedals(team: Team) {
  return team.Medals.find(medal => {
    return medal.type === 'Bronze'
  }).quantity;
}

calculateSilverMedals(team: Team) {
  return team.Medals.find(medal => {
    return medal.type === 'Argent'
  }).quantity;
}

calculateGoldMedals(team: Team) {
  return team.Medals.find(medal => {
    return medal.type === 'Or'
  }).quantity;
}

calculateMedalsNumber(team: Team) {
  let number: any = 0;
  team.Medals.forEach(medal => {
    console.log(medal.quantity)
    number += medal.quantity;
  })
  return number;
}




}
