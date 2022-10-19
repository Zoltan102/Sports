"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Calvinball_winner;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calvinball = void 0;
class Calvinball {
    constructor(winner, date) {
        _Calvinball_winner.set(this, '');
        this.winner = winner;
        this.date = date;
        this.resultOfCalvin = Math.floor(Math.random() * (101 - 10) + 10);
    }
    get winner() {
        return __classPrivateFieldGet(this, _Calvinball_winner, "f");
    }
    set winner(winner) {
        if (winner.toLowerCase() == 'calvin' || winner.toLowerCase() == 'hobbes') {
            __classPrivateFieldSet(this, _Calvinball_winner, winner, "f");
        }
        else {
            throw new Error("Nem megengedett győztes!");
        }
    }
    result() {
        return 'Calvinball: ' + this.resultOfCalvin + ' points';
    }
}
exports.Calvinball = Calvinball;
_Calvinball_winner = new WeakMap();
