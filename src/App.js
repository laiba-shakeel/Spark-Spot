import { ThemeProvider } from "react-bootstrap";
import BasicLayout from "./Components/Layouts/BasicLayout";
function App() {
  return (
    <ThemeProvider
    breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    minBreakpoint="xxs"
  >
    <div>
      <BasicLayout/>
      </div> 




  </ThemeProvider>
  );
}

export default App;
