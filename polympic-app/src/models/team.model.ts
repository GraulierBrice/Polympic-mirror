import { Athlete } from './athlete.model';
import { Medal } from './medal.model';
import { Country } from './country.model';
import { Favoriseable } from './favorisable.model';

export interface Team extends Favoriseable {
    id: number;
    image: String;
    Victory: String;
    Defeat: String;
    Medals: Medal[];
    Country: Country;
    Members: Athlete[];
}