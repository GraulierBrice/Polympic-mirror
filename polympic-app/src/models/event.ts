import { Place } from './place';

export interface Event {
    id: Number,
    name: string,
    icon: string,
    type: string,
    place: Place,
    beginDate: Date,
    participants: Number[],
    ended: boolean,
    winner: Number
}