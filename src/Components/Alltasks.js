import React, { Component, useState, useEffect } from "react";
import { Redirect, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer'
import Menu_Aside from "./Menu_Aside";
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner'


const AllTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [myloading, setLoading] = useState([false]);

  useEffect(() => {
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
        const tasks = res.data;
        setTasks(tasks);
        setLoading(false)
        console.log(res);
        console.log(res.data);
        // window.location = "/dashboard"
      })

  }, []);

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
                    {myloading ? (

                  <>
                  <center><Spinner animation="border" variant="primary" /></center>
                 </>



              ) : (
 
                    <div className="row" >
     
                      {tasks.map(task => (
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
                                    <a href="#" className="text-dark font-weight-bold text-hover-primary font-size-h4 mb-0">{task.title}</a>
                                    <span className="text-muted font-weight-bold">{task.project}</span>
                                  </div>
                                  {/*end::Title*/}
                                </div>
                                {/*end::User*/}
                                {/*begin::Desc*/}
                                <p className="mb-7">{task.description}</p>
                                <p className="text-muted font-weight-bold">{task.location}</p>

                                {/*end::Desc*/}
                                {/*begin::Info*/}
                                <div className="mb-7">
                                  <div className="d-flex justify-content-between align-items-center">
                                    <span className="text-dark-75 font-weight-bolder mr-2">Assigned To:</span>
                                    <a href="#" className="text-muted text-hover-primary">{task.assigned_to}</a>
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
                                <a href="#" className="btn btn-block btn-sm btn-light-success font-weight-bolder text-uppercase py-4">Edit Task</a>
                              </div>
                              {/*end::Body*/}
                            </div>
                            {/*end:: Card*/}
                          </div>           
                        

                      ))}
                       
                      {/*end::Col*/}

                      {/*begin::Pagination*/}
                      {/* <div className="d-flex justify-content-between align-items-center flex-wrap">
                        <div className="d-flex flex-wrap mr-3">
                          <a href="#" className="btn btn-icon btn-sm btn-light-primary mr-2 my-1">
                            <i className="ki ki-bold-double-arrow-back icon-xs" />
                          </a>
                          <a href="#" className="btn btn-icon btn-sm btn-light-primary mr-2 my-1">
                            <i className="ki ki-bold-arrow-back icon-xs" />
                          </a>
                          <a href="#" className="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1">...</a>
                          <a href="#" className="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1">23</a>
                          <a href="#" className="btn btn-icon btn-sm border-0 btn-hover-primary active mr-2 my-1">24</a>
                          <a href="#" className="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1">25</a>
                          <a href="#" className="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1">26</a>
                          <a href="#" className="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1">27</a>
                          <a href="#" className="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1">28</a>
                          <a href="#" className="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1">...</a>
                          <a href="#" className="btn btn-icon btn-sm btn-light-primary mr-2 my-1">
                            <i className="ki ki-bold-arrow-next icon-xs" />
                          </a>
                          <a href="#" className="btn btn-icon btn-sm btn-light-primary mr-2 my-1">
                            <i className="ki ki-bold-double-arrow-next icon-xs" />
                          </a>
                        </div>
                        <div className="d-flex align-items-center">
                          <select className="form-control form-control-sm text-primary font-weight-bold mr-4 border-0 bg-light-primary" style={{ width: 75 }}>
                            <option value={5}>5</option>
                            <option value={20}>20</option>
                            <option value={30}>30</option>
                            <option value={50}>50</option>
                            <option value={100}>100</option>
                          </select>
                          <span className="text-muted">Displaying 10 of 230 records</span>
                        </div>
                      </div> */}
                      {/*end::Pagination*/}
                      

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
};

export default AllTasks;

