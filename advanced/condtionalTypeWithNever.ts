// ex1 : Union 타입에서 Never는 무시 된다
function error(message:string):never {
    return new Error(message)
}

const notAllowed:never='some-string';
const msg:string =error('Never에 할당 가능')
const msg2:never =error('할당 가능');

type Verbose = string | never // string


// Union + Generic + Conditional Type => 분배법칙 적용
// ex2
export type NoEmpty<T> = T extends (null | undefined ) ? never : T;

type Example =  NoEmpty<string | number> // string | number

type Ex2 = NoEmpty<string | null>  // string
// step1: NoEmpty<string> | NoEmpty<null> 
// step2: string extends (null | undefined) ? never : string  | null extends (null | undefined) ? never :null
// step3: string | never
// step4 : string
