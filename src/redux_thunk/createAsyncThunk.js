import { fetchRecipes } from "../../app/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const loadRecipes = () => {
//   return async (dispatch) => {
//     const recipes = await fetchRecipes();
//     dispatch({ type: "allRecipes/addRecipes", payload: recipes });
//   };
// };

const loadRecipes = createAsyncThunk(
  "allRecipes/loadRecipes",
  async (arg, thunkAPI) => {
    const data = await fetchRecipes()
    const json = await data.json()
    return json
  }
);

export const allRecipesSlice = createSlice({
  name: "allRecipes",
  initialState: {
    recipes: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {
    addRecipes(state, action) {
      state.recipes = action.payload;
    },
  },
});

export default allRecipesSlice.reducer;
