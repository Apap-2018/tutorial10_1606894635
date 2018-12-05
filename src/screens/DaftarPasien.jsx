import React from 'react';
import { DaftarPasienRow } from '../components/DaftarPasienRow';
import { Loading } from '../components/Loading';
import { TableContainer } from '../containers/TableContainer';
import { Appointment } from '../utils/Appointment.js';

export class DaftarPasien extends React.Component {
	/** 
	 * TODO: Akses method getAllPasien() pada Appointment dan lakukan update state. 
	 * TODO: Lakukan pemanggilan pada constructor() atau pada lifecycle componentDidMount()
	 */
	constructor(props) {
		super(props)
		Appointment.getAllPasien().then(response => {
			this.setState({
				loading: false,
				listPasien: response.result
			})
		})
		this.state = {
			loading: true,
			listPasien: []
		}
	}

	render() {
        if (this.state.loading) {
            return (
                <Loading msg="Fetching Data..."/>
            )
        } else {
            return (
                <TableContainer title="Daftar Pasien" header={['Nama Pasien', 'Status Pasien', 'Update', 'Tambah Lab']}>
                    <DaftarPasienRow listPasien={this.state.listPasien}/>
                </TableContainer>
            )
        }
	}
}