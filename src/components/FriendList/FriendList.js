import './FriendList.css';
import FriendListItem from './FriendListItem';

export default function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(item => (
        <FriendListItem
          key={item.id}
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
          id={item.id}
        />
      ))}
    </ul>
  );
}
