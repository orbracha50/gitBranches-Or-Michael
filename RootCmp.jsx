const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM

import { AppHeader } from "./cmps/AppHeader.jsx"
import { ContactDetails } from "./pages/ContactDetails.jsx"
import { Homepage } from "./pages/Homepage.jsx"
import { ContactIndex } from "./pages/ContactIndex.jsx"
import { AppFooter } from "./cmps/AppFooter.jsx"
export function App() {
  return (
    <Router>
        <AppHeader />
        <main>
          <Routes>
            <Route element={<Homepage />} path={"/"} />
            <Route element={<ContactDetails />} path={"/contact/:contactId"} />
            <Route element={<ContactIndex />} path={"/contact"} />
          </Routes>
        </main>
        <AppFooter />
    </Router>
  )
}
