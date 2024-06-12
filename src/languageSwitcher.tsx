import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "./languageSlice";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import styled from "styled-components";
import { RootState } from "./store";
import { useTranslation } from "react-i18next";

const SelectStyle = styled(Select)`
  background-color: white;
`;

export const LanguageSwitcher = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.language.language);
  const handleLanguageChange = (e: SelectChangeEvent<string>) => {
    dispatch(setLanguage(e.target.value));
  };

  return (
    <>
      <FormControl fullWidth>
        <InputLabel>Language</InputLabel>
        <SelectStyle label="Language" onChange={handleLanguageChange} value={language}>
          <MenuItem value="ja">日本語</MenuItem>
          <MenuItem value="en">English</MenuItem>
        </SelectStyle>
      </FormControl>
    </>
  );
};
