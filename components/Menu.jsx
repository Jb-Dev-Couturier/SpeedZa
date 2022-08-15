import Image from 'next/image';
import { urlFor } from '../lib/client';
import css from '../styles/Menu.module.css';
import Link from 'next/link';

export default function Menu({ pizzas }) {

  return (
    <div className={css.container}>
      <div className={css.heading}>
        <span>NOTRE MENU</span>
        <span>Un menu toujours la</span>
        <span>Pour satisfaire votre gourmandise</span>
      </div>

      <div className={css.menu}>
        {/* Pizzas */}
        {pizzas.map((pizza, id) => {
          const src = urlFor(pizza.image).url();
          return (
            <div className={css.pizza} key={id}>

              <Link href={`./pizza/${pizza.slug.current}`}>
                <div className={css.ImageWrapper}>
                  <Image
                    loader={() => src}
                    src={src}
                    alt=""
                    objectFit="cover"
                    layout="fill"
                    unoptimized
                  />
                </div>
              </Link>

              <span>{pizza.name}</span>
              <span>
                {pizza.price[1]} <span style={{ color: 'red' }}>€</span>{' '}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
