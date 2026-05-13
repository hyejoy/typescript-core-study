// 함수 제네릭함수는 소괄호앞에 <T> 적어주기
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

getFirstElement([1, 2, 3]);
getFirstElement(["a", "b", "c"]);
getFirstElement([true, false, true]);

function identity<T>(arg: T): T {
  return arg;
}

console.log(identity(1));

const identity1 = <T>(arg: T): T => arg;
const identity2: <T>(arg: T) => T = <T>(arg: T): T => arg;
console.log(identity1<number>(1));
console.log(identity2<string>("1"));
