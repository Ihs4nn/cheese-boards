const db = require("../db/db");
const seed = require("../db/seed")
const { Board, Cheese, User } = require("../models");

beforeEach(async () => {
    await db.sync({ force: true});
    await seed();
})

describe ("Tests for Board table", () =>{
    test("Tests first row of board", async () => {
        const boardFirstRow = await Board.findByPk(1);
        expect(boardFirstRow.type).toBe("Aged")
    })
})