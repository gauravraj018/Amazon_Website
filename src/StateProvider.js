//ye react context api aur redux ka hota hai jo data layer banaen m help karta hai aur jab man kare jaha man kare uska istemall kar skkte h

import React, { createContext, useContext, useReducer } from "react";

//The Context API is a component structure provided by the React framework, which enables us to share specific forms of data across all levels of the application.

// Prepares the dataLayer data layer  banata hai jab bhi hm addd to basket p click karenge t reducer usko data layer m addd kar dega

export const StateContext = createContext();

// Wrap our app and provide the Data layer sbhi component jo app k andar ho
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer ...ja man kare to pull kar skte hai aur usko basket m addd kar denge
export const useStateValue = () => useContext(StateContext);
