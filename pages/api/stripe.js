import Stripe from 'stripe';

const stripe = new Stripe(
  'sk_test_51LXOBNF7dRWONw95076Vw9djrCFKmbRkVafD0I90hRZEh1EUYFH5lmqgjotEyCkEvqzCuJ4JLdrAApr8V0fmBMYj00ozvFEIWV'
);

export default async function handler(req, res) {
  if (req.method == 'POST') {
    try {
      const params = {
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        line_items: req.body.map((item) => {
          const img = item.image.asset._ref;

          const newImage = img
            .replace(
              'image-',
              'https://cdn.sanity.io/images/cjni7e8y/production/'
            )
            .replace('-webp', '.webp');

          return {
            price_data: {
              currency: 'eur',
              product_data: {
                name: item.name,
                images: [newImage],
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled: false,
            },
            quantity: item.quantity,
          };
        }),
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/cart`,
      };

      //check out
      const session = await stripe.checkout.sessions.create(params);
      
      res.status(200).json(session);
    } catch (error) {
      res.status(500).json(error.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('method not allowed');
  }
}
