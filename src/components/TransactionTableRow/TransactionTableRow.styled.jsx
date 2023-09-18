import styled from "@emotion/styled";

export const TransTr = styled.tr`
  :nth-of-type(2n) {
    background-color: #ecf1f3;
  }
  :nth-of-type(2n + 1) {
    background-color: #fff;
  }
`;
export const TransTd = styled.td`
  padding: 10px 60px;
  border: 1px solid #e3e3e3;
  text-align: center;
  text-transform: capitalize;
  color: #7c7f82;
`;
