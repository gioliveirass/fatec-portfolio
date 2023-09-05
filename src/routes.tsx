import { BrowserRouter, Route, Routes as RoutesDom } from "react-router-dom";
import Homepage from "./pages/homepage";

export default function Routes() {
  return (
    <BrowserRouter basename="/">
      <RoutesDom>
        <Route path="/" element={<Homepage />} />
      </RoutesDom>
    </BrowserRouter>
  );
}
