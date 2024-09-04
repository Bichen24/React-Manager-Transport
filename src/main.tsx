// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import Loading from "./utils/Loading/loading.tsx";
import "./index.css";
const loading = createRoot(document.getElementById("loading")!);
loading.render(<Loading />);

createRoot(document.getElementById("root")!).render(
    // <StrictMode>
    <App />
    // </StrictMode>
);
