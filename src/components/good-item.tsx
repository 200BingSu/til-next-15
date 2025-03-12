import { GoodDataType } from "@/types/types/good-type";
import Image from "next/image";
import Link from "next/link";
import styles from "@/components/good-item.module.css";

const GoodItem = ({ title, image, category, rating, id }: GoodDataType) => {
  return (
    <Link href={`/good/${id}`} className={styles.container}>
      <Image src={image} alt={title} width={80} height={115} />
      <div>
        <div className={styles.title}>{title}</div>
        <div className={styles.category}>{category}</div>
        <div className={styles.rating}>
          Rating: {rating.rate} | {rating.count}
        </div>
      </div>
    </Link>
  );
};

export default GoodItem;
