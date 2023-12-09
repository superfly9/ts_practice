var myEnum;
(function (myEnum) {
    myEnum["propOne"] = "propOne";
    myEnum["propTwo"] = "propTwo";
})(myEnum || (myEnum = {}));
const chartDataMapped = {
    views: [],
    likes: [],
    shares: [],
    comments: [],
};
const chartDataOptionalMapped = {
    views: [],
    likes: [],
    shares: [],
    comments: [],
};
const chartDataRecord = {
    views: [],
    likes: [],
    shares: [],
    comments: [],
};
export {};
//const target1 = chartDataMapped.views.find((chartData) => (...)); 
//const target2 = chartDataRecord.views.find((chartData) => (...)); // ok
// const target3 = chartDataOptionalMapped.views.find((chartData) => (...));  // error - 'chartData.views' is possibly 'undefined'
