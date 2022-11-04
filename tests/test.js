const db = require("../db/db");
const seed = require("../db/seed")
const { Board, Cheese, User } = require("../models");

beforeEach(async () => {
    await db.sync({ force: true});
    await seed();
})

describe ("Tests the Board table", () =>{
    //Checks if the Board db has correct rows
    test("Checks if the Board db had correct amount of rows", async () => {
        const boardRow = await Board.count();
        expect(boardRow).toBe(5);
    })
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
    //Checks if the Users db has correct rows
    test("Checks if the Users db had correct amount of rows", async () => {
        const userRow = await User.count();
        expect(userRow).toBe(5);
    })
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
    //Checks if the Cheese db has correct rows
    test("Checks if the Cheese db had correct amount of rows", async () => {
        const cheeseRow = await Cheese.count();
        expect(cheeseRow).toBe(10);
    })
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


//Describe for associsations
describe("Tests associations in the databases", () =>{
    test("Multiple boards can be added to a User", async () =>{
        const oneUser = await User.create({name: "Saffa", email:"SaffaIsGr8@gmail.com"})
        const firstBoard = await Board.create({type:"Blue Cheese", description:"Used for all Blue cheeses like: Gorgonzola, Stilton and Roquefort", rating:3})
        const secondBoard = await Board.create({type:"Cheese-galore", description: "Used for all cheeses", rating:10})
        const thirdBoard = await Board.create({type:"No-Cheese", description:"For all cheese haters!", rating:11})
        await oneUser.addBoards([firstBoard, secondBoard, thirdBoard])
        expect(await oneUser.countBoards()).toBe(3)
    })

    test("One Board can have multiple Cheeses", async () =>{
        //Associating the variables to the boards
        const oneBoard = await Board.findByPk(1);
        //Associating the varible to the cheeses
        const oneCheese = await Cheese.findByPk(1);
        const twoCheese = await Cheese.findByPk(2);
        //Checks if one board can have multiple cheeses and if one cheese can have multiple boards
        await oneBoard.addCheeses([oneCheese, twoCheese])
        expect(await oneBoard.countCheeses()).toBe(2)
    })

    test("One Cheese can have many Boards", async () =>{
        const oneBoard = await Board.findByPk(1)
        const twoBoard = await Board.findByPk(2)
        const oneCheese = await Cheese.findByPk(1)
        await oneCheese.addBoards([oneBoard, twoBoard])
        expect(await oneCheese.countBoards()).toBe(2)
    })
})

describe("Eager Loading tests", () => {
    test("E.L Tests, a Board can be loaded with its Cheeses", async () => {
        const theBoard = await Board.findByPk(3)
        const aCheese = await Cheese.findByPk(9)
        const aSecondCheese = await Cheese.findByPk(4)
        await theBoard.addCheeses([aCheese, aSecondCheese])

        const checker = await Board.findByPk(3, {include: Cheese})
        expect()
    })
})





