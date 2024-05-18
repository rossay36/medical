import { Link } from "react-router-dom";

export const homes = [
  {
    id: 1,
    item: (
      <Link className="link" to="/">
        <p>HomePage 1</p>
      </Link>
    ),
  },
  {
    id: 2,
    item: (
      <Link className="link" to="/homeTwo">
        HomePage 2
      </Link>
    ),
  },
  {
    id: 3,
    item: (
      <Link className="link" to="/homeThree">
        HomePage 3
      </Link>
    ),
  },

  {
    id: 4,
    item: (
      <Link className="link" to="/homeFour">
        HomePage 4
      </Link>
    ),
  },
  {
    id: 5,
    item: (
      <Link className="link" to="/homeFive">
        HomePage 5
      </Link>
    ),
  },
  {
    id: 6,
    item: (
      <Link className="link" to="/homeSix">
        HomePage 6
      </Link>
    ),
  },
  {
    id: 7,
    item: (
      <Link className="link" to="/homeSeven">
        HomePage 7
      </Link>
    ),
  },
  {
    id: 8,
    item: (
      <Link className="link" to="/homeEight">
        HomePage 8
      </Link>
    ),
  },
  {
    id: 9,
    item: (
      <Link className="link" to="/homeNine">
        HomePage 9
      </Link>
    ),
  },
];

export const pages = [
  {
    id: 1,
    item: (
      <Link className="link" to="/pagesAbout">
        <p>About Us</p>
      </Link>
    ),
  },
  {
    id: 2,
    item: (
      <Link className="link" to="/pagesServices">
        <p>Our Services</p>
      </Link>
    ),
  },
  {
    id: 3,
    item: (
      <Link className="link" to="/PagesProcess">
        <p>Our Process</p>
      </Link>
    ),
  },
  {
    id: 4,
    item: (
      <Link className="link" to="/pagesPlans">
        <p>Our Plans</p>
      </Link>
    ),
  },
  {
    id: 5,
    item: (
      <Link className="link" to="/ pagesApointment">
        <p>Appointments</p>
      </Link>
    ),
  },
  {
    id: 6,
    item: (
      <Link className="link" to="/pagesDoctors">
        {" "}
        <p>Our Doctors</p>
      </Link>
    ),
  },
  {
    id: 7,
    item: (
      <Link className="link" to="/pagesWorkingHours">
        <p>Working Hours</p>
      </Link>
    ),
  },
];

export const Services = [
  {
    id: 1,
    item: (
      <Link className="link" to="/angioplasty">
        <p>Angioplasty Services</p>
      </Link>
    ),
  },
  {
    id: 2,
    item: (
      <Link className="link" to="/cardiology">
        <p>Cardiology Services</p>
      </Link>
    ),
  },
  {
    id: 3,
    item: (
      <Link className="link" to="/dental">
        <p>Dental Services</p>
      </Link>
    ),
  },
];

export const Projects = [
  {
    id: 1,
    item: (
      <Link className="link" to="/mansory">
        <p>Mansory</p>
      </Link>
    ),
  },
  {
    id: 2,
    item: (
      <Link className="link" to="/projectDetails">
        <p> ProjectDetails</p>
      </Link>
    ),
  },
  {
    id: 3,
    item: (
      <Link className="link" to="/standard">
        <p>Standard</p>
      </Link>
    ),
  },
];
export const Blogs = [
  {
    id: 1,
    item: (
      <Link className="link" to="/blog">
        <p>Single Blog</p>
      </Link>
    ),
  },
  {
    id: 2,
    item: (
      <Link className="link" to="/blogs">
        <p> Our Blogs</p>
      </Link>
    ),
  },
];
export const Contacts = [
  {
    id: 1,
    item: (
      <Link className="link" to="/contacts">
        <p>Contacts Us</p>
      </Link>
    ),
  },
];
