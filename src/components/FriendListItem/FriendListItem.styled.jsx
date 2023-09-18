import styled from "@emotion/styled";

export const FriendsItem = styled.li`
  background-color: #fff;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  width: 150px;
`;

export const FriendsStatus = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.isOnline ? "lime" : "tomato")};
`;

export const FriendsText = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: black;
`;
