const navbarItems = [
  {
    label: 'about',
    path: '#about',
  },
  {
    label: 'projects',
    path: '#project',
  },
  {
    label: 'contactUs',
    path: '#contactUs',
  },
];

const projects = [
  {
    title: 'LS CRM',
    label: 'lsCRM',
    // description: '',
    name: 'lsCRM',
    img: '/team/Designer5.jpeg',
    link: 'project/lsCRM',
    tags: ['Web', 'CRM'],
    soon: true,
  },
  {
    title: 'LS ERP',
    label: 'lsERP',
    // description: '',
    name: 'lsERP',
    img: '/team/Designer6.jpeg',
    link: 'project/lsERP',
    tags: ['Web', 'ERP'],
    soon: true,
  },
  {
    title: 'LS Finance',
    label: 'lsFinance',
    // description: '',
    name: 'lsFINANCE',
    img: '/team/Designer7.jpeg',
    link: 'project/lsFINANCE',
    tags: ['Web', 'Finance'],
    soon: true,
  },
];

const whatCanDoWeDoOffers = [
  {
    name: 'product-design',
    label: 'Product Design',
    cardImageSrc: '/blog/products/all-products.jpeg',
  },
  {
    name: 'ideation-strategy',
    label: 'Ideation & Strategy',
    cardImageSrc: '/blog/products/all-products.jpeg',
  },
  {
    name: 'web-and-mobile',
    label: 'Web and Mobile',
    cardImageSrc: '/blog/products/all-products.jpeg',
  },
  {
    name: 'embedded-systems',
    label: 'Embedded Systems',
    cardImageSrc: '/blog/products/all-products.jpeg',
  },
]

export {
  navbarItems,
  projects,
  whatCanDoWeDoOffers
}