const db = require('./models')
db.products.bulkCreate(
    [
        {description: 'Diamond Square Pinky Ring',
        price:  250,
        photo: 'https://cdn.shopify.com/s/files/1/0409/3470/3263/products/ring_4_wg_1.jpg?v=1666450781&width=600'
    }, 
        {description: 'Diamond Square Pinky Ring',
        price:  250,
        photo: 'https://cdn.shopify.com/s/files/1/0409/3470/3263/products/ring_3_wg_1.jpg?v=1625659155&width=1445'
    },
        {description: 'Pinky Ring',
        price:  200,
        photo: 'https://cdn.shopify.com/s/files/1/0409/3470/3263/products/ring_3_wg_1_aa0da12c-e871-407a-a5f5-25219f6c19cf.jpg?v=1666450747&width=1445'
    },
        {description: 'Personalize your Two-Name Necklace',
        price:  300,
        photo: 'https://cdn.shopify.com/s/files/1/0409/3470/3263/products/pendant_2-3_wg_1.jpg?v=1628773263&width=1445'
    },
        {description: 'Customize your Pavé Diamond Letter Necklace',
        price:  350,
        photo: 'https://cdn.shopify.com/s/files/1/0409/3470/3263/products/nECKLACELETTERwg.jpg?v=1612849235&width=1445'
    },
        {description: 'Customize your Pavé Diamond Pair of Earrings',
        price:  200,
        photo: 'https://cdn.shopify.com/s/files/1/0409/3470/3263/products/pairwg_557dbace-b715-4635-8974-5e174794bc71.png?v=1666450674&width=600'
},

        {description: 'Customize your Pavé Diamond Name Necklace',
        price:  400,
        photo: 'https://cdn.shopify.com/s/files/1/0409/3470/3263/products/wgv3.png?v=1663807471&width=600'
}, 

        {description: 'Customize your Name Brooch',
        price:  100,
        photo: 'https://cdn.shopify.com/s/files/1/0409/3470/3263/products/brooch_2_v3_wg_2.jpg?v=1617895317&width=600'
          
    
    }
]
 ).then(() => console.log('user data created!'))