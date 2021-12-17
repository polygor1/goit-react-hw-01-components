export default function TransactionItem({ item }) {
  const { id, type, amount, currency } = item;

  return (
    <tr key={id} className="item">
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}
