import { RouterProvider, createBrowserRouter } from "react-router-dom";

import SignupPage from "page/SignupPage";
import LoginPage from "page/LoginPage";
import CreateWorkSpacePage from "page/CreateWorkSpacePage";
import Root from "routes/Root";
export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <div>오류 페이지</div>,
      children: [
        {
          path: "/signUp",
          element: <SignupPage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/work-space",
          element: <CreateWorkSpacePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
