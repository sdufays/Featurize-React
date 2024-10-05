import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Uber",
    paragraph:
      "Helping riders find a way to go from point A to point B.",
    image: "/images/blog/uber-logo.png",
    author: {
      name: "Abraham Alemu",
      image: "/images/blog/abraham-headshot.jpeg",
      designation: "Software Engineering Manager",
    },
    tags: ["Transportation / Ride Services"],
    publishDate: "June 15, 2024",
  },
  {
    id: 2,
    title: "Ramp",
    paragraph:
      "Help finance teams build healthier businesses.",
    image: "/images/blog/ramp-new-logo.jpg",
    author: {
      name: "Sarah Dufays",
      image: "/images/blog/sarah-headshot.jpeg",
      designation: "Software Director",
    },
    tags: ["Financial Services"],
    publishDate: "April 17, 2024",
  },
  {
    id: 3,
    title: "Google Drive",
    paragraph:
      "Organize the world's information and make it universally accessible and useful.",
    image: "/images/blog/google-drive-png.png",
    author: {
      name: "Shaun Karani",
      image: "/images/blog/shaun-headshot.jpeg",
      designation: "COO",
    },
    tags: ["Cloud Storage"],
    publishDate: "May 23, 2024",
  },
  {
    id: 4,
    title: "Massachusetts Registry of Motor Vehicles",
    paragraph:
      "Managing driver's licenses, disability parking placards, motor vehicle registrations, and vehicle inspections.",
    image: "/images/blog/massrmv-logo.jpeg",
    author: {
      name: "Emily Watson",
      image: "/images/blog/stock1-headshot-new.jpeg",
      designation: "Product Manager",
    },
    tags: ["Government Authority"],
    publishDate: "July 8, 2024",
  },
  {
    id: 5,
    title: "Slack",
    paragraph:
      "Streamlining team collaboration and communication for businesses.",
    image: "/images/blog/slack-final-logo.png",
    author: {
      name: "David Lee",
      image: "/images/blog/stock2-headshot.jpeg",
      designation: "Engineering Lead",
    },
    tags: ["Team Collaboration"],
    publishDate: "August 12, 2024",
  },
  {
    id: 6,
    title: "UnitedHealth Group",
    paragraph:
      "Helping people live healthier lives and  make the health system work better for everyone.",
    image: "/images/blog/unitedhealthgroup-logo.png",
    author: {
      name: "Nina Patel",
      image: "/images/blog/stock3-headshot.jpeg",
      designation: "Project Manager",
    },
    tags: ["Project Management"],
    publishDate: "September 2, 2024",
  },
];

export default blogData;
