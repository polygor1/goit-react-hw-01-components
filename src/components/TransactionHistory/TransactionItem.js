export default function TransactionItem({ id, type, amount, currency }) {
  return (
    <tr className="item">
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}
