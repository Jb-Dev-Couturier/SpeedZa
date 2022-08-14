import css from '../styles/Hero.module.css';
import Image from 'next/image';
import Cherry from '../assets/speed.png';
import HeroImage from '../assets/HeroImage.webp';
import PizzaImage from '../assets/p1.webp';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

export default function Hero() {
  return (
    <div className={css.container}>
      {/* Left Side */}
      <div className={css.leftSide}>
        <div className={css.cherryDiv}>
          <span>Plus que rapide...</span>
          <Image src={Cherry} alt="" width={35} height={40} />
        </div>
        <div className={css.heroText}>
          <span>Etre Le Plus Rapide</span>
          <span>Pour La Livraison de</span>
          <span>
            Votre <span className={css.PizzaText}>Pizza</span>{' '}
          </span>
        </div>
        <span className={css.miniText}>
          Notre mission est de remplir votre ventre avec de la nourriture
          délicieuse et avec une livraison rapide et gratuite
        </span>

        <button className={`btn ${css.btn}`}>Commander</button>
      </div>

      {/* Right Side */}

      <div className={css.rightSide}>
        <div className={css.imageContainer}>
          <Image src={HeroImage} alt="" layout="intrinsic" />
        </div>

        <div className={css.ContactUs}>
          <span>Contacter Nous</span>
          <div className={css.iconPhone}>
            <PhoneInTalkIcon className={css.vibrate} />
          </div>
        </div>
        <div className={css.Pizza}>
          <div className="">
            <Image
              src={PizzaImage}
              alt=""
              objectFit="cover"
              layout="intrinsic"
            />
          </div>
          <div className={css.details}>
            <span>Pizza Reine</span>
            <span>
              7.49 <span style={{color:"red"}}>€</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
