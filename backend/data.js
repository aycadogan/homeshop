import bcrypt from 'bcryptjs';
const data = {
    users: [
        {
          name: 'example',
          email: 'admin@example.com',
          password: bcrypt.hashSync('123456'),
          isAdmin: true,
        },
        {
          name: 'John',
          email: 'user@example.com',
          password: bcrypt.hashSync('123456'),
          isAdmin: false,
        },
      ],
    products:[
        {
            
            name: 'Grey Lounge Chair',
            slug:'grey-lounge-chair',
            category:'Living Room',
            image:'/images/p1.jpg',
            price: 299,
            countInStock:48,
            brand:'Article',
            rating:4.5,
            numReviews:10,
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, aliquid!'
        },
        {
           
            name: 'White Lounge Chair',
            slug:'white-lounge-chair',
            category:'Living Room',
            image:'/images/p2.jpg',
            price: 199,
            countInStock:48,
            brand:'Article',
            rating:4.5,
            numReviews:10,
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, aliquid!'
        },
        {
           
            name: 'Black Bar Stool',
            slug:'black-bar-stool',
            category:'Kitchen',
            image:'/images/p3.jpg',
            price: 99,
            countInStock:48,
            brand:'Article',
            rating:4.5,
            numReviews:10,
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, aliquid!'
        },
        {
            
            name: 'White Design Chair',
            slug:'white-design-chair',
            category:'Living Room',
            image:'/images/p4.jpg',
            price: 299,
            countInStock:48,
            brand:'Article',
            rating:4.5,
            numReviews:10,
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, aliquid!'
        },
    ]
}

export default data