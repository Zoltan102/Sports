import { Calvinball } from "./calvinball";
import { Football } from "./football";
import { Marathon } from "./marathon";
import { Results } from "./results";
let results : Results[] = [
    new Football('Hungary', new Date(), [6, 3]),
    new Football('Italy', new Date(), [2, 1]),
    new Marathon('Jane Doe', new Date(), 554),
    new Marathon('Joe Doe', new Date(), 420),
    new Calvinball('Calvin', new Date),
    new Calvinball('Hobbes', new Date),
]

for(let r of results){
    if(r.winner.toLowerCase() == 'calvin'){
    console.log(r.result());
    }
}

results.sort((a, b) => (a.date > b.date)? 1 : -1);