const Router = ReactRouterDOM.BrowserRouter
const { Route, Routes } = ReactRouterDOM

import { AppHeader } from "./cmps/AppHeader.jsx"
import { Homepage } from "./pages/Homepage.jsx"

export function App() {
  return (
    <Router>
      <div className="app-container">
        <AppHeader />
        <main>
          <Routes>
            <Route element={<Homepage />} path={"/"} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}
