import { createSlice } from "@reduxjs/toolkit";
// creating slice
const userSlice = createSlice({
  //slice anme
  name: "user",
  //initial state of the slice
  initialState: {
    userName: "",
  },
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
  },
});
//exporting action creator to update the username in redux store
export const { setUserName } = userSlice.actions;
//exporting reducer
export default userSlice.reducer;
