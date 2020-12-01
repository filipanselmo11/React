/*import React, { Component } from 'react';
import getWeb3 from '../getWeb3';
import ExameMedico from '../contracts/ExameMedico.json';
import { StyleDropZone } from 'react-drop-zone';
import fileReaderPullStream from 'pull-file-reader';
import ipfs from '../ipfs';

class Paciente extends Component {
	state = {
		storageValue: 0,
		web3: null,
		accounts: null,
		contract: null,
	};

	componentDidMount = async () => {
		try {
			const web3 = await getWeb3();
			const accounts = await web3.eth.getAccounts();
			const networkId = await web3.eth.net.getId();
			const deployedNetwork = ExameMedico.networks[networkId];
			const instance = new web3.eth.Contract(ExameMedico.abi, deployedNetwork && deployedNetwork.address);
			this.setState({ web3, accounts, contract: instance }, this.render);
		} catch (error) {
			alert(`Failed to load web3, accounts, or contract. Check console for details.`);
			console.error(error);
		}
	};

	add = async (file) => {
		try {
			const { contract, accounts } = this.state;
			const stream = fileReaderPullStream(file);
			const result = await ipfs.add(stream);
			const timestamp = Math.round(+new Date() / 1000);
			let uploaded = await contract.methods
				.add(result[0].hash, file.name, timestamp)
				.send({ from: accounts[0], gas: 30000 });
			console.log(uploaded);
			console.log('https://ipfs.io/ ' + stream);
		} catch (error) {
			console.log(error);
		}
	};

	render() {
		if (!this.state.web3) {
			return <div>Loading web3, accounts and contract...</div>;
		}
		return (
			<div className="Paciente">
				<div className="container pt-3">
					<h1>Paciente</h1>
					<StyleDropZone onDrop={this.add} />
				</div>
			</div>
		);
	}
}

export default Paciente;*/
