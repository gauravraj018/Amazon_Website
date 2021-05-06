//react aur redux same nhi hai par process same use karte hai dono global store banane ka application k liye
//reducer isilliye hota ki hm update karnge to update hoga remove katene kuchnto remove hoga basket m se...
export const initialState = {
  basket: [],
  user: null,
};
//Selector  ka istemall hmlog karneg priice ko addd karne k liye
//reduce is a fncction it iterates throung the basket anf tally up the total
//jab hmlog addd to basket krenge atb tab ye "reduce" har product k price par jakarr usko sum karke cehckout m show kar dega
export const getBasketTotal = (basket) =>
  //yah ek treeak hai for loop llikhe ka aur sb ka price add karne ka
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      ///yaha par index declare kar  raheh hmlog jiska remove karna hai data lena
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      //naya basket banayenge usme prest baskt dal dneg
      let newBasket = [...state.basket];
      if (index >= 0) {
        //yaha par index se slice jisko remove karna chaege matlab index nikalenga data layer jabb  button p click karenege tab nebakset ko slice kar denge wo elemnt as remove hoga jsikko remve karna cahte h
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove prodduct(id: ${action.id}as its not in basket!)`
        );
      }
      //returnr kard enge dstate aur basket m daalddenge sliced wla new basket.....
      return {
        ...state,
        basket: newBasket,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
