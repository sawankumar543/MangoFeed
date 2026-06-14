import { createContext, useContext, useEffect, useState } from "react"
import type{ AuthContextType, UserProfile } from "../types/auth"
import axios from "axios";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children })=> {
    const [user, setUser] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    // Page load hote hi check karein ki user logged in hai ya nhi
    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                // Backend se user profile mangwayein (cookie auto send hogi widthCredentials se)
                const response = await axios.get('/user/profile', {withCredentials: true});
                if(response.data.success) {
                    setUser(response.data.user)
                }
            } catch(error) {
                setUser(null); // Agar cookie nhi hai ya expire ho gayi hai
            } finally{
                setLoading(false)
            }
        };
        checkAuthStatus();
    }, []);
    const login = (userData: UserProfile) => setUser(userData);
    const logout = () => {
        // Backend logout route ko hit karein jo cookie clear karega
        setUser(null)
    }
    return (
        <AuthContext.Provider value={{ user, loading, login, logout}}> 
            {!loading && children}
        </AuthContext.Provider> 
    )
} 
export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) throw new Error('useAuth must be used within an AuthProvider');
    return context;
}