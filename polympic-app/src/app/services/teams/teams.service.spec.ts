import { TEAMS_MOCKED } from './../../../mocks/team.mock';
import { TestBed } from '@angular/core/testing';

import { TeamsService } from './teams.service';

describe('TeamsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeamsService = TestBed.get(TeamsService);
    expect(service).toBeTruthy();
  });

  it('Should calculate the medals of team 0 and return 4', () => {
    const service: TeamsService = TestBed.get(TeamsService);
    expect(service).toBeTruthy();

    const team = service.getTeam('0');
    expect(team).toEqual(TEAMS_MOCKED[0]);
    
    expect(service.calculateMedalsNumber(team)).toBe(4);
    expect(service.calculateBronzeMedals(team)).toBe(1);
    expect(service.calculateSilverMedals(team)).toBe(1);
    expect(service.calculateGoldMedals(team)).toBe(2);
  })

  it('Should return members of a nation whose sport is Athlétisme', () => {
    const service: TeamsService = TestBed.get(TeamsService);
    expect(service).toBeTruthy();

    const team = service.getTeam('0');
    expect(team).toEqual(TEAMS_MOCKED[0]);
    

    expect(service.getMembersSports('0', 'Athlétisme')[0].name).toBe('Renaud Lavillenie');
    expect(service.getMembersSports('0', 'Athlétisme')[1].name).toBe('Christophe Lemaire');
    expect(service.getMembersSports('0', 'Athlétisme')[2]).toBeUndefined;
  })
});
