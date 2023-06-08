import express from 'express';
import cors from 'cors';
//import { dataSendController } from './controllers/getControllers';
import Web3 from 'web3';
const web3 = new Web3(new Web3.providers.HttpProvider('https://goerli.infura.io/v3/357e7544d72f4603b719cc43ac984f29'));
require('dotenv').config();
const app = express();
// Settings
app.set('port', 4000);
// Middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
//app.use(cors());
app.use(cors(
    {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'Accept', 'Access-Control-Allow-Origin']
    }
));
export const sendTransaction = async (valueToSend: string) => {
    try {
        const wallet = web3.eth.accounts.privateKeyToAccount('0x' + process.env.PRIVATE_KEY!);
        const senderAddress = process.env.PUBLIC_KEY!;
        const recipientAddress = process.env.RECIPIENT!;
        const gasPrice = await web3.eth.getGasPrice();
        const gasLimit = await web3.eth.estimateGas({
            from: senderAddress,
            to: recipientAddress,
            data: web3.utils.toHex(valueToSend),
        });
        const txData = {
            from: senderAddress,
            to: recipientAddress,
            data: web3.utils.toHex(valueToSend),
            gasPrice: gasPrice,
            gas: gasLimit,
        };
        const signedTx = await wallet.signTransaction(txData);
        const txReceipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction!);
        console.info('Transaction sent to:', txReceipt);
        return {
            blockHash: txReceipt.blockHash,
            blockNumber: txReceipt.blockNumber,
            gasUsed: txReceipt.gasUsed,
            status: txReceipt.status,
            from: txReceipt.from,
            to: txReceipt.to,
            transactionHash: txReceipt.transactionHash,
        };
    } catch (error) {
        console.error('Error when sending the transaction:', error);
        throw error;
    }
};
// Routes
app.use('/save',(req,res) => {
   const rest = sendTransaction(req.body).then((result)=>{
        res.send(rest);
   })
});
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
