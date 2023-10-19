import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./SearchBar.module.css";
import { use, useState } from "react";

const SearchBar = () => {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const router = useRouter();

  const searchHandler = () => {
    if (min && max) {
      router.push(`/filter/${min}/${max}`);
    } else {
      alert("please enter min and max price!");
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <input
          value={min}
          onChange={(e) => setMin(e.target.value)}
          placeholder="Enter min-price"
        />
        <input
          value={max}
          onChange={(e) => setMax(e.target.value)}
          placeholder="Enter max-price"
        />
      </div>
      <button onClick={searchHandler}>Search</button>
    </div>
  );
};

export default SearchBar;
