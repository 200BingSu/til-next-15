import style from "@/app/(with-search)/search/page.module.css";
import goods from "@/mock/good.json";
// 쿼리 처리하기
// 아래 페이지는 쿼리를 서버에서 읽어들여서 처리함.
// http://localhost:3000/search?keword=iu
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ keyword: string }>;
}) {
  const { keyword } = await searchParams;
  console.log(keyword);
  return (
    <div className={style.container}>
      <h4>{keyword} : 검색페이지</h4>
      <div>
        {goods.map((item) => {
          return <div key={item.id}>{item.title}</div>;
        })}
      </div>
    </div>
  );
}
