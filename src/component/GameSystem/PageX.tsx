import { useSelector } from "react-redux";
import { RootState } from "../../store";

interface PageXProps {
    num: number;
}
export const PageX = ({num}:PageXProps) => {
    const currentTrick = useSelector( (state: RootState) => state.gameState.currentTrick );
    return (
        <h1>
            {currentTrick==="Paga"? "Paga" : "Page"} {num.toString()}
        </h1>
    )
}