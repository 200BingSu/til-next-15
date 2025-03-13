import style from "@/app/(with-search)/search/page.module.css";
import GoodItem from "@/components/good-item";
import { GoodDataType } from "@/types/types/good-type";
import { Suspense } from "react";

async function SearchResult({ keyword }: { keyword: string }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/category/${keyword}`
  );
  const goods: GoodDataType[] = await res.json();
  if (goods.length === 0) {
    return <div>{keyword} 카테고리에 해당하는 제품이 없습니다.</div>;
  }
  return (
    <div>
      {goods.map((good) => (
        <GoodItem key={good.id} {...good} />
      ))}
    </div>
  );
}

// 강제로 Dynamic으로 변경하는 방안
export const dynamic = "force-dynamic";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ keyword: string }>;
}) {
  const { keyword } = await searchParams;

  return (
    <div className={style.container}>
      <h4>
        카테고리명 : <strong>{keyword}</strong> 검색페이지
      </h4>
      <Suspense
        fallback={
          <div>
            <strong>{keyword}</strong> 검색 결과 로딩중..
          </div>
        }
      ></Suspense>
      <SearchResult keyword={keyword} />
    </div>
  );
}
