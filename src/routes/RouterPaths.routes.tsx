import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "../layout/Layout"
import MainPage from "../pages/MainPage"



export const RouterPaths = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<MainPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
