import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { correct, mistake } from "../../gameSlice";

interface ReportButtonProps {
    action: () => void;
}
export const ReportButton = ({action}: ReportButtonProps) => {

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const currentTrick = useSelector(
      (state: RootState) => state.gameState.currentTrick
    );
    const handleReportButton = () => {
        action();

      //判定！
      dispatch(currentTrick === "" ? mistake() : correct());
    };


  return (
    <Button variant="contained" size="large" color="error" onClick={handleReportButton}>
        {t("Report")}
    </Button>
  );
};
