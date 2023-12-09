// 둘이 동일하나, Record가 가독성이 더 좋다
let person = {};
//  로직 존재
person['chan_1'] = { name: 'chan', age: 30 };
person['chan_2'] = { name: 'chan' }; // error
export {};
