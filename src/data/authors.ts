export interface Props {
  name: string;
  slug: string;
  image: string;
  bio: string;
}

export type Author = Props;

export const authors: Props[] = [
  {
    name: "Yasiru Thanthirige",
    slug: "yasiru-thanthirige",
    image: "./src/assets/authors/yasiru.jpg",
    bio: "Yasiru is a passinate undergraduate from Universiy of Kelaniya. You might find him singing or playing guitar in his free time.",
  },
  {
    name: "Chamuditha Gunawardene",
    slug: "chamuditha-gunawardene",
    image: "./src/assets/authors/chamuditha.jpg",
    bio: "Chamuditha is a passinate undergraduate from Universiy of Kelaniya. He forgot to add more details here.",
  },
  {
    name: "Sandun Srimal",
    slug: "sandun-srimal",
    image: "./src/assets/authors/sandun.jpg",
    bio: "Sandun is a successful entrepreuner and a designer. Fun fact: He always use his name as 'sandun' and we generally called him 'sirimal'",
  },
  {
    name: "Omali Fernando",
    slug: "omali-fernando",
    image: "./src/assets/authors/omali.jpg",
    bio: "Omali is the busiest member of our community. Despite how hard she works she never forget to put on a happy face.",
  },
  /** TODO -------------------Remove below line when ready-------------------------------- */
  {
    name: "First Name Last Name",
    slug: "sample-person1",
    image: "./src/assets/authors/mario.webp",
    bio: "Mario is a Staff Engineer specialising in Frontend at Vercel, as well as being a co-founder of Acme and the content management system Sanity. Prior to this, he was a Senior Engineer at Apple.",
  },
  {
    name: "Joen Doe",
    slug: "sample-person2",
    image: "./src/assets/authors/joshua.webp",
    bio: "Joshua is a Microsoft Azure Certified Cloud Professional and a Google Certified Associate Cloud Engineer. A Data Analytics at Acme, specializing in the use of cloud infrastructure for Machine Learning and Deep Learning operation at scale.",
  },
];
