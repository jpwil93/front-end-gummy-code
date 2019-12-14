import { SET_USER_PURCHASES, SET_PURCHASE_DETAIL } from "./types";

export function setPurchaseDetail(_id) {
  return {
    type: SET_PURCHASE_DETAIL,
    payload: _id
  };
}

export function fetchUserPurchases() {
  return {
    type: SET_USER_PURCHASES,
    payload: [
      {
        _id: 0,
        total: 12.34,
        orderNumber: "A98098098709",
        orderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 West State Street"
        }
      },
      {
        _id: 1,
        total: 19.4,
        orderNumber: "456645DFFSA",
        orderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "Wade Wilson",
          shippingAddress: "1234 West State Street"
        }
      },
      {
        _id: 2,
        total: 1.3,
        orderNumber: "235WF343543",
        orderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "Jesse Wilson",
          shippingAddress: "4321 West State Street"
        }
      },
      {
        _id: 3,
        total: 22.54,
        orderNumber: "GHe423423F",
        orderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "Corey Merrill",
          shippingAddress: "1337 West State Street"
        }
      },
      {
        _id: 4,
        total: 11.01,
        orderNumber: "JKSADJ345346",
        orderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "Amellia Wilson",
          shippingAddress: "8712 West State Street"
        }
      },
      {
        _id: 5,
        total: 98.0,
        orderNumber: "5453JJDAKJSD",
        orderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "Amy Merrill",
          shippingAddress: "4125 West State Street"
        }
      },
      {
        _id: 6,
        total: 16.55,
        orderNumber: "KJSD565464234",
        orderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "Paschal Wilson",
          shippingAddress: "899 West State Street"
        }
      },
      {
        _id: 7,
        total: 1.55,
        orderNumber: "FDGF453534",
        orderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "Felicia Wilson",
          shippingAddress: "555 West State Street"
        }
      }
    ]
  };
}
