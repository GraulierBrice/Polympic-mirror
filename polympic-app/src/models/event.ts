import { Place } from './place';

export interface Event {
    name: string;
    icon:string;
    place: Place;
    start: Date;
}