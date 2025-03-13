"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  return (
    <div>
      <h3>에러가 발생하였습니다.</h3>
      <p>{error.message}</p>
      <button
        type="button"
        onClick={() =>
          startTransition(() => {
            router.refresh(); // 서버 컴포넌트 다시 실행을 요청
            reset(); // 컴포넌트 새로고침
          })
        }
      >
        다시 시도
      </button>
    </div>
  );
}
