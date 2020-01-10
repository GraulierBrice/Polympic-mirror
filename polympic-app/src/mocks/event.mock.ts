import {Event} from '../models/event';
import { PLACES_MOCKED } from './place.mock';

export const EVENTS_MOCKED: Event[] = [
    {
        name:"Final de football",
        icon:"football.png",
        place:PLACES_MOCKED[5],
        start:new Date(2020, 1, 11, 16, 45),
    },
    {
        name:"Pentathlon qualifications",
        icon:"pentathlon.png",
        place:PLACES_MOCKED[6],
        start:new Date(2020, 1, 11, 12, 0),
    }

];