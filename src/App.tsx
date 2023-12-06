import { useState } from "react";
import Header from "./components/Header";
import { UserLogin } from "./components/UserLogin";
import { ChatCard } from "./components/ChatCard";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import "./styles/App.css";
import { v4 as uid } from "uuid";
import { addUser } from "./store/usersSlice";
import { IUser } from "Users";

const App = () => {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const handleLogin = (name: string) => {
    if (name.trim() !== "") {
      const user = users.find((user) => user.name === name);
      let requestedUser: IUser = { name };

      if (user) {
        requestedUser.id = user.id;
      } else {
        requestedUser.id = uid();
        dispatch(addUser(requestedUser));
      }
      setUser(requestedUser);
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        {isLoggedIn ? (
          <ChatCard user={user} />
        ) : (
          <UserLogin handleLogin={handleLogin} />
        )}
      </div>
    </div>
  );
};

export default App;
