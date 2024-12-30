import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";

import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "stylesheet",
    href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
  },
];

export const meta: MetaFunction = () => [
  { title: "Studio 101 - Elevating Creativity | No. 1 Production House in Sri Lanka" },
  { name: "description", content: "Studio 101 is the leading production house in Sri Lanka, offering innovative services like Video Production, AR/VR, Game Development, and more." },
  { name: "keywords", content: "Studio 101, Video Production, AR/VR, Game Development, Sri Lanka, Gajaman, Sri Lankan First 3D Animation Movie, Sri Lankan Highest gross movie" },
  { property: "og:title", content: "Studio 101 - Elevating Creativity | No. 1 Production House in Sri Lanka" },
  { property: "og:description", content: "Innovate, create, and thrive with Studio 101. Explore our wide range of services and projects that redefine creativity." },
  { property: "og:image", content: "/meta-image.png" },
  { property: "og:url", content: "https://studio101.com" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "Studio 101 - Elevating Creativity" },
  { name: "twitter:description", content: "Discover Studio 101's award-winning projects and services that push the boundaries of creativity." },
  { name: "twitter:image", content: "/meta-image.png" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script
          src="https://kit.fontawesome.com/f966c5c9b1.js"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
