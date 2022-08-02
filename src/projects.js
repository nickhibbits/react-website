import bearsDen from "./images/Crowd-Front.JPG";
import pollPhoto from "./images/poll-photo.JPG";
import bookPhoto from "./images/books.jpg";

const projects = {
  zoomies: {
    title: "Studio Zoomies",
    description:
      "Junior Developer at a startup building a Customer Relation Managment Application for photographers.",
    imgAlt: "Studio Zoomies Logo",
    imgSrc: null,
    link: "https://studiozoomies.com",
  },
  bearsDen: {
    title: "The Bear's Den",
    description:
      "The Bear's Den is a chainsaw carving shop in South Lake Tahoe. Starting out as a carver, I began speaking with the owner about taking the business more online. Soon I was managing e-commerce for the business.\nMy experience has entailed building a website with a CMS, creating and maintaing an Etsy shop and social media channels, studying SEO and performing cross-platform integration to expand reach.",
    imgAlt: "The Bear's Den",
    imgSrc: bearsDen,
    link: "https://thebearsdentahoe.com",
  },
  pollApp: {
    title: "Employee Poll App",
    description:
      "Mock company polling app, allowing users to vote on questions asked by other employees or create their own, as well as see stats about questions and users.",
    imgAlt: "Employee Poll App",
    imgSrc: pollPhoto,
    link: "https://github.com/nickhibbits/employee-poll-react-app",
  },
  bookApp: {
    title: "My Reads App",
    description:
      "Book tracking app, allowing users to organize books on different shelves as well as add new ones, as they progress in reading.",
    imgAlt: "My Reads Ap",
    imgSrc: bookPhoto,
    link: "https://github.com/nickhibbits/my-reads-react-app",
  },
};

export default projects;
