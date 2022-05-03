import { GlobalState } from "../Global/GlobalState";
import { Router } from "../Router/router";
import { StyledGlobal } from "./style";

function App() {
  return (
    <StyledGlobal>
      <GlobalState>
        <Router />
      </GlobalState>
    </StyledGlobal>
  );
}

export default App;
