import './TransactionHistory.css';
import TransactionItem from './TransactionItem';

export default function TransactionHistory({ items }) {
  console.log(items);
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <TransactionItem item={item} />
        ))}
      </tbody>
    </table>
  );
}
