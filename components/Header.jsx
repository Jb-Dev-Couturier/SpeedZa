import css from '../styles/Header.module.css';
import Image from 'next/image';
import Logo from '../assets/Logo.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import { usestore } from '../store/store';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header({ home }) {
  const items = usestore((state) => state.cart.pizzas.length);
  const [Order, setOrder] = useState(null);
  useEffect(() => {
    setOrder(localStorage.getItem('order'));
  }, []);
  return (
    <div className={css.header}>
      {/* Logo Side */}
      <div className={css.logo}>
        <Image src={Logo} alt="" width={50} height={50} />
        <span>Speed'ZA</span>
      </div>

      {/* Menu Side */}
      <ul className={css.menu}>
        <Link href="../">
          <li>
             Acceuil
          </li>
        </Link>
        <Link href="../#menu">
          <li>
            
            Menu
          </li>
        </Link>
        <li>
          
          Contact
        </li>
      </ul>

      {/* Cart Side */}
      <div className={css.rightSide}>
        <Link href={'/cart'}>
          <div className={css.cart}>
            <ShoppingCartIcon
              className={css.iconShoping}
              style={{ fontSize: '45px', transition: '0.3s ease-in-out' }}
            />
            {items != '' && <div className={css.badge}>{items}</div>}
          </div>
        </Link>

        {Order && (
          <Link href={`/order/${Order}`}>
            <div className={css.cart}>
              <ReceiptLongIcon
                className={css.iconShoping}
                style={{ fontSize: '45px', transition: '0.3s ease-in-out' }}
              />
              {Order != '' && <div className={css.badge}>1</div>}
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
