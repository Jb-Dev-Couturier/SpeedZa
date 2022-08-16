import { client } from '../../lib/client';

export default async function handler(req, res) {
  switch (req.method) {
    case 'POST':
      const newOrder = await JSON.parse(req.body);
      try {
        await client
          .create({
            _type: 'order',
            name: newOrder.name,
            adress: newOrder.adress,
            phone: newOrder.phone,
            total: newOrder.total,
            method: newOrder.method,
            status: 1,
          })
          .then((data) => {
            res.status(200).json(data._id);
          });
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error, check console' });
      }
      break
  }
}
