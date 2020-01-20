
import { SPORTS_ICONS_MOCKED } from './sportIcons.mock';
import { Sport } from 'src/models/sport.model';

export const SPORTS_FILTERS_MOCKED: Sport[] = [
    {
        category: 'sport',
        name: 'Natation',
        image: SPORTS_ICONS_MOCKED['Natation'],
        clicked: false
    },
    {
        category: 'sport',
        name: 'Athlétisme',
        image: SPORTS_ICONS_MOCKED['Athlétisme'],
        clicked: false
    },
    {
        category: 'sport',
        name: 'Football',
        image: SPORTS_ICONS_MOCKED['Football'],
        clicked: false
    },
    {
        category: 'sport',
        name: 'Basketball',
        image: SPORTS_ICONS_MOCKED['Basketball'],
        clicked: false
    }
]