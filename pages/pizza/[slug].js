import Image from 'next/image';
import Layout from '../../components/Layout';
import { client, urlFor } from '../../lib/client';
import css from '../../styles/Pizza.module.css';
import LeftArrow from '../../assets/arrowLeft.png';
import RightArrow from '../../assets/arrowRight.png';
import { useState } from 'react';
import { usestore } from '../../store/store';
import toast, {Toaster} from 'react-hot-toast'

export default function Pizza({ pizza }) {
  const [Quantity, setQuantity] = useState(1);
  const [Size, setSize] = useState(1);
  const src = urlFor(pizza.image)?.url();
  
  //Handle Quantity function
  
  const handleQuan = (type) => {
    type === 'inc'
    ? setQuantity((prev) => prev + 1)
    : Quantity === 1
    ? null
    : setQuantity((prev) => prev - 1);
  };
  
  //add to cart function
  const addPizza = usestore((state)=>state.addPizza)
  const addToCart = () =>{
    addPizza({...pizza, price:pizza.price[Size], quantity: Quantity, size:Size})
    console.log('Pizza Ajouter aux store')
    toast.success(`${pizza.name} a été ajouter au panier`);
  }
  
  return (
    <Layout>
      {/* Left Side */}
      <div className={css.container}>
        <div className={css.ImageWrapper}>
          <Image
            loader={() => src}
            src={src}
            alt=""
            layout="fill"
            unoptimized
            objectFit="cover"
          />
        </div>
        {/* Right Side */}
        <div className={css.right}>
          <span># {pizza.name}</span>
          <span>{pizza.description}</span>
          <span>
            <span className={css.ingredientText}>Ingredients</span> :{' '}
            {pizza.details}
          </span>

          <span>
            {pizza.price[Size]} <span style={{ color: 'red' }}>€</span>{' '}
          </span>
          <div className={css.size}>
            <span>Taille</span>
            <div className={css.sizeVariants}>
              <div
                onClick={() => setSize(0)}
                className={Size === 0 ? css.selected : ''}
              >
                Normal
              </div>
              <div
                onClick={() => setSize(1)}
                className={Size === 1 ? css.selected : ''}
              >
                Grande
              </div>
              <div
                onClick={() => setSize(2)}
                className={Size === 2 ? css.selected : ''}
              >
                Extra
              </div>
            </div>
          </div>
          {/* quantity pizza */}
          <div className={css.quantity}>
            <span>Quantité</span>

            <div className={css.counter}>
              <Image
                src={LeftArrow}
                alt=""
                height={30}
                width={30}
                objectFit="contain"
                onClick={() => handleQuan('dec')}
              />
              <span>{Quantity}</span>
              <Image
                src={RightArrow}
                alt=""
                height={30}
                width={30}
                objectFit="contain"
                onClick={() => handleQuan('inc')}
              />
            </div>
          </div>

          {/* button */}
          <div className={`btn ${css.btn}`}
          onClick={addToCart}
          >Ajouter</div>
        </div>
        <Toaster/>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type=="pizza" && defined(slug.current)][].slug.current`
  );
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: 'blocking',
  };
}

export async function getStaticProps(context) {
  const { slug = '' } = context.params;
  const pizza = await client.fetch(
    `*[_type=="pizza" && slug.current == '${slug}'][0]`
  );
  return {
    props: {
      pizza,
    },
  };
}
