import './App.css';
import Profile from './components/Profile';
import user from './components/user.json';

export default function App() {
  return (
    <div className="App">
      {/* <h1>TEST 1.2.4.5</h1> */}

      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
}
