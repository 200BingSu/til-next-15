import style from "@/app/(with-search)/page.module.css";
import { AllGoods } from "@/components/all-goods";
import { RandomGoods } from "@/components/random-goods";
import GoodItemSkeletonList from "@/components/skeleton/good-item-skeleton-list";
import { Metadata } from "next";
import { Suspense } from "react";

export const dynamic = "force-dynamic";
// SEO 적용
export const metaData: Metadata = {
  title: "상품 홍보 페이지",
  description: "상품 홍보 페이지입니다.",
  openGraph: {
    title: "상품 홍보 페이지",
    description: "상품 홍보 페이지입니다.",
    images: [{ url: "/thumbnail.png" }],
  },
};

export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 상품</h3>
        <Suspense fallback={<GoodItemSkeletonList count={5} />}>
          <RandomGoods />
        </Suspense>
      </section>
      <section>
        <h3>전체 상품</h3>
        <AllGoods />
      </section>
    </div>
  );
}
