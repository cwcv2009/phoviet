// src/mocks/handlers.js
import { rest } from "msw";
import categoriesData from "./categories.json";
import itemsData from "./items.json";
import base64Image from "./thumbnails/CategoryThumbnail.png";

function mockDelay(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

export const handlers = [
  ////
  // Handles a POST /login request
  rest.post("/login", (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem("is-authenticated", "true");

    return res(
      // Respond with a 200 status code
      ctx.status(200)
    );
  }),

  // Handles a GET /user request
  rest.get("/user", (req, res, ctx) => {
    // Check if the user is authenticated in this session
    const isAuthenticated = sessionStorage.getItem("is-authenticated");

    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "Not authorized",
        })
      );
    }

    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        username: "admin",
      })
    );
  }),
  ////

  rest.get(`/categories`, (req, res, ctx) => {
    mockDelay(500);
    return res(ctx.status(200), ctx.json(categoriesData));
  }),
  rest.get(`/items`, (req, res, ctx) => {
    mockDelay(1000);
    return res(ctx.status(200), ctx.json(itemsData));
  }),
  rest.get(`/thumbnails/CategoryThumbnail.png`, async (_, res, ctx) => {
    // Convert "base64" image to "ArrayBuffer".
    const imageBuffer = await fetch(base64Image).then((res) =>
      res.arrayBuffer()
    );
    return res(
      ctx.set("Content-Length", imageBuffer.byteLength.toString()),
      ctx.set("Content-Type", "image/png"),
      // Respond with the "ArrayBuffer".
      ctx.body(imageBuffer)
    );
  }),
];
