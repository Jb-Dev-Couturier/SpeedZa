import css from '../styles/Header.module.css'
import Image from 'next/image'
import Logo from '../assets/Logo.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

export default function Header(){
    return (
      <div className={css.header}>
        {/* Logo Side */}
        <div className={css.logo}>
          <Image src={Logo} alt="" width={50} height={50} />
          <span>Speed'ZA</span>
        </div>

        {/* Menu Side */}
        <ul className={css.menu}>
          <li><HomeIcon/> Acceuil </li>
          <li> <RestaurantMenuIcon/>Menu</li>
          <li><ContactSupportIcon/>Contact</li>
        </ul>

        {/* Cart Side */}
        <div className={css.rightside}>
          <div className={css.cart}>
            <ShoppingCartIcon className={css.iconShop}/>
            <div className={css.badge}>1</div>
          </div>
        </div>
      </div>
    );
}