import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface Person {
  name: string;
  id: number;
}

interface PersonState {
  people: Person[];
}

const initialState: PersonState = {
  people: [],
};

export const PersonSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    addPerson: (state, action: PayloadAction<{ name: string }>) => {
      state.people.push({
        id: state.people.length,
        name: action.payload.name,
      });
    },
  },
});

export default PersonSlice.reducer;
export const { addPerson } = PersonSlice.actions;
