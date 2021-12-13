import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { login, logout } from "../features/user";

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const [userState, setUserState] = useState("");

  const onClickHandler = (userState) => {
    if (user) {
      dispatch(logout(userState));
    } else {
      dispatch(login(userState));
    }
  };

  return (
    <div>
      <input
        type="text"
        value={userState}
        onChange={(e) => setUserState(e.target.value)}
      ></input>

      <button onClick={() => onClickHandler(userState)}>
        {user ? "logout" : "login"}
      </button>

      <p>{user ? `username: ${user}` : "not logged in"}</p>
    </div>
  );
};

export default Home;
