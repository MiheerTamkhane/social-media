import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  // USER 1
  {
    _id: uuid(),
    firstName: "Miheer",
    lastName: "Tamkhane",
    username: "miheer",
    password: "miheer@123",
    following: [
      {
        _id: uuid(),
        firstName: "Rushikesh",
        lastName: "Tarapure",
        username: "Neo_MonkStar",
        avatarURL:
          "https://c4.wallpaperflare.com/wallpaper/458/230/473/dragon-ball-super-son-goku-ultra-instinct-dragon-ball-wallpaper-preview.jpg",
      },
      {
        _id: uuid(),
        firstName: "Yash",
        lastName: "Ghodekar",
        username: "horsemaker",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1528089482364612608/rTGaahib_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Vijay",
        lastName: "Tembugade",
        username: "vijaytembugade",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1387873189917720581/3NfEA_sE_400x400.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Yash",
        lastName: "Ghodekar",
        username: "horsemaker",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1528089482364612608/rTGaahib_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Prathmesh",
        lastName: "Jagtap",
        username: "prathmesh_20",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1511020219250376713/zFRXcl9k_400x400.jpg",
      },
    ],
    avatarURL:
      "https://c4.wallpaperflare.com/wallpaper/458/230/473/dragon-ball-super-son-goku-ultra-instinct-dragon-ball-wallpaper-preview.jpg",
    bio: "The Kamehameha (かめはめ波は Kamehameha)",
    website: "https://peerlist.io/miheer",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  // USER 2
  {
    _id: uuid(),
    firstName: "Yash",
    lastName: "Ghodekar",
    username: "horsemaker",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1528089482364612608/rTGaahib_400x400.jpg",
    bio: "5th project, project nahi mpsc ka exam ho gaya hai khatam hi nahi ho raha -Yash.",
    website: "https://peerlist.io/horsemaker",
    password: "horsemaker123",
    following: [
      {
        _id: uuid(),
        firstName: "Rushikesh",
        lastName: "Tarapure",
        username: "Neo_MonkStar",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Narhari",
        lastName: "Kale",
        username: "NarhariKale4",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1413557784746991621/QA9i13a3_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Vijay",
        lastName: "Tembugade",
        username: "vijaytembugade",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1387873189917720581/3NfEA_sE_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Rushikesh",
        lastName: "Tarapure",
        username: "Neo_MonkStar",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  // USER 3

  {
    _id: uuid(),
    firstName: "Narhari",
    lastName: "Kale",
    username: "NarhariKale4",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1413557784746991621/QA9i13a3_400x400.jpg",
    bio: "Laka zala ka project - Narhari.",
    website: "https://peerlist.io/narhari_k",
    following: [
      {
        _id: uuid(),
        firstName: "Rushikesh",
        lastName: "Tarapure",
        username: "Neo_MonkStar",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Vijay",
        lastName: "Tembugade",
        username: "vijaytembugade",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1387873189917720581/3NfEA_sE_400x400.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Miheer",
        lastName: "Tamkhane",
        username: "miheertamkhane",
        avatarURL:
          "https://c4.wallpaperflare.com/wallpaper/458/230/473/dragon-ball-super-son-goku-ultra-instinct-dragon-ball-wallpaper-preview.jpg",
      },
      {
        _id: uuid(),
        firstName: "Vijay",
        lastName: "Tembugade",
        username: "vijaytembugade",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1387873189917720581/3NfEA_sE_400x400.jpg",
      },
    ],
    password: "NarhariKale4123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  // USER 4

  {
    _id: uuid(),
    firstName: "Vijay",
    lastName: "Tembugade",
    username: "vijaytembugade",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1387873189917720581/3NfEA_sE_400x400.jpg",
    bio: "Avghad kay nast be. -Vijay",
    website: "https://peerlist.io/vijaytembugade",
    following: [
      {
        _id: uuid(),
        firstName: "Miheer",
        lastName: "Tamkhane",
        username: "miheertamkhane",
        avatarURL:
          "https://c4.wallpaperflare.com/wallpaper/458/230/473/dragon-ball-super-son-goku-ultra-instinct-dragon-ball-wallpaper-preview.jpg",
      },
      {
        _id: uuid(),
        firstName: "Prathmesh",
        lastName: "Jagtap",
        username: "prathmesh_20",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1511020219250376713/zFRXcl9k_400x400.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Miheer",
        lastName: "Tamkhane",
        username: "miheertamkhane",
        avatarURL:
          "https://c4.wallpaperflare.com/wallpaper/458/230/473/dragon-ball-super-son-goku-ultra-instinct-dragon-ball-wallpaper-preview.jpg",
      },
      {
        _id: uuid(),
        firstName: "Prathmesh",
        lastName: "Jagtap",
        username: "prathmesh_20",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1511020219250376713/zFRXcl9k_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Yash",
        lastName: "Ghodekar",
        username: "horsemaker",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1528089482364612608/rTGaahib_400x400.jpg",
      },
    ],
    password: "vijaytembugade123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  // USER 5

  {
    _id: uuid(),
    firstName: "Prathmesh",
    lastName: "Jagtap",
    username: "prathmesh_20",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1511020219250376713/zFRXcl9k_400x400.jpg",
    bio: "Zale sagle project -Prathmesh.",
    website: "https://peerlist.io/prathmesh",
    following: [
      {
        _id: uuid(),
        firstName: "Yash",
        lastName: "Ghodekar",
        username: "horsemaker",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1528089482364612608/rTGaahib_400x400.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Yash",
        lastName: "Ghodekar",
        username: "horsemaker",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1528089482364612608/rTGaahib_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Narhari",
        lastName: "Kale",
        username: "NarhariKale4",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1413557784746991621/QA9i13a3_400x400.jpg",
      },
    ],
    password: "prathmesh_20123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  // USER 6
  {
    _id: uuid(),
    firstName: "Rushikesh",
    lastName: "Tarapure",
    username: "Neo_MonkStar",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
    bio: "Theater la a movie bghtoy -Rushikesh.",
    website: "https://peerlist.io/t007rushi",
    following: [
      {
        _id: uuid(),
        firstName: "Yash",
        lastName: "Ghodekar",
        username: "horsemaker",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1528089482364612608/rTGaahib_400x400.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Yash",
        lastName: "Ghodekar",
        username: "horsemaker",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1528089482364612608/rTGaahib_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Narhari",
        lastName: "Kale",
        username: "NarhariKale4",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1413557784746991621/QA9i13a3_400x400.jpg",
      },
    ],
    password: "Neo_MonkStar123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
