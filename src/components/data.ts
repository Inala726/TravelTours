interface LocationData {
  id: number;
  title: string | null;
  location: string;
  rating: number;
  price: number;
  description: string;
  image: string | null;
}

const data: LocationData[] = [
  {
    id: 1,
    title: null,
    location: "Brazil",
    rating: 1,
    price: 81,
    description:
      "In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
    image: null,
  },
  {
    id: 2,
    title: null,
    location: "Thailand",
    rating: 35,
    price: 31,
    description: "Phasellus sit amet erat.",
    image: null,
  },
  {
    id: 3,
    title: null,
    location: "France",
    rating: 9,
    price: 97,
    description:
      "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
    image: null,
  },
  {
    id: 4,
    title: null,
    location: "San Marino",
    rating: 19,
    price: 100,
    description:
      "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
    image: null,
  },
  {
    id: 5,
    title: null,
    location: "China",
    rating: 1,
    price: 79,
    description:
      "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    image: null,
  },
  {
    id: 6,
    title: null,
    location: "China",
    rating: 60,
    price: 12,
    description:
      "Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
    image: null,
  },
  {
    id: 7,
    title: null,
    location: "Poland",
    rating: 36,
    price: 78,
    description:
      "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
    image: null,
  },
  {
    id: 8,
    title: null,
    location: "Palestinian Territory",
    rating: 41,
    price: 16,
    description:
      "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    image: null,
  },
  {
    id: 9,
    title: null,
    location: "Indonesia",
    rating: 11,
    price: 50,
    description:
      "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
    image: null,
  },
  {
    id: 10,
    title: null,
    location: "France",
    rating: 10,
    price: 25,
    description:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    image: null,
  },
  {
    id: 11,
    title: null,
    location: "Nigeria",
    rating: 29,
    price: 24,
    description:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
    image: null,
  },
  {
    id: 12,
    title: null,
    location: "Philippines",
    rating: 36,
    price: 7,
    description: "Duis consequat dui nec nisi volutpat eleifend.",
    image: null,
  },
  {
    id: 13,
    title: null,
    location: "Laos",
    rating: 41,
    price: 94,
    description: "Suspendisse accumsan tortor quis turpis. Sed ante.",
    image: null,
  },
  {
    id: 14,
    title: null,
    location: "China",
    rating: 11,
    price: 91,
    description:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    image: null,
  },
  {
    id: 15,
    title: null,
    location: "China",
    rating: 54,
    price: 29,
    description:
      "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
    image: null,
  },
  {
    id: 16,
    title: null,
    location: "Brazil",
    rating: 32,
    price: 53,
    description:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
    image: null,
  },
  {
    id: 17,
    title: null,
    location: "China",
    rating: 53,
    price: 54,
    description: "Aenean sit amet justo.",
    image: null,
  },
  {
    id: 18,
    title: null,
    location: "Sweden",
    rating: 10,
    price: 64,
    description:
      "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
    image: null,
  },
  {
    id: 19,
    title: null,
    location: "Poland",
    rating: 11,
    price: 99,
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
    image: null,
  },
  {
    id: 20,
    title: null,
    location: "Peru",
    rating: 88,
    price: 4,
    description:
      "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
    image: null,
  },
];
export default data;
