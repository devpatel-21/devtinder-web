import { useState } from "react";
import axios from "axios";
import UserCard from "./UserCard";
// import axios from "axios";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const EditProfile = ({ user }) => {
  console.log(user.gender);
  const [firstname, setFirstName] = useState(user.firstname);
  const [lastname, setLastName] = useState(user.lastname);
  const [about, setAbout] = useState(user.about);
  const [age, setAge] = useState(user.age);
  const [skills, setSkills] = useState(user.skills);
  const [gender, setGender] = useState(user.gender);
  const [photoUrl, setPhoto] = useState(user.photoUrl);
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);

  const dispatch = useDispatch();

  const SaveProfile = async () => {
    try {
      setError("");
      const res = await axios.patch(
        BASE_URL + "/Profile/edit",
        { firstname, lastname, about, age, skills, gender, photoUrl },
        { withCredentials: true },
      );

      dispatch(addUser(res?.data?.data));
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
      }, 5000);
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };

  return (
    <>
      <div className="flex justify-center my-10">
        <div className="flex justify-center mx-10">
          <div className="card bg-base-300 w-96 shadow-sm">
            <div className="card-body">
              <h2 className="card-title justify-center text-2xl font-bold">
                Edit Profile
              </h2>
              <div className="flex flex-col gap-3">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">First Name</span>
                  </div>
                  <input
                    type="text"
                    value={firstname}
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </label>

                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Last Name</span>
                  </div>
                  <input
                    type="text"
                    value={lastname}
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </label>

                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Age</span>
                  </div>
                  <input
                    type="text"
                    value={age}
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => setAge(e.target.value)}
                  />
                </label>

                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Gender</span>
                  </div>
                  <input
                    type="text"
                    value={gender}
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => setGender(e.target.value)}
                  />
                </label>

                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Photo URL</span>
                  </div>
                  <input
                    type="text"
                    value={photoUrl}
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => setPhoto(e.target.value)}
                  />
                </label>

                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">About</span>
                  </div>
                  <input
                    type="text"
                    value={about}
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => setAbout(e.target.value)}
                  />
                </label>
              </div>
              {/* <p className="text-red-500 justify-center items-center">{error}</p> */}
              <div className="card-actions justify-end pt-4">
                <button
                  className="btn bg-blue-600 hover:bg-blue-900 btn-primary px-8 py-3 text-lg"
                  onClick={SaveProfile}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>

        <UserCard
          user={{ firstname, lastname, about, age, skills, gender, photoUrl }}
        />
      </div>
      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile save successfully.</span>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfile;
