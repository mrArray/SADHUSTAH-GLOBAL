import React, { Component, useState, useEffect } from "react";
import { Redirect, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer'
import Menu_Aside from "./Menu_Aside";
import Spinner from 'react-bootstrap/Spinner'

export default class AllProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: "",
      myloading: false,
      show: false,
      message: ""
    };
  }

  
  EditProject(project) {
    localStorage.setItem("singleProjects", JSON.stringify(project));
    console.log(project)
  }
  render() {
    const projects = JSON.parse(localStorage.getItem('AllProjectData'))
    console.log(projects)
    const { myloading } = this.state;
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
                                      <Link to="EditProject" onClick={this.EditProject.bind(this, project)} className="text-dark text-hover-primary font-size-h4 font-weight-bolder mb-1">{project.title}</Link>
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
                              </div>
                              <Link to="/EditProject"
                                className="btn btn-block btn-sm btn-light-primary font-weight-bolder text-uppercase py-4"
                                onClick={this.EditProject.bind(this, project)}
                              >Edit Project</Link>
                              {/*end::Body*/}
                            </div>
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