import { City } from "./record";

enum myEnum {
    propOne = 'propOne',
    propTwo = 'propTwo'
  }

  export type MyInterface = {
    [key in myEnum]: City;
  }

//   type keyofEnum<T = myEnum> = keyof T


interface CountType {
	views: number;
	likes: number;
	shares: number;
	comments: number;
}

type OptionalCountType = {
    [K in keyof CountType]? : CountType[K] 
}

interface ChartType {
	axis: string;
	value: string;
	color: string;
}
const chartDataMapped: {
	[K in keyof CountType]: ChartType[]
} = {
  views: [],
  likes: [],
  shares: [],
  comments: [],
};
const chartDataOptionalMapped: {
	[K in keyof OptionalCountType]: ChartType[]
} = {
  views: [],
  likes: [],
  shares: [],
  comments: [],
};

const chartDataRecord: Record<keyof CountType, ChartType[]> = {
  views: [],
  likes: [],
  shares: [],
  comments: [],
};

//const target1 = chartDataMapped.views.find((chartData) => (...)); 

//const target2 = chartDataRecord.views.find((chartData) => (...)); // ok
// const target3 = chartDataOptionalMapped.views.find((chartData) => (...));  // error - 'chartData.views' is possibly 'undefined'