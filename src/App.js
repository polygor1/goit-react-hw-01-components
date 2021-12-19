import './App.css';
import Profile from './components/Profile';
import user from './components/Profile/user.json';
import Statistics from './components/Statistics';
import data from './components/Statistics/data.json';
import FriendList from './components/FriendList';
import friends from './components/FriendList/friends.json';
import TransactionHistory from './components/TransactionHistory';
import transactions from './components/TransactionHistory/transactions.json';

export default function App() {
  return (
    <div className="App">
      <Profile {...user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList props={friends} />
      <TransactionHistory props={transactions} />
    </div>
  );
}
