

export interface Event {
    id: String;
    image: String;
    name: String;
    type: String;
    place: String;
    address: String;
    beginDate: String;
    beginHour: String;
    teamEvent: boolean;
    participants: Number[];
    ended: boolean;
    winner: String;
}