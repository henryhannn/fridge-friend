export const selectFridge = (state, fridge) => {
  return ( fridge ? state.entities.fridges[fridge._id] : {} )
}