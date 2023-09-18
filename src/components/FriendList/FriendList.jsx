import { FriendsCards, FriendsContainer } from "./FriendList.styled";
import FriendsListItem from "../FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <FriendsContainer>
      <FriendsCards>
        {friends.map(({ avatar, name, isOnline, id }) => {
          return (
            <FriendsListItem
              key={id}
              avatar={avatar}
              name={name}
              isOnline={isOnline}
            />
          );
        })}
      </FriendsCards>
    </FriendsContainer>
  );
};

export default FriendList;
