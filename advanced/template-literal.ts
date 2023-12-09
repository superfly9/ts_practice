// ex1 : 타입에 공통적으로 명시하고싶은 값이 있을 때
export type CityName = `Korea: ${string}`

let cityName : CityName = `Korea: Ilsan`;
cityName = 'Korea: Seoul'
cityName = 'USA: Seoul' // Type '"USA: Seoul"' is not assignable to type '`Korea: ${string}`'.


// ex2 : 함수의 인자로 특정 형태를 받고 싶을때
type CSSValue = number | `${number}px` | `${number}em` | `${number}rem`;

const size = (input: CSSValue)=>{
    return typeof input === 'number' ? input+'px' : input
}

size('50rem');
size(10);
size('23eem') // compile error

// ex3 
type Color = 'Red' | 'Blue' | 'Green' | 'Mint';
type Size ='sm' | 'md' | 'lg';
type UniformInfo = `${Color}:${Size}`;
// "Red:sm" | "Red:md" | "Red:lg" | "Blue:sm" | "Blue:md" | "Blue:lg" | 
// "Green:sm" | "Green:md" | "Green:lg" | "Mint:sm" | "Mint:md" | "Mint:lg"

const getUniformInfo=(info: UniformInfo) =>{
    return info;
}

getUniformInfo('Yellow:sm') // error
getUniformInfo('Mint:lg') // 인자 추천도 자동으로 해줌s\

