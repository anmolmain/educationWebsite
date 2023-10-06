var Web3jsCourseData = [
    {
        "topic_name": "Introduction to web3.js",
        "topic_description": "Web3.js is a JavaScript library for interacting with the Ethereum blockchain. It allows developers to build decentralized applications (DApps) and interact with smart contracts.",
        "subtopics": [
            {
                "subtopic_name": "Installing web3.js",
                "example_code": "// Install web3.js using npm\nnpm install web3"
            },
            {
                "subtopic_name": "Importing web3.js",
                "example_code": "const Web3 = require('web3');\nconst web3 = new Web3('https://mainnet.infura.io/v3/your-infura-api-key');"
            }
        ]
    },
    {
        "topic_name": "Connecting to Ethereum",
        "topic_description": "To interact with the Ethereum blockchain, you need to connect to an Ethereum node. Infura is a popular choice for connecting to Ethereum without running a local node.",
        "subtopics": [
            {
                "subtopic_name": "Connecting to Infura",
                "example_code": "const web3 = new Web3('https://mainnet.infura.io/v3/your-infura-api-key');"
            },
            {
                "subtopic_name": "Checking Connection",
                "example_code": "web3.eth.net.isListening()\n  .then(console.log)\n  .catch(console.error);"
            }
        ]
    },
    {
        "topic_name": "Account Management",
        "topic_description": "Web3.js provides functions for managing Ethereum accounts, including creating, unlocking, and listing accounts.",
        "subtopics": [
            {
                "subtopic_name": "Creating an Account",
                "example_code": "const newAccount = web3.eth.accounts.create();"
            },
            {
                "subtopic_name": "Unlocking an Account",
                "example_code": "web3.eth.personal.unlockAccount(address, password, durationInSeconds);"
            },
            {
                "subtopic_name": "Listing Accounts",
                "example_code": "web3.eth.getAccounts()\n  .then(console.log)\n  .catch(console.error);"
            }
        ]
    },
    {
        "topic_name": "Sending Ether",
        "topic_description": "You can use web3.js to send Ether (ETH) from one account to another. This is commonly used for transactions and payments.",
        "subtopics": [
            {
                "subtopic_name": "Sending Ether",
                "example_code": "web3.eth.sendTransaction({\n  from: senderAddress,\n  to: recipientAddress,\n  value: web3.utils.toWei('1', 'ether')\n})"
            },
            {
                "subtopic_name": "Checking Ether Balance",
                "example_code": "web3.eth.getBalance(address)\n  .then(balance => {\n    const etherBalance = web3.utils.fromWei(balance, 'ether');\n    console.log(`Balance: ${etherBalance} ETH`);\n  })\n  .catch(console.error);"
            }
        ]
    },
    {
        "topic_name": "Smart Contracts",
        "topic_description": "Web3.js allows you to deploy and interact with smart contracts on the Ethereum blockchain.",
        "subtopics": [
            {
                "subtopic_name": "Deploying a Smart Contract",
                "example_code": "// Create a contract object with ABI and bytecode\nconst contract = new web3.eth.Contract(abi);\n\n// Deploy the contract\ncontract.deploy({\n  data: '0x' + bytecode,\n  arguments: [arg1, arg2]\n})\n.send({\n  from: accountAddress,\n  gas: 2000000\n})\n.then(newContract => {\n  console.log('Contract deployed at:', newContract.options.address);\n});"
            },
            {
                "subtopic_name": "Interacting with a Smart Contract",
                "example_code": "// Create a contract instance with ABI and contract address\nconst contract = new web3.eth.Contract(abi, contractAddress);\n\n// Call a contract function\ncontract.methods.someFunction(arg1, arg2)\n.call({ from: accountAddress })\n.then(result => console.log('Function result:', result));"
            }
        ]
    },
    {
        "topic_name": "Transaction Handling",
        "topic_description": "Web3.js allows you to send transactions, check transaction status, and get transaction receipts.",
        "subtopics": [
            {
                "subtopic_name": "Sending a Transaction",
                "example_code": "web3.eth.sendTransaction({\n  from: senderAddress,\n  to: recipientAddress,\n  value: web3.utils.toWei('1', 'ether')\n})\n.on('transactionHash', hash => console.log('Transaction Hash:', hash))\n.on('receipt', receipt => console.log('Transaction Receipt:', receipt));"
            },
            {
                "subtopic_name": "Checking Transaction Status",
                "example_code": "web3.eth.getTransactionReceipt(transactionHash)\n  .then(receipt => {\n    if (receipt && receipt.status) {\n      console.log('Transaction succeeded');\n    } else if (receipt) {\n      console.log('Transaction failed');\n    } else {\n      console.log('Transaction not mined');\n    }\n  })\n  .catch(console.error);"
            }
        ]
    },
    {
        "topic_name": "Events",
        "topic_description": "Ethereum smart contracts emit events, and web3.js allows you to listen for and handle these events.",
        "subtopics": [
            {
                "subtopic_name": "Listening for Events",
                "example_code": "// Create a contract instance with ABI and contract address\nconst contract = new web3.eth.Contract(abi, contractAddress);\n\n// Listen for an event\ncontract.events.MyEvent({\n  fromBlock: 0,\n  toBlock: 'latest'\n}, (error, event) => {\n  if (error) {\n    console.error('Event error:', error);\n  } else {\n    console.log('Event data:', event.returnValues);\n  }\n});"
            }
        ]
    },
    {
        "topic_name": "Gas and Gas Price",
        "topic_description": "When sending transactions on Ethereum, you need to specify gas and gas prices. Web3.js provides functions to estimate gas and get gas prices.",
        "subtopics": [
            {
                "subtopic_name": "Estimating Gas",
                "example_code": "web3.eth.estimateGas({\n  from: senderAddress,\n  to: recipientAddress,\n  value: web3.utils.toWei('1', 'ether')\n})\n.then(gasEstimate => console.log('Gas Estimate:', gasEstimate));"
            },
            {
                "subtopic_name": "Getting Gas Price",
                "example_code": "web3.eth.getGasPrice()\n  .then(gasPrice => console.log('Gas Price:', gasPrice));"
            }
        ]
    },
    {
        "topic_name": "Web3 Providers",
        "topic_description": "Web3.js supports various providers for connecting to Ethereum. Infura, MetaMask, and local nodes are common choices.",
        "subtopics": [
            {
                "subtopic_name": "Using Infura Provider",
                "example_code": "const web3 = new Web3('https://mainnet.infura.io/v3/your-infura-api-key');"
            },
            {
                "subtopic_name": "Using MetaMask Provider",
                "example_code": "if (window.ethereum) {\n  const web3 = new Web3(window.ethereum);\n  try {\n    // Request account access if needed\n    await window.ethereum.enable();\n  } catch (error) {\n    // User denied account access\n  }\n}"
            },
            {
                "subtopic_name": "Using Local Node Provider",
                "example_code": "const web3 = new Web3('http://localhost:8545');"
            }
        ]
    },
    {
        "topic_name": "Working with Tokens",
        "topic_description": "Ethereum-based tokens (ERC-20, ERC-721, etc.) can be managed using web3.js to transfer, check balances, and interact with token contracts.",
        "subtopics": [
            {
                "subtopic_name": "Transferring Tokens",
                "example_code": "// Create a token contract instance\nconst tokenContract = new web3.eth.Contract(abi, tokenAddress);\n\n// Transfer tokens\ntokenContract.methods.transfer(toAddress, amount).send({ from: accountAddress });"
            },
            {
                "subtopic_name": "Checking Token Balance",
                "example_code": "// Create a token contract instance\nconst tokenContract = new web3.eth.Contract(abi, tokenAddress);\n\n// Check token balance\ntokenContract.methods.balanceOf(accountAddress).call().then(balance => console.log('Token Balance:', balance));"
            }
        ]
    },
    {
        "topic_name": "Working with IPFS",
        "topic_description": "InterPlanetary File System (IPFS) can be integrated with web3.js to store and retrieve data on a decentralized network.",
        "subtopics": [
            {
                "subtopic_name": "Uploading Data to IPFS",
                "example_code": "const ipfs = ipfsClient('localhost', '5001');\n\nipfs.add(Buffer.from('Hello, IPFS!'), (err, result) => {\n  if (err) {\n    console.error('IPFS upload error:', err);\n  } else {\n    console.log('IPFS Hash:', result[0].hash);\n  }\n});"
            },
            {
                "subtopic_name": "Retrieving Data from IPFS",
                "example_code": "const ipfs = ipfsClient('localhost', '5001');\n\nipfs.cat(ipfsHash, (err, data) => {\n  if (err) {\n    console.error('IPFS retrieval error:', err);\n  } else {\n    console.log('IPFS Data:', data.toString());\n  }\n});"
            }
        ]
    },
    {
        "topic_name": "Security Best Practices",
        "topic_description": "When working with web3.js and Ethereum, it's important to follow security best practices to protect your assets and applications.",
        "subtopics": [
            {
                "subtopic_name": "Protecting Private Keys",
                "example_code": "Never expose or share your private keys with anyone. Use hardware wallets or secure key management solutions."
            },
            {
                "subtopic_name": "Avoiding Scams",
                "example_code": "Be cautious of phishing websites, scams, and fraudulent smart contracts. Verify contract addresses and use trusted sources."
            },
            {
                "subtopic_name": "Testing on Testnets",
                "example_code": "Before deploying to the mainnet, test your smart contracts and applications on Ethereum testnets to ensure functionality and security."
            }
        ]
    },
    {
        "topic_name": "Working with Nonces",
        "topic_description": "A nonce is a number used to prevent transaction replay attacks. Web3.js provides methods for managing nonces when sending transactions.",
        "subtopics": [
            {
                "subtopic_name": "Getting Account Nonce",
                "example_code": "web3.eth.getTransactionCount(accountAddress, 'latest')\n  .then(nonce => console.log('Account Nonce:', nonce));"
            },
            {
                "subtopic_name": "Using Nonce in Transactions",
                "example_code": "const nonce = web3.utils.toHex(nonceValue);\n\nconst txObject = {\n  nonce: nonce,\n  from: senderAddress,\n  to: recipientAddress,\n  value: web3.utils.toWei('1', 'ether')\n};\n\nweb3.eth.sendTransaction(txObject);"
            }
        ]
    },
    {
        "topic_name": "Working with Promises",
        "topic_description": "Web3.js extensively uses Promises for asynchronous operations. Understanding Promises is essential for handling Ethereum interactions.",
        "subtopics": [
            {
                "subtopic_name": "Using async/await",
                "example_code": "async function example() {\n  const balance = await web3.eth.getBalance(accountAddress);\n  console.log('Account Balance:', balance);\n}"
            },
            {
                "subtopic_name": "Handling Promise Errors",
                "example_code": "web3.eth.getBalance(accountAddress)\n  .then(balance => console.log('Account Balance:', balance))\n  .catch(error => console.error('Error:', error));"
            }
        ]
    },
    {
        "topic_name": "Working with BigNumber",
        "topic_description": "BigNumber.js is used to handle large numbers like Ethereum wei values. Web3.js provides utils for converting between BigNumber and wei.",
        "subtopics": [
            {
                "subtopic_name": "Converting to Wei",
                "example_code": "const weiValue = web3.utils.toWei('1', 'ether');"
            },
            {
                "subtopic_name": "Converting from Wei",
                "example_code": "const etherValue = web3.utils.fromWei(weiValue, 'ether');"
            }
        ]
    },
    {
        "topic_name": "Working with Ethereum Name Service (ENS)",
        "topic_description": "ENS allows human-readable names for Ethereum addresses. Web3.js provides methods for interacting with ENS.",
        "subtopics": [
            {
                "subtopic_name": "Resolving ENS Names",
                "example_code": "web3.eth.ens.getAddress('example.eth')\n  .then(address => console.log('Resolved Address:', address));"
            },
            {
                "subtopic_name": "Registering ENS Names",
                "example_code": "const ensContract = new web3.eth.Contract(ensAbi, ensAddress);\n\nensContract.methods.register('yourname.eth', accountAddress).send({ from: accountAddress });"
            }
        ]
    },
    {
        "topic_name": "Working with Gas Limits",
        "topic_description": "Ethereum transactions require specifying gas limits. Web3.js provides methods for estimating and setting gas limits.",
        "subtopics": [
            {
                "subtopic_name": "Estimating Gas Limits",
                "example_code": "web3.eth.estimateGas({\n  from: senderAddress,\n  to: recipientAddress,\n  data: contractData\n})\n.then(gasLimit => console.log('Estimated Gas Limit:', gasLimit));"
            },
            {
                "subtopic_name": "Setting Custom Gas Limits",
                "example_code": "const txObject = {\n  gas: web3.utils.toHex(customGasLimit)\n};\n\nweb3.eth.sendTransaction(txObject);"
            }
        ]
    },
    {
        "topic_name": "Web3.js Providers",
        "topic_description": "Web3.js supports various providers, including HTTP, WebSocket, and custom providers for connecting to Ethereum nodes.",
        "subtopics": [
            {
                "subtopic_name": "HTTP Provider",
                "example_code": "const web3 = new Web3('https://mainnet.infura.io/v3/your-infura-api-key');"
            },
            {
                "subtopic_name": "WebSocket Provider",
                "example_code": "const web3 = new Web3('wss://mainnet.infura.io/ws/v3/your-infura-api-key');"
            },
            {
                "subtopic_name": "Custom Provider",
                "example_code": "const customProvider = new Web3.providers.HttpProvider('http://localhost:8545');\nconst web3 = new Web3(customProvider);"
            }
        ]
    },
    {
        "topic_name": "Handling Contract Events",
        "topic_description": "Ethereum smart contracts emit events, and web3.js allows you to subscribe to and handle these events in real-time.",
        "subtopics": [
            {
                "subtopic_name": "Subscribing to Events",
                "example_code": "const event = contract.events.MyEvent();\n\nevent.on('data', (eventData) => {\n  console.log('Event Data:', eventData.returnValues);\n}).on('error', console.error);"
            },
            {
                "subtopic_name": "Unsubscribing from Events",
                "example_code": "event.unsubscribe((error, success) => {\n  if (error) {\n    console.error('Unsubscribe Error:', error);\n  } else if (success) {\n    console.log('Unsubscribed from event');\n  }\n});"
            }
        ]
    },
    {
        "topic_name": "Working with Private Ethereum Networks",
        "topic_description": "Developers often use private Ethereum networks for testing and development. Web3.js can connect to private networks.",
        "subtopics": [
            {
                "subtopic_name": "Connecting to Private Network",
                "example_code": "const web3 = new Web3('http://localhost:8545');"
            },
            {
                "subtopic_name": "Configuring Custom Network",
                "example_code": "const customProvider = new Web3.providers.HttpProvider('http://localhost:8545');\nconst web3 = new Web3(customProvider);"
            }
        ]
    },
    {
        "topic_name": "Managing Ethereum Accounts",
        "topic_description": "Web3.js allows you to manage Ethereum accounts, including creating, importing, and exporting accounts.",
        "subtopics": [
            {
                "subtopic_name": "Creating an Account",
                "example_code": "const newAccount = web3.eth.accounts.create();"
            },
            {
                "subtopic_name": "Importing an Account",
                "example_code": "const privateKey = 'your-private-key';\nconst importedAccount = web3.eth.accounts.privateKeyToAccount(privateKey);"
            },
            {
                "subtopic_name": "Exporting an Account",
                "example_code": "const account = web3.eth.accounts[0];\nconst privateKey = account.privateKey;"
            }
        ]
    },
    {
        "topic_name": "Ethereum Gas Price",
        "topic_description": "Gas price determines the transaction cost on the Ethereum network. Web3.js provides methods to query and set gas prices.",
        "subtopics": [
            {
                "subtopic_name": "Getting Current Gas Price",
                "example_code": "web3.eth.getGasPrice()\n  .then(gasPrice => console.log('Gas Price:', gasPrice));"
            },
            {
                "subtopic_name": "Setting Custom Gas Price",
                "example_code": "const customGasPrice = web3.utils.toWei('50', 'gwei');\nconst txObject = {\n  gasPrice: customGasPrice\n};\n\nweb3.eth.sendTransaction(txObject);"
            }
        ]
    },
    {
        "topic_name": "Managing Ethereum Keys",
        "topic_description": "Securely managing Ethereum keys is crucial. Web3.js can help with key generation and encryption.",
        "subtopics": [
            {
                "subtopic_name": "Generating a Key Pair",
                "example_code": "const keyPair = web3.eth.accounts.create();"
            },
            {
                "subtopic_name": "Encrypting Private Key",
                "example_code": "const encryptedPrivateKey = web3.eth.accounts.encrypt(privateKey, password);"
            },
            {
                "subtopic_name": "Decrypting Private Key",
                "example_code": "const decryptedAccount = web3.eth.accounts.decrypt(encryptedAccount, password);"
            }
        ]
    },
    {
        "topic_name": "Ethereum Contract Deployment",
        "topic_description": "Web3.js allows you to deploy Ethereum smart contracts to the blockchain, specifying constructor arguments and gas limits.",
        "subtopics": [
            {
                "subtopic_name": "Deploying a Contract",
                "example_code": "const contract = new web3.eth.Contract(abi);\n\nconst deploy = contract.deploy({\n  data: bytecode,\n  arguments: [arg1, arg2]\n});\n\ndeploy.send({\n  from: senderAddress,\n  gas: gasLimit\n}).then(deployedContract => console.log('Contract Address:', deployedContract.options.address));"
            }
        ]
    },
    {
        "topic_name": "Ethereum Smart Contract Interaction",
        "topic_description": "Web3.js enables interaction with Ethereum smart contracts, including calling functions and sending transactions.",
        "subtopics": [
            {
                "subtopic_name": "Calling a Contract Function",
                "example_code": "const contract = new web3.eth.Contract(abi, contractAddress);\n\ncontract.methods.myFunction(arg1, arg2).call()\n  .then(result => console.log('Function Result:', result));"
            },
            {
                "subtopic_name": "Sending a Transaction to a Contract",
                "example_code": "const contract = new web3.eth.Contract(abi, contractAddress);\n\ncontract.methods.myFunction(arg1, arg2).send({\n  from: senderAddress,\n  gas: gasLimit\n}).then(receipt => console.log('Transaction Receipt:', receipt));"
            }
        ]
    },
    {
        "topic_name": "Managing Ethereum Transactions",
        "topic_description": "Web3.js allows you to create and manage Ethereum transactions, including nonce management and transaction signing.",
        "subtopics": [
            {
                "subtopic_name": "Creating a Transaction",
                "example_code": "const txObject = {\n  nonce: nonceValue,\n  from: senderAddress,\n  to: recipientAddress,\n  value: web3.utils.toWei('1', 'ether'),\n  gas: gasLimit,\n  gasPrice: gasPrice\n};\n\nweb3.eth.sendTransaction(txObject);"
            },
            {
                "subtopic_name": "Signing a Transaction",
                "example_code": "web3.eth.accounts.signTransaction(txObject, privateKey)\n  .then(signedTx => web3.eth.sendSignedTransaction(signedTx.rawTransaction))\n  .then(receipt => console.log('Transaction Receipt:', receipt));"
            }
        ]
    },
    {
        "topic_name": "Ethereum Wallet Integration",
        "topic_description": "Web3.js can be integrated with Ethereum wallet providers like MetaMask for seamless user interaction.",
        "subtopics": [
            {
                "subtopic_name": "MetaMask Integration",
                "example_code": "if (window.ethereum) {\n  const web3 = new Web3(window.ethereum);\n  try {\n    // Request account access if needed\n    await window.ethereum.enable();\n  } catch (error) {\n    // User denied account access\n  }\n}"
            },
            {
                "subtopic_name": "WalletConnect Integration",
                "example_code": "const web3 = new Web3(new Web3.providers.WalletConnectProvider({\n  rpc: { 1: 'https://mainnet.infura.io/v3/your-infura-api-key' }\n}));"
            }
        ]
    },
    {
        "topic_name": "Working with Ethereum Signatures",
        "topic_description": "Web3.js allows you to sign and verify Ethereum messages and transactions using cryptographic signatures.",
        "subtopics": [
            {
                "subtopic_name": "Signing a Message",
                "example_code": "const message = 'Hello, Ethereum!';\nconst signature = web3.eth.accounts.sign(message, privateKey);\nconsole.log('Message Signature:', signature.signature);"
            },
            {
                "subtopic_name": "Verifying a Signature",
                "example_code": "const valid = web3.eth.accounts.recover(message, signature.signature) === signerAddress;\nconsole.log('Signature Valid:', valid);"
            }
        ]
    }
];

export default Web3jsCourseData;