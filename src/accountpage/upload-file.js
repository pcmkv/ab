import React, { Component } from 'react';
import '../upload-file.css';

class Upload extends Component {
    render() {
        return (
            <div className="uploads">
                <ul className="nav nav-tabs nav-list" role="tablist">
                    <li className="nav-item col">
                        <a className="nav-link active" data-toggle="tab" href="#home" role="tab">3D MODEL</a>
                    </li>
                    <li className="nav-item col">
                        <a className="nav-link" data-toggle="tab" href="#profile" role="tab">UNITY PACKAGE</a>
                    </li>
                    <li className="nav-item col">
                        <a className="nav-link" data-toggle="tab" href="#messages" role="tab">IMAGE TRACKER</a>
                    </li>
                </ul>
                <div className="tab-content">
                    <div className="tab-pane active" id="home" role="tabpanel">
                        <div className="contenido-upload">
                            <div className="width-600">
                                <form action="#" className=" mydropzone">
                                    <p>Upload your 3D models with obj or fbx file. When uploading .obj files, combine the model, textures &amp; materials and upload it as a zip file. </p>
                                    <div className="image-upload">
                                        <i className="mdi mdi-cloud_upload"></i>
                                        <p>Drag &amp; Drop file to upload.</p>
                                    </div>
                                    <button className="file-btn">
                                        OR SELECT FILE
                                    </button>
                                    <div className="message">
                                        <span>Drop files here to upload</span>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="card">
                            <form action="#" className="container">
                                <div className="form-group">
                                    <div className="col-xs-12 col-sm-12">
                                        <div className="row">
                                            <div className="col-sm-12 col-md-5 col-lg-5 ">
                                                <label for="inputFile" className="label-form">UPLOAD THUMBNAIL (REQUIRED)</label>
                                                <input type="file" className="form-control" id="inputFile" aria-describedby="inputFile" placeholder="Enter email" />
                                            </div>
                                    </div>
                                </div>
                                    </div>
                                <div className="form-group">
                                    <div className="col-xs-12 col-sm-12">
                                        <div className="row">
                                        <div className="col-sm-12 col-md-5 col-lg-5 ">
                                            <label className="label-form">NAME MODAL (REQUIRED)</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="col-sm-12 col-md-5 col-lg-5 ">
                                            <div className="form-group">
                                                <label className="label-form">INPUT MODEL DIMENSIONS (REQUIRED)</label>
                                                <div className="row">
                                                    <div className="col-sm-4">
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                        </div>
                                    </div>



                                </div>
                                <div className="form-group">
                                    <div className="col-sm-12 col-xs-12">
                                        <div className="row">
                                            <div className="col-sm-12 col-md-5 col-lg-5 ">
                                                <label className="label-form">LINK MODEL WITH IMAGE TRACKER (OPTIONAL):</label>
                                                <select className="form-control">
                                                    <option value="">Dropdown</option>
                                                </select>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="float-right">
                                        <button className="form-btn">
                                            SAVE
                                        </button>
                                        <button className="btn-reset">CANCEL</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="tab-pane" id="profile" role="tabpanel">
                        <div className="contenido-upload">
                            <div className="width-600">
                                <form action="#" className=" mydropzone">
                                    <p>Upload here your Unity package after exporting</p>
                                    <div className="image-upload">
                                        <i className="mdi mdi-cloud_upload"></i>
                                        <p>Drag &amp; Drop file to upload.</p>
                                    </div>
                                    <button className="file-btn">
                                        OR SELECT FILE
                                    </button>
                                    <div className="message">
                                        <span>Drop files here to upload</span>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="card">
                            <form action="#" className="container">
                                <div className="form-group">
                                    <div className="col-xs-12 col-sm-12">
                                        <div className="row">
                                            <div className="col-sm-12 col-md-5 col-lg-5 ">
                                                <label for="inputFile" className="label-form">UPLOAD THUMBNAIL (REQUIRED)</label>
                                                <input type="file" className="form-control" id="inputFile" aria-describedby="inputFile" placeholder="Enter email" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-xs-12 col-sm-12">
                                        <div className="row">
                                            <div className="col-sm-12 col-md-5 col-lg-5 ">
                                                <label className="label-form">NAME MODAL (REQUIRED)</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="col-sm-12 col-md-5 col-lg-5 ">
                                                <div className="form-group">
                                                    <label className="label-form">INPUT MODEL DIMENSIONS (REQUIRED)</label>
                                                    <div className="row">
                                                        <div className="col-sm-4">
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>



                                </div>
                                <div className="form-group">
                                    <div className="col-sm-12 col-xs-12">
                                        <div className="row">
                                            <div className="col-sm-12 col-md-5 col-lg-5 ">
                                                <label className="label-form">LINK MODEL WITH IMAGE TRACKER (OPTIONAL):</label>
                                                <select className="form-control">
                                                    <option value="">Dropdown</option>
                                                </select>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="float-right">
                                        <button className="form-btn">
                                            SAVE
                                        </button>
                                        <button className="btn-reset">CANCEL</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="tab-pane" id="messages" role="tabpanel">
                        <div className="contenido-upload">
                            <div className="width-600">
                                <form action="#" className=" mydropzone">
                                    <p>UPLOAD HERE YOUR IMAGE. THE IMAGE NEEDS TO BE OF HIGH QUALITY WITH CLEAR CONTRAST.</p>
                                    <div className="image-upload">
                                        <i className="mdi mdi-cloud_upload"></i>
                                        <p>Drag &amp; Drop file to upload.</p>
                                    </div>
                                    <button className="file-btn">
                                        OR SELECT FILE
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="card">
                            <form action="#" className="container">
                                <div className="form-group">
                                    <div className="col-sm-12 col-xs-12">
                                        <div className="row">
                                            <div className="col-sm-12 col-md-5 col-lg-5 ">
                                                <label className="label-form">NAME MODAL (REQUIRED)</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="col-sm-12 col-md-5 col-lg-5 ">
                                                <label className="label-form">LINK MODEL WITH IMAGE TRACKER (OPTIONAL):</label>
                                                <select className="form-control">
                                                    <option value="">Dropdown</option>
                                                </select>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="float-right">
                                        <button className="form-btn">
                                            SAVE
                                        </button>
                                        <button className="btn-reset">CANCEL</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Upload;
