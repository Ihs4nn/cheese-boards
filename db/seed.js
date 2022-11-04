const { User, Board, Cheese } = require('../models')
const db = require('./db')

async function seed(){
    await db.sync({
        force: true
    })

    await Cheese.bulkCreate([
        {
            title: "Parmesan",
            description: "The flavor power of parmesan can take a savory dish from acceptable to amazing with a dusting of this delicious cheese. Lots of words are used to describe parmesan: rich, tangy, nutty, sharp, complex, fruity, and bold to name a few. It has a somewhat gritty texture and a strong umami taste."
        },
        {
            title: "Pecorino",
            description: "Comes in large cylinders with a hard, yellow rind encasing a yellowish-white interior — is the best known of the genre. Similar to its cousin, Parmigiano Reggiano (parmesan), it's a hard, dry cheese good for grating. Like parmesan, pecorino is used mainly in cooking."
        },
        {
            title: "Cheddar",
            description: "The texture is slightly buttery, moist, and a little melty. It's truly a versatile crowd-pleaser. Aged cheddars become more nutty, crumbly, and sharp. During the aging process the cheese develops a slightly tangier finish, some earthy notes, and some hard salt-like crystals that add a slight crunch to each bite."
        },
        {
            title: "Asiago",
            description: "Asiago is a semi-hard cow's milk cheese that originated in Italy. Depending on how long this versatile cheese is aged, it can assume a variety of textures. Whether you prefer your cheese nice and smooth or enjoy a more crumbly texture, Asiago is the cheese every cheese lover can indulge in."
        },
        {
            title: "Gruyere",
            description: "Gruyère is a firm yellow Swiss cheese. It is named after the town of Gruyères in Switzerland. Gruyère is generally aged for six months or longer and is made from whole cow's milk. It features very few small eyes (or holes), an unusual characteristic for Swiss cheese."
        },
        {
            title: "Gouda",
            description: "Typically made from cow's milk, this semi-hard cheese is characterised by its aromatic and caramel-like flavour combined with its dense and springy texture. Hints of nuts with sweet and creamy notes embrace your palate in a graceful sensation and, depending on the age, the finish ranges from smooth to sharp."
        },
        {
            title: "Comte",
            description: "It is a semi-hard cheese, pale yellow in color, with a texture that ranges from open, supple, and grainy for younger cheeses to dense, firm, and crystalline for more aged cheeses. When aged, its flavor is nutty, smoky, fruity and sweet, while the younger cheeses are more milky and fresh tasting."
        },
        {
            title: "Swiss",
            description: "Swiss cheese is sweet, mild, and nutty—everything an alpine-style cheese should be! When you first pick up a beautiful slice of swiss, you'll notice its slightly yellow color and nutty aroma. Upon tasting it, you may appreciate how sweet and smooth swiss is."
        },
        {
            title: "Camembert",
            description: "Camembert cheese, classic cow's-milk cheese of Normandy, named for a village in that region; its characteristic creamy, ivory-coloured interior and downy white surface, resembling that of Brie, result from the Penicillium camemberti mold with which the curd is treated."
        },
        {
            title: "Brie",
            description: "The Queen of Cheeses. Acclaimed as one of the world's great cheeses - in fact, often called the “Queen of Cheeses” - velvety French Brie is characterized by a downy-white edible rind and a cream-colored, buttery-soft interior that oozes at the peak of ripeness."
        },
    ])

    await User.bulkCreate([
        {
            name: "Ihsan",
            email: "IhsanIsGr8@gmail.com"
        },
        {
            name: "Hannah",
            email: "HannahIsGr8@gmail.com"
        },
        {
            name: "Bradley",
            email: "BradleyIsGr8@gmail.com"
        },
        {
            name: "Sasha",
            email: "SashaIsGr8@gmail.com"
        },
        {
            name: "Esgrid",
            email: "EsgridIsGr8@gmail.com"
        }
    ])

    await Board.bulkCreate([
        {
            type: "Aged",
            description: "Used for all aged cheeses such as:  Gouda, Sharp Cheddar and Gruyere.",
            rating: 5
        },
        {
            type: "Soft",
            description: "Used for all soft cheeses such as: Brie, Camembert, Epoisses, Burrata and Fresh Buffalo Mozzarella.",
            rating: 8
        },
        {
            type: "Crumbly",
            description: "Used for all crumbly cheeses such as: Goat and Feta Cheese",
            rating: 4
        },
        {
            type: "Firm",
            description: "Used for all firm cheeses such as: Parmigiano Reggiano, Manchego and Gouda.",
            rating: 6
        },
        {
            type: "Smoked",
            description: "Used for all smoked cheeses such as: Smoked Gouda, Provolone, and Cheddar.",
            rating: 7
        }
    ])

}

seed()