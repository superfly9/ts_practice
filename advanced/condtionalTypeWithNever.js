// ex1 : Union 타입에서 Never는 무시 된다
function error(message) {
    return new Error(message);
}
const notAllowed = 'some-string';
const msg = error('Never에 할당 가능');
const msg2 = error('할당 가능');
export {};
// step1: NoEmpty<string> | NoEmpty<null> 
// step2: string extends (null | undefined) ? never : string  | null extends (null | undefined) ? never :null
// step3: string | never
// step4 : string
