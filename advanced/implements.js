"use strict";
function log(aninmal) {
    console.log(`Animam ${aninmal.name} : ${aninmal.voice()}`);
}
class Cat {
    constructor(name) {
        this.name = name;
    }
    voice() {
        return "meow";
    }
}
log(new Cat("Wolf"));
