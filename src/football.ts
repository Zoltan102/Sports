import { Results } from "./results";

export class Football implements Results{
    winner: string;
    date: Date;
    #goals: number[];

    constructor(winner : string, date : Date, goals : number[]){
        this.winner = winner;
        this.date = date;
        this.#goals = goals;
    }

    result(): string {
        return 'Football match: ' + this.#goals[0] + '-' + this.#goals[1];
    }

}