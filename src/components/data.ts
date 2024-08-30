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
    title: "",
    location: "Brazil",
    rating: 1,
    price: 95,
    description: "In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
    image: "",
  },
  {
    id: 2,
    title: "",
    location: "Thailand",
    rating: 35,
    price: 120,
    description: "Phasellus sit amet erat.",
    image: "",
  },
  {
    id: 3,
    title: "",
    location: "France",
    rating: 9,
    price: 230,
    description:
      "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
    image: "",
  },
  {
    id: 4,
    title: "",
    location: "San Marino",
    rating: 19,
    price: 450,
    description:
      "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
    image: "",
  },
  {
    id: 5,
    title: "",
    location: "China",
    rating: 1,
    price: 300,
    description:
      "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    image: "",
  },
  {
    id: 6,
    title: "",
    location: "Japan",
    rating: 60,
    price: 150,
    description:
      "Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
    image: "",
  },
  {
    id: 7,
    title: "",
    location: "Poland",
    rating: 36,
    price: 250,
    description:
      "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
    image: "",
  },
  {
    id: 8,
    title: "",
    location: "Palestinian Territory",
    rating: 41,
    price: 180,
    description:
      "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    image: "",
  },
  {
    id: 9,
    title: "",
    location: "Indonesia",
    rating: 11,
    price: 220,
    description:
      "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
    image: "",
  },
  {
    id: 10,
    title: "",
    location: "France",
    rating: 10,
    price: 200,
    description:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    image: "",
  },
  {
    id: 11,
    title: "",
    location: "Nigeria",
    rating: 29,
    price: 130,
    description:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
    image: "",
  },
  {
    id: 12,
    title: "",
    location: "Philippines",
    rating: 36,
    price: 95,
    description: "Duis consequat dui nec nisi volutpat eleifend.",
    image: "",
  },
  {
    id: 13,
    title: "",
    location: "Laos",
    rating: 41,
    price: 400,
    description: "Suspendisse accumsan tortor quis turpis. Sed ante.",
    image: "",
  },
  {
    id: 14,
    title: "",
    location: "China",
    rating: 11,
    price: 280,
    description:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    image: "",
  },
  {
    id: 15,
    title: "",
    location: "China",
    rating: 54,
    price: 320,
    description:
      "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
    image: "",
  },
  {
    id: 16,
    title: "",
    location: "Brazil",
    rating: 32,
    price: 190,
    description:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
    image: "",
  },
  {
    id: 17,
    title: "",
    location: "China",
    rating: 53,
    price: 360,
    description: "Aenean sit amet justo.",
    image: "",
  },
  {
    id: 18,
    title: "",
    location: "Sweden",
    rating: 10,
    price: 410,
    description:
      "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
    image: "",
  },
  {
    id: 19,
    title: "",
    location: "Poland",
    rating: 11,
    price: 270,
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
    image: "",
  },
  {
    id: 20,
    title: "",
    location: "Peru",
    rating: 88,
    price: 120,
    description:
      "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
    image: "",
  },
];
export default data;
