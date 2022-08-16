import { client } from '../../lib/client';
import Layout from '../../components/Layout';
import Image from 'next/image';
import css from '../../styles/Order.module.css';
import PaymentsIcon from '@mui/icons-material/Payments';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import InventoryIcon from '@mui/icons-material/Inventory';
import Spinner from '../../assets/spinner.svg';
import { useEffect } from 'react';

export const getServerSideProps = async ({ params }) => {
  const query = `*[_type == 'order' && _id == '${params.id}']`;
  const order = await client.fetch(query);

  return {
    props: {
      order: order[0],
    },
  };
};

export default function Orders({ order }) {

    useEffect(()=>{
        if(order.status>3){
            localStorage.clear()
        }
    }, [order])
  return (
    <Layout>
      <div className={css.container}>
        <span className={css.heading}>Commande en cours</span>
        <div className={css.details}>
          <hr />
          <div>
            <span>N° de Commande :</span>
            <span>{order._id}</span>
          </div>

          <div>
            <span>Nom :</span>
            <span>{order.name}</span>
          </div>
          <div>
            <span>Numero de Telephone :</span>
            <span>{order.phone}</span>
          </div>
          <div>
            <span>Adresse Livraison :</span>
            <span>{order.adress}</span>
          </div>
          <div>
            <span>Methode Paiement :</span>
            <span>
              {order.method === 0
                ? 'Reglement en éspèces à la livraison'
                : 'En Ligne (déjà payer)'}
            </span>
          </div>
          <hr />
          <div>
            <span>Total :</span>
            <span>
              {order.total}
              <span style={{ color: 'red' }}> € </span>
            </span>
          </div>
        </div>
        <div className={css.statusContainer}>
          <div className={css.status}>
            <PaymentsIcon className={css.iconMaterials} />
            <span>Paiments</span>
            {order.method === 0 ? (
              <span className={css.pending}> A la livraison</span>
            ) : (
              <span className={css.completed}> Deja payer</span>
            )}
          </div>
          <div className={css.status}>
            <LocalPizzaIcon className={css.iconMaterials} />
            <span>EnCuisson</span>
            {order.status === 1 && (
              <div className={css.spinner}>
                <Image src={Spinner} alt="" />
              </div>
            )}
            {order.status > 1 && <span className={css.completed}>Terminé</span>}
          </div>
          <div className={css.status}>
            <DeliveryDiningIcon className={css.iconMaterials} />
            <span>EnLivraison</span>
            {order.status === 2 && (
              <div className={css.spinner}>
                <Image src={Spinner} alt="" />
              </div>
            )}
            {order.status > 2 && <span className={css.completed}>Terminé</span>}
          </div>
          <div className={css.status}>
            <InventoryIcon className={css.iconMaterials} />
            <span>Livré</span>
            {order.status === 3 && (
              <div className={css.spinner}>
                <Image src={Spinner} alt="" />
              </div>
            )}
            {order.status > 3 && <span className={css.completed}>Terminé</span>}
          </div>
        </div>
      </div>
    </Layout>
  );
}
