import Filter from "../../components/filter/Filter";
import { listData } from "../../lib/dummyData";
import "./listPage.scss";
import Card from "../../components/card/Card";
import Map from "../../components/map/Map";
import { listPageLoader } from "../../lib/loaders";
import { useLoaderData } from "react-router-dom";

const ListPage = () => {
  // const data = listData;

  const data = useLoaderData();

  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={data} />
      </div>
    </div>
  );
};

export default ListPage;
