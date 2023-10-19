import { useRouter } from "next/router";
import carsData from "../../data/carsData";
import CarsList from "../../components/templates/CarsList";

const FilteredCars = () => {
  const router = useRouter();
  const [min, max] = router.query.slugs || [];
  const carsFilter = carsData.filter(
    (car) => car.price >= min && car.price <= max
  );

  return (
    <div>
      {!carsFilter.length ? (
        <h1 style={{ textAlign: "center" }}>Not Found</h1>
      ) : (
        <CarsList data={carsFilter} />
      )}
    </div>
  );
};

export default FilteredCars;
