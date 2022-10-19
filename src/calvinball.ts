import { Results } from "./results";

export class Calvinball implements Results{
    #winner: string = '';
    date: Date;
    resultOfCalvin : number;

    constructor(winner : string, date : Date,){
        this.winner = winner;
        this.date = date;
        this.resultOfCalvin = Math.floor(Math.random() * (101 - 10) + 10);
    }

    get winner() : string{
        return this.#winner;
    }

    set winner(winner : string){
        if(winner.toLowerCase() == 'calvin' || winner.toLowerCase() == 'hobbes'){
            this.#winner = winner;
        }else{
            throw new Error("Nem megengedett győztes!");
            
        }
    }

    result(): string {
        return 'Calvinball: ' + this.resultOfCalvin + ' points';
    }

}
