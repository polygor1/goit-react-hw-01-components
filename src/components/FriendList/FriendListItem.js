export default function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <li className="item">
      <span
        className="status"
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      ></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}
