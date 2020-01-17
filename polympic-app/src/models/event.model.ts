import { Place } from './place.model';
import { EventType } from './eventType.model';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface Event {
    id: Number,
    name: string,
    icon: IconDefinition,
    iconMap: String,
    image: string,
    type: string,
    place: Place,
    beginDate: Date,
    participants: Number[],
    status: String,
    winner: Number,
    eventType: EventType,
    podium: Number[],
    results: any;
}