import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./style.css";

const root = document.getElementById("app")!;

const render = () => {
  const path = window.location.pathname;
  let renderContent = "";

  switch (path) {
    case "/":
      renderContent = Home();
      break;
    default:
      if (path.includes("/recipe/")) {
        const id = path.split("/").pop();
        renderContent = `Recipe ID: ${id}`;
      } else {
        renderContent = "404 Not Found";
      }
  }

  root.innerHTML = "";

  const header = Header();
  const footer = Footer();
  const main = document.createElement("main");
  main.innerHTML = renderContent;
  main.classList = "p-4";

  root.appendChild(header);
  root.appendChild(main);
  root.appendChild(footer);
};

window.addEventListener("popstate", render);
render();
