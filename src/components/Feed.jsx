import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import UserCard from "./UserCard";

// const Feed = () => {
//   const feed = useSelector((store) => store.feed);
//   console.log(feed);
//   const dispatch = useDispatch();

//   const getFeed = async () => {
//     if (feed) return;
//     const res = await axios.get(BASE_URL + "/feed", { withCredentials: true });
//     dispatch(addFeed(res.data));
//   };

//   useEffect(() => {
//     getFeed();
//   }, []);
//   return (
//     <div className="flex justify-center mt-10">
//       <UserCard />
//     </div>
//   );
// };

// export default Feed;

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    // Check if feed is null or empty before fetching
    if (feed && feed.length > 0) return;
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      // NOTE: Looking at your console, the array is inside res.data.data
      dispatch(addFeed(res.data.data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  // 1. Handle Loading State
  if (!feed) return null; // Or a loading spinner

  // 2. Handle Empty Feed
  if (feed.length === 0)
    return <h1 className="flex justify-center my-10">No new users found!</h1>;

  return (
    <div className="flex justify-center mt-8">
      {/* 3. Pass the first user from the array to the card */}
      <UserCard user={feed[1]} />
    </div>
  );
};

export default Feed;
