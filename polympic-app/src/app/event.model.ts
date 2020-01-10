

export interface Event {
    id: String;
    image: String;
    name: String;
    type: String;
    place: String;
    beginDate: String;
    beginHour: String;
    participants: Number[];
    ended: boolean;
    winner: String;
}