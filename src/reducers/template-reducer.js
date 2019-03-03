import { SET_LINKS } from "../constants/constants";

const initialState = {
  links: [
    { route: "/about_company", text: "О компании" },
    { route: "/objects", text: "Объекты" },
    { route: "/reviews", text: "Отзывы" },
    { route: "/delivery", text: "Доставка" },
    { route: "/video", text: "Видео" },
    { route: "/contacts", text: "Контакты" },
  ],
  localization: "ru",
  shopMenu: [
    { img: "hover.png", text: "Вентиляция и кондиционирование" },
    { img: "fire.png", text: "Отопление" },
    { img: "sun.png", text: "Альтернативаная энергетика" },
    { img: "water.png", text: "Водоснабжение" },
    { img: "cleaners.png", text: "Осушители, очистители, увлажнители" },
    { img: "light.png", text: "Электричество" },
    { img: "shop.png", text: "Акции" },
  ],
  categoryInfo: {
    category: "Конденсационные котлы отопления",
    filters: [
      {
        title: "Производитель",
        options: [
          { name: "Proterm", value: "Protherm" },
          { name: "Vailliant", value: "Vailliant" },
          { name: "Vissmann", value: "Vissmann" },
        ],
      },
      {
        title: "Номинальная тепловая мощность",
        options: [
          { name: "Мeнее 10", value: [0, 9] },
          { name: "10-25", value: [10, 25] },
          { name: "26-39", value: [26, 39] },
          { name: "40-60", value: [40, 60] },
          { name: "Свыше 60", value: [61, 100000] },
        ],
      },
      {
        title: "Тип дымохода",
        options: [{ name: "Дымоходный", value: "Дымоходный" }, { name: "Турбированный", value: "Турбированный" }],
      },
      {
        title: "Страна производитель",
        options: [
          { name: "Чехия", value: "Чехия" },
          { name: "Германия", value: "Германия" },
          { name: "Словакия", value: "Словакия" },
        ],
      },
      {
        title: "Количество контуров",
        options: [{ name: "5", value: 5 }, { name: "10", value: 10 }, { name: "15", value: 15 }],
      },
    ],
  },
  productsInfo: {
    totalCountOfProducts: 162,
    products: [
      {
        id: "1",
        name: "Вентилятор для ванной Maico ER 60",
        image: "product.png",
        category: "Конденсационные котлы отопления",
        price: 6300,
        rating: 4,
        options: [
          { name: "Производитель", value: "Vailliant" },
          { name: "Номинальная тепловая мощность", value: 25 },
          { name: "Тип дымохода", value: "Дымоходный" },
          { name: "Страна производитель", value: "Германия" },
          { name: "Количество контуров", value: 5 },
        ],
      },
      {
        id: "2",
        name: "Вентилятор для ванной Elicent Elegance 100",
        image: "product.png",
        category: "Конденсационные котлы отопления",
        price: 1352,
        rating: 4,
        options: [
          { name: "Производитель", value: "Protherm" },
          { name: "Номинальная тепловая мощность", value: 30 },
          { name: "Тип дымохода", value: "Турбированный" },
          { name: "Страна производитель", value: "Чехия" },
          { name: "Количество контуров", value: 10 },
        ],
      },
      {
        id: "3",
        name: "Вентилятор для ванной Maico ECA 100 IPRO",
        image: "product.png",
        category: "Конденсационные котлы отопления",
        price: 4435,
        rating: 4,
        options: [
          { name: "Производитель", value: "Vissmann" },
          { name: "Номинальная тепловая мощность", value: 40 },
          { name: "Тип дымохода", value: "Дымоходный" },
          { name: "Страна производитель", value: "Словакия" },
          { name: "Количество контуров", value: 15 },
        ],
      },
      {
        id: "4",
        name: "Komfovent CF 250 V+Пульт С4",
        image: "product.png",
        category: "Конденсационные котлы отопления",
        price: 62030,
        rating: 4,
        options: [
          { name: "Производитель", value: "Vailliant" },
          { name: "Номинальная тепловая мощность", value: 200 },
          { name: "Тип дымохода", value: "Турбированный" },
          { name: "Страна производитель", value: "Германия" },
          { name: "Количество контуров", value: 15 },
        ],
      },
      {
        id: "5",
        name: "Вентилятор для ванной Elicent Elegance 100",
        image: "product.png",
        category: "Конденсационные котлы отопления",
        price: 1352,
        rating: 4,
        options: [
          { name: "Производитель", value: "Protherm" },
          { name: "Номинальная тепловая мощность", value: 8 },
          { name: "Тип дымохода", value: "Дымоходный" },
          { name: "Страна производитель", value: "Словакия" },
          { name: "Количество контуров", value: 5 },
        ],
      },
      {
        id: "6",
        name: "Вентилятор для ванной Maico ECA 100 IPRO",
        image: "product.png",
        category: "Конденсационные котлы отопления",
        price: 4435,
        rating: 4,
        options: [
          { name: "Производитель", value: "Vissmann" },
          { name: "Номинальная тепловая мощность", value: 40 },
          { name: "Тип дымохода", value: "Дымоходный" },
          { name: "Страна производитель", value: "Словакия" },
          { name: "Количество контуров", value: 15 },
        ],
      },
      {
        id: "7",
        name: "Komfovent CF 250 V+Пульт С4",
        image: "product.png",
        category: "Конденсационные котлы отопления",
        price: 62030,
        rating: 4,
        options: [
          { name: "Производитель", value: "Vailliant" },
          { name: "Номинальная тепловая мощность", value: 200 },
          { name: "Тип дымохода", value: "Турбированный" },
          { name: "Страна производитель", value: "Германия" },
          { name: "Количество контуров", value: 15 },
        ],
      },
      {
        id: "8",
        name: "Вентилятор для ванной Elicent Elegance 100",
        image: "product.png",
        category: "Конденсационные котлы отопления",
        price: 1352,
        rating: 4,
        options: [
          { name: "Производитель", value: "Protherm" },
          { name: "Номинальная тепловая мощность", value: 8 },
          { name: "Тип дымохода", value: "Дымоходный" },
          { name: "Страна производитель", value: "Словакия" },
          { name: "Количество контуров", value: 5 },
        ],
      },
      {
        id: "9",
        name: "Вентилятор для ванной Maico ECA 100 IPRO",
        image: "product.png",
        category: "Конденсационные котлы отопления",
        price: 4435,
        rating: 4,
        options: [
          { name: "Производитель", value: "Vissmann" },
          { name: "Номинальная тепловая мощность", value: 40 },
          { name: "Тип дымохода", value: "Дымоходный" },
          { name: "Страна производитель", value: "Словакия" },
          { name: "Количество контуров", value: 15 },
        ],
      },
    ],
  },
};

export function templateReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LINKS: {
      return { ...state, links: action.payload };
    }
    default:
      return state;
  }
}
