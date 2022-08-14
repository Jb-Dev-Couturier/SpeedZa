import css from '../styles/Footer.module.css';
import Image from 'next/image';
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Logo from '../assets/Logo.png';

export default function Footer() {
  return (
    <div className={css.container}>
      <span>TOUT DROITS RESERVER</span>
      <div className={css.social}>
        <AndroidIcon className={css.iconSocial} />
        <AppleIcon className={css.iconSocial} />
        <FacebookIcon className={css.iconSocial} />
        <InstagramIcon className={css.iconSocial} />
      </div>

        {/* Logo Side */}
        <div className={css.logo}>
          <Image src={Logo} alt="" width={50} height={50}/>
          <span>Speed'ZA</span>
        </div>
    </div>
  );
}
