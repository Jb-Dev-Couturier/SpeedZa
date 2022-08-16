import { Modal, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { createOrder } from '../lib/orderHandler';
import { usestore } from '../store/store';
import css from '../styles/OrderModal.module.css';
import { useRouter } from 'next/router';

export default function OrderModal({ opened, setOpened, PaymentMethod }) {
  const theme = useMantineTheme();

  const router = useRouter();
  const [FormData, setFormData] = useState({});
  const resetCard = usestore((state) => state.resetCart);
  const total = typeof window !== 'undefined' && localStorage.getItem('total');

  const handleInput = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = await createOrder({ ...FormData, total, PaymentMethod });
    toast.success('Votre Commande est en Preparation');
    resetCard();
    {
      typeof window !== 'undefined' && localStorage.setItem('order', id);
    }

    router.push(`/order/${id}`)
  };


  return (
    <Modal
      overlayColor={
        theme.colorScheme === 'dark'
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={opened}
      onClose={() => setOpened(null)}
    >
      {/* Modal content */}
      <form className={css.formContainer} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          required
          placeholder="Nom"
          onChange={handleInput}
        />
        <input
          type="text"
          name="phone"
          required
          placeholder="Votre Numero"
          onChange={handleInput}
        />
        <textarea
          name="adress"
          rows={3}
          placeholder="Votre Adresse"
          required
          onChange={handleInput}
        ></textarea>

        {PaymentMethod === 1 ? (
          <span>
             Vous avez payez <span> {total} €</span>
          </span>
        ) : (
          <span>
            Vous payerez <span> {total} €</span> à la livraison
          </span>
        )}

        <button type="submit" className="btn">
          Passer la commande
        </button>
      </form>
    </Modal>
  );
}
