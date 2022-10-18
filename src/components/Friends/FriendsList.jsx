import PropTypes from 'prop-types';
import css from './FriendsList.module.css';
import Friend from './Friend/Friend';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      <p className={css.p}> 3 - Список друзів</p>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <Friend key={id} isOnline={isOnline} avatar={avatar} name={name} />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
