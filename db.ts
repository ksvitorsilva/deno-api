import { uuid } from "./deps.ts";

const database = [
  {
    id: uuid(),
    name: "Vitor Silva",
    socialMedia: {
      github: "https://github.com/ksvitorsilva",
      linkedin: "https://pt.linkedin.com/in/ksvitorsilva",
      medium: "https://medium.com/@ksvitorsilva",
      dev: "https://dev.to/ksvitorsilva",
    },
    description:
      "Web Dev | [ Automation,Gadget,Self-sustaining ] fanatic | Dog lover",
  },
];

export const getDatabase = () => database;
