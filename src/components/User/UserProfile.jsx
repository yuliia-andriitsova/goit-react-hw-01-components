import PropTypes from 'prop-types';
import defaultImage from './default.png';
import css from './UserProfile.module.css';

export default function UserProfile({
  avatar = defaultImage,
  username,
  tag,
  location,
  followers,
  views,
  // quantity,
  likes,
}) {
  return (
    <div>
      <div className={css.profile}>
        <p className={css.p}> 1 - Профіль соцмережі</p>
        <div className={css.description}>
          <img src={avatar} alt={username} className={css.avatar} />
          <p className={css.name}>{username}</p>
          <p className={css.tag}>@{tag}</p>
          <p className={css.location}>{location}</p>
        </div>

        <ul className={css.stats}>
          <li className={css.item}>
            <span className="label">Followers </span>
            <span className={css.quantity}>{followers}</span>
          </li>
          <li className={css.item}>
            <span className="label">Views </span>
            <span className={css.quantity}>{views}</span>
          </li>
          <li className={css.item}>
            <span className="label">Likes </span>
            <span className={css.quantity}>{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

UserProfile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  // quantity: PropTypes.number,
  likes: PropTypes.number,
};
