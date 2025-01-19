import { useContext, createContext, useState, ReactNode } from "react";
import { ItemInterface } from "../Main/Home";

// Type for the access token and CSRF token
export type AccessTokenType = string | null;
export type CSRFTokenType = string | null;
type FavoritesContextType = ItemInterface[] | null;  // assuming favorites is an array of ItemInterface

// Context value types
interface AccessTokenInterface {
    accessToken: AccessTokenType;
    setAccessToken: React.Dispatch<React.SetStateAction<AccessTokenType>>;
}

interface FavoritesContextInterface {
    favorites: FavoritesContextType;
    setFavorites: React.Dispatch<React.SetStateAction<FavoritesContextType>>;
}

interface CSRFTokenContextType {
    csrfToken: CSRFTokenType;
    setcsrfToken: React.Dispatch<React.SetStateAction<CSRFTokenType>>;
}

// Create contexts
const AccessTokenContext = createContext<AccessTokenInterface | undefined>(undefined);
const FavoritesContext = createContext<FavoritesContextInterface | undefined>(undefined);
const CSRFToken = createContext<CSRFTokenContextType | undefined>(undefined);

// Custom hooks to consume the context
export const useAccessTokenContext = (): AccessTokenInterface => {
    const context = useContext(AccessTokenContext);
    if (!context) {
        throw new Error("useAccessTokenContext must be used within an AccessTokenContext.Provider");
    }
    return context;
};

export const useFavoritesContext = (): FavoritesContextInterface => {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error("useFavoritesContext must be used within a FavoritesContext.Provider");
    }
    return context;
};

export const useCSRFTokenContext = (): CSRFTokenContextType => {
    const context = useContext(CSRFToken);
    if (!context) {
      throw new Error("useCSRFTokenContext must be used within a CSRFToken.Provider");
    }
    return context;
};

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [accessToken, setAccessToken] = useState<AccessTokenType>(null);
    const [favorites, setFavorites] = useState<FavoritesContextType>(null); 
    const [csrfToken, setcsrfToken] = useState<CSRFTokenType>(null);

    return (
        <AccessTokenContext.Provider value={{ accessToken, setAccessToken }}>
            <FavoritesContext.Provider value={{ favorites, setFavorites }}>
                <CSRFToken.Provider value={{ csrfToken, setcsrfToken }}>
                    {children}
                </CSRFToken.Provider>
            </FavoritesContext.Provider>
        </AccessTokenContext.Provider>
    );
};

export default AuthProvider;
