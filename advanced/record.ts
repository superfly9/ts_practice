// ex1 - 내가 원하는 key / value형태로 기존의 타입을 이용하여 새로운 객체를 매핑하는데 사용
type MakeObject<T extends string,U extends object> = Record<T,U>

export interface City {
    name:string,
    location:string,
    price:number
}

type 후보지들 = 'IlSan' | 'Seoul' | 'Bundang';


type myChoice = MakeObject<후보지들, City>
// {
//   IlSan: City;
//   Seoul: City;
//   Bundang: City;
// }

// ex2
type RecordInner<T extends string | number | symbol, U> = {
    [P in T] : U
}

// interface Foo<T extends string | number | symbol, U> {
//     [P in T] : U
// }
type myChoice2 = RecordInner<후보지들 ,'number'>

type myString = RecordInner<후보지들, 'number'>
// {
//   IlSan: "number";
//   Seoul: "number";
//   Bundang: "number";
// }


// ex3) api 응답 혹은 특정 조건에 따라 객체의 속성 변경시
type Person = Record<string ,{ name:string, age:number}>
type IndexdedPerson = { [key:string] : { name :string, age:number}  }
// 둘이 동일하나, Record가 가독성이 더 좋다
let person :Person= {};
//  로직 존재

person['chan_1'] = {name:'chan', age:30}
person['chan_2'] = {name:'chan'} // error

// ex4) 객체의 초기타입 세팅
interface ICoords {
  x:number,
  y:number,
  z:number
}

type Coord = Record<'x'|'y'|'z' , number>
// {x: number ,y : number , z: number }
// Interface를 대신할 수 있다.


interface PageInfo {
  id:string;
  title:string;
}

type PageVerbose = {
  home : PageInfo,
  detail: PageInfo,
  services: PageInfo
}
type PageVerboseWithRecord = Record<'home' | 'detail' | 'services', PageInfo>