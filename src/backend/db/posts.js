import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: `Dragon Ball Super: Super Hero New Trailer! is out now.`,
    likes: {
      likeCount: 3,
      likedBy: [
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
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        firstName: "Rushikesh",
        lastName: "Tarapure",
        username: "Neo_MonkStar",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
        text: "Noice!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Yash",
        lastName: "Ghodekar",
        username: "horsemaker",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1528089482364612608/rTGaahib_400x400.jpg",
        text: "That gohan is amazing looking",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "miheer",
    firstName: "Miheer",
    lastName: "Tamkhane",
    avatarURL:
      "https://c4.wallpaperflare.com/wallpaper/458/230/473/dragon-ball-super-son-goku-ultra-instinct-dragon-ball-wallpaper-preview.jpg",
    createdAt: "06/08/2022".toString(),
    updatedAt: formatDate(),
  },

  // POST 2
  {
    _id: uuid(),
    content: `How are you feeling about the manga recently?`,
    likes: {
      likeCount: 2,
      likedBy: [
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
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        firstName: "Vijay",
        lastName: "Tembugade",
        username: "vijaytembugade",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1387873189917720581/3NfEA_sE_400x400.jpg",
        text: "Its dope",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "miheer",
    firstName: "Miheer",
    lastName: "Tamkhane",
    avatarURL:
      "https://c4.wallpaperflare.com/wallpaper/458/230/473/dragon-ball-super-son-goku-ultra-instinct-dragon-ball-wallpaper-preview.jpg",
    createdAt: "06/07/2022".toString(),
    updatedAt: formatDate(),
  },

  // POST 3
  {
    _id: uuid(),
    content:
      "At the start of the battle of gods movie, what anime or movie are those scenes from? Such as the one where goku went against frieza, because the original anime didnt look that good",
    likes: {
      likeCount: 2,
      likedBy: [
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
          firstName: "Narhari",
          lastName: "Kale",
          username: "NarhariKale4",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1413557784746991621/QA9i13a3_400x400.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Yash",
    lastName: "Ghodekar",
    username: "horsemaker",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1528089482364612608/rTGaahib_400x400.jpg",
    createdAt: "06/03/2022".toString(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        firstName: "Miheer",
        lastName: "Tamkhane",
        username: "miheer",
        avatarURL:
          "https://c4.wallpaperflare.com/wallpaper/458/230/473/dragon-ball-super-son-goku-ultra-instinct-dragon-ball-wallpaper-preview.jpg",
        text: "Good Question.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },

  // POST 4
  {
    _id: uuid(),
    content:
      "This week Dragon Ball Super: Super Hero (2022) will be released at the theaters in Japan.",
    likes: {
      likeCount: 3,
      likedBy: [
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
      dislikedBy: [],
    },
    firstName: "Prathmesh",
    lastName: "Jagtap",
    username: "prathmesh_20",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1511020219250376713/zFRXcl9k_400x400.jpg",
    createdAt: "06/01/2022".toString(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        firstName: "Rushikesh",
        lastName: "Tarapure",
        username: "Neo_MonkStar",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
        text: "On the way to Japan.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },

  // POST 5
  {
    _id: uuid(),
    content: "Who is your favorite character?",
    likes: {
      likeCount: 2,
      likedBy: [
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
          firstName: "Narhari",
          lastName: "Kale",
          username: "NarhariKale4",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1413557784746991621/QA9i13a3_400x400.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Vijay",
    lastName: "Tembugade",
    username: "vijaytembugade",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1387873189917720581/3NfEA_sE_400x400.jpg",
    createdAt: "05/28/2022".toString(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        firstName: "Miheer",
        lastName: "Tamkhane",
        username: "miheer",
        avatarURL:
          "https://c4.wallpaperflare.com/wallpaper/458/230/473/dragon-ball-super-son-goku-ultra-instinct-dragon-ball-wallpaper-preview.jpg",
        text: "Goku",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
];
