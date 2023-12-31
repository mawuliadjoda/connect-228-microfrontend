import React, { Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./index.css";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import PlanSelection from "./components/planSelection/PlanSelection";
import Selection from "./components/planSelection/Selection";



const RemoteMarketplaceApp = React.lazy(() => import("marketplace/MarketplaceApp"));
// const RemoteOrderApp = React.lazy(() => import("order/OrderApp"));
// const RemoteDeliveryApp = React.lazy(() => import("delivery/DeliveryApp"));

const App = () => {
  const [loading, setLoading] = useState(false);
  return <div>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace/*" element={<RemoteMarketplaceApp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </div>
};

export default App