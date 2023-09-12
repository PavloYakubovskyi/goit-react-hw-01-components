import {
  CardDescription,
  CardStats,
  CardStatsItem,
  CardText,
  CardThum,
  CardTitle,
  ProfileCadr,
  ProfileContainer,
  StatsItemQuantity,
} from "./Profile.styled";

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileContainer>
      <ProfileCadr>
        <CardDescription>
          <CardThum>
            <img src={avatar} alt={username} />
          </CardThum>
          <CardTitle>{username}</CardTitle>
          <CardText>@{tag}</CardText>
          <CardText>{location}</CardText>
        </CardDescription>

        <CardStats>
          <CardStatsItem>
            <CardText>Followers</CardText>
            <StatsItemQuantity>{followers}</StatsItemQuantity>
          </CardStatsItem>
          <CardStatsItem>
            <CardText>Views</CardText>
            <StatsItemQuantity>{views}</StatsItemQuantity>
          </CardStatsItem>
          <CardStatsItem>
            <CardText>Likes</CardText>
            <StatsItemQuantity>{likes}</StatsItemQuantity>
          </CardStatsItem>
        </CardStats>
      </ProfileCadr>
    </ProfileContainer>
  );
};

export default Profile;
