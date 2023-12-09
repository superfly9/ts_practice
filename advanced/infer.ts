// ex1
type MyReturnType<T> = T extends (...args: any)=>infer R ? R :never

const myCity = (name: string)=>name

type city = typeof myCity // (name:string)=>string
type CityName= MyReturnType<typeof myCity> // string

// typeof : 함수 / Interface / 객체형 Type에 사용


// ex2
type IsArray<T> = T extends Array<infer Item>  ? 'array' : 'other';

type WithArray = IsArray<String []>;
type WithNotArray = IsArray<number>
type WithInterface = IsArray<city>

// ex3
type UnBoxArray<T> = T extends Array<infer Item>  ? Item : T;

// primitive type
type InferredString = UnBoxArray<Boolean []> // Boolean;
type UnBoxStr = UnBoxArray<string>

// object type
type CompanyCondition ='location' | 'salary' | 'domain' | 'average-employee-duration'

type Company = Record<CompanyCondition, 'string' |'number'>
// {location : string | number ....}

type UnBoxedCompanyCondtion = UnBoxArray<Company []>


// ex4)
const createPerson = (firstName:string, lastName:string)=> {
    return {
        firstName,lastName,fullName: `${firstName} ${lastName}`
    }
};

type Person = ReturnType<typeof createPerson>
const logPerson= (person:Person) => {
    console.log(person)
}
