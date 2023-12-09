type Ilsan = {
    name: 'IlSan'
    id: number
}

type Seoul = {
    name: 'Seoul'
    id: number
}

type 이사갈후보지 = Ilsan | Seoul

type ExtractTypeByName<T, G> = T extends {name: G} ? T : never

type ExtractedType = ExtractTypeByName<이사갈후보지, 'IlSan'> // 결과 타입은 Ilsan
// never는 union 타입에서 무시된다.