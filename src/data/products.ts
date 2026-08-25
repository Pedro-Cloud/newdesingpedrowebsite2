export type ProductType = 'one-time' | 'recurring';

export interface Product {
  id: string;
  name: string;
  price: number;
  type: ProductType;
  priceId: string;
}

export const PRODUCTS: Record<string, Product> = {
  ia_whatsapp: {
    id: 'ia_whatsapp',
    name: 'Agente de IA para WhatsApp',
    price: 499,
    type: 'one-time',
    // TODO: Substitua pelo ID gerado no painel do Stripe (ex: price_1N...)
    priceId: 'price_ID_STRIPE_AQUI_1' 
  },
  ia_instagram: {
    id: 'ia_instagram',
    name: 'Agente de IA para Instagram',
    price: 499,
    type: 'one-time',
    // TODO: Substitua pelo ID gerado no painel do Stripe (ex: price_1N...)
    priceId: 'price_ID_STRIPE_AQUI_2'
  },
  presenca_digital: {
    id: 'presenca_digital',
    name: 'Presença Digital',
    price: 899,
    type: 'recurring',
    // TODO: Substitua pelo ID gerado no painel do Stripe (ex: price_1N...)
    priceId: 'price_ID_STRIPE_AQUI_3'
  },
  aceleracao_total: {
    id: 'aceleracao_total',
    name: 'Aceleração Total',
    price: 1999,
    type: 'recurring',
    // TODO: Substitua pelo ID gerado no painel do Stripe (ex: price_1N...)
    priceId: 'price_ID_STRIPE_AQUI_4'
  },
  dominancia: {
    id: 'dominancia',
    name: 'Dominância',
    price: 3999,
    type: 'recurring',
    // TODO: Substitua pelo ID gerado no painel do Stripe (ex: price_1N...)
    priceId: 'price_ID_STRIPE_AQUI_5'
  }
};
