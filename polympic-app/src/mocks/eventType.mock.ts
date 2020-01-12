import { EventType } from './../app/eventType.model';
import { faUsers, faUser} from '@fortawesome/free-solid-svg-icons';

export const EVENTSTYPES_MOCKED : EventType[] = [
    {
        name: 'Team',
        image: faUsers,
        clicked: false
    },
    {
        name: 'Solo',
        image: faUser,
        clicked: false
    }
]