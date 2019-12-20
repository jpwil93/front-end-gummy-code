import { SET_NAVBAR_LINKS } from "./types";

export function fetchShopCategories() {
  return {
    type: SET_NAVBAR_LINKS,
    payload: [
      {
        _id: 0,
        title: "All"
      },
      {
        _id: 1,
        title: "Javascript"
      },
      {
        _id: 2,
        title: "UI/UX"
      },
      {
        _id: 3,
        title: "Linux"
      },
      {
        _id: 4,
        title: "Python"
      },
      {
        _id: 5,
        title: "UML"
      },
      {
        _id: 6,
        title: "Ruby"
      }
    ]
  };
}

export function fetchShopProducts() {
  return {
    type: SET_SHOP_PRODUCTS,
    payload: [
      {
        _id: 0,
        title: "JavaScript in the Browser",
        description: "Unique text for testing",
        price: "2.35",
        belongsTo: [0, 1],
        quantity: ""
      },
      {
        _id: 1,
        title: "Graph Database",
        description: "Unique text for testing",
        price: "13.99",
        belongsTo: [0, 6],
        quantity: ""
      },
      {
        _id: 2,
        title: "Full Stack Development",
        description: "Unique text for testing",
        price: "2.99",
        belongsTo: [0, 1, 4],
        quantity: ""
      },
      {
        _id: 3,
        title: "Javascript Development",
        description: "Unique text for testing",
        price: "5.00",
        belongsTo: [0, 1],
        quantity: ""
      },
      {
        _id: 4,
        title: "User Experience Design",
        description: "Unique text for testing",
        price: "78.99",
        belongsTo: [0, 2],
        quantity: ""
      },
      {
        _id: 5,
        title: "Advanced Object-oriented Programming",
        description: "Unique text for testing",
        price: "55.55",
        belongsTo: [0, 6],
        quantity: ""
      },
      {
        _id: 6,
        title: "Ruby",
        description: "Unique text for testing",
        price: "45.34",
        belongsTo: [0, 2],
        quantity: ""
      }
    ]
  };
}
