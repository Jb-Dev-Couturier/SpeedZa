import { Modal, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import toast,{Toaster}  from 'react-hot-toast';
import { createOrder } from '../lib/orderHandler';
import { useStore } from '../store/store';
import css from '../styles/OrderModal.module.css';


export default  function OrderModal({opened, setOpened, PaymentMethod}) {
    
  const theme = useMantineTheme();
  const [FormData, setFormData] = useState({})


  const handleInput =(e)=>{
    setFormData({...FormData, [e.target.name]: e.target.value})
  }

  const handleSubmit= async (e)=>{
    e.preventDefault()
    const id = await createOrder({...FormData, total, PaymentMethod})
    toast.success('Votre Commande est en Preparation')
    resetCard()
    {
      typeof window !== 'undefined' && localStorage.setItem('order', id);
    }
  }

  const resetCard = useStore((state)=>state.resetCard)
  const total = typeof window !== 'undefined' && localStorage.getItem('total')

  
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

          <span>
            Vous payerez <span> {total} €</span> à la livraison
          </span>

          <button type="submit" className="btn">
            Passer la commande
          </button>
        </form>
        
      </Modal>
    );
}

