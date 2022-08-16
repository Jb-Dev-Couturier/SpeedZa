import create from 'zustand';

export const usestore = create((set) => ({
  //cart
  cart: {
    pizzas: [],
  },

  //add pizza in cart
  addPizza: (data) =>
    set((state) => ({
      cart: {
        pizzas: [...state.cart.pizzas, data],
      },
    })),

  //Remove pizza in cart
  removePizza: (index) =>
    set((state) => ({
      cart: {
        pizzas: state.cart.pizzas.filter((_, i) => i != index),
      },
    })),

  //Reset  cart
  resetCard: () => {
    set(() => ({
      cart: {
        pizzas: [],
      },
    }));
  },
}));
