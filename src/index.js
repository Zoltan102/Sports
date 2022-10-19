"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calvinball_1 = require("./calvinball");
const football_1 = require("./football");
const marathon_1 = require("./marathon");
let results = [
    new football_1.Football('Hungary', new Date(), [6, 3]),
    new football_1.Football('Italy', new Date(), [2, 1]),
    new marathon_1.Marathon('Jane Doe', new Date(), 554),
    new marathon_1.Marathon('Joe Doe', new Date(), 420),
    new calvinball_1.Calvinball('Calvin', new Date),
    new calvinball_1.Calvinball('Hobbes', new Date),
];
for (let r of results) {
    if (r.winner.toLowerCase() == 'calvin') {
        console.log(r.result());
    }
}
results.sort((a, b) => (a.date > b.date) ? 1 : -1);
