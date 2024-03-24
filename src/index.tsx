import { someFn } from "./test";
import { render } from "react-dom";

someFn(123);

render(<div>1</div>, document.getElementById("root"));
