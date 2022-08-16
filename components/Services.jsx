import css from '../styles/Services.module.css';
import Image from 'next/image';
import Services1 from '../assets/s1.webp';
import Services2 from '../assets/s2.webp';
import Services3 from '../assets/s3.webp';

export default function Services() {
  return (
    <>
      <div className={css.heading}>
        <span>NOS SERVICES</span>
        <span>Votre Plat preferé</span>
        <span>Livraison Offertes</span>
      </div>

      {/* Features */}
      <div className={css.services}>
        <div className={css.feature}>
          {' '}
          <div className={css.imageWrapper}>
            <Image
              src={Services1}
              alt=""
              objectFit="cover"
              layout="intrinsic"
            />
          </div>
          <span>Commande Simplifié</span>
          <span>
            Seulement quelque etape a remplir dans le formulaire de commande
          </span>
        </div>
        <div className={css.feature}>
          {' '}
          <div className={css.imageWrapper}>
            <Image
              src={Services2}
              alt=""
              objectFit="cover"
              layout="intrinsic"
            />
          </div>
          <span>Livraison Offerte</span>
          <span>une livraison toujours à l'heure encore plus rapide</span>
        </div>
        <div className={css.feature}>
          <div className={css.imageWrapper}>
            <Image
              src={Services3}
              alt=""
              objectFit="cover"
              layout="intrinsic"
            />
          </div>

          <span>Controle Qualité</span>
          <span>Pas seulement rapide, attentif a la qualité aussi...</span>
        </div>
      </div>
    </>
  );
}
