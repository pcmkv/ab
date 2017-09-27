import React, { Component } from 'react';
import Upload from './upload-file';
import UploadAssets from './upload-assets';
import '../main.css';

class Main extends Component {
    render() {
        return (
            <main className="content">
                <div className="content-card">
                    <section className="container-fluid">
                        <div className="row">
                            <div className="col-sm-3 col-lg-3 col-md-3">
                                <div className="mdl-card mdl-card-admin">
                                    <div className="mdl-card__title">
                                        <h2 className="mdl-card__title-text">Scans</h2>
                                    </div>
                                    <div className="mdl-card__supporting-text green">
                                        <p>99 scans of 200</p>
                                        <p>left</p>
                                    </div>
                                    <div className="mdl-card__actions">
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3 col-lg-3 col-md-3">
                                <div className="mdl-card mdl-card-admin">
                                    <div className="mdl-card__title">
                                        <h2 className="mdl-card__title-text">Storage</h2>
                                    </div>
                                    <div className="mdl-card__supporting-text green">
                                        <p>988 MB of 1000 MB</p>
                                        <p>left</p>
                                    </div>
                                    <div className="mdl-card__actions">
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3 col-lg-3 col-md-3">
                                <div className="mdl-card mdl-card-admin">
                                    <div className="mdl-card__title">
                                        <h2 className="mdl-card__title-text">Users</h2>
                                    </div>
                                    <div className="mdl-card__supporting-text green">
                                        <p>4 users active</p>
                                        <p>left</p>
                                    </div>
                                    <div className="mdl-card__actions">
                                        <button className="green-btn">ADD USER</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3 col-lg-3 col-md-3">
                                <div className="mdl-card mdl-card-admin">
                                    <div className="mdl-card__title">
                                        <h2 className="mdl-card__title-text">Current Plan</h2>
                                    </div>
                                    <div className="mdl-card__supporting-text">
                                        <p>Free trial</p>
                                        <p>Valid until 24 June 2017</p>
                                    </div>
                                    <div className="mdl-card__actions">
                                        <button className="purple-btn">UPGRATE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <Upload />
                            </div>
                        </div>
                    </section>
                </div>

            </main>
           
        );
    }
}

export default Main;
