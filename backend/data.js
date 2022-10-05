import bcrypt from 'bcryptjs'

const data = {
  users: [
    {
      name: 'ejiofor james',
      email: 'ejioforjames12@gmail.com',
      username: 'ejiofor12',
      password: bcrypt.hashSync('123456')
    }
  ],
  products: [
    {
      name: 'camera A23',
      slug: 'camera A23',
      component: 'newArrivalComponent',
      category: 'phone',
      image1: '/images/default-1.jpg',
      image2: '/images/default-2.jpg',
      image3: '/images/default-3.jpg',
      image4: '/images/default-4.jpg',
      price: 1200,
      countInStock: 1,
      brand: 'samsung',
      numReviews: 10,
      description: 'high quality camera',
      deepInfo:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.',
      specifications: {
        processor: 'Intel Core i5',
        storageCapacity: '500GB',
        graphicsCard: 'Intel',
      },
      reviews: [
        {
          name: 'Solomon James',
          review:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore dolorem a unde modi iste odio amet, fugit fuga aliquam, voluptatem maiores animi dolor nulla magnam ea! Dignissimos aspernatur cumque nam quod sint provident modi alias culpa, inventore deserunt accusantium amet earum soluta consequatur quasi eum eius laboriosam, maiores praesentium explicabo enim dolores quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam officia, saepe repellat.',
          rating: 1.0
        },
        {
          name: 'Akukwe Justin',
          review:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore dolorem a unde modi iste odio amet, fugit fuga aliquam, voluptatem maiores animi dolor nulla magnam ea! Dignissimos aspernatur cumque nam quod sint provident modi alias culpa, inventore deserunt accusantium amet earum soluta consequatur quasi eum eius laboriosam, maiores praesentium explicabo enim dolores quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam officia, saepe repellat.',
          rating: 1.0
        },
        {
          name: 'Issa Fuad',
          review:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore dolorem a unde modi iste odio amet, fugit fuga aliquam, voluptatem maiores animi dolor nulla magnam ea! Dignissimos aspernatur cumque nam quod sint provident modi alias culpa, inventore deserunt accusantium amet earum soluta consequatur quasi eum eius laboriosam, maiores praesentium explicabo enim dolores quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam officia, saepe repellat.',
          rating: 1.0
        },
      ],
    },
    {
      name: 'camera A56',
      slug: 'camera A56',
      component: 'newArrivalComponent',
      category: 'PAccessories',
      image1: '/images/default-2.jpg',
      image2: '/images/default-3.jpg',
      image3: '/images/default-1.jpg',
      image4: '/images/default-4.jpg',
      price: 1500,
      countInStock: 0,
      brand: 'dell',
      numReviews: 10,
      description: 'high quality camera',
      deepInfo:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.',
      specifications: {
        processor: 'Intel Core i5',
        storageCapacity: '500GB',
        graphicsCard: 'Intel',
      },
      reviews: [
        {
          name: 'Solomon James',
          review:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore dolorem a unde modi iste odio amet, fugit fuga aliquam, voluptatem maiores animi dolor nulla magnam ea! Dignissimos aspernatur cumque nam quod sint provident modi alias culpa, inventore deserunt accusantium amet earum soluta consequatur quasi eum eius laboriosam, maiores praesentium explicabo enim dolores quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam officia, saepe repellat.',
          rating: 5.0
        },
        {
          name: 'Akukwe Justin',
          review:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore dolorem a unde modi iste odio amet, fugit fuga aliquam, voluptatem maiores animi dolor nulla magnam ea! Dignissimos aspernatur cumque nam quod sint provident modi alias culpa, inventore deserunt accusantium amet earum soluta consequatur quasi eum eius laboriosam, maiores praesentium explicabo enim dolores quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam officia, saepe repellat.',
          rating: 5.0
        },
        {
          name: 'Issa Fuad',
          review:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore dolorem a unde modi iste odio amet, fugit fuga aliquam, voluptatem maiores animi dolor nulla magnam ea! Dignissimos aspernatur cumque nam quod sint provident modi alias culpa, inventore deserunt accusantium amet earum soluta consequatur quasi eum eius laboriosam, maiores praesentium explicabo enim dolores quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam officia, saepe repellat.',
          rating: 5.0
        },
      ],
    },
    {
      name: 'Techno cam5',
      slug: 'Techno cam5',
      component: 'newArrivalComponent',
      category: 'laptop',
      image1: '/images/default-3.jpg',
      image2: '/images/default-4.jpg',
      image3: '/images/default-5.jpg',
      image4: '/images/default-6.jpg',
      price: 2000,
      countInStock: 2,
      brand: 'dell',
      numReviews: 10,
      description: 'high quality drone',
      deepInfo:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.',
      specifications: {
        processor: 'Intel Core i5',
        storageCapacity: '500GB',
        graphicsCard: 'Intel',
      },
      reviews: [
        {
          name: 'Solomon James',
          review:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore dolorem a unde modi iste odio amet, fugit fuga aliquam, voluptatem maiores animi dolor nulla magnam ea! Dignissimos aspernatur cumque nam quod sint provident modi alias culpa, inventore deserunt accusantium amet earum soluta consequatur quasi eum eius laboriosam, maiores praesentium explicabo enim dolores quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam officia, saepe repellat.',
          rating: 5.0
        },
        {
          name: 'Akukwe Justin',
          review:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore dolorem a unde modi iste odio amet, fugit fuga aliquam, voluptatem maiores animi dolor nulla magnam ea! Dignissimos aspernatur cumque nam quod sint provident modi alias culpa, inventore deserunt accusantium amet earum soluta consequatur quasi eum eius laboriosam, maiores praesentium explicabo enim dolores quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam officia, saepe repellat.',
          rating: 5.0
        },
        {
          name: 'Issa Fuad',
          review:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore dolorem a unde modi iste odio amet, fugit fuga aliquam, voluptatem maiores animi dolor nulla magnam ea! Dignissimos aspernatur cumque nam quod sint provident modi alias culpa, inventore deserunt accusantium amet earum soluta consequatur quasi eum eius laboriosam, maiores praesentium explicabo enim dolores quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam officia, saepe repellat.',
          rating: 3.0
        },
        {
          name: 'Issa Fuad',
          review:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore dolorem a unde modi iste odio amet, fugit fuga aliquam, voluptatem maiores animi dolor nulla magnam ea! Dignissimos aspernatur cumque nam quod sint provident modi alias culpa, inventore deserunt accusantium amet earum soluta consequatur quasi eum eius laboriosam, maiores praesentium explicabo enim dolores quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam officia, saepe repellat.',
          rating: 5.0
        },
      ],
    },
    {
      name: 'jugger A23',
      slug: 'jugger A23',
      component: 'newArrivalComponent',
      category: 'LAccessories',
      image1: '/images/default-4.jpg',
      image2: '/images/default-5.jpg',
      image3: '/images/default-6.jpg',
      image4: '/images/default-7.jpg',
      price: 200,
      countInStock: 15,
      brand: 'dell',
      numReviews: 10,
      description: 'high quality jug',
      deepInfo:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.',
      specifications: {
        processor: 'Intel Core i5',
        storageCapacity: '500GB',
        graphicsCard: 'Intel',
      },
      reviews: [
        {
          name: 'Solomon James',
          review:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore dolorem a unde modi iste odio amet, fugit fuga aliquam, voluptatem maiores animi dolor nulla magnam ea! Dignissimos aspernatur cumque nam quod sint provident modi alias culpa, inventore deserunt accusantium amet earum soluta consequatur quasi eum eius laboriosam, maiores praesentium explicabo enim dolores quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam officia, saepe repellat.',
          rating: 2.0
        },
        {
          name: 'Akukwe Justin',
          review:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore dolorem a unde modi iste odio amet, fugit fuga aliquam, voluptatem maiores animi dolor nulla magnam ea! Dignissimos aspernatur cumque nam quod sint provident modi alias culpa, inventore deserunt accusantium amet earum soluta consequatur quasi eum eius laboriosam, maiores praesentium explicabo enim dolores quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam officia, saepe repellat.',
          rating: 2.0
        },
        {
          name: 'Issa Fuad',
          review:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore dolorem a unde modi iste odio amet, fugit fuga aliquam, voluptatem maiores animi dolor nulla magnam ea! Dignissimos aspernatur cumque nam quod sint provident modi alias culpa, inventore deserunt accusantium amet earum soluta consequatur quasi eum eius laboriosam, maiores praesentium explicabo enim dolores quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam officia, saepe repellat.',
          rating: 5.0
        },
      ],
    },
    {
      name: 'tecno camon12',
      slug: 'tecno camon12',
      component: 'newArrivalComponent',
      category: 'television',
      image1: '/images/default-5.jpg',
      image2: '/images/default-6.jpg',
      image3: '/images/default-7.jpg',
      image4: '/images/default-8.jpg',
      price: 5000,
      countInStock: 5,
      brand: 'tecno',
      numReviews: 10,
      description: 'high quality phone',
      deepInfo:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.',
      specifications: {
        processor: 'Intel Core i5',
        storageCapacity: '500GB',
        graphicsCard: 'Intel',
      },
      reviews: [
        {
          name: 'Solomon James',
          review:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore dolorem a unde modi iste odio amet, fugit fuga aliquam, voluptatem maiores animi dolor nulla magnam ea! Dignissimos aspernatur cumque nam quod sint provident modi alias culpa, inventore deserunt accusantium amet earum soluta consequatur quasi eum eius laboriosam, maiores praesentium explicabo enim dolores quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam officia, saepe repellat.',
          rating:3.0
        },
        {
          name: 'Akukwe Justin',
          review:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore dolorem a unde modi iste odio amet, fugit fuga aliquam, voluptatem maiores animi dolor nulla magnam ea! Dignissimos aspernatur cumque nam quod sint provident modi alias culpa, inventore deserunt accusantium amet earum soluta consequatur quasi eum eius laboriosam, maiores praesentium explicabo enim dolores quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam officia, saepe repellat.',
          rating: 4.0
        },
        {
          name: 'Issa Fuad',
          review:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore dolorem a unde modi iste odio amet, fugit fuga aliquam, voluptatem maiores animi dolor nulla magnam ea! Dignissimos aspernatur cumque nam quod sint provident modi alias culpa, inventore deserunt accusantium amet earum soluta consequatur quasi eum eius laboriosam, maiores praesentium explicabo enim dolores quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam officia, saepe repellat.',
          rating:2.0
        },
      ],
    },
    {
      name: 'samsung s10',
      slug: 'samsung s10',
      component: 'newArrivalComponent',
      category: 'phone',
      image1: '/images/default-6.jpg',
      image2: '/images/default-7.jpg',
      image3: '/images/default-8.jpg',
      image4: '/images/default-9.jpg',
      price: 7000,
      countInStock: 4,
      brand: 'samsung',
      numReviews: 10,
      description: 'high quality phone',
      deepInfo:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.',
      specifications: {
        processor: 'Intel Core i5',
        storageCapacity: '500GB',
        graphicsCard: 'Intel',
      },
      reviews: [
        {
          name: 'Solomon James',
          review:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore dolorem a unde modi iste odio amet, fugit fuga aliquam, voluptatem maiores animi dolor nulla magnam ea! Dignissimos aspernatur cumque nam quod sint provident modi alias culpa, inventore deserunt accusantium amet earum soluta consequatur quasi eum eius laboriosam, maiores praesentium explicabo enim dolores quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam officia, saepe repellat.',
          rating: 5.0
        },
        {
          name: 'Akukwe Justin',
          review:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore dolorem a unde modi iste odio amet, fugit fuga aliquam, voluptatem maiores animi dolor nulla magnam ea! Dignissimos aspernatur cumque nam quod sint provident modi alias culpa, inventore deserunt accusantium amet earum soluta consequatur quasi eum eius laboriosam, maiores praesentium explicabo enim dolores quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam officia, saepe repellat.',
          rating: 2.0
        },
        {
          name: 'Issa Fuad',
          review:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore dolorem a unde modi iste odio amet, fugit fuga aliquam, voluptatem maiores animi dolor nulla magnam ea! Dignissimos aspernatur cumque nam quod sint provident modi alias culpa, inventore deserunt accusantium amet earum soluta consequatur quasi eum eius laboriosam, maiores praesentium explicabo enim dolores quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam officia, saepe repellat.',
          rating:3.0
        },
      ],
    },
    {
      name: 'speaker t15',
      slug: 'speaker t15',
      component: 'bestComponent',
      category: 'PAccessories',
      image1: '/images/default-7.jpg',
      image2: '/images/default-8.jpg',
      image3: '/images/default-9.jpg',
      image4: '/images/default-10.jpg',
      price: 4000,
      countInStock: 6,
      brand: 'hp',
      numReviews: 10,
      description: 'high quality speaker',
      deepInfo:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.',
      specifications: {
        processor: 'Intel Core i5',
        storageCapacity: '500GB',
        graphicsCard: 'Intel',
      },
      reviews: [
        {
          name: 'Solomon James',
          review:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore dolorem a unde modi iste odio amet, fugit fuga aliquam, voluptatem maiores animi dolor nulla magnam ea! Dignissimos aspernatur cumque nam quod sint provident modi alias culpa, inventore deserunt accusantium amet earum soluta consequatur quasi eum eius laboriosam, maiores praesentium explicabo enim dolores quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam officia, saepe repellat.',
          rating: 3.0
        },
        {
          name: 'Akukwe Justin',
          review:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore dolorem a unde modi iste odio amet, fugit fuga aliquam, voluptatem maiores animi dolor nulla magnam ea! Dignissimos aspernatur cumque nam quod sint provident modi alias culpa, inventore deserunt accusantium amet earum soluta consequatur quasi eum eius laboriosam, maiores praesentium explicabo enim dolores quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam officia, saepe repellat.',
          rating: 1.0
        },
        {
          name: 'Issa Fuad',
          review:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore dolorem a unde modi iste odio amet, fugit fuga aliquam, voluptatem maiores animi dolor nulla magnam ea! Dignissimos aspernatur cumque nam quod sint provident modi alias culpa, inventore deserunt accusantium amet earum soluta consequatur quasi eum eius laboriosam, maiores praesentium explicabo enim dolores quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam officia, saepe repellat.',
          rating: 4.0
        },
      ],
    },
    {
      name: 'camera s15',
      slug: 'camera s15',
      component: 'bestComponent',
      category: 'laptop',
      image1: '/images/default-8.jpg',
      image2: '/images/default-9.jpg',
      image3: '/images/default-10.jpg',
      image4: '/images/default-11.jpg',
      price: 4000,
      countInStock: 15,
      brand: 'samsung',
      numReviews: 10,
      description: 'high quality camera',
      deepInfo:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.',
      specifications: {
        processor: 'Intel Core i5',
        storageCapacity: '500GB',
        graphicsCard: 'Intel',
      },
      reviews: [
        {
          name: 'Solomon James',
          review:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore dolorem a unde modi iste odio amet, fugit fuga aliquam, voluptatem maiores animi dolor nulla magnam ea! Dignissimos aspernatur cumque nam quod sint provident modi alias culpa, inventore deserunt accusantium amet earum soluta consequatur quasi eum eius laboriosam, maiores praesentium explicabo enim dolores quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam officia, saepe repellat.',
          rating:2.0
        },
        {
          name: 'Akukwe Justin',
          review:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore dolorem a unde modi iste odio amet, fugit fuga aliquam, voluptatem maiores animi dolor nulla magnam ea! Dignissimos aspernatur cumque nam quod sint provident modi alias culpa, inventore deserunt accusantium amet earum soluta consequatur quasi eum eius laboriosam, maiores praesentium explicabo enim dolores quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam officia, saepe repellat.',
          rating:3.0
        },
        {
          name: 'Issa Fuad',
          review:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore dolorem a unde modi iste odio amet, fugit fuga aliquam, voluptatem maiores animi dolor nulla magnam ea! Dignissimos aspernatur cumque nam quod sint provident modi alias culpa, inventore deserunt accusantium amet earum soluta consequatur quasi eum eius laboriosam, maiores praesentium explicabo enim dolores quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam officia, saepe repellat.',
          rating: 5.0
        },
      ],
    },
    {
      name: 'dell 1558',
      slug: 'dell 1558',
      component: 'bestComponent',
      category: 'LAccessories',
      image1: '/images/default-9.jpg',
      image2: '/images/default-10.jpg',
      image3: '/images/default-11.jpg',
      image4: '/images/default-12.jpg',
      price: 40000,
      countInStock: 1,
      brand: 'dell',
      numReviews: 10,
      description: 'high quality laptop',
      deepInfo:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.',
      specifications: {
        processor: 'Intel Core i5',
        storageCapacity: '500GB',
        graphicsCard: 'Intel',
      },
      reviews: [
        {
          name: 'Solomon James',
          review:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore dolorem a unde modi iste odio amet, fugit fuga aliquam, voluptatem maiores animi dolor nulla magnam ea! Dignissimos aspernatur cumque nam quod sint provident modi alias culpa, inventore deserunt accusantium amet earum soluta consequatur quasi eum eius laboriosam, maiores praesentium explicabo enim dolores quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam officia, saepe repellat.',
          rating: 5.0
        },
        {
          name: 'Akukwe Justin',
          review:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore dolorem a unde modi iste odio amet, fugit fuga aliquam, voluptatem maiores animi dolor nulla magnam ea! Dignissimos aspernatur cumque nam quod sint provident modi alias culpa, inventore deserunt accusantium amet earum soluta consequatur quasi eum eius laboriosam, maiores praesentium explicabo enim dolores quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam officia, saepe repellat.',
          rating: 4.0
        },
        {
          name: 'Issa Fuad',
          review:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore dolorem a unde modi iste odio amet, fugit fuga aliquam, voluptatem maiores animi dolor nulla magnam ea! Dignissimos aspernatur cumque nam quod sint provident modi alias culpa, inventore deserunt accusantium amet earum soluta consequatur quasi eum eius laboriosam, maiores praesentium explicabo enim dolores quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam officia, saepe repellat.',
          rating: 3.0
        },
      ],
    },
    {
      name: 'Jambox s15',
      slug: 'Jambox s15',
      component: 'bestComponent',
      category: 'television',
      image1: '/images/default-10.jpg',
      image2: '/images/default-3.jpg',
      image3: '/images/default-4.jpg',
      image4: '/images/default-5.jpg',
      price: 15000,
      countInStock: 4,
      brand: 'dell',
      numReviews: 10,
      description: 'high quality speaker',
      deepInfo:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.',
      specifications: {
        processor: 'Intel Core i5',
        storageCapacity: '500GB',
        graphicsCard: 'Intel',
      },
      reviews: [
        {
          name: 'Solomon James',
          review:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore dolorem a unde modi iste odio amet, fugit fuga aliquam, voluptatem maiores animi dolor nulla magnam ea! Dignissimos aspernatur cumque nam quod sint provident modi alias culpa, inventore deserunt accusantium amet earum soluta consequatur quasi eum eius laboriosam, maiores praesentium explicabo enim dolores quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam officia, saepe repellat.',
          rating: 4.0
        },
        {
          name: 'Akukwe Justin',
          review:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore dolorem a unde modi iste odio amet, fugit fuga aliquam, voluptatem maiores animi dolor nulla magnam ea! Dignissimos aspernatur cumque nam quod sint provident modi alias culpa, inventore deserunt accusantium amet earum soluta consequatur quasi eum eius laboriosam, maiores praesentium explicabo enim dolores quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam officia, saepe repellat.',
          rating: 2.0
        },
        {
          name: 'Issa Fuad',
          review:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore dolorem a unde modi iste odio amet, fugit fuga aliquam, voluptatem maiores animi dolor nulla magnam ea! Dignissimos aspernatur cumque nam quod sint provident modi alias culpa, inventore deserunt accusantium amet earum soluta consequatur quasi eum eius laboriosam, maiores praesentium explicabo enim dolores quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam officia, saepe repellat.',
          rating: 5.0
        },
      ],
    },
    {
      name: 'camera y10',
      slug: 'camera y10',
      component: 'bestComponent',
      category: 'phone',
      image1: '/images/default-11.jpg',
      image2: '/images/default-6.jpg',
      image3: '/images/default-7.jpg',
      image4: '/images/default-8.jpg',
      price: 8000,
      countInStock: 7,
      brand: 'samsung',
      numReviews: 10,
      description: 'high quality speaker',
      deepInfo:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.',
      specifications: {
        processor: 'Intel Core i5',
        storageCapacity: '500GB',
        graphicsCard: 'Intel',
      },
      reviews: [
        {
          name: 'Solomon James',
          review:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore dolorem a unde modi iste odio amet, fugit fuga aliquam, voluptatem maiores animi dolor nulla magnam ea! Dignissimos aspernatur cumque nam quod sint provident modi alias culpa, inventore deserunt accusantium amet earum soluta consequatur quasi eum eius laboriosam, maiores praesentium explicabo enim dolores quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam officia, saepe repellat.',
          rating: 5.0
        },
        {
          name: 'Akukwe Justin',
          review:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore dolorem a unde modi iste odio amet, fugit fuga aliquam, voluptatem maiores animi dolor nulla magnam ea! Dignissimos aspernatur cumque nam quod sint provident modi alias culpa, inventore deserunt accusantium amet earum soluta consequatur quasi eum eius laboriosam, maiores praesentium explicabo enim dolores quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam officia, saepe repellat.',
          rating: 2.0
        },
        {
          name: 'Issa Fuad',
          review:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore dolorem a unde modi iste odio amet, fugit fuga aliquam, voluptatem maiores animi dolor nulla magnam ea! Dignissimos aspernatur cumque nam quod sint provident modi alias culpa, inventore deserunt accusantium amet earum soluta consequatur quasi eum eius laboriosam, maiores praesentium explicabo enim dolores quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam officia, saepe repellat.',
          rating: 3.0
        },
      ],
    },
  ],
  blogPosts: [
    {
      title: 'Blog Post One',
      smallInfo:
        'Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus. Praesent',
      largeInfo:
        'Aenean et tempor eros, vitae sollicitudin velit. Etiam varius enim nec quam tempor, sed efficitur ex ultrices. Phasellus pretium est vel dui vestibulum condimentum. Aenean nec suscipit nibh. Phasellus nec lacus id arcu facilisis elementum. Curabitur lobortis, elit ut elementum congue, erat ex bibendum odio, nec iaculis lacus sem non lorem. Duis suscipit metus ante, sed convallis quam posuere quis. Ut tincidunt eleifend odio, ac fringilla mi vehicula nec. Nunc vitae lacus eget lectus imperdiet tempus sed in dui. Nam molestie magna at risus consectetur, placerat suscipit justo dignissim. Sed vitae fringilla enim, nec ullamcorper arcu.',
      image: '/images/blog-grid-home-1-img-1.jpg',
    },
    {
      title: 'Blog Post Two',
      smallInfo:
        'Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus. Praesent',
      largeInfo:
        'Aenean et tempor eros, vitae sollicitudin velit. Etiam varius enim nec quam tempor, sed efficitur ex ultrices. Phasellus pretium est vel dui vestibulum condimentum. Aenean nec suscipit nibh. Phasellus nec lacus id arcu facilisis elementum. Curabitur lobortis, elit ut elementum congue, erat ex bibendum odio, nec iaculis lacus sem non lorem. Duis suscipit metus ante, sed convallis quam posuere quis. Ut tincidunt eleifend odio, ac fringilla mi vehicula nec. Nunc vitae lacus eget lectus imperdiet tempus sed in dui. Nam molestie magna at risus consectetur, placerat suscipit justo dignissim. Sed vitae fringilla enim, nec ullamcorper arcu.',
      image: '/images/blog-grid-home-1-img-2.jpg',
    },
    {
      title: 'Blog Post Three',
      smallInfo:
        'Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus. Praesent',
      largeInfo:
        'Aenean et tempor eros, vitae sollicitudin velit. Etiam varius enim nec quam tempor, sed efficitur ex ultrices. Phasellus pretium est vel dui vestibulum condimentum. Aenean nec suscipit nibh. Phasellus nec lacus id arcu facilisis elementum. Curabitur lobortis, elit ut elementum congue, erat ex bibendum odio, nec iaculis lacus sem non lorem. Duis suscipit metus ante, sed convallis quam posuere quis. Ut tincidunt eleifend odio, ac fringilla mi vehicula nec. Nunc vitae lacus eget lectus imperdiet tempus sed in dui. Nam molestie magna at risus consectetur, placerat suscipit justo dignissim. Sed vitae fringilla enim, nec ullamcorper arcu.',
      image: '/images/blog-grid-home-1-img-3.jpg',
    },
    {
      title: 'Blog Post Four',
      smallInfo:
        'Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus. Praesent',
      largeInfo:
        'Aenean et tempor eros, vitae sollicitudin velit. Etiam varius enim nec quam tempor, sed efficitur ex ultrices. Phasellus pretium est vel dui vestibulum condimentum. Aenean nec suscipit nibh. Phasellus nec lacus id arcu facilisis elementum. Curabitur lobortis, elit ut elementum congue, erat ex bibendum odio, nec iaculis lacus sem non lorem. Duis suscipit metus ante, sed convallis quam posuere quis. Ut tincidunt eleifend odio, ac fringilla mi vehicula nec. Nunc vitae lacus eget lectus imperdiet tempus sed in dui. Nam molestie magna at risus consectetur, placerat suscipit justo dignissim. Sed vitae fringilla enim, nec ullamcorper arcu.',
      image: '/images/blog-grid-home-1-img-4.jpg',
    },
    {
      title: 'Blog Post Five',
      smallInfo:
        'Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus. Praesent',
      largeInfo:
        'Aenean et tempor eros, vitae sollicitudin velit. Etiam varius enim nec quam tempor, sed efficitur ex ultrices. Phasellus pretium est vel dui vestibulum condimentum. Aenean nec suscipit nibh. Phasellus nec lacus id arcu facilisis elementum. Curabitur lobortis, elit ut elementum congue, erat ex bibendum odio, nec iaculis lacus sem non lorem. Duis suscipit metus ante, sed convallis quam posuere quis. Ut tincidunt eleifend odio, ac fringilla mi vehicula nec. Nunc vitae lacus eget lectus imperdiet tempus sed in dui. Nam molestie magna at risus consectetur, placerat suscipit justo dignissim. Sed vitae fringilla enim, nec ullamcorper arcu.',
      image: '/images/blog-grid-home-1-img-5.jpg',
    },
    {
      title: 'Blog Post Six',
      smallInfo:
        'Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus. Praesent',
      largeInfo:
        'Aenean et tempor eros, vitae sollicitudin velit. Etiam varius enim nec quam tempor, sed efficitur ex ultrices. Phasellus pretium est vel dui vestibulum condimentum. Aenean nec suscipit nibh. Phasellus nec lacus id arcu facilisis elementum. Curabitur lobortis, elit ut elementum congue, erat ex bibendum odio, nec iaculis lacus sem non lorem. Duis suscipit metus ante, sed convallis quam posuere quis. Ut tincidunt eleifend odio, ac fringilla mi vehicula nec. Nunc vitae lacus eget lectus imperdiet tempus sed in dui. Nam molestie magna at risus consectetur, placerat suscipit justo dignissim. Sed vitae fringilla enim, nec ullamcorper arcu.',
      image: '/images/blog-grid-home-1-img-6.jpg',
    },
  ],
};

export default data;
