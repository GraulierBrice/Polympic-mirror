import { Athlete } from './athlete.model';
import { Medal } from './medal.model';
import { Country } from './country.model';
export interface Team {
    id: String;
    image: String;
    name: String;
    sport: String;
    Victory: String;
    Defeat: String;
    Medals: Medal[];
    Country: Country;
    Members: Number[];
}