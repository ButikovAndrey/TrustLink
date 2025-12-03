import ReactDOMServer from "react-dom/server";
import App from "./src/App";

export async function prerender(route: string) {
  if (route !== "/") return { html: "", head: "" };

  const html = ReactDOMServer.renderToString(<App />);
  return { html, head: "" };
}
