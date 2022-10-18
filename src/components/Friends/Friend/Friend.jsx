import css from './Friend.module.css';

export default function Friend({ name, isOnline, avatar }) {
  return (
    <li className={css.item}>
      {isOnline ? (
        <span className={css.statusOnline}>{isOnline}</span>
      ) : (
        <span className={css.statusOffline}>{isOnline}</span>
      )}
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}
