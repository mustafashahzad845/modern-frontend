import { createRoot } from "react-dom/client";
import react from "react";

const rootContainer = document.getElementById("root");
const root = createRoot(rootContainer);

import {Navbar} from "./Components/navbar"
import {Body} from "./Components/body"
import {Footer} from "./Components/footer"


root.render(
  <div>
<Navbar /> 
    <Body />
    <Footer />
  </div>
);
