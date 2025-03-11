"use client";
import { useRouter } from "next/navigation";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import styles from "@/components/searchbar.module.css";

const SearchBar = () => {
  console.log("클라이언트 컴포넌트");
  const [search, setSearch] = useState("");
  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  // 동적 라우팅
  const router = useRouter(); // next-15는 next/navigation으로 import 해야함
  const handleSearch = () => {
    if (search) {
      return;
    }
    router.push(`/search?keyword=${search}`);
  };
  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className={styles.continer}>
      <input
        type="text"
        value={search}
        onChange={(e) => onChangeSearch(e)}
        onKeyDown={(e) => {
          onKeyDown(e);
        }}
      />
      <button type="button" onClick={handleSearch}>
        검색
      </button>
    </div>
  );
};

export default SearchBar;
