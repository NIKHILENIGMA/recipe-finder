type Route = {
  path: string;
  view: () => Promise<void>;
};

export class Router {
  private routes: Route[] = [];
  private currentPath: string = "";

  constructor(routes: Route[]) {
    this.routes = routes;
    window.addEventListener("popstate", () =>
      this.navigate(window.location.pathname)
    );
  }

  addRoute(path: string, view: () => Promise<void>) {
    this.routes.push({ path, view });
  }

  navigate(path: string) {
    this.currentPath = path;
    history.pushState(null, "", path);
    this.match();
  }

  match() {
    const route = this.routes.find((route) => {
      // Simple routing - exact matches or parametric routes like /recipes/:id
      const pathRegex = new RegExp(
        "^" + route.path.replace(/:\w+/g, "([^/]+)") + "$"
      );
      return pathRegex.test(this.currentPath);
    });

    if (route) {
      route.view();
    } else {
      // Handle 404
      document.querySelector("#app")!.innerHTML = `<h1>Page not found</h1>`;
    }
  }

  init() {
    this.navigate(window.location.pathname);
  }
}
