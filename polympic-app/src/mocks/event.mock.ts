
import {Event} from '../models/event.model';
import { PLACES_MOCKED } from './place.mock';
import { EVENTSTYPES_MOCKED} from './eventType.mock';

const assets = "../assets/";

export const EVENTS_MOCKED: Event[] = [
    {
        name:"Final de football",
        icon:assets+"icon/football.png",
        image:assets+"football.jpg",
        place:PLACES_MOCKED[5],
        beginDate:new Date(2020, 1, 11, 16, 45),
        type: 'Football',
        participants: [0, 1, 2],
        ended: false,
        winner: undefined,
        eventType: EVENTSTYPES_MOCKED[0],
        id: 0
    ,podium: [] },
    {
        name:"Pentathlon qualifications",
        icon:assets+"icon/pentathlon.png",
        image:assets+"pentathlon.jpg",
        place:PLACES_MOCKED[6],
        beginDate:new Date(2020, 1, 11, 12, 0),
        type: 'Pentathlon',
        participants: [4, 3, 1],
        ended: false,
        winner: undefined,
        eventType: EVENTSTYPES_MOCKED[1],
        id: 1
    ,podium: [] },
    {
        name: '100 m',
        icon: assets+'icon/athletics.png',
        image:assets+"athletics.jpg",
        place: PLACES_MOCKED[1],
        beginDate: new Date(2020, 1, 10, 9, 30),
        type: 'Athlétisme',
        participants: [0, 1, 2],
        ended: true,
        winner: 1,
        eventType: EVENTSTYPES_MOCKED[1],
        id: 2
    ,podium: [] },
    {
        name: '110m haie',
        icon: assets+'icon/athletics.png',
        image:assets+"athletics.jpg",
        place: PLACES_MOCKED[1],
        beginDate: new Date(2020, 1, 10, 15, 0),
        type: 'Athlétisme',
        participants: [2, 3, 4],
        ended: true,
        winner: 4,
        eventType: EVENTSTYPES_MOCKED[1],
        id: 3
    ,podium: [] },
    {
        name: 'Lancer de javelot',
        icon: assets+'icon/athletics.png',
        image:assets+"athletics.jpg",
        place: PLACES_MOCKED[8],
        beginDate: new Date(2020, 1, 11, 13, 30),
        type: 'Athlétisme',
        participants: [1, 4, 3],
        ended: false,
        winner: undefined,
        eventType: EVENTSTYPES_MOCKED[1],
        id: 4
    ,podium: [] },
    {
        name: 'Lancer de disque',
        icon: assets+'icon/athletics.png',
        image:assets+"athletics.jpg",
        place: PLACES_MOCKED[8],
        beginDate: new Date(2020, 1, 11, 15, 30),
        type: 'Athlétisme',
        participants: [2, 4, 0],
        ended: false,
        winner: undefined,
        eventType: EVENTSTYPES_MOCKED[1],
        id: 5
    ,podium: [] },
    {
        name: 'Saut en Hauteur',
        icon: assets+'icon/athletics.png',
        image:assets+"athletics.jpg",
        place: PLACES_MOCKED[3],
        beginDate: new Date(2020, 1, 11, 10, 0),
        type: 'Athlétisme',
        participants: [2, 3, 0],
        ended: false,
        winner: undefined,
        eventType: EVENTSTYPES_MOCKED[1],
        id: 6
    ,podium: [] },
    {
        name: 'Saut à la perche',
        icon: assets+'icon/athletics.png',
        image:assets+"athletics.jpg",
        place: PLACES_MOCKED[3],
        beginDate: new Date(2020, 1, 12, 10, 0),
        type: 'Athlétisme',
        participants: [1, 0, 4],
        ended: false,
        winner: undefined,
        eventType: EVENTSTYPES_MOCKED[1],
        id: 7
    ,podium: [] },
    {
        name: 'Relais 4*100m',
        icon: assets+'icon/athletics.png',
        image:assets+"athletics.jpg",
        place: PLACES_MOCKED[1],
        beginDate: new Date(2020, 1, 12, 14, 0),
        participants: [1, 0, 3, 2],
        type: 'Athlétisme',
        ended: false,
        winner: undefined,
        eventType: EVENTSTYPES_MOCKED[0],
        id: 8
    ,podium: [] },
    {
        name: '50m nage libre',
        icon: assets+'icon/swimming.png',
        image:assets+"swimming.jpg",
        place: PLACES_MOCKED[4],
        beginDate: new Date(2020, 1, 12, 16, 30),
        type: 'Natation',
        participants: [1, 4, 3, 0],
        ended: false,
        winner: undefined,
        eventType: EVENTSTYPES_MOCKED[1],
        id: 9
    ,podium: [] },
    {
        name: '150m nage libre',
        icon: assets+'icon/swimming.png',
        image:assets+"swimming.jpg",
        place: PLACES_MOCKED[4],
        beginDate: new Date(2020, 1, 13, 9, 30),
        type: 'Natation',
        participants: [0, 1, 2],
        ended: false,
        winner: undefined,
        eventType: EVENTSTYPES_MOCKED[0],
        id: 10
    ,podium: [] },
    {
        name: '100m dos',
        icon: assets+'icon/swimming.png',
        image:assets+"swimming.jpg",
        place: PLACES_MOCKED[4],
        beginDate: new Date(2020, 1, 13, 12, 30),
        type: 'Natation',
        participants: [0, 1],
        ended: false,
        winner: undefined,
        eventType: EVENTSTYPES_MOCKED[0],
        id: 11
    ,podium: [] },
    {
        name: 'Natation Synchronisé',
        icon: assets+'icon/swimming.png',
        image:assets+"swimming.jpg",
        place: PLACES_MOCKED[4],
        beginDate: new Date(2020, 1, 11, 10, 30),
        type: 'Natation',
        participants: [4, 1, 3],
        ended: false,
        winner: undefined,
        eventType: EVENTSTYPES_MOCKED[1],
        id: 12
    ,podium: [] },
    {
        name: 'Taekwondo',
        icon: assets+'icon/taekwondo.png',
        image:assets+"athletics.jpg",
        place: PLACES_MOCKED[2],
        beginDate: new Date(2020, 1, 11, 9, 0),
        type: 'Taekwondo',
        participants: [1, 4, 2],
        ended: false,
        winner: undefined,
        eventType: EVENTSTYPES_MOCKED[0],
        id: 13
    ,podium: [] },
    {
        name: 'Judo',
        icon: assets+'icon/judo.png',
        image:assets+"athletics.jpg",
        place: PLACES_MOCKED[2],
        beginDate: new Date(2020, 1, 12, 9, 0),
        type: 'Judo',
        participants: [1, 0, 2],
        ended: false,
        winner: undefined,
        eventType: EVENTSTYPES_MOCKED[0],
        id: 14
    ,podium: [] },
    {
        name: 'Karaté-Combat',
        icon: assets+'icon/karatekumite.png',
        image:assets+"athletics.jpg",
        place: PLACES_MOCKED[2],
        beginDate: new Date(2020, 1, 13, 9, 0),
        type: 'Karate',
        participants: [1, 4],
        ended: false,
        winner: undefined,
        eventType: EVENTSTYPES_MOCKED[0],
        id: 15
    ,podium: [] },
    {
        name: 'Karate-Kata',
        icon: assets+'icon/karatekata.png',
        image:assets+"athletics.jpg",
        place: PLACES_MOCKED[2],
        beginDate: new Date(2020, 1, 13, 14, 0),
        type: 'Karate',
        participants: [1, 0],
        ended: false,
        winner: undefined,
        eventType: EVENTSTYPES_MOCKED[0],
        id: 16
    ,podium: [] },
    {
        name: 'Escrime',
        icon: assets+'icon/fencing.png',
        image:assets+"athletics.jpg",
        place: PLACES_MOCKED[4],
        beginDate: new Date(2020, 1, 11, 10, 0),
        type: 'Escrime',
        participants: [0, 1],
        ended: false,
        winner: undefined,
        eventType: EVENTSTYPES_MOCKED[0],
        id: 17
    ,podium: [] },
]
