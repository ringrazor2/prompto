import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
export const metadata = {
  title: "Prompto",
  description: "Discover & Share AI Prompts",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {/* wrap main content in provider so all child components has access */}
        <Provider>
          <div className="main">
            <div className="gradient" />
            <main className="app">
              <Nav />
              {children}
            </main>
          </div>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
