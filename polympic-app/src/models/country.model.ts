import { Favoriseable } from './favorisable.model';

export interface Country extends Favoriseable {
    id: number;
    name: String;
    flag: String;
}