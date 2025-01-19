import { jwtDecode } from "jwt-decode";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import useAuthFetch from "../../hooks/AuthHooks/useAuthFetch";
import { useAccessTokenContext } from "./AuthProvider";
import { useEffect } from "react";

const ProtectedRoute = () => {
    const {authFetch} = useAuthFetch();
    const {accessToken} = useAccessTokenContext();
    const nav = useNavigate();

    const auth = () => {
        if (accessToken) {
            const decoded = jwtDecode(accessToken);
            const expTime = decoded.exp;
            const now = Date.now() / 1000;
            if (expTime) {
                if (expTime < now) {
                    refreshToken();
                }
            }
        } else {
        return nav('/login');
        }
    }

    const refreshToken = async () => {
        await authFetch('accounts/auth/refresh/', null);
    }

    // Check if user has accessToken
    useEffect(() => {
        auth();
    }, [])

    const render = accessToken ? <Outlet /> : <Navigate to={'/login'} />;
    return render;

}
 
export default ProtectedRoute;