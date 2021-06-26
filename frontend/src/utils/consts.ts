import { RouteBlock, HistoryPart, RegularAchievements } from "../Core/SberZarya";

export const routeBlocks: RouteBlock[] = [
  {
    img: "main1.png",
    title: "Почистить зубы",
    icon: "Brush-teeth.svg",
    link: "/brushing"
  },
  {
    img: "main2.png",
    title: "Мои достижения",
    icon: "My-achievements.svg",
    link: "/achievements"
  },
  {
    img: "main3.png",
    title: "История",
    icon: "History-main.svg",
    link: "/history"
  }
]

export const initialAchievements: RegularAchievements[] = [
  {
    id: 0,
    title: "Первая чистка",
    description: "Да",
    img: "1.svg"
  },
  {
    id: 1,
    title: "Ранняя пташка",
    description: "Да",
    img: "3.svg"
  },
  {
    id: 2,
    title: "Обеденный перерыв",
    description: "Да",
    img: "2.svg"
  },
  {
    id: 3,
    title: "Обаяшка",
    description: "Да",
    img: "4.svg"
  }
]

export const timeMock: HistoryPart[] = [
  {
    title: "Дневная чистка",
    subTitle: "28.02.2021"
  },
  {
    title: "Вечерняя чистка",
    subTitle: "26.02.2021"
  },
  {
    title: "Вечерняя чистка",
    subTitle: "25.02.2021"
  }
]

export const locationsWithTitle: string[] = [
    "/history",
    "/achievements",
    "/brushing"
]