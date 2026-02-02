export let initialState = 0;

export const reducerFunc = (prevState, action) => {
  switch (action) {
    case "incre":
      return prevState + 1;
    case "decre":
      return prevState > 0 ? prevState - 1 : 0;
    case "reset":
      return 0;
  }
};
