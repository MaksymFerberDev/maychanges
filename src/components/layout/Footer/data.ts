import { THeaderNav } from "../Header/interfaces";
import { TContact } from "./interfaces";

export const Links: THeaderNav[] = [
  {
    id: 1,
    name: "Home",
    url: "/",
    scroll: "",
  },
  {
    id: 2,
    name: "Why?",
    url: "",
    scroll: "Why",
  },
  {
    id: 3,
    name: "Team",
    url: "",
    scroll: "Team",
  },
  {
    id: 4,
    name: "Companies",
    url: "/companies",
    scroll: "",
  },
  {
    id: 5,
    name: "Business Attributes",
    url: "",
    scroll: "Attributes",
  },
  {
    id: 6,
    name: "Media",
    url: "/media",
    scroll: "",
  },
];

export const Contact: TContact[] = [
  {
    id: 1,
    name: "(714) 430-3810",
    url: "tel:714-430-3810",
    icon: "/assets/icons/phone.png",
  },
  {
    id: 2,
    name: "Los Angeles, CA",
    icon: "/assets/icons/map.png",
  },
  {
    id: 3,
    name: "deals@IndustrialSuccession.com",
    url: "mailto:deals@IndustrialSuccession.com",
    icon: "/assets/icons/mail.png",
  },
  {
    id: 4,
    name: "hiring@IndustrialSuccession.com",
    url: "mailto:hiring@IndustrialSuccession.com",
    icon: "/assets/icons/mail.png",
  }
]
