
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "./languageSlice";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { setTrick_Debug } from "./gameSlice";
import { RootState } from "./store";

export const TrickSwitcher = () => {
  const dispatch = useDispatch();
  const currentTrick = useSelector( (state: RootState) => state.gameState.currentTrick );
  const remainingTricksList = useSelector( (state: RootState) => state.gameState.remainingTricksList );
  const handleTrickChange = (e: SelectChangeEvent<string>) => {
    dispatch(setTrick_Debug(e.target.value));
  };

  return (
    <>

    <FormControl fullWidth>
    <InputLabel>currentTrick:</InputLabel>
    <Select
      label={currentTrick}
      onChange={handleTrickChange}
    >
      {remainingTricksList.map((trick) => (
        <MenuItem value={trick}>{trick}</MenuItem>
      ))}
    </Select>
  </FormControl>
  </>
  );
};
