import { Medal } from './medal.model';
import { Country } from './country.model';
export interface Athlete {
    id: String;
    image: String;
    name: String;
    sport: String;
    Victory: String;
    Defeat: String;
    Medals: Medal[];
    Country: Country;
} 