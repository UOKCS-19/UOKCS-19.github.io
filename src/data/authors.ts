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
    bio: "As a passionate undergraduate, I bring energy and enthusiasm to all that I do, whether it's pursuing my studies or playing guitar and singing in my free time. I am committed to bringing my creativity and dedication to all aspects of my life and work.",
  },
  {
    name: "Chamuditha Gunawardene",
    slug: "chamuditha-gunawardene",
    image: "./src/assets/authors/chamuditha.jpg",
    bio: "As a lifesaver in the digital world, I am always reaching my hands for new technologies and innovative solutions that can help our team and our clients stay ahead of the curve. I am dedicated to staying up to date on the latest trends and tools, and to sharing my expertise with others to help them achieve their goals.",
  },
  {
    name: "Sandun Srimal",
    slug: "sandun-srimal",
    image: "./src/assets/authors/sandun.jpg",
    bio: "As a successful entrepreneur with high creative editing skills, I always use my name as 'sandun' (without capital S) to reflect my unique style and approach. I am dedicated to pushing the boundaries of what's possible, and to finding innovative solutions that can help our clients stand out in a crowded marketplace.",
  },
  {
    name: "Omali Fernando",
    slug: "omali-fernando",
    image: "./src/assets/authors/omali.jpg",
    bio: "As the busiest member of our team, I am constantly on the go, but I never forget to put on a happy face and approach each task with a positive attitude. I take pride in my ability to stay organized and focused, while also bringing a sense of joy and enthusiasm to everything I do.",
  },
  {
    name: "Dewmini Thakshila",
    slug: "dewmini-thakshila",
    image: "./src/assets/authors/dewmini.jpg",
    bio: "As a valued member of our organization, I bring a great sense of humor and a strong collaborative spirit, and I take pride in my contributions to our team's success.",
  },
  {
    name: "Tharindu Vinod",
    slug: "tharindu-vinod",
    image: "./src/assets/authors/tharinduVinod.jpg",
    bio: "As an active collaborator with creativity on my side, I bring a unique perspective to our team's projects, and take pride in working together to achieve our goals. I am dedicated to finding innovative solutions that push the boundaries and exceed expectations.",
  },
  {
    name: "Imesha Dilshani",
    slug: "imesha-dilshani",
    image: "./src/assets/authors/imesha.jpg",
    bio: " I am a tech enthusiast undergraduate and a designer skilled in producing functional and aesthetically pleasing visual solutions, with a passion for exploring new technologies.",
  },
  {
    name: "Ayisha Ilyas",
    slug: "ayisha-ilyas",
    image: "./src/assets/authors/ayisha.jpeg",
    bio: " As a tech writer and creative blogger, I merge my passion for technology and communication in engaging and informative content, while pursuing my undergraduate degree.",
  },
];
