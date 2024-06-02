import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { setLanguage } from "./languageSlice";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

export const LanguageSwitcher = () => {
  const dispatch = useDispatch();

  const handleLanguageChange = (e: SelectChangeEvent<string>) => {
    dispatch(setLanguage(e.target.value));
  };

  return (
    <>
    {/* <select onChange={handleLanguageChange}>
      <option value="ja">日本語</option>
      <option value="en">English</option>
    </select> */}
    <FormControl >
    <InputLabel>Language</InputLabel>
    <Select
      label="Language"
      onChange={handleLanguageChange}
    >
      <MenuItem value="ja">日本語</MenuItem>
      <MenuItem value="en">English</MenuItem>
    </Select>
  </FormControl>
  </>
  );
};
