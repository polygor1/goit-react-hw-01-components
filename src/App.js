import './App.css';
import Profile from './components/Profile';
import user from './components/user.json';
import Statistics from './components/Statistics';
import data from './components/data.json';
import FriendList from './components/FriendList';
import friends from './components/friends.json';
import TransactionHistory from './components/TransactionHistory';
import transactions from './components/transactions.json';

export default function App() {
  return (
    <div className="App">
      <Profile {...user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
