import {
  FriendsItem,
  FriendsStatus,
  FriendsText,
} from "./FriendListItem.styled";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsItem>
      <FriendsStatus isOnline={isOnline}></FriendsStatus>
      <img src={avatar} alt="User avatar" width="48" />
      <FriendsText>{name}</FriendsText>
    </FriendsItem>
  );
};

export default FriendListItem;
