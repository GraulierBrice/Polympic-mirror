import {
    SPORTS_ICONS_MOCKED
} from './sportIcons.mock';
import {
    Event
} from '../models/event.model';
import {
    PLACES_MOCKED
} from './place.mock';
import {
    EVENTSTYPES_MOCKED
} from './eventType.mock';

const assets = "../assets/";

export const EVENTS_MOCKED: Event[] = [
    {
        category: 'event',
        name:"Finale de Football",
        icon:SPORTS_ICONS_MOCKED['Football'],
        iconMap: assets+"icon/football.png",
        image:assets+"football.jpg",
        place:PLACES_MOCKED[5],
        beginDate:new Date(2020, 1, 11, 16, 45),
        type: 'Football',
        participants: [1, 2],
        score : undefined,
        status: 'Bientot',
        winner: undefined,
        eventType: EVENTSTYPES_MOCKED[0],
        id: 0,
        podium: [],
        results: undefined,
        relatedContent: [
            18
        ]
    },
    {
        category: 'event',
        name: '100 m',
        icon: SPORTS_ICONS_MOCKED['Athlétisme'],
        image: assets + "athletics.jpg",
        iconMap: assets + "icon/athletics.png",
        place: PLACES_MOCKED[1],
        beginDate: new Date(2020, 1, 11, 9, 30),
        type: 'Athlétisme',
        participants: [0,1,2,3,6,7,8,11],
        status: 'Terminé',
        score : undefined,
        winner: 11,
        eventType: EVENTSTYPES_MOCKED[1],
        id: 2,
        podium: [11,7,6],
        results: [
            {id : 11, res : "9 s 73"},
            {id : 7, res : "9 s 86"},
            {id : 6, res : "9 s 97"},
            {id : 1, res : "10 s 08"},
            {id : 3, res : "10 s 16"},
            {id : 8, res : "10 s 75"},
            {id : 2, res : "10 s 85"},
            {id : 0, res : "11 s 01"},
        ],
        relatedContent: [
            3, 5, 6
        ]
    },
    {
        category: 'event',
        name: '110m haie',
        icon: SPORTS_ICONS_MOCKED['Athlétisme'],
        iconMap: assets + "icon/athletics.png",
        image: assets + "athletics.jpg",
        place: PLACES_MOCKED[1],
        beginDate: new Date(2020, 1, 11, 15, 0),
        type: 'Athlétisme',
        participants: [0, 1, 2, 3, 6, 7, 8, 11],
        status: 'Terminé',
        score : undefined,
        winner: 0,
        eventType: EVENTSTYPES_MOCKED[1],
        id: 3,
        podium: [
            0, 3, 1
        ],
        results: [
            {id : 0, res : "12 s 80"},
            {id : 3, res : "12 s 86"},
            {id : 1, res : "12 s 98"},
            {id : 11, res : "13 s 08"},
            {id : 6, res : "13 s 10"},
            {id : 7, res : "13 s 25"},
            {id : 2, res : "13 s 55"},
            {id : 8, res : "13 s 75"},
        ],
        relatedContent: [
            2, 5, 6
        ]
    },
    {
        category: 'event',
        name: 'Lancer de javelot',
        icon: SPORTS_ICONS_MOCKED['Athlétisme'],
        iconMap: assets + "icon/athletics.png",
        image: assets + "athletics.jpg",
        place: PLACES_MOCKED[8],
        beginDate: new Date(2020, 1, 11, 13, 30),
        type: 'Athlétisme',
        participants: [0, 1, 2, 3, 6, 7, 8, 11],
        score : undefined,
        status: 'Bientot',
        winner: undefined,
        eventType: EVENTSTYPES_MOCKED[1],
        id: 4,
        podium: [],
        results: undefined,
        relatedContent: [
            2,3,4
        ]
    },
    {
        category: 'event',
        name: 'Lancer de disque',
        icon: SPORTS_ICONS_MOCKED['Athlétisme'],
        iconMap: assets + "icon/athletics.png",
        image: assets + "athletics.jpg",
        place: PLACES_MOCKED[8],
        beginDate: new Date(2020, 1, 12, 15, 30),
        type: 'Athlétisme',
        participants: [0, 1, 2, 3, 6, 7, 8, 11],
        score : undefined,
        status: 'A venir',
        winner: undefined,
        eventType: EVENTSTYPES_MOCKED[1],
        id: 5,
        podium: [],
        results: undefined,
        relatedContent: [
            2,3,4
        ]
    },
    {
        category: 'event',
        name: 'Saut en Hauteur',
        icon: SPORTS_ICONS_MOCKED['Athlétisme'],
        iconMap: assets + "icon/athletics.png",
        image: assets + "athletics.jpg",
        place: PLACES_MOCKED[3],
        beginDate: new Date(2020, 1, 12, 10, 0),
        type: 'Athlétisme',
        participants: [0, 1, 2, 3, 6, 7, 8, 11],
        status: 'A venir',
        score : undefined,
        winner: undefined,
        eventType: EVENTSTYPES_MOCKED[1],
        id: 6,
        podium: [],
        results: undefined,
        relatedContent: [
            7,8,2
        ]
    },
    {
        category: 'event',
        name: 'Saut à la perche',
        icon: SPORTS_ICONS_MOCKED['Athlétisme'],
        iconMap: assets + "icon/athletics.png",
        image: assets + "athletics.jpg",
        place: PLACES_MOCKED[3],
        beginDate: new Date(2020, 1, 12, 10, 0),
        type: 'Athlétisme',
        participants: [0, 1, 2, 3, 6, 7, 8, 11],
        score : undefined,
        status: 'A venir',
        winner: undefined,
        eventType: EVENTSTYPES_MOCKED[1],
        id: 7,
        podium: [],
        results: undefined,
        relatedContent: [
            6,8,2
        ]
    },
    {
        category: 'event',
        name: 'Relais 4 x 100m',
        icon: SPORTS_ICONS_MOCKED['Athlétisme'],
        iconMap: assets + "icon/athletics.png",
        image: assets + "athletics.jpg",
        place: PLACES_MOCKED[1],
        beginDate: new Date(2020, 1, 12, 14, 0),
        participants: [0, 1, 2, 3, 6, 7, 8, 11],
        type: 'Athlétisme',
        status: 'A venir',
        score : undefined,
        winner: undefined,
        eventType: EVENTSTYPES_MOCKED[0],
        id: 8,
        podium: [],
        results: undefined,
        relatedContent: [
            2,3
        ]
    },
    {
        category: 'event',
        name: '50m nage libre',
        icon: SPORTS_ICONS_MOCKED['Natation'],
        iconMap: assets+"icon/swimming.png",
        image:assets+"swimming.jpg",
        place: PLACES_MOCKED[14],
        beginDate: new Date(2020, 1, 12, 16, 30),
        type: 'Natation',
        participants: [5, 9, 10, 3, 6],
        score : undefined,
        status: 'A venir',
        winner: undefined,
        eventType: EVENTSTYPES_MOCKED[1],
        id: 9,
        podium: [],
        results: undefined,
        relatedContent: [
            10,11,12
        ]
    },
    {
        category: 'event',
        name: '150m nage libre',
        icon: SPORTS_ICONS_MOCKED['Natation'],
        iconMap: assets + "icon/swimming.png",
        image: assets + "swimming.jpg",
        place: PLACES_MOCKED[4],
        beginDate: new Date(2020, 1, 11, 9, 30),
        type: 'Natation',
        participants: [5, 9, 10, 3, 6],
        score : undefined,
        status: 'En cours',
        winner: undefined,
        eventType: EVENTSTYPES_MOCKED[1],
        id: 10,
        podium: [],
        results: undefined,
        relatedContent: [
            9,11,12
        ]
    },
    {
        category: 'event',
        name: '100m dos',
        icon: SPORTS_ICONS_MOCKED['Natation'],
        iconMap: assets + "icon/swimming.png",
        image: assets + "swimming.jpg",
        place: PLACES_MOCKED[4],
        beginDate: new Date(2020, 1, 10, 12, 30),
        type: 'Natation',
        participants: [5, 9, 10, 3, 6],
        status: 'A venir',
        score : undefined,
        winner: undefined,
        eventType: EVENTSTYPES_MOCKED[1],
        id: 11,
        podium: [],
        results: undefined,
        relatedContent: [
            9,10,12
        ]
    },
    {
        category: 'event',
        name: 'Natation Synchronisé',
        icon: SPORTS_ICONS_MOCKED['Natation'],
        iconMap: assets + "icon/swimming.png",
        image: assets + "swimming.jpg",
        place: PLACES_MOCKED[4],
        beginDate: new Date(2020, 1, 10, 10, 30),
        type: 'Natation',
        participants: [5, 9, 10, 3, 6],
        status: 'A venir',
        score : undefined,
        winner: undefined,
        eventType: EVENTSTYPES_MOCKED[1],
        id: 12,
        podium: [],
        results: undefined,
        relatedContent: [
            9,10,11
        ]
    },
    {
        category: 'event',
        name: 'Taekwondo',
        icon: SPORTS_ICONS_MOCKED['Karate'],
        iconMap: assets + "icon/taekwondo.png",
        image: assets + "karate.jpg",
        place: PLACES_MOCKED[2],
        beginDate: new Date(2020, 1, 11, 9, 0),
        type: 'Taekwondo',
        participants: [0, 1, 2, 3, 6, 7, 8, 11],
        status: 'En cours',
        score : undefined,
        winner: undefined,
        eventType: EVENTSTYPES_MOCKED[1],
        id: 13,
        podium: [],
        results: undefined,
        relatedContent: [
            14,15,16,17
        ]
    },
    {
        category: 'event',
        name: 'Judo',
        icon: SPORTS_ICONS_MOCKED['Karate'],
        iconMap: assets + "icon/judo.png",
        image: assets + "karate.jpg",
        place: PLACES_MOCKED[2],
        beginDate: new Date(2020, 1, 10, 9, 0),
        type: 'Judo',
        participants: [0, 1, 2, 3, 6, 7, 8, 11],
        status: 'A venir',
        winner: undefined,
        score : undefined,
        eventType: EVENTSTYPES_MOCKED[1],
        id: 14,
        podium: [],
        results: undefined,
        relatedContent: [
            13,15,16,17
        ]
    },
    {
        category: 'event',
        name: 'Karaté-Combat',
        icon: SPORTS_ICONS_MOCKED['Karate'],
        iconMap: assets + "icon/karatekata.png",
        image: assets + "karate.jpg",
        place: PLACES_MOCKED[2],
        beginDate: new Date(2020, 1, 12, 9, 0),
        type: 'Karate',
        participants: [0, 1, 2, 3, 6, 7, 8, 11],
        status: 'A venir',
        score : undefined,
        winner: undefined,
        eventType: EVENTSTYPES_MOCKED[1],
        id: 15,
        podium: [],
        results: undefined,
        relatedContent: [
            13,14,16,17
        ]
    },
    {
        category: 'event',
        name: 'Karate-Kata',
        icon: SPORTS_ICONS_MOCKED['Karate'],
        iconMap: assets + "icon/karatekata.png",
        image: assets + "karate.jpg",
        place: PLACES_MOCKED[2],
        beginDate: new Date(2020, 1, 12, 14, 0),
        type: 'Karate',
        participants: [0, 1, 2, 3, 6, 7, 8, 11],
        status: 'A venir',
        score : undefined,
        winner: undefined,
        eventType: EVENTSTYPES_MOCKED[1],
        id: 16,
        podium: [],
        results: undefined,
        relatedContent: [
            13,14,15,17
        ]
    },
    {
        category: 'event',
        name: 'Escrime',
        icon: SPORTS_ICONS_MOCKED['Karate'],
        iconMap: assets + "icon/fencing.png",
        image: assets + "escrime.jpg",
        place: PLACES_MOCKED[4],
        beginDate: new Date(2020, 1, 10, 10, 0),
        type: 'Escrime',
        participants: [1, 2, 3, 4],
        status: 'En cours',
        score : undefined,
        winner: undefined,
        eventType: EVENTSTYPES_MOCKED[1],
        id: 17,
        podium: [],
        results: undefined,
        relatedContent: [
            13,14,15,16
        ]
    },
    {
        category: 'event',
        name: "Petite Finale de Football",
        icon: SPORTS_ICONS_MOCKED['Football'],
        iconMap: assets + "icon/football.png",
        image: assets + "football.jpg",
        place: PLACES_MOCKED[5],
        beginDate: new Date(2020, 1, 23, 9, 30),
        type: 'Football',
        participants: [0, 3],
        status: 'En cours',
        score : [5,1],
        winner: undefined,
        eventType: EVENTSTYPES_MOCKED[0],
        id: 18,
        podium: [],
        results: undefined,
        relatedContent: [
            0
        ]
    },
]
