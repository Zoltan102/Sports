import { Results } from "./results";

export class Marathon implements Results{
    winner: string;
    date: Date;
    time: number;

    constructor(winner : string, date : Date, time : number){
        this.winner = winner;
        this.date = date;
        this.time = time;
    }

    result(): string {
        let min = Math.floor(this.time / 60);
        let sec = this.time % 60;
        return 'Marathon: ' + min + ' mins ' + sec + ' s';
    }

}