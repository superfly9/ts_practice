"use strict";
//  없을 수 있는 값에 대한 보장을 해주는것
let dice;
function rollDice() {
    dice = Math.floor(Math.random() * 6) + 1;
}
rollDice();
// console.log('[current Dice]:',dice)
// Variable 'dice' is used before being assigned.ts(2454)
// 해결
// 1) 사용시에 ! 추가
console.log("[current Dice]:", dice);
// 2) 선언 시에 ! 추가
let dice2;
function rollDice2() {
    dice = Math.floor(Math.random() * 6) + 1;
}
rollDice2();
console.log(dice2);
