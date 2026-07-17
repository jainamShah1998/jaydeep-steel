import "@fontsource/oswald/400.css";
import "@fontsource/oswald/500.css";
import "@fontsource/oswald/600.css";
import "@fontsource/oswald/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/600.css";
import "./globals.css";

export const metadata = {
  title: "Shree Ambica Steel & Iron Co. | Iron & Steel Merchants, Ahmedabad",
  description:
    "Shree Ambica Steel & Iron Co. — Iron & steel merchants and commission agents based in Ahmedabad, Gujarat. Structural steel, TMT rebar, HR/CR coils, pipes and plates sourced against certified mill specifications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-charcoal text-offwhite antialiased">
        {children}
      </body>
    </html>
  );
}
