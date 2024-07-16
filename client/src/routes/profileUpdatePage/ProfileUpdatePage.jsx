import apiRequest from "../../lib/apiRequest";

import { useContext, useEffect, useState } from "react";
import "./profileUpdatePage.scss";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import UploadWidget from "../../components/uploadWidget/UploadWidget";

const ProfileUpdatePage = () => {
  const { currentUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [avatar, setAvatar] = useState([]);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await apiRequest.put(`user/${currentUser.id}`, {
        username,
        email,
        password,
        avatar: avatar[avatar.length - 1],
      });
      console.log("resssss", res);
      updateUser({
        ...currentUser,
        avatar: avatar[avatar.length - 1],
        username,
        email,
      });

      navigate("/profile");

      console.log(res);
    } catch (e) {
      // setError(e.data.message);
      setError(e.response.data.message);
      console.log("errrrrrr", e.response.data.message);
    }
  }

  return (
    <div className="profileUpdatePage">
      <div className="left">
        <form onSubmit={handleSubmit}>
          <h1>Update Profile</h1>
          <div>
            <p>Username</p>
            <input
              type="text"
              defaultValue={currentUser.username}
              name="username"
            />
          </div>
          <div>
            <p>Email</p>
            <input type="email" defaultValue={currentUser.email} name="email" />
          </div>
          <div>
            <p>Password</p>
            <input type="password" name="password" />
          </div>
          <div>
            <button>Update</button>
          </div>
          {error && <span>{error}</span>}
        </form>
      </div>
      <div className="right">
        <img
          src={
            currentUser.avatar ||
            avatar[avatar.length - 1] ||
            "https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"
          }
          alt=""
        />
        <UploadWidget
          uwConfig={{
            cloudName: "rajkunwar",
            uploadPreset: "estateease",
            multiple: false,

            folder: "avatars",
          }}
          setState={setAvatar}
        />
      </div>
    </div>
  );
};

export default ProfileUpdatePage;
