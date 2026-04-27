import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addRequest } from "../utils/requestSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Requests = () => {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();
  const fetchRequest = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addRequest(res.data.data));
      console.log(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchRequest();
  }, []);

  if (!requests) {
    return;
  }

  if (requests.length === 0) {
    return <h1 className="text-bold text-2xl">No Requests found</h1>;
  }
  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-white text-5xl">Requests</h1>
      {/* {connections.map((connection) => {
        <div>{connection.firstname}</div>;
      })} */}
      {requests.map((request) => {
        const { _id, firstname, lastname, age, gender, about, photoUrl } =
          request.fromUserId;
        return (
          <div
            key={_id}
            className="flex  justify-between items-center m-4 p-4  rounded-lg bg-base-300 w-2/3 mx-auto"
          >
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
            <div>
              <button className="btn bg-blue-600 hover:bg-blue-900 btn-primary px-8 py-3 text-lg mx-2">
                Reject
              </button>
              <button className="btn btn-secondary bg-pink-600 hover:bg-pink-900 px-8 py-3 text-lg mx-2 ">
                Accept
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
