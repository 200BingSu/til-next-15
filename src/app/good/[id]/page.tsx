import { GoodDataType } from "@/types/good-type";
import style from "@/app/good/[id]/page.module.css";
import Image from "next/image";
import { url } from "inspector";

const mockData: GoodDataType = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: { rate: 3.9, count: 120 },
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log(id);
  const { title, category, description, image, rating } = mockData;

  return (
    <div className={style.container}>
      <h2 className={style.title}>title</h2>
      <div style={{ backgroundImage: `url(${image})` }}>
        <Image src={image} alt={title} width={245} height={350} />
      </div>
      <div className={style.category}>{category}</div>
      <div className={style.rating}>
        Rating: {rating.rate} | {rating.count}
      </div>
      <div className={style.description}>{description}</div>
    </div>
  );
}
