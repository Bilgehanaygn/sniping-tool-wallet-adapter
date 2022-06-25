import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@solana/wallet-adapter-react';
import { Navigate} from 'react-router-dom';

const ConnectWalletPage = () => {
    const {wallet, publicKey} = useWallet();

    if(publicKey){
        return <Navigate to="/sniping_tool" />
    }

    return(
        <div style={{minWidth:"100vw", minHeight:"100vh", display:"flex",
        justifyContent:"center", alignItems:"center" }}>
            <WalletMultiButton/>
        </div>
    );
}


export default ConnectWalletPage;