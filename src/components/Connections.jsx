import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addConnection } from "../utils/connectionsSlice";
import { useSelector } from "react-redux";
const Connections = () => {
  const connections = useSelector((store) => store.connections);
  const dispatch = useDispatch();
  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnection(res.data.data));
      console.log(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) {
    return;
  }

  if (connections.length === 0) {
    return <h1 className="text-bold text-2xl">No connections found</h1>;
  }
  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-white text-5xl">Connections</h1>
      {/* {connections.map((connection) => {
        <div>{connection.firstname}</div>;
      })} */}
      {connections.map((connection) => {
        const { firstname, lastname, age, gender, about, photoUrl } =
          connection;
        return (
          <div className="flex m-4 p-4  rounded-lg bg-base-300 w-1/2 mx-auto">
            <div>
              <img
                alt="photo"
                className="w-20 h-20 rounded-full"
                src={photoUrl}
              />
            </div>
            <div className="text-left mx-4">
              <h2 className="font-bold text-xl">
                {firstname + " " + lastname}
              </h2>
              {age && gender && <p>{age + ", " + gender}</p>}
              <p>{about}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
