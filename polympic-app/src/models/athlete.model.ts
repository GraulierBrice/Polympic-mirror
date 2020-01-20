import { Medal } from './medal.model';
import { Country } from './country.model';
import { Favoriseable } from './favorisable.model';
export interface Athlete extends Favoriseable {
    id: number;
    image: String;
    sport: String;
    Victory: String;
    Defeat: String;
    Medals: Medal[];
    Country: Country;
    age: number;
    sexe: String;
} 