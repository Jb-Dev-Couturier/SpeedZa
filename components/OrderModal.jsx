import { Modal, useMantineTheme } from '@mantine/core';
import css from '../styles/OrderModal.module.css';


export default  function OrderModal({opened, setOpened, PaymentMethod}) {
    
  const theme = useMantineTheme();

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
        <form action="" className={css.formContainer}>
          <input type="text" name="name" required placeholder="Nom" />
          <input type="text" name="phone" required placeholder="Votre Numero" />
          <textarea name='adress'rows={3} placeholder='Votre Adresse' required></textarea>

          <span>
            Vous payerez <span> {total} €</span> à la livraison
          </span>

          <button type='submit' className='btn'>Passer la commande</button>
        </form>
      </Modal>
    );
}

