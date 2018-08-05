const siteName = "Nicola's Kitchen";
const headline1 = 'Come join us for breakfast, brunch, lunch or dinner!';
const headline2 = 'Pasta | Seafood | Beer & Wine!';
const address = {
  street: '20969 Ventura Blvd.',
  city: 'Woodland Hills',
  state: 'CA',
  zipCode: 91364
};
const meta = {
  description: "Nicola's Kitchen is a family owned restaurant, serving the San Fernando Valley since 1990.",
  keywords:
    'Italian, restaurant, chicken, Woodland Hills, wine, beer, to go, delivery, catering, reservations, private parties, dog friendly breakfast patio'
};
const contact = {
  phone: {
    raw: '+18188839477',
    display: '818.883.9477'
  },
  email: 'nicolaswoodlandhills@gmail.com'
};

const reserve = {
  reserveHeroLink: 'https://www.yelp.com/reservations/nicolas-kitchen-woodland-hills?from_reserve_now=1'
};

const social = {
  twitter: 'https://twitter.com/_nicolaskitchen',
  yelp: 'https://www.yelp.com/biz/nicolas-kitchen-woodland-hills',
  instagram: 'https://instagram.com/nicolaskitchen/',
  facebook: 'https://www.facebook.com/nicolaskitchen'
};

export { meta, siteName, address, contact, social, reserve, headline1, headline2 };
