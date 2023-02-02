import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profile: {},
    profileId: ""
  },
  reducers: {
    readProfile: (state, action) => {
      for(let id in action.payload) {
        state.profile = action.payload[id];
        state.profileId = id;
      }
    },
    clearProfile: (state) => {
      console.log("sss");
      state = {
        profile: {},
        profileId: ""
      };
    },
  },
});

export const { readProfile, clearProfile } = profileSlice.actions;
export default profileSlice.reducer;
