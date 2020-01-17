import { Favoriseable } from './favorisable.model';

export interface Country extends Favoriseable {
    id: Number;
    name: String;
    flag: String;
}