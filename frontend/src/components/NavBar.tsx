import type React from "react";
import { useAuth } from "../context/AuthContext";

const Navbar: React.FC = () => {
    const { user } = useAuth();
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#333', color: '#fff'}}>
            <h2>MangoFeed</h2>

            <div>
                {user? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{
                                width: '35px', 
                                height: '35px', 
                                borderRadius: '50%', 
                                background: '#00adb5', 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center',
                                fontWeight: 'bold'
                                }}>
                                {user.name[0].toUpperCase()} {/*Name ka pehla akshar */}
                        </div>
                        <span>Hi, {user.name}</span>
                    </div>
                ): (
                    // AGar user loogged in nhi hai, toh buttons dikhnge
                    <div>
                        <a href="/login"  style={{ color: '#fff', marginRight: '10px' }}>Login</a>
                        <a href="/register" style={{ color: '#fff' }}>Register</a>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar