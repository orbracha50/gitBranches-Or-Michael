const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM
const { Provider } = ReactRedux

import { AppHeader } from "./cmps/AppHeader.jsx"
import { ContactDetails } from "./pages/ContactDetails.jsx"
import { Homepage } from "./pages/Homepage.jsx"
import { ContactIndex } from "./pages/ContactIndex.jsx"
import { AppFooter } from "./cmps/AppFooter.jsx"
import { store } from './store/store.js'
import { ContactEdit } from './pages/ContactEdit.jsx'
export function App() {
  return (
    <Provider store={store}>
    <Router>
        <AppHeader />
        <main>
          <Routes>
            <Route element={<Homepage />} path={"/"} />
            <Route element={<ContactDetails />} path={"/contact/:contactId"} />
            <Route element={<ContactIndex />} path={"/contact"} />
            <Route element={<ContactEdit />} path={"/contact/edit"} />
            <Route element={<ContactEdit />} path={"/contact/edit/:contactId"} />
          </Routes>
        </main>
        <AppFooter />
    </Router>
    </Provider>
  )
}
