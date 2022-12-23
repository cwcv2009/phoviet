import { rest } from 'msw';
import categoriesData from './categories.json';
import itemsData from './items.json';

function mockDelay(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

export const handlers = [
    rest.get(`/categories`, (req, res, ctx) => {
        mockDelay(500);
        return res(
            ctx.status(200),
            ctx.json(
                categoriesData
            )
        )
    }),
    rest.get(`/items`, (req, res, ctx) => {
        mockDelay(500);
        return res(
            ctx.status(200),
            ctx.json(
                itemsData
            )
        )
    })
]
