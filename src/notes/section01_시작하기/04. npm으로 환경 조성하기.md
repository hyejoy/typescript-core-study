# npm으로 환경 조성하기

## TypeScript 실행 환경 만들기

TypeScript 파일은 일반적인 방법으로는 바로 실행할 수 없습니다.
실행 환경을 만드는 방법은 두 가지입니다.

1. **Node.js 패키지 설치** → 컴파일 방식
2. **Code Runner 익스텐션** → VSCode에서 바로 실행

---

## 패키지 설치 순서

### 1. Node.js 패키지 초기화

```bash
npm init -y
```

- `-y` 플래그: 초기화 과정의 모든 질문에 기본값으로 자동 응답
- 실행 후 `package.json` 파일 자동 생성

### 2. TypeScript 패키지 설치

```bash
npm install typescript --save-dev
```

- `--save-dev`: 개발 의존성으로 설치
- 설치 후 `package.json`의 `devDependencies`에 TypeScript 추가됨

### 3. TypeScript 파일 컴파일

```bash
npx tsc src/index.ts
```

- TypeScript 파일(.ts)을 JavaScript 파일(.js)로 변환
- 컴파일 성공 시 `index.js` 파일 생성

---

## 주의사항

- 컴파일된 `.js` 파일을 보면 `var` 키워드 등 구버전 문법으로 변환됨
- 컴파일 결과를 제어하려면 `tsconfig.json` 설정 필요 (다음 강의)

---

## 용어 정리

| 용어            | 설명                                       |
| --------------- | ------------------------------------------ |
| 컴파일          | TypeScript → JavaScript 변환 과정          |
| 컴파일러        | 컴파일을 수행하는 도구 (TypeScript 패키지) |
| devDependencies | 개발 환경에서만 필요한 패키지              |
