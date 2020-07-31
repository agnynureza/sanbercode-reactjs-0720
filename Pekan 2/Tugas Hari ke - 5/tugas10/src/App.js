import React from 'react';
import './App.css';

function App() {
  return (
    <div id="borders">
			<div id="border">
				<div id="main-content">
					<h1>Form Pembelian Buah</h1>
					<form action="" id="table-buah">
						<table>
							<tbody>
								<tr>
									<td><label><strong>Nama Pelanggan</strong></label></td>
                	<td><input style={{width:'100%'}} type="text"/></td>
								</tr>
								<tr>
									<td id="daftar-item"><label><strong>Daftar Item</strong></label>
									</td>
									<td>
												<input type="checkbox" value="semangka"/>
												<label>Semangka</label><br/>
												<input type="checkbox" value="jeruk"/>
												<label>Jeruk</label><br/>
												<input type="checkbox" value="nanas"/>
												<label>nanas</label><br/>
												<input type="checkbox" value="salak"/>
												<label>salak</label><br/>
												<input type="checkbox" value="anggur"/>
												<label>anggur</label><br/>
									</td>
								</tr>
							</tbody>
						</table>
						<input className='submit-buah' type="submit" value="Kirim"/>
					</form>
				</div>
			</div>
    </div>
  );
}

export default App;
