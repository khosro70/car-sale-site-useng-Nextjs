import CarsDetail from "../../components/templates/CarsDetail";
import { useRouter } from "next/router";
import carsData from "../../data/carsData";

const CarDetail = () => {
  const router = useRouter();
  const { carId } = router.query;
  const carDetail = carsData[carId - 1];

  return <CarsDetail {...carDetail} />;
};

export default CarDetail;
