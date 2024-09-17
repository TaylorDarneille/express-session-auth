const db = require('./models')

async function createEvent() {
    try {
        await db.products.bulkCreate(
            [{

                productName: "Luxurious white musk",
                productDescription:"One of the best types of white musk, stability and high quality!",
                productPrice:25
            },
                {
                    productName: "Dehn Aoud Sioufi",
                    productDescription:"Painted Al-Sioufi oud with its good, fragrant and stable scent.One of the most requested oils.It has a sharp flavour!",
                    productPrice:30
                 },
                 {
                    productName: "Cambodian agarwood",
                    productDescription:"Sweet smell in addition to the smell of the original Cambodian Incense.Very suitable for your personal daily use.It has a fragrant flavour!",
                    productPrice:22
                 },
                 {
                    productName: "Wooden incense burner",
                    productDescription:"Handmade wooden incense burner.High quality.Suitable for cutting large coal!",
                    productPrice:10
                 },
                 {
                    productName: "Saffron",
                    productDescription:"Saffron is the original Iranian saffron.!",
                    productPrice:15
                 },
                 {
                    productName: "Moroccan Oud (Royal)",
                    productDescription:"Oud Moroki Mohsen.Smell fragrant and lasting, whether in clothes or at home.Suitable for daily and personal conditioning!",
                    productPrice:20
                 },
                 {
                    productName: "9mm amber dust",
                    productDescription:"pyramid dust pool.Bead Size: 9mm.Number of beads: 56 beads!",
                    productPrice:35
                 },
                 {
                    productName: "Al Fakhama Oud Box (50 grams)",
                    productDescription:"The luxury oud box contains 50 grams, which is equivalent to 4 tols and a quarter of Vietnamese oud chips.!",
                    productPrice:45
                 },
                 {
                    productName: "luxury box for muski",
                    productDescription:"The luxury box for musk contains 4 flavors of musk.Raspberry - pomegranate - mango - vanilla. Includes gift card (written by the customer)!",
                    productPrice:55
                 },
                {
                    productName: "Dehn Aoud Trad",
                    productDescription:"Pure agarwood oil from Trad region in Thailand.One of the best selling paints.It has a fragrant flavour!",
                    productPrice:32
                    
            }]
        )
        // console.log("nigga"+event_type[2],event_description,event_date,price)
    } catch(err) {
        console.log(err)
    }
}
createEvent()