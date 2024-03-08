import './app.css';
import { BrowserRouter, Route } from 'react-router-dom';

import PublicRouter from './pages/Public/PublicRouter';
import AdminRouter from './pages/Admin/AdminRouter';


function App() {
    return (
        <div className="AppRoutes">
            <Routes>
                <BrowserRouter>
                    <Route path='/' element={<PublicRouter />} />
                    <Route path='/admin' element={<AdminRouter />} />
                </BrowserRouter>
            </Routes>
        </div >
    );
}

export default App;
