import React, { Component } from 'react';

import "../App.css";
import '../library.css';

class Library extends Component {
    render() {
        return (
           <main className="content">
               <section className="container-fluid">
                   <div className="row">
                       <div className="col-sm-12">
                           <div className="uploads">
                               <div className="row ">
                                <div className="col-sm-12 col-md-2">
                                    <div className="input-group">
                                        <span className="input-group-btn">
                                            <button className="btn btn-secondary pa-3 verde" type="button"> <i className="mdi mdi-add inline"></i></button>
                                        </span>
                                        <input type="text" className="form-control" placeholder="Add asset" />
                                    </div>
                                </div>
                                   <div className="col-sm-12 col-md-2">
                                       <div className="input-group">
                                        <span className="input-group-btn">
                                            <button className="btn btn-secondary pa-3 purple" type="button">  <i className="mdi mdi-add inline"></i></button>
                                        </span>
                                           <input type="text" className="form-control" placeholder="Add folder" />
                                       </div>
                                   </div>
                                <div className="col-sm-12 col-md-8">
                                    <div className="input-group">
                                        <span className="input-group-btn">
                                            <button className="btn btn-secondary pa-3 search" type="button">
                                                <i className="mdi mdi-search inline"></i>
                                            </button>
                                        </span>
                                        <input type="text" className="form-control" placeholder="Search assets" />
                                    </div>
                                </div>
                           </div>
                               <div className="row">
                               <div id="folder" className="col-md-12">
                                   <div className="mdl-card mdl-card-folder">
                                       <div className="mdl-card__title inline">
                                           <i className="mdi mdi-folder inline"></i>
                                           <h2 className="mdl-card__title-text inline">ALL MODELS</h2>
                                       </div>
                                   </div>
                                   <div className="mdl-card mdl-card-folder">
                                       <div className="mdl-card__title inline">
                                           <i className="mdi mdi-folder inline"></i>
                                           <h2 className="mdl-card__title-text inline">3D MODELS</h2>
                                       </div>
                                   </div>
                                   <div className="mdl-card mdl-card-folder">
                                       <div className="mdl-card__title inline">
                                           <i className="mdi mdi-folder inline"></i>
                                           <h2 className="mdl-card__title-text inline">IMAGE TRACKERS</h2>
                                       </div>
                                   </div>
                                   <div className="mdl-card mdl-card-folder">
                                       <div className="mdl-card__title inline">
                                           <i className="mdi mdi-folder inline"></i>
                                           <h2 className="mdl-card__title-text inline">UNITY 3D</h2>
                                       </div>
                                   </div>
                                   <div className="mdl-card mdl-card-folder">
                                       <div className="mdl-card__title inline">
                                           <i className="mdi mdi-create_new_folder inline"></i>
                                           <h2 className="mdl-card__title-text inline">NEW FOLDER</h2>
                                       </div>
                                   </div>
                               </div>
                               </div>
                               <div className="row">
                                   <div className="col-sm-12 center">
                                       <div id="empty" className="empty text-center">
                                           <p>You don't have any models.</p>
                                           <p>Please upload assets.</p>
                                       </div>
                                   </div>
                               </div>
                       </div>
                       </div>
                   </div>
               </section>
           </main>

        );
    }
}

export default Library;