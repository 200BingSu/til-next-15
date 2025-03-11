import { ReactNode } from "react";
import SearchBar from "@/components/searchbar";
import ServerTest from "@/components/ServerTest";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <h1>여기는 검색 레이아웃</h1>
      <SearchBar />

      <div>{children}</div>
    </>
  );
}
