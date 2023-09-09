import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { PersonSlice } from "./features/personSlice";

export const store = configureStore({
  reducer: {
    person: PersonSlice.reducer,
  },
});

// these are just to make useAppDispatch and useAppSelector work with typescript
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
