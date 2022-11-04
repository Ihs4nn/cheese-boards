const db = require("../db/db");
const seed = require("../db/seed")
const { Board, Cheese, User } = require("../models");
const { describe } = require("../models/user.models");

beforeEach(async () => {
    await db.sync({ force: true});
    await seed();
})

describe ("Tests the Board table", () =>{
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


describe ("Tests the Users table", () => {
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

describe("Tests the Cheeses table", () => {
    //Testing first row of Cheese db
    test("Tests if the Cheese title for the first row is correct", async () => {
        const cheeseFirstTitle = await Cheese.findByPk(1);
        expect(cheeseFirstTitle.title).toBe("Parmesan")
    })
    //Testing seventh row of Cheese db
    test("Tests if the Cheese description for the seventh row is correct", async () =>{
        const cheeseSeventhDesc = await Cheese.findByPk(7);
        expect(cheeseSeventhDesc.description).toBe("It is a semi-hard cheese, pale yellow in color, with a texture that ranges from open, supple, and grainy for younger cheeses to dense, firm, and crystalline for more aged cheeses. When aged, its flavor is nutty, smoky, fruity and sweet, while the younger cheeses are more milky and fresh tasting.")
    })
})



//Desvribe for associsations