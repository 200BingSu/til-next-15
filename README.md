# error

- Next.js에서 에러를 담당하는 error.tsx가 있음
- /src/app/(with-search)/error.tsx 생성

## 주의사항

- 반드시 서버 뿐 아니라 클라이언트도 처리해주도록 지시해야한다.
- `use client`

```tsx
"use client";
export default function Error() {
  return (
    <div>
      <h3>에러가 발생하였습니다.</h3>
    </div>
  );
}
```

## 에러에 메세지를 출력하는 경우

- 자동으로 `props`로 정보를 전달해줌.

```tsx
"use client";
export default function Error({ error }: { error: Error }) {
  return (
    <div>
      <h3>{error.message} 에러가 발생하였습니다.</h3>
    </div>
  );
}
```

## 에러시 다시 실행하도록 함수를 props로 전달

- reset보다는 `웹브라우저 새로고침을 권장`
- reset 함수: 컴포넌트 리랜더링을 시도

```tsx
"use client";
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h3>{error.message} 에러가 발생하였습니다.</h3>
      <button type="button" onClick={() => reset()}>
        다시 시도
      </button>
    </div>
  );
}
```

## 에러시 웹브라우저 새로고침 적용한다면,

```tsx
"use client";
export default function Error({ error }: { error: Error; reset: () => void }) {
  return (
    <div>
      <h3>{error.message} 에러가 발생하였습니다.</h3>
      <button type="button" onClick={() => window.location.reload()}>
        다시 시도
      </button>
    </div>
  );
}
```

## 새로고침 없이 next에서 제공하는 기능 활용하기

- Next 서버에 다시 자료 호출
- 컴포넌트의 리랜더링까지 같이 진행
