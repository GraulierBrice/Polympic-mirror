import { TEAMS_MOCKED } from './../../../mocks/team.mock';
import { Team } from './../../team.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  teams: Team[];

  constructor() {
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
}
