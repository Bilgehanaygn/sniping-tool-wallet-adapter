import axios from 'axios';

export const sendBuyInstruction = async (buyerPublicKey, sellerPublicKey, auctionHouseAddress, tokenMint, tokenAta, price) => {
    return axios.get(`https://api-devnet.magiceden.dev/v2/instructions/buy_now?buyer=${buyerPublicKey}&seller=${sellerPublicKey}&auctionHouseAddress=${auctionHouseAddress}&tokenMint=${tokenMint}&tokenATA=${tokenAta}&price=${price}&buyerReferral=&sellerReferral=&buyerExpiry=&sellerExpiry=`);
}
