import { Medal } from './medal.model';
import { Country } from './country.model';
import { Favoriseable } from './favorisable.model';
export interface Athlete extends Favoriseable {
    id: Number;
    image: String;
    name: String;
    sport: String;
    Victory: String;
    Defeat: String;
    Medals: Medal[];
    Country: Country;
} 