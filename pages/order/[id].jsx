import {client} from '../../lib/client'
import Layout from '../../components/Layout';
import css from '../../styles/Order.module.css';

export const getServerSideProps = async ({params})=>{
    const query = `*[_type == 'order' && _id == '${params.id}']`
    const order = await client.fetch(query)

    return{
        props:{
            order:order[0]
        }
    }
}

export default function Orders({order}) {
    return(
        <Layout>
            <div className={css.container}>
                <span className={css.heading}>
                    Commande en cours
                </span>
            </div>
        </Layout>
    )
}