import React, { Component, useState, useEffect } from "react";
import { Redirect, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer'
import Menu_Aside from "./Menu_Aside";
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner'


const AllProjects = () => {
  const [projects, setProjects] = useState([]);
  const [myloading, setLoading] = useState([false]);

  useEffect(() => {
    const username = 'admin'
    const password = 'Pass@1234'
    const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
    axios.get("https://ecological.chinikiguard.com/projects/api/list/?all_record=1",
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
        const projects = res.data;
        setProjects(projects);
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
     
                      {projects.map(project => (
                                       
                        <div className="col-xl-4">
                          {/*begin::Card*/}
                          <div className="card card-custom gutter-b card-stretch">
                            {/*begin::Body*/}
                            <div className="card-body"   >
                              {/*begin::Info*/}
                              <div className="d-flex align-items-center">
                                {/*begin::Pic*/}
                                <div className="flex-shrink-0 mr-4 symbol symbol-60 symbol-circle">
                                </div>
                                {/*end::Pic*/}
                                {/*begin::Info*/}
                                <div className="d-flex flex-column mr-auto">
                                  {/*begin: Title*/}
                                  <div className="d-flex flex-column mr-auto">
                                    <a href="#" className="text-dark text-hover-primary font-size-h4 font-weight-bolder mb-1">{project.title}</a>
                                    <span className="text-muted font-weight-bold">{project.location}</span>
                                  </div>
                                  {/*end::Title*/}
                                </div>
                                {/*end::Info*/}
                              </div>
                              {/*end::Info*/}
                              {/*begin::Description*/}
                              <div className="mb-10 mt-5 font-weight-bold">{project.description}</div>
                              {/*end::Description*/}
                              {/*begin::Data*/}
                              <div className="d-flex mb-5">
                                <div className="d-flex align-items-center mr-7">
                                  <span className="font-weight-bold mr-4">Start</span>
                                  <span className="btn btn-light-primary btn-sm font-weight-bold btn-upper btn-text">{project.start_date}</span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <span className="font-weight-bold mr-4">Due</span>
                                  <span className="btn btn-light-danger btn-sm font-weight-bold btn-upper btn-text">{project.due_date}</span>
                                </div>
                              </div>
                              {/*end::Data*/}
                              {/*begin::Progress*/}
                              <div className="d-flex mb-5 align-items-cente">
                                <span className="d-block font-weight-bold mr-5">Progress</span>
                                <div className="d-flex flex-row-fluid align-items-center">
                                  <div className="progress progress-xs mt-2 mb-2 w-100">
                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: `${project.progress}` }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                                  </div>
                                  <span className="ml-3 font-weight-bolder">{project.progress} </span>
                                </div>
                              </div>
                              <div className="d-flex align-items-center">
                                  <span className="font-weight-bold mr-12">Status</span>
                                  <span className="btn btn-light-primary btn-sm font-weight-bold btn-upper btn-text">{project.status}</span>
                                </div>
                              {/*ebd::Progress*/}
                            </div>
                            {/*end::Body*/}
                          </div>
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

export default AllProjects;

