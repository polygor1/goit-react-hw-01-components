import styles from './TransactionHistory.module.css';

export default function TransactionItem({ type, amount, currency }) {
  return (
    <tr className={styles.item}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}
