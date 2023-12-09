class State<T> {
    constructor(public current:T){}
    update(next:T) {
        this.current = {...this.current, ...next}
    }
}

const state1 = new State({ name:'Il-san', subway:'GTX', hasBigPark:'Y'});

state1.update({ name:'Jam-sil', subway:'line2'}) // 에러 발생 - hasBigPark가 없기에


type SelfMadePartial<T>= {
    [key in keyof T]? : T[key]
}

class PartialState<T> {
    constructor(public current:T){}
    update(next:Partial<T>) {
        this.current = {...this.current, ...next}
    }
}
const state2 = new PartialState({ name:'Jam-sil', subway:'line-2', hasBigPark:'Y'});

state2.update({ name:'Il-san', subway:'GTX'}) // 에러 발생 - hasBigPark가 없기에

