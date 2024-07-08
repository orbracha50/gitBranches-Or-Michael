const { useEffect } = React
const { NavLink } = ReactRouterDOM
export function AppHeader() {


    return (
        <header className="app-header full main-layout">
            <section>
            <h1>React Contact App</h1>
                <nav className="app-nav">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                </nav>
            </section>
        </header>
    )
}