import s from './UserMenu.module.css';

export default function UserMenu() {
  return (
    <div className={s.userMenu}>
      <p className={s.email}>taras@gmail.com</p>
      <button type="button">Logout</button>
    </div>
  );
}
