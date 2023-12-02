import { useEffect, useState } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

export const verif = () => {
    const [authUser, setAuthUser] = useState(null); 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            const token=localStorage.getItem('token')
            console.log(token)            
            if (token) {
                setAuthUser(user);
                console.log(user)
            } else {
                setAuthUser(null);
            }
        });

        return () => unsubscribe(); 
    }, []);

    return authUser;
};
