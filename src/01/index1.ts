// 함수시그니처

function pringHello(): void {
  console.log("hello");
}

function add(n1: number, n2: number): number {
  return n1 + n2;
}

// 중복 과일 제거하기
const fruits = ["사과", "딸기", "배", "참외", "딸기", "수박"];
const result = fruits.reduce((arr: string[], cur: string) => {
  if (arr.includes(cur) === false) {
    arr.push(cur);
  }
  return arr;
}, []);
console.log(result);

function findLongString(strings: string[]): string {
  if (!strings.length) return "";
  //reduce의 두 번째 인자는 초기값(initial value) 이에요.
  return strings.reduce((acc, cur) => {
    return cur.length > acc.length ? cur : acc;
  }, strings[0]);
}

//callback function 시그니처
function fetchData(callback: (data: string) => void) {
  callback("some data");
}

fetchData((data: string): void => {
  console.log(data);
});

function processData(data: string, callback: (result: string) => void) {
  const result = data.toUpperCase();
  callback(result);
}

processData("hello", (result: string): void => {
  console.log(result);
});

function fetchsData(
  callback: (error: Error | null, data: string | null) => void,
): void {
  setTimeout(() => {
    // 에러가 없는 경우
    callback(null, "Data fetched successfully");

    // 에러가 있는 경우
    callback(new Error("data fetched failed"), null);
  }, 1000);
}

fetchsData((error: Error | null, data: string | null): void => {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});
