import type { RouteObject } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import Home from "@/pages/home/page";
import Casino from "@/pages/casino/page";
import Sports from "@/pages/sports/page";
import SportsEvent from "@/pages/sports-event/page";
import GameDetail from "@/pages/game/page";
import Promotions from "@/pages/promotions/page";
import Vip from "@/pages/vip/page";
import Affiliate from "@/pages/affiliate/page";
import Blog from "@/pages/blog/page";
import BlogDetail from "@/pages/blog/detail/page";
import Support from "@/pages/support/page";
import Account from "@/pages/account/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/casino",
    element: <Casino />,
  },
  {
    path: "/sports",
    element: <Sports />,
  },
  {
    path: "/sports/:eventId",
    element: <SportsEvent />,
  },
  {
    path: "/game/:gameId",
    element: <GameDetail />,
  },
  {
    path: "/promotions",
    element: <Promotions />,
  },
  {
    path: "/vip",
    element: <Vip />,
  },
  {
    path: "/affiliate",
    element: <Affiliate />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/blog/:postId",
    element: <BlogDetail />,
  },
  {
    path: "/support",
    element: <Support />,
  },
  {
    path: "/account",
    element: <Account />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;