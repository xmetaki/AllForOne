
type getHeight<T> = T extends { height: infer H, xheight: infer H, name: string } ? (t:T) => H : never 

type StringHeight = {
  height: string,
  xheight: number,
  name: string
}

type NumberHeight = {
  height: number,
  xheight: string,
  name: string
}

let getStringHeight:getHeight<StringHeight> = (t) => {
  return t.height
}

// infer 位于对象位置 执行协变规则 即 t的类型推导结果为 number | string
let getNumberHeight:getHeight<NumberHeight> = (t) => {
  return 1
  return ''
}


// 逆变测试
type contravariantTest<T> = T extends {char: (a:infer M, b:infer M) => infer M} ? () => M : never

type test1 = contravariantTest<{char:(a:number, b:string) => never}>

let test1Instance:test1 = () => {
  throw new Error()
}

// infer类型数组
type GetLabelTypeFromObject<T> = T extends { a: (...args :infer R) => void } ? R[0] : never 