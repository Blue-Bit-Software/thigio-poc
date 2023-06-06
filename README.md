# Thigio POC

## Usage Description:
Click the Submit button to send a predefined JSON to an API in charge of executing the transaction. This API will return some information,
such as blockHash, blockNumber, gasUsed, status, from, to, and transactionHash. If you wish to view the transaction on the Goerli testnet, you can do it by pasting the transactionHash into https://goerli.etherscan.io/.

## Run on docker

```
docker-compose up
```

## For local run install nvm

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

### After installing nvm, install dependencies on backend and frontend
```
nvm use
npm install
```

## Run local backend

```
cd backend
make run
```

## Run local frontend

```
cd frontend
npm start
```
