
import { GameLoop } from "./component/GameLoop";


function App() {
  console.log(import.meta.env.BASE_URL);
  return (
    <>
    {/* <TrickSwitcher></TrickSwitcher> */}
    <GameLoop></GameLoop>
    </>
  )
}

export default App
