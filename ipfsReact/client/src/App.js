import React, { Component } from 'react';
//import Paciente from './pages/Paciente';
//import Navegacao from './components/Navegacao';
import getWeb3 from './getWeb3';
import SolidityDriveContract from './contracts/SolidityDrive.json';
import { StyledDropZone } from 'react-drop-zone';
import { FileIcon, defaultStyles } from 'react-file-icon';
import { Table } from 'reactstrap';
import fileReaderPullStream from 'pull-file-reader';
import ipfs from './ipfs';
import Moment from 'react-moment';

import './App.css';

/*function App() {
	return (
		<Navegacao/>
	);
};*/

export class App extends Component {
	state = { solidityDrive: [], storageValue: 0, web3: null, accounts: null, contract: null };

	componentDidMount = async () => {
		try {
			// Get network provider and web3 instance.
			const web3 = await getWeb3();

			// Use web3 to get the user's accounts.
			const accounts = await web3.eth.getAccounts();

			// Get the contract instance.
			const networkId = await web3.eth.net.getId();
			const deployedNetwork = SolidityDriveContract.networks[networkId];
			const instance = new web3.eth.Contract(
				SolidityDriveContract.abi,
				deployedNetwork && deployedNetwork.address
			);

			// Set web3, accounts, and contract to the state, and then proceed with an
			// example of interacting with the contract's methods.
			this.setState({ web3, accounts, contract: instance }, this.runExample);
		} catch (error) {
			// Catch any errors for any of the above operations.
			alert(`Failed to load web3, accounts, or contract. Check console for details.`);
			console.error(error);
		}
	};

	getFiles = async () => {
		try {
			console.log(this.state);
			const { accounts, contract } = this.state;

			let filesLength = await contract.methods.getLength().call({ from: accounts[0] });
			let files = [];
			for (let i = 0; i < filesLength; i++) {
				let file = await contract.methods.get(i).call({ from: accounts[0] });
				files.push(file);
			}
			this.setState({ solidityDrive: files });
		} catch (error) {
			console.log(error);
		}
	};

	add = async (file) => {
		try {
			const { contract, accounts } = this.state;
			const stream = fileReaderPullStream(file);
			const result = await ipfs.add(stream);
			const timestamp = Math.round(+new Date() / 1000);
			const type = file.name.substr(file.name.lastIndexOf('.') + 1);
			let uploaded = await contract.methods
				.add(result[0].hash, file.name, type, timestamp)
				.send({ from: accounts[0], gas: 300000 });
			console.log(uploaded);
			this.getFiles();
		} catch (error) {
			console.log(error);
		}
	};

	/*render() {
		return (
			<div className="App">
				<Paciente />
			</div>
		);
	}*/
	render() {
		return (
			<div className="App">
				<div className="container pt-3">
					<h1>Paciente</h1>
					<StyledDropZone onDrop={this.add} />
					<h1>Médico</h1>
					<Table>
						<thead>
							<tr>
								<th width="7%" scope="row">
									Tipo
								</th>
								<th className="text-left">Nome do Arquivo</th>
								<th className="text-right">Data</th>
							</tr>
						</thead>
						<tbody>
							{solidityDrive !== []
								? solidityDrive.map((item, key) => (
										<tr>
											<th>
												<FileIcon size={30} extension={item[2]} {...defaultStyles[item[2]]} />
											</th>
											<th className="text-left">
												<a rel="noopener noreferrer" href={'https://ipfs.io/ipfs/' + item[0]}>
													{item[1]}
												</a>
											</th>
											<th className="text-right">
												<Moment format="DD/MM/YYYY" unix>
													{item[3]}
												</Moment>
											</th>
										</tr>
								  ))
								: null}
						</tbody>
					</Table>
				</div>
			</div>
		);
	}
}

export default App;
