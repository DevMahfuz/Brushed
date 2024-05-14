import Service from "./Service";
import useSWR from "swr";
import Fetcher from "../../components/Fetcher/Fetcher";
import Loader from "../Loader/Loader";

const WomenService = () => {
  let { data, error, isLoading } = useSWR("./api/service/women", Fetcher);

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return "Fail to fetch data";
  }
  return (
    <>
      <h2>For Women</h2>
      {data.data.map((x, y) => {
        return (
          <div key={y}>
            <h3 style={{ color: "#4a686a", fontSize: "30px" }}>{x.cetagory}</h3>
            <div className="produtcs-container">
              {x.services.map((i, j) => (
                <Service product={i} key={j} />
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default WomenService;
