import bearsDen from "./assets/images/Crowd-Front.JPG";
import pollPhoto from "./assets/images/poll-photo.JPG";
import bookPhoto from "./assets/images/books.jpg";

const projects = {
  zoomies: {
    title: "Studio Zoomies",
    description: `Studio Zoomies is a startup focused on Customer Relation Managment for photographers. Starting as an intern I was promoted to full time as a Junior Software Developer. Working directly with the founder I explored numerous technologies to build new features for the app. The experience gave me an appreciation for the pace and expecations of working on an enterprise level app. Additionally having no experience of the daily difficulties of working photographers, to speak with the founder and hear all the considerations he was making on behalf of the app's potential users, I learned to interpret and empathize with the vision behind the code I was writing. `,
    imgAlt: "Studio Zoomies Logo",
    imgSrc: null,
    link: "https://studiozoomies.com",
    type: "professional",
  },
  bearsDen: {
    title: "The Bear's Den",
    description: `The Bear's Den is a chainsaw carving shop in South Lake Tahoe. Starting out as a carver, I began speaking with the owner about taking the business more online. Soon I was managing e-commerce for the business.\nMy experience has entailed building a website with a CMS, creating and maintaing an Etsy shop and social media channels, studying SEO and performing cross-platform integration to expand reach.`,
    imgAlt: "The Bear's Den",
    imgSrc: bearsDen,
    link: "https://thebearsdentahoe.com",
    type: "professional",
  },
  pollApp: {
    title: "Employee Poll App",
    description:
      "Mock company polling app, allowing users to vote on questions asked by other employees or create their own, as well as see stats about questions and users. Uses React, Redux, and Jest",
    imgAlt: "Employee Poll App",
    imgSrc: pollPhoto,
    link: "https://github.com/nickhibbits/employee-poll-react-app",
    type: "personal",
  },
  bookApp: {
    title: "My Reads App",
    description:
      "Book tracking app, allowing users to organize books on different shelves as well as add new ones, as they progress in reading. Uses React.",
    imgAlt: "My Reads Ap",
    imgSrc: bookPhoto,
    link: "https://github.com/nickhibbits/my-reads-react-app",
    type: "personal",
  },
};

export default projects;