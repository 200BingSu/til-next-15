import SearchBar from "@/components/searchbar";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <h1>여기는 검색 레이아웃</h1>
      <SearchBar />

      <div>{children}</div>
    </>
  );
}
