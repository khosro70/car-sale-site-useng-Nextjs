import styles from "./Categories.module.css";
import Link from "next/link";
import Sedan from "../../components/icons/Sedan";
import HatchBack from "../../components/icons/HatchBack";
import Sport from "../../components/icons/Sport";
import Suv from "../../components/icons/Suv";

const Categories = () => {
  return (
    <div className={styles.container}>
      <Link href="/categories/sedan">
        <div>
          <p>Sedan</p>
          <Sedan />
        </div>
      </Link>
      <Link href="/categories/hatchback">
        <div>
          <p>HatchBack</p>
          <HatchBack />
        </div>
      </Link>
      <Link href="/categories/sport">
        <div>
          <p>Sport</p>
          <Sport />
        </div>
      </Link>
      <Link href="/categories/suv">
        <div>
          <p>Suv</p>
          <Suv />
        </div>
      </Link>
    </div>
  );
};

export default Categories;
