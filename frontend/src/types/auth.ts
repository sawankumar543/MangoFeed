export interface UserProfile {
    _id: string;
    name: string;
    email: string;
    createdAt: string;
}

export interface AuthContextType {
    user: UserProfile | null;
    loading: boolean;
    login: (userData: UserProfile) => void;
    logout: () => void;
}