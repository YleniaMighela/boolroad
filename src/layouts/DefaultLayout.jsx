// IMPORTIAMO IL LINK DEL MODULO REACT-ROUTER

import { Outlet } from "react-router-dom"

// IMPORTO COMPONENTE HEADER
import Header from "../components/Header"

const DefaultLayout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default DefaultLayout