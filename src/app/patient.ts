export class Patient {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    sex: string;
    country: string;
    state: string;
    address: string;
    comments: Comment[];
}
