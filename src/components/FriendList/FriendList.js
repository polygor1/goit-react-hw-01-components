import './FriendList.css';
// import FriendListItem from './FriendListItem';

export default function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(item => (
        <li key={item.id} className="item">
          <span
            className="status"
            style={{ backgroundColor: item.isOnline ? 'green' : 'red' }}
          ></span>
          <img
            className="avatar"
            src={item.avatar}
            alt="User avatar"
            width="48"
          />
          <p className="name">{item.name}</p>
        </li>
      ))}
    </ul>
  );
}
// <FriendListItem
//   avatar={item.avatar}
//   name={item.name}
//   isOnline={item.isOnline}
//   id={item.id}        />
