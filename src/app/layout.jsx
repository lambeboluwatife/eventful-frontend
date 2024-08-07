import { Montserrat } from "next/font/google";
import "./globals.css";
import "./css/style.css";

const montserrat = Montserrat({ subsets: ["latin"], weight: "300" });

export const metadata = {
  title: "Eventful - Create and discover events around you.",
  description:
    "Eventful's your passport to a world of unforgettable moments. From pulsating concerts to captivating theater performances, and thrilling sports events to enlightening cultural gatherings",
  keywords:
    "events, event, eventful, eventbrite, moments, concerts, seminars, theatre, performance, sports, sports events, cultural gathering",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
