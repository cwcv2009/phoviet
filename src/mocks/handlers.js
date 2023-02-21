// src/mocks/handlers.js
import { rest } from "msw";
import categoriesData from "./categories.json";
import itemsData from "./items.json";

function mockDelay(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

export const handlers = [
  rest.get(`/categories`, (req, res, ctx) => {
    console.log("categories handler one");
    mockDelay(5500);
    console.log("categories handler two");
    return res(ctx.status(200), ctx.json(categoriesData));
  }),
  rest.get(`/items`, (req, res, ctx) => {
    console.log("items handler one");
    mockDelay(3000);
    console.log("items handler two");
    return res(ctx.status(200), ctx.json(itemsData));
  }),
];
