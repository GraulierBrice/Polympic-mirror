import { Place } from './place';

export interface Event {
    id: Number,
    name: string,
    icon: string,
    type: string,
    place: Place,
    beginDate: Date,
    participants: [1, 0, 3],
    ended: true,
    winner: '0'
}