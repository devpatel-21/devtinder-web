const UserCard = ({ user }) => {
  const { firstname, lastname, about, age, skills, gender, photoUrl } = user;
  console.log(skills);
  //   console.log(user);
  return (
    <div className="card bg-base-300 w-96 shadow-sm">
      <figure>
        <img
          src={user.photoUrl}
          alt="Shoes"
          className=" h-64 w-full object-contain"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstname + " " + lastname}</h2>
        <p>{age + " , " + gender}</p>
        <p>{about}</p>
        <div className="card-actions flex justify-end mt-4">
          {/* <button className="btn bg-blue-900 hover:bg-blue-600 btn-secondary px-8 py-3 text-lg "> */}
          <button className="btn btn-secondary bg-pink-600 hover:bg-pink-900 px-8 py-3 text-lg ">
            Intrested
          </button>
          <button className="btn bg-blue-600 hover:bg-blue-900 btn-primary px-8 py-3 text-lg ">
            Ignore
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
