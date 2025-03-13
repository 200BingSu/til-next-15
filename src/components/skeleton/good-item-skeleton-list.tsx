import React from "react";
import GoodItemSkeleton from "./goot-item-skeleton";

export default function GoodItemSkeletonList({ count }: { count: number }) {
  const arr: number[] = new Array(count).fill(0); // [0,0,0, ...]
  return (
    <>
      {arr.map((_, index) => {
        return <GoodItemSkeleton key={index} />;
      })}
    </>
  );
}
