import { createBrowserRouter } from "react-router-dom";
import ActionOverview from "../components/action_overview/action_overview";
import ActionImpact from "../components/action_impact/action_imapct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/action-overview",
    element: <ActionOverview />,
  },
  {
    path: "/action-impact",
    element: <ActionImpact />,
  },
]);
