import { cardArray } from "../constants";

/**
 * Слой данных для работы с товарами
 * В будущем можно заменить на API-запросы
 */

// Получить все товары
export const getAllProducts = () => {
  return [...cardArray];
};

// Найти товар по ID
export const getProductById = (id) => {
  return cardArray.find((p) => p.id === +id);
};

// Поиск товаров по тексту
export const searchProducts = (searchText) => {
  if (!searchText.trim()) {
    return [...cardArray];
  }

  const lowerValue = searchText.toLowerCase();
  return cardArray.filter(
    (item) =>
      item.title.toLowerCase().includes(lowerValue) ||
      item.prise.toLowerCase().includes(lowerValue)
  );
};

// Получить количество товаров
export const getProductCount = () => {
  return cardArray.length;
};
