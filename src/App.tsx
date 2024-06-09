import { TrickSwitcher } from "./DebugTool";
import { GameLoop } from "./component/GameLoop";
import { LanguageSwitcher } from "./languageSwitcher";


function App() {
  
  return (
    <>
    <LanguageSwitcher></LanguageSwitcher>
    <TrickSwitcher></TrickSwitcher>
    <GameLoop></GameLoop>
    </>
  )
}

export default App
