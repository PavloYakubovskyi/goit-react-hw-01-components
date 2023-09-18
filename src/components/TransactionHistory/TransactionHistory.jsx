import TransactionTableRow from "../TransactionTableRow/TransactionTableRow";
import {
  TransContainer,
  TransTable,
  TransTbody,
  TransTh,
  TransThead,
  TransTr,
} from "./TransactionHistory.styled";

export const TransactionHistory = ({ items }) => {
  return (
    <TransContainer>
      <TransTable>
        <TransThead>
          <TransTr>
            <TransTh>Type</TransTh>
            <TransTh>Amount</TransTh>
            <TransTh>Currency</TransTh>
          </TransTr>
        </TransThead>

        <TransTbody>
          {items.map(({ id, type, amount, currency }) => {
            return (
              <TransactionTableRow
                key={id}
                type={type}
                amount={amount}
                currency={currency}
              />
            );
          })}
        </TransTbody>
      </TransTable>
    </TransContainer>
  );
};

export default TransactionHistory;
