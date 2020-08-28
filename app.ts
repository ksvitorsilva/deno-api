import { opine, json } from "./deps.ts";
import { port } from "./config.ts";
import middleware from "./middleware.ts";
import routes from "./routes.ts";

const app = opine();

app.use(json());
app.use(routes);
app.use(middleware.notFound);
app.use(middleware.default);

app.listen({ port }, () => console.log(` 🚀 Server running on port ${port}`));
