import { Chart } from 'chart.js';
import { AthletesService } from './../athletes/athletes.service';
import { TEAMS_MOCKED } from './../../../mocks/team.mock';
import { Team } from '../../../models/team.model';
import { Injectable, ElementRef } from '@angular/core';
import { Athlete } from '../../../models/athlete.model';


@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  teams: Team[];
  sports;

  constructor(private athletesService : AthletesService) {
    this.teams = TEAMS_MOCKED;
    this.sports = [];
  }

  getTeams() {
    return [...this.teams];
  }

  getTeam(teamId: String) {
   return {...this.teams.find(team => {
     return team.id === teamId;
   })}
 }

 getMembers(teamId: String): Athlete[] {
   return this.getTeam(teamId).Members;
}

getMembersSports(teamId: String, sport: String) {
  var members = this.getMembers(teamId);

  return members.filter( member => {
    return member.sport === sport;
  } )
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
    number += medal.quantity;
  })
  return number;
}

getAllSports(team: Team) {
  let members = this.getMembers(team.id);

  members.forEach( member => {
    if(!this.sports.includes( member.sport )) this.sports.push( member.sport );
  } )
  
  return this.sports;
}
}
