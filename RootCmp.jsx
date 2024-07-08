const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM

import { AppHeader } from "./cmps/AppHeader.jsx"
import { ContactDetails } from "./pages/ContactDetails.jsx"
import { Homepage } from "./pages/Homepage.jsx"
import { ContactIndex } from "./pages/ContactIndex.jsx"
export function App() {
  return (
    <Router>
      <div className="app-container">
        <AppHeader />
        <main>
          <Routes>
            <Route element={<Homepage />} path={"/"} />
            <Route element={<ContactDetails />} path={"/contact/:contactId"} />
            <Route element={<ContactIndex />} path={"/contact"} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}
