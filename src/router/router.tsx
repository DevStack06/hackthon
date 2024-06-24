import { createBrowserRouter } from "react-router-dom";
import ActionOverview from "../components/action_overview/action_overview";
import ActionImpact from "../components/action_impact/action_imapct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ActionImpact />,
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
