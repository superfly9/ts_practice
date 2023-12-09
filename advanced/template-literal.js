let cityName = `Korea: Ilsan`;
cityName = 'Korea: Seoul';
cityName = 'USA: Seoul'; // Type '"USA: Seoul"' is not assignable to type '`Korea: ${string}`'.
const size = (input) => {
    return typeof input === 'number' ? input + 'px' : input;
};
size('50rem');
size(10);
size('23eem'); // compile error
// "Red:sm" | "Red:md" | "Red:lg" | "Blue:sm" | "Blue:md" | "Blue:lg" | 
// "Green:sm" | "Green:md" | "Green:lg" | "Mint:sm" | "Mint:md" | "Mint:lg"
const getUniformInfo = (info) => {
    return info;
};
getUniformInfo('Yellow:sm'); // error
getUniformInfo('Mint:lg'); // 인자 추천도 자동으로 해줌s\
export {};
