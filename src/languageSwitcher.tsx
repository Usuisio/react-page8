import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "./languageSlice";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { RootState } from "./store";

export const LanguageSwitcher = () => {
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.language.language);
  const handleLanguageChange = (e: SelectChangeEvent<string>) => {
    dispatch(setLanguage(e.target.value));
  };

  return (
    <>
      <FormControl fullWidth>
        <InputLabel>Language</InputLabel>
        <Select label="Language" onChange={handleLanguageChange} value={language} variant="filled">
          <MenuItem value="ja">日本語</MenuItem>
          <MenuItem value="en">English</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};
