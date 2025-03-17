/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { revalidatePath, revalidateTag } from "next/cache";

// 액션의 상태도 전달하는 형태로 변경
export async function createReviewAction(_: any, formData: FormData) {
  console.log("Next 서버 액션");
  const id = formData.get("id")?.toString();
  const title = formData.get("title")?.toString();
  const price = formData.get("price")?.toString();
  const description = formData.get("description")?.toString();
  const image = formData.get("image")?.toString();
  const category = formData.get("category")?.toString();

  console.log(
    "Next 서버 액션 전달 변수:",
    id,
    title,
    price,
    description,
    image,
    category
  );
  if (!title || !price || !description || !image || !category) {
    return {
      status: false,
      message: "각 항목을 채워주세요",
    };
  }
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
      method: "POST",
      body: JSON.stringify({ title, price, description, image, category }),
    });
    const { id } = await res.json();
    console.log("상품등록 성공", id);
    // 태그를 이용하는 방법
    revalidateTag(`good-${id}`);
    return {
      status: true,
      messsage: "등록에 성공하였습니다.",
    };
  } catch (error) {
    console.log("error", error);
    return {
      status: false,
      message: `새로운 상품 등록에 실패하였습니다. ${error}`,
    };
  }
}
