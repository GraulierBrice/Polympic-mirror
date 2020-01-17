import { Favoriseable } from './favorisable.model';

export interface Country extends Favoriseable {
    id: String;
    name: String;
    flag: String;
}