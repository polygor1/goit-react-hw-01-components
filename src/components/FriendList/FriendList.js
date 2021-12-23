import styles from './FriendList.module.css';

import PropTypes from 'prop-types';
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
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
