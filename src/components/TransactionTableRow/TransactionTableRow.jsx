import { TransTd, TransTr } from "./TransactionTableRow.styled";

const TransactionTableRow = ({ type, amount, currency }) => {
  return (
    <TransTr>
      <TransTd>{type}</TransTd>
      <TransTd>{amount}</TransTd>
      <TransTd>{currency}</TransTd>
    </TransTr>
  );
};

export default TransactionTableRow;
