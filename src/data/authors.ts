export interface Props {
  name: string;
  slug: string;
  image: string;
  bio: string;
}

export type Author = Props;

export const authors: Props[] = [
  {
    name: "Omali Fernando",
    slug: "omali-fernando",
    image: "./src/assets/authors/omali.jpg",
    bio: "As the busiest member of our team, I am constantly on the go, but I never forget to put on a happy face and approach each task with a positive attitude. I take pride in my ability to stay organized and focused, while also bringing a sense of joy and enthusiasm to everything I do.",
  },
  {
    name: "Jayawinath Induwara",
    slug: "jayawinath-induwara",
    image: "./src/assets/authors/induwara.jpg",
    bio: "3 lines are not enough to define who I am",
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
    image: "./src/assets/authors/dilshani.jpg",
    bio: " I am a tech enthusiast undergraduate and a designer skilled in producing functional and aesthetically pleasing visual solutions, with a passion for exploring new technologies.",
  },
  {
    name: "Ayisha Ilyas",
    slug: "ayisha-ilyas",
    image: "./src/assets/authors/ayisha.jpeg",
    bio: " As a tech writer and creative blogger, I merge my passion for technology and communication in engaging and informative content, while pursuing my undergraduate degree.",
  },
  {
    name: "Dinithi Tharushini",
    slug: "dinithi-tharushini",
    image: "./src/assets/authors/dinithi.jpg",
    bio: "Hi it's me ,I'm the problem",
  },
  {
    name: "Hirantha Ranathunga",
    slug: "hirantha-ranathunga",
    image: "./src/assets/authors/hiranthaD.jpg",
    bio: "Carpe diem",
  },
];
