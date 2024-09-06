import cors from "cors";
import express, { Request, Response } from "express";
import morgan from "morgan";

const app = express();
const PORT = process.env.PORT || 3001;

const chats = [
  {
    user: {
      nickname: "Jese Leos",
      name: "Jese Leos",
      icon: "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
    },
    lastMessage: {
      text: "Hey, what's up? All set for the presentation?",
      date: new Date(),
    },
  },
  {
    user: {
      nickname: "Jese Leos",
      name: "Jese Leos",
      icon: "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
    },
    lastMessage: {
      text: "Hey, what's up? All set for the presentation?",
      date: new Date(),
    },
  },
  {
    user: {
      nickname: "Jese Leos",
      name: "Jese Leos",
      icon: "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
    },
    lastMessage: {
      text: "Hey, what's up? All set for the presentation?",
      date: new Date(),
    },
  },
];

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req: Request, res: Response) => {
  res.send("Server is running and alive!");
});

app.get("/chats", (req: Request, res: Response) => {
  res.send(chats);
});

app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});
