import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Miheer",
    lastName: "Tamkhane",
    username: "miheer",
    password: "miheer@123",
    avatarURL:
      "https://c4.wallpaperflare.com/wallpaper/458/230/473/dragon-ball-super-son-goku-ultra-instinct-dragon-ball-wallpaper-preview.jpg",
    bio: "The Kamehameha (かめはめ波は Kamehameha)",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
