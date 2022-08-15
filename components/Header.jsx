import css from '../styles/Header.module.css';
import Image from 'next/image';
import Logo from '../assets/Logo.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { useStore } from '../store/store';
import Link from 'next/link';

export default function Header() {

  //state in terminal
  const state = useStore((state) => state);


  const items = useStore((state) => state.cart.pizzas.length);
  return (
    <div className={css.header}>
      {/* Logo Side */}
      <div className={css.logo}>
        <Image src={Logo} alt="" width={50} height={50} />
        <span>Speed'ZA</span>
      </div>

      {/* Menu Side */}
      <ul className={css.menu}>
        <li>
          <HomeIcon /> Acceuil
        </li>
        <li>
          <RestaurantMenuIcon />
          Menu
        </li>
        <li>
          <ContactSupportIcon />
          Contact
        </li>
      </ul>

      {/* Cart Side */}
      <div className={css.rightSide}>
        <Link href={'/cart'}>
        <div className={css.cart}>
          <ShoppingCartIcon className={css.iconShop} style={{fontSize:'45px'}}/>
          <div className={css.badge}>{items}</div>
        </div>
        </Link>
      </div>
    </div>
  );
}
