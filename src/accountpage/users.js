import React, { Component } from 'react';

import "../App.css";
import "../users.css";


class Users extends Component {
    render() {
        return (
        <main className="content">
            <section className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="input-group">
                            <span className="input-group-btn">
                                <button className="btn btn-secondary pa-3 purple" type="button">
                                    <i className="mdi mdi-add inline"></i>
                                </button>
                            </span>
                            <input type="text" className="form-control" placeholder="Add asset" />
                        </div>
                    </div>
                    <div className="col-md-9 col-sm-6 col-xs-12">
                        <div className="input-group">
                            <span className="input-group-btn">
                                <button className="btn btn-secondary pa-3 purple" type="button">
                                    <i className="mdi mdi-search inline"></i>
                                </button>
                            </span>
                            <input type="text" className="form-control" placeholder="Search assets" />
                        </div>
                    </div>
                </div>
                <div className="row">
                        <div className="col-sm-12">
                            <div className="card-table">
                                <div className="pa-5">
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th>NAME</th>
                                            <th>LAST LOGGED IN</th>
                                            <th>SCANS USED</th>
                                            <th className="text-center">EDIT</th>
                                            <th className="text-center">ACTIVE/INACTIVE	</th>
                                            <th className="text-center">DELETE USER</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="text-left">KALID BOUKDID</td>
                                            <td className="text-left">30-05-2017</td>
                                            <td className="text-left">54 SCANS</td>
                                            <td className="text-center">
                                                <button className="button-edit" data-toggle="modal" data-target="#modalNewAdmin" data-upgraded=",MaterialButton">
                                                    <i className="mdi mdi-edit"></i>
                                                </button>
                                            </td>
                                            <td className="text-center">
                                                <p>perekly4atel</p>
                                            </td>
                                            <td className="text-center">
                                                <button className="button-edit" data-toggle="modal" data-target="#modalNewUser" data-upgraded=",MaterialButton">
                                                    <i className="mdi mdi-delete"></i>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-left">KALID BOUKDID</td>
                                            <td className="text-left">30-05-2017</td>
                                            <td className="text-left">54 SCANS</td>
                                            <td className="text-center">
                                                <button className="button-edit" data-toggle="modal" data-target="#modalNewAdmin" data-upgraded=",MaterialButton">
                                                    <i className="mdi mdi-edit"></i>
                                                </button>
                                            </td>
                                            <td className="text-center">
                                                <p>perekly4atel</p>
                                            </td>
                                            <td className="text-center">
                                                <button className="button-edit" data-toggle="modal" data-target="#modalNewUser" data-upgraded=",MaterialButton">
                                                    <i className="mdi mdi-delete"></i>
                                                </button>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>

                        </div>


                </div>
            </section>
            
        </main>




        );
    }
}

export default Users;