import { useDispatch, useSelector } from "react-redux";
import { authSelectors, authOperations } from "redux/auth";
import s from "./UserMenu.module.css";
import avatar from "./default-avatar.png";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className={s.container}>
      <img src={avatar} alt='' width='32' className={s.avatar} />
      <span className={s.name}>Welcome, {name}</span>
      <button
        type='button'
        className={s.button}
        onClick={() => dispatch(authOperations.logOut())}
      >
        Logout
      </button>
    </div>
  );
}
