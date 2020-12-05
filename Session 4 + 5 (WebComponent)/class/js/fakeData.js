const data = [
  {
    image: "http://dummyimage.com/300x300.png/ff4444/ffffff",
    price: 83,
    description:
      "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    address: "5 Haas Circle",
  },
  {
    image: "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
    price: 29,
    description:
      "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    address: "60 Caliangt Trail",
  },
  {
    image: "http://dummyimage.com/300x300.png/ff4444/ffffff",
    price: 49,
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    address: "25997 Sullivan Way",
  },
  {
    image: "http://dummyimage.com/300x300.png/cc0000/ffffff",
    price: 52,
    description:
      "Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.",
    address: "720 Grim Point",
  },
  {
    image: "http://dummyimage.com/300x300.png/dddddd/000000",
    price: 68,
    description:
      "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    address: "2 Nova Way",
  },
  {
    image: "http://dummyimage.com/300x300.png/dddddd/000000",
    price: 56,
    description:
      "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    address: "95027 Lukken Avenue",
  },
  {
    image: "http://dummyimage.com/300x300.png/dddddd/000000",
    price: 92,
    description:
      "Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
    address: "2103 Carey Parkway",
  },
  {
    image: "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
    price: 37,
    description:
      "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
    address: "0 Sutteridge Circle",
  },
  {
    image: "http://dummyimage.com/300x300.png/ff4444/ffffff",
    price: 45,
    description: "Proin at turpis a pede posuere nonummy.",
    address: "826 Clyde Gallagher Pass",
  },
  {
    image: "http://dummyimage.com/300x300.png/ff4444/ffffff",
    price: 52,
    description:
      "Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
    address: "43 Superior Pass",
  },
  {
    image: "http://dummyimage.com/300x300.png/dddddd/000000",
    price: 86,
    description:
      "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
    address: "19389 Oak Terrace",
  },
  {
    image: "http://dummyimage.com/300x300.png/dddddd/000000",
    price: 58,
    description:
      "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    address: "3623 Doe Crossing Terrace",
  },
  {
    image: "http://dummyimage.com/300x300.png/cc0000/ffffff",
    price: 56,
    description:
      "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
    address: "762 Sunbrook Park",
  },
  {
    image: "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
    price: 63,
    description:
      "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
    address: "5223 Sunbrook Point",
  },
  {
    image: "http://dummyimage.com/300x300.png/ff4444/ffffff",
    price: 80,
    description:
      "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    address: "822 Kingsford Lane",
  },
  {
    image: "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
    price: 84,
    description:
      "In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
    address: "36881 Summerview Center",
  },
  {
    image: "http://dummyimage.com/300x300.png/ff4444/ffffff",
    price: 23,
    description: "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    address: "4 Sutherland Crossing",
  },
  {
    image: "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
    price: 91,
    description:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    address: "5762 Columbus Lane",
  },
  {
    image: "http://dummyimage.com/300x300.png/cc0000/ffffff",
    price: 79,
    description:
      "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
    address: "152 Crescent Oaks Road",
  },
  {
    image: "http://dummyimage.com/300x300.png/ff4444/ffffff",
    price: 57,
    description:
      "Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
    address: "86 Weeping Birch Center",
  },
];

export default data;
