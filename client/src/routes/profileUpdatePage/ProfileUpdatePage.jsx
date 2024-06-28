import { useContext } from "react";
import "./profileUpdatePage.scss";
import { AuthContext } from "../../context/AuthContext";

const ProfileUpdatePage = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="profileUpdatePage">
      <div className="left">
        <form action="">
          <h1>Update Profile</h1>
          <div>
            <p>Username</p>
            <input type="text" defaultValue={currentUser.username} />
          </div>
          <div>
            <p>Email</p>
            <input type="text" defaultValue={currentUser.email} />
          </div>
          <div>
            <p>Password</p>
            <input type="text" />
          </div>
          <div>
            <button>Update</button>
          </div>
        </form>
      </div>
      <div className="right">
        <img
          src={
            currentUser.avatar ||
            "https://avatars.githubusercontent.com/u/123080253?v=4"
          }
          alt=""
        />
      </div>
    </div>
  );
};

export default ProfileUpdatePage;
