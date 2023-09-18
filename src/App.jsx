import "./App.css";
import Profile from "./components/Profile/Profile";
import user from "./assets/user.json";
import Statistics from "./components/Statistics/Statistics";
import data from "./assets/data.json";
import FriendList from "./components/FriendList/FriendList";
import friends from "./assets/friends.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./assets/transactions.json";

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
      {/* <Statistics stats={data} /> */}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
