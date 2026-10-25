import { createRoot } from "react-dom/client"
import "./index.css"

const root = createRoot(document.getElementById("root"));

function Header()
{
  return(
    <header className="header">
        <img className="nav-logo" src="./src/assets/react-logo.png" alt="Logo"/>
        <nav>
          <ul className="nav-list">
            <li className="nav-list-item">Pricing</li>
            <li className="nav-list-item">About</li>
            <li className="nav-list-item">Contact</li>
          </ul>
        </nav>
    </header>
  )
}

function MainContent()
{
  return(
    <main>
      <h1>Fun Facts about React</h1>
      <ul>
        <li>Was released in 2013</li>
        <li>Maintained by Meta</li>
        <li>Not a framwork, it's a library</li>
      </ul>
    </main>
  )
}

function Footer()
{
  return(
    <footer className="footer">
      <small>© 2026 Rahman development. All rights reserved.</small>
    </footer>
  )
}

function PracticeComponent()
{
  return(
    <>
      <Header/>
      <MainContent/>
      <Footer/>
    </>
  )
}

root.render(
  <main>
    <PracticeComponent />
  </main>
);