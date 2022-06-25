import { Navigate } from "react-router-dom";
import { useWallet } from "@solana/wallet-adapter-react";

const PrivateRoute = ({children}) => {
    const {publicKey} = useWallet();
    
    return (publicKey ? children : <Navigate to="/"/>)
}


export default PrivateRoute;