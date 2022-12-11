export const array: { name: string; age: number }[] = [
  { name: "Nabin", age: 19 },
  { name: "john", age: 40 },
];
const checkLength: { name: string; age: number }[] = [...array];
console.log(checkLength[checkLength.length - 1]); // {name:"john",age:40}
