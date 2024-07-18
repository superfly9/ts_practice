type Animal = {
  name: string;
  voice(): string;
};

function log(aninmal: Animal) {
  console.log(`Animam ${aninmal.name} : ${aninmal.voice()}`);
}

class Cat implements Animal {
  constructor(public name: string) {}
  voice() {
    return "meow";
  }
}

log(new Cat("Wolf"));
