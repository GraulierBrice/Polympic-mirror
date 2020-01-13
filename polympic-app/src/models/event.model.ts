import { EventType } from './eventType.model';


export interface Event {
    id: String;
    image: String;
    name: String;
    type: String;
    place: String;
    address: String;
    beginDate: String;
    beginHour: String;
    eventType: EventType;
    participants: Number[];
    ended: boolean;
    winner: String;
    podium: String[];
}