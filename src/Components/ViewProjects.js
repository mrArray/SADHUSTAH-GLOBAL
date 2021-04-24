import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
// import AuthService from "../services/auth.service";
// import { PostData } from "./PostData";
import { Redirect, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer'
import Menu_Aside from "./Menu_Aside";
import AuthLogin from "../Authentications/AuthLogin";
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner'

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

export default class ViewProjects extends Component {

  constructor(props) {
    super(props);
    this.handleViewProject = this.handleViewProject.bind(this);
    this.onChangeProject = this.onChangeProject.bind(this)
    this.ViewProject=this.ViewProject.bind(this)
    this.state = {
      project: "",
      loading: false,
      show: false,
      message: ""
    };
  }
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "./assets/dist/assets/js/pages/custom/wizard/wizard-3.js";
    script.async = true;
    document.body.appendChild(script);
  }
  
  componentWillMount() {
    
  }
  onChangeProject(e) {
    this.setState({
      project: e.target.value
    });
  }
  ViewProject (project){
    let username = 'admin';
    let password = 'Pass@1234';
    const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
      return  axios.get(`https://ecological1.chinikiguard.com/projects/api/details/${project}/`,
      { 
       headers: { 
       'Authorization': `Basic ${token}`,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS',
        'Access-Control-Allow-Credentials': true 
       }, 
      }   
      )
      .then(res => {
        if (res.data) {
          localStorage.setItem("singleProjects", JSON.stringify(res.data));
        }
        // console.log(res);
        // console.log(res.data);
       
        window.location = "/EditProject"
      })
  }
  handleViewProject(e) {
    e.preventDefault();
    this.setState({
      message: "",
      successful: false,
      loading:true
    });
    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      this.ViewProject(
        this.state.project
      ).then(
        response => {
          this.setState({
            message: response.data.detail,
            successful: true,
            loading:true
          });
          // window.location = "/EditProject"
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.setState({
            successful: false,
            message: resMessage,
            loading: true
          });
        }
      );
    }
  }
  render() {

    if (!localStorage.getItem('user')) {

      return (<Redirect to={'/login'} />)
    }
    const projectId = JSON.parse(localStorage.getItem('AllProjectData'))
    // console.log(projectId)
    const { loading } = this.state;

    // if (this.state.redirectToReferrer) {
    //     return (<Redirect to={'/dashboard'} />)
    // }

    // if (sessionStorage.getItem('token')) {
    //     return (<Redirect to={'/dashboard'} />)
    // }



    return (
      <div>

        <Header />


        <div className="d-flex flex-column flex-root">
          {/*begin::Page*/}
          <div className="d-flex flex-row flex-column-fluid page">
            {/*begin::Wrapper*/}
            <div className="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">

              {/*begin::Content*/}
              <div className="content d-flex flex-column flex-column-fluid" id="kt_content">

                <div className="d-flex flex-column-fluid">
                  <Menu_Aside />


                  {/*begin::Container*/}
                  <div className="container">

                    <div className="card card-custom">
                      <div className="card-body p-0">
                        {/*begin: Wizard*/}
                        <div className="wizard wizard-3" id="kt_wizard_v3" data-wizard-state="step-first" data-wizard-clickable="true">
                          {/*begin: Wizard Nav*/}
                          <div className="wizard-nav">
                            <div className="wizard-steps px-8 py-8 px-lg-15 py-lg-3">
                              {/*begin::Wizard Step 1 Nav*/}
                              <div className="wizard-step" data-wizard-type="step" data-wizard-state="current">
                                <div className="wizard-label">
                                  <h3 className="wizard-title">
                                   <center> <span></span>View Projects</center></h3>
                                  <div className="wizard-bar" />
                                </div>
                              </div>
                              {/*end::Wizard Step 1 Nav*/}

                            </div>
                          </div>
                          {/*end: Wizard Nav*/}
                          {/*begin: Wizard Body*/}
                          <div className="row justify-content-center py-10 px-8 py-lg-12 px-lg-10">
                            <div className="col-xl-12 col-xxl-7">
                              {/*begin: Wizard Form*/}
                              <Form onSubmit={this.handleViewProject} ref={c => { this.form = c; }} className="form" id="kt_form">
                                {!this.state.successful && (
                                  <div>
                                    {/*begin: Wizard Step 1*/}
                                    <div className="pb-5" data-wizard-type="step-content" data-wizard-state="current">
                                      <h4 className="mb-10 font-weight-bold text-dark">View Project </h4>
                                      {/*begin::Input*/}
                                      <div className="form-group">
                                        <label>Projects</label>
                                        <select name="country" className="form-control"
                                          value={this.state.project}
                                          onChange={this.onChangeProject}
                                          validations={[required]}
                                        >
                                          <option value>Select</option>
                                          {projectId.map(project => (

                                            <option value={`${project.pk}`}>{project.title}</option>
                                          ))}
                                        </select>
                                      </div>

                                      <center>
                                    <button id="kt_login_singin_form_submit_button"
                                      className="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-3"
                                      enabled={this.state.loading}

                                    >
                                      {this.state.loading && (
                                        <center><Spinner animation="border" variant="white" /></center>
                                      )}
                                      <span>View</span> 
                                    </button>
                                    </center>

                                      </div>

                                  </div>
                                )}
                                <center>


                                  {this.state.message && (

                                    <div className="pb-5" >
                                      <div
                                        className={
                                          this.state.successful
                                            ? "alert alert-custom alert-outline-success fade show mb-5"
                                            : "alert alert-custom alert-outline-danger fade show mb-5"
                                        }
                                        role="alert"
                                      >
                                        {this.state.message}
                                      </div>
                                    </div>
                                  )}</center>
                                {/*end: Wizard Step 2*/}

                                {/*begin: Wizard Actions*/}
                                <div className="d-flex justify-content-between border-top mt-5 pt-10">
                                  <div className="mr-2">
                                  </div>
                                  <div>
                                  
                                    <CheckButton
                                      style={{ display: "none" }}
                                      ref={c => {
                                        this.checkBtn = c;
                                      }}
                                    />
                                  </div>
                                </div>

                                {/*end::Wizard Actions*/}
                              </Form>
                              {/*end: Wizard Form*/}
                            </div>
                          </div>
                          {/*end: Wizard Body*/}
                        </div>
                        {/*end: Wizard*/}
                      </div>

                    </div>
                    <Footer />

                  </div>

                  {/*end::Container*/}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>





    );
  }
}