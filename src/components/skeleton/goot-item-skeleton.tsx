import style from "@/components/skeleton/goot-item-skeleton.module.css";

import React from "react";

export default function GoodItemSkeleton() {
  return (
    <div className={style.container}>
      <div className={style.image}></div>
      <div className={style.box}>
        <div className={style.title}></div>
        <div className={style.category}></div>
        <div className={style.rating}></div>
      </div>
    </div>
  );
}
