import InitialState from "./InitialState";

export default function reducer(state = new InitialState(), action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
