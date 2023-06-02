import Web3 from 'web3';

const web3 = new Web3(new Web3.providers.HttpProvider('https://goerli.infura.io/v3/357e7544d72f4603b719cc43ac984f29'));

/**
 * Check if the request body is empty.
 * @param data Data to check
 * @returns Returns true if the request body is empty.
 */
export const checkEmptyRequestBody = (data: string): boolean => {
    return !data || Object.keys(data).length === 0;
};

/**
 * Send transactions to a wallet in the blockchain.
 * @param valueToSend String with the value to send.
 * @returns Returns the transaction receipt if the transaction was successful.
 */
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
