import about from "./pages/about.js";
import contact from "./pages/contact.js";
import home from "./pages/home.js";
import NotFound from "./pages/not-found.js";

export const pageSelect = (url, res) => {
    
  const urlParams = new URL(`http://localhost:4000${url}`);
  console.log(urlParams.searchParams);

  if (url === "/") {
    res.end(home());
  } else if (url === "/about") {
    res.end(about());
  } else if (url === "/contact") {
    res.end(contact());
  } else {
    res.end(NotFound());
  }
};
