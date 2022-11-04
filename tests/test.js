const db = require("../db/db");
const seed = require("../db/seed")
const { Board, Cheese, User } = require("../models");

beforeEach(async () => {
    await db.sync({ force: true});
    await seed();
})

describe ("Tests for Board table", () =>{
    // Testing if the first row is correct type
    test("Tests first row of board is the correct type", async () => {
        const boardFirstRow = await Board.findByPk(1);
        expect(boardFirstRow.type).toBe("Aged");
    })
    // Testing if the second row is the correct description
    test("Tests second row of board is the correct description", async () => {
        const boardSecondRow = await Board.findByPk(2);
        expect(boardSecondRow.description).toBe("Used for all soft cheeses such as: Brie, Camembert, Epoisses, Burrata and Fresh Buffalo Mozzarella.");
    })
    //Testing if the third row is the correct rating
    test("Tests third row of board is the correct rating", async () =>{
        const boardThirdRow = await Board.findByPk(3);
        expect(boardThirdRow.rating).toBe(4)
    })
})


describe ("Tests for Users", () => {
    //Tests the first row of User, checks if their name is correct
    test("Tests if first row of Users has the correct name", async () =>{
        const userFirstName = await User.findByPk(1);
        expect(userFirstName.name).toBe("Ihsan")
    })
    //Tests the fourth row of User, checks if their email is correct
    test("Tests if the fourth row of Users has the correct email", async () => {
        const userFourthEmail = await User.findByPk(4);
        expect(userFourthEmail.email).toBe("SashaIsGr8@gmail.com")
    })
})


//Describe for cheeses
//Tests if the type is correct
//Tests if the description is correct


//Desvribe for associsations