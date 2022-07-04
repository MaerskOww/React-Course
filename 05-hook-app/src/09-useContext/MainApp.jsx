import { Navigate, Route, Routes, Link } from 'react-router-dom';
import { Navbar } from './components';
import { AboutPage, HomePage, LoginPage } from './public';

export const MainApp = () => {
    return (
        <>
            <Navbar />
            <hr />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="login" element={<LoginPage />} />

                {/* <Route path="/*" element={<LoginPage />} /> */}
                <Route path="/*" element={<Navigate to="/about" />} />
            </Routes>
        </>
    )
}
