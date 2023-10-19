import AllButton from "../components/modules/AllButton";
import Categories from "../components/modules/Categories";
import SearchBar from "../components/modules/SearchBar";
import CarsPage from "../components/templates/CarsPage";
import carsData from "../data/carsData";

function Index() {
  const cars = carsData.slice(0, 3);

  return (
    <div>
      <SearchBar />
      <Categories />
      <AllButton />
      <CarsPage data={cars} />
    </div>
  );
}

export default Index;
