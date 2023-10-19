import { useRouter } from "next/router";
import Card from "../modules/Card";

import Back from "../icons/Back";
import styles from "./CarsList.module.css";

const CarsList = ({ data }) => {
  const router = useRouter();
  const backHandler = () => {
    router.back();
  };
  return (
    <div className={styles.container} onClick={backHandler}>
      <div className={styles.back}>
        <Back />
        <p>back</p>
      </div>
      <div className={styles.cards}>
        {data.map((car) => (
          <Card key={car.id} {...car} />
        ))}
      </div>
    </div>
  );
};

export default CarsList;
