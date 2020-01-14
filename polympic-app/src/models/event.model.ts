import { Place } from './place.model';
import { EventType } from './eventType.model';

export interface Event {
    id: Number,
    name: string,
    icon: string,
    image: string,
    type: string,
    place: Place,
    beginDate: Date,
    participants: Number[],
    ended: boolean,
    winner: Number,
    eventType: EventType,
    podium: Number[]
}