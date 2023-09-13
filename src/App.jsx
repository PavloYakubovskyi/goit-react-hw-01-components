import user from "./assets/user.json";
import "./App.css";
import Profile from "./components/Profile/Profile";
import data from "./assets/data.json";
import Statistics from "./components/Statistics/Statistics";

function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </>
  );
}

export default App;
