"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Marathon = void 0;
class Marathon {
    constructor(winner, date, time) {
        this.winner = winner;
        this.date = date;
        this.time = time;
    }
    result() {
        let min = Math.floor(this.time / 60);
        let sec = this.time % 60;
        return 'Marathon: ' + min + ' mins ' + sec + ' s';
    }
}
exports.Marathon = Marathon;
