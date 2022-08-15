import Image from 'next/image';
import Layout from '../components/Layout';
import { useStore } from '../store/store';
import css from '../styles/Cart.module.css';
import { urlFor } from '../lib/client';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import toast, {Toaster} from 'react-hot-toast';
import { useState } from 'react';
import OrderModal from '../components/OrderModal';

export default function cart() {
  const CartData = useStore((state) => state.cart);
  const removePizza = useStore((state) => state.removePizza);
  const [PaymentMethod, setPaymentMethod] = useState(null)

  //total HandleRemove
  const handleRemove = (i) => {
    removePizza(i);
    toast.error('Pizza supprimé');
  };
  //total function
  const total = () =>
    CartData.pizzas.reduce((a, b) => a + b.quantity * b.price, 0);

  //total function
  const handleOnDelivery = ()=>{
    setPaymentMethod(0);
    typeof window !== 'undefined' && localStorage.setItem('total', total())
  }
  return (
    <Layout>
      <div className={css.container}>
        {/* Details */}
        <div className={css.details}>
          <table className={css.table}>
            <thead>
              <th>Pizza</th>
              <th>Nom</th>
              <th>Taille</th>
              <th>Prix</th>
              <th>Quantité</th>
              <th>Total</th>
              <th> </th>
            </thead>
            <tbody className={css.tbody}>
              {CartData.pizzas.length > 0 &&
                CartData.pizzas.map((pizza, i) => {
                  const src = urlFor(pizza.image).url();
                  return (
                    <tr key={i}>
                      <td className={css.imageTd}>
                        <Image
                          loader={() => src}
                          src={src}
                          alt=""
                          objectFit="cover"
                          width={85}
                          height={85}
                          unoptimized
                        />
                      </td>
                      <td>{pizza.name}</td>
                      <td>
                        {pizza.size === 0
                          ? 'Normal'
                          : pizza.size === 1
                          ? 'Grande'
                          : 'Extra'}
                      </td>

                      <td>{pizza.price}</td>
                      <td>{pizza.quantity}</td>
                      <td>{pizza.price * pizza.quantity}</td>
                      <td
                        style={{
                          color: 'var(--themeYellow)',
                          cursor: 'pointer',
                        }}
                        onClick={() => handleRemove(i)}
                      >
                        <HighlightOffIcon />
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>

        {/* Summar */}
        <div className={css.cart}>
          <span>Addition</span>
          <div className={css.cartDetails}>
            <div>
              <span>Produits</span>
              <span>{CartData.pizzas.length}</span>
            </div>

            <div>
              <span>Total</span>
              <span>{total()} € </span>
            </div>
          </div>
          <div className={css.buttons}>
            <button className="btn" onClick={handleOnDelivery}>
              Paiements Livraison
            </button>
            <button className="btn">Paiements en Ligne</button>
          </div>
        </div>
      </div>
      <Toaster />
      {/* Modal */}
      <OrderModal
      opened = {PaymentMethod === 0}
      setOpened={setPaymentMethod}
      PaymentMethod={PaymentMethod}
      
      />
    </Layout>
  );
}
