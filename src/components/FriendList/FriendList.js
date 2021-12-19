import styles from './FriendList.module.css';

import FriendListItem from './FriendListItem';

export default function FriendList({ props }) {
  return (
    <ul className={styles.container}>
      {props.map(item => (
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
