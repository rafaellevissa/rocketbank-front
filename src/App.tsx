import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider as ReduxProvider } from "react-redux";
import store from './states/store';

import Login from './routes/login';
import Users from './routes/users';

export default function App()
{
    return (
        <ReduxProvider store={store} >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Users />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </ReduxProvider>
    );
}