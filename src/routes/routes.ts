import { createBrowserRouter } from 'react-router';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';


createBrowserRouter([
    {index: true, path: '/login', Component: LoginPage},
    {index: false, path: '/register', Component: RegisterPage},
])

