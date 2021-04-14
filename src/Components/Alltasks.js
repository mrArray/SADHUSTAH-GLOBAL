import React, { Component, useState, useEffect } from "react";
import { Redirect, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer'
import Menu_Aside from "./Menu_Aside";
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner'



export default class AllTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: "",
      myloading: true,
      show: false,
      message: "",
      allProzz: []
    };
  }
  componentDidMount() {

    const username = 'admin'
  const password = 'Pass@1234'
  const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
  
    axios.get("https://ecological.chinikiguard.com/projects/api/tasks/list/?all_record=1",
    {
      headers:
      {
        'Authorization': `Basic ${token}`,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,HEAD,OPTIONS',
        'Access-Control-Allow-Credentials': true
      },

    })
    .then(res => {
      if (res.data) {
        localStorage.setItem("AllTasksData", JSON.stringify(res.data));
      }
      console.log(res);
      console.log(res.data);
      this.setState({ allTazz: res.data, myloading: false });
    })

  }
  //this is my onclick event to pass project ID
  EditTask(task) {
    localStorage.setItem("singleTask", JSON.stringify(task));
    console.log(task)
  }
  render() {
  return (
    <div>
        <Header />
        <div className="d-flex flex-column flex-root"  >
          {/*begin::Page*/}
          <div className="d-flex flex-row flex-column-fluid page">
            {/*begin::Wrapper*/}
            <div className="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
              {/*begin::Content*/}
              <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
                {/*begin::Entry*/}


    
                <div className="d-flex flex-column-fluid">
                  <Menu_Aside />
                  {/*begin::Container*/}
  

                  <div className="container">
                    {/*begin::Row*/}
                    {this.state.myloading ? (

                  <>
                  <center><Spinner animation="border" variant="primary" /></center>
                 </>



              ) : (
 
                    <div className="row" >
     
                      {this.state.allTazz.map(task => (
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                            {/*begin::Card*/}
                            <div className="card card-custom gutter-b card-stretch">
                              {/*begin::Body*/}
                              <div className="card-body pt-4">
                                
                                {/*begin::User*/}
                                <div className="d-flex align-items-center mb-7">
                                  {/*begin::Pic*/}
                                  <div className="flex-shrink-0 mr-4">
                                    <div className="symbol symbol-circle symbol-lg-75">
                                    </div>
                                  </div>
                                  {/*end::Pic*/}
                                  {/*begin::Title*/}
                                  <div className="d-flex flex-column">
                                    <Link to="/EditTask" onClick={this.EditTask.bind(this, task)} className="text-dark font-weight-bold text-hover-primary font-size-h4 mb-0">{task.title}</Link>
                                    <span className="text-muted font-weight-bold">{task.project_name}</span>
                                  </div>
                                  {/*end::Title*/}
                                </div>
                                {/*end::User*/}
                                {/*begin::Desc*/}
                                <p className="mb-7">{task.description}</p>
                                <p className="text-muted font-weight-bold">{task.location}</p>
                                <div className="d-flex mb-5 align-items-cente">
                                  <span className="d-block font-weight-bold mr-5">Progress</span>
                                  <div className="d-flex flex-row-fluid align-items-center">
                                    <div className="progress progress-xs mt-2 mb-2 w-100">
                                      <div className="progress-bar bg-success" role="progressbar" style={{ width: `${task.progress}` }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                    <span className="ml-3 font-weight-bolder">{task.progress} </span>
                                  </div>
                                </div>
                                <div className="d-flex align-items-center">
                                  <span className="font-weight-bold mr-12">Status</span>
                                  <span className="btn btn-light-primary btn-sm font-weight-bold btn-upper btn-text">{task.status}</span>
                                </div>

                                {/*end::Desc*/}
                                {/*begin::Info*/}
                                <div className="mb-7">
                                  <div className="d-flex justify-content-between align-items-center">
                                    <span className="text-dark-75 font-weight-bolder mr-2">Assigned To:</span>
                                    <a href="#" className="text-muted text-hover-primary">{task.assigned_to_name}</a>
                                  </div>
                                  <div className="d-flex justify-content-between align-items-cente my-1">
                                    <span className="text-dark-75 font-weight-bolder mr-2">Due Date::</span>
                                    <a href="#" className="text-muted text-hover-primary">{task.start_date}</a>
                                  </div>
                                  <div className="d-flex justify-content-between align-items-center">
                                    <span className="text-dark-75 font-weight-bolder mr-2">Due Date:</span>
                                    <span className="text-muted font-weight-bold">{task.due_date}</span>
                                  </div>
                                </div>

                               
                              
                                {/*end::Info*/}
                                <Link to="/EditTask"
                                className="btn btn-block btn-sm btn-light-primary font-weight-bolder text-uppercase py-4"
                                onClick={this.EditTask.bind(this, task)}
                              >Edit Task</Link>
                              </div>
                              {/*end::Body*/}
                            </div>
                            {/*end:: Card*/}
                          </div>           
                        

                      ))}
                       
                      {/*end::Col*/}

                    

                    </div>
                    )}
                    {/*end::Container*/}
                   

                  </div>
                 
                  {/*end::Entry*/}
                 </div>

                {/*end::Content*/}
                <Footer />
              </div>
              
            </div>
            
            {/*end::Wrapper*/}
          </div>
          {/*end::Page*/}
        </div>
        {/*end::Main*/}
      </div>
 );
}
}