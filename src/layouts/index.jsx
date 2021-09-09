import LayoutMovie from "./Movies";
import QuanDoo from "./QuanDoo";

const Layout = (type) => {
  switch (type) {
    case "quandoo":
      return QuanDoo;
    case "movie":
      return LayoutMovie;
    default:
      return LayoutMovie;
  }
};
export default Layout;
