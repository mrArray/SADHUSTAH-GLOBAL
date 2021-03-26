import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Textarea from "react-validation/build/textarea"
import CheckButton from "react-validation/build/button";
// import AuthService from "../services/auth.service";
// import { PostData } from "./PostData";
import Header from './Header';
import Footer from './Footer'
import axios from 'axios'
import AuthLogin from "../Authentications/AuthLogin";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Redirect, Link, Router, Switch } from 'react-router-dom';





const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
// const required = value => {
//   if (!value) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         This field is required!
//       </div>
//     );
//   }
// };

// const email = value => {
//   if (!isEmail(value)) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         This is not a valid email.
//       </div>
//     );
//   }
// };

// const descriptionValidation = value => {
//   if (!value.length < 50) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         The Description must not Exceed 50 Characters
//       </div>
//     );
//   }
// };

// const vpassword = value => {
//   if (value.length < 6 || value.length > 40) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         The password must be between 6 and 40 characters.
//       </div>
//     );
//   }
// };

export default class RegisterProject extends Component {

  constructor(props) {
    super(props);
    this.handleRegisterProject = this.handleRegisterProject.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this)
    this.onChangeLocation = this.onChangeLocation.bind(this)
    this.onChangeStartDate = this.onChangeStartDate.bind(this)
    this.onChangeDueDate = this.onChangeDueDate.bind(this)
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      title: "",
      description: "",
      status: "",
      location: "",
      startDate: "",
      dueDate: "",
      loading: false,
      show: false,
      message: ""
    };
  }


  // "title": char(required, limit 50),
  // "description": char (required),
  // "status":  choice(open|inprogress|completed),
  //  "location": char(required, limit 50),
  // "manager": default to auth user,
  // "start_date": YYYY-MM-DD,
  // "due_date":  YYYY-MM-DD,



  componentDidMount() {
    const script = document.createElement("script");

    script.src = "./assets/dist/assets/js/pages/custom/wizard/wizard-1.js";
    script.async = true;


    document.body.appendChild(script);
  }


  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeStatus(e) {
    this.setState({
      status: e.target.value
    });
  }
  onChangeLocation(e) {
    this.setState({
      location: e.target.value
    });
  }
  onChangeStartDate(e) {
    this.setState({
      start_date: e.target.value
    });
  }
  onChangeDueDate(e) {
    this.setState({
      due_date: e.target.value
    });
  }
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }


  handleRegisterProject(e) {
    e.preventDefault();

    // const username = 'admin'
    // const password = 'Pass@1234'
    // const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
    // axios.post("https://ecological.chinikiguard.com/projects/api/create/", {

    //   title: this.state.title,
    //   description: this.state.description,
    //   status: this.state.status,
    //   location: this.state.location,
    //   start_date: this.state.start_date,
    //   due_date: this.state.due_date

    // },

    //   {
    //     headers:
    //     {
    //       'Authorization': `Basic ${token}`,
    //       'Access-Control-Allow-Origin': '*',
    //       'Access-Control-Allow-Methods': 'GET,POST,HEAD,OPTIONS',
    //       'Access-Control-Allow-Credentials': true
    //     },

    //   })
    //   .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //     // window.location = "/dashboard"
    //   })

      this.setState({
        message: "",
        successful: false
      });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthLogin.RegisterProject(
        this.state.title,
        this.state.description,
        this.state.location,
        this.state.status,
        this.state.start_date,
        this.state.due_date
      ).then(
        response => {
          this.setState({
            message: response.data.detail,
            successful: true
          });
          window.location = "/registerproject"
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
            message: resMessage
          });
        }
      );
    }
  }
  render() {



    const { loading } = this.state;

    // if (this.state.redirectToReferrer) {
    //     return (<Redirect to={'/dashboard'} />)
    // }

    // if (sessionStorage.getItem('token')) {
    //     return (<Redirect to={'/dashboard'} />)
    // }

    return (

      <div>
        {/*begin::Main*/}
        <Header />

        <div className="d-flex flex-column flex-root">
          {/*begin::Page*/}
          <div className="d-flex flex-row flex-column-fluid page">
            {/*begin::Wrapper*/}
            <div className="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">

              {/*begin::Content*/}
              <div className="content d-flex flex-column flex-column-fluid" id="kt_content">

                {/*begin::Entry*/}
                <div className="d-flex flex-column-fluid">
                <div class="flex-row-auto offcanvas-mobile w-200px w-xxl-275px" id="kt_todo_aside">
                    {/*begin::Card*/}
                    <div className="card card-custom card-stretch">
                      {/*begin::Body*/}
                      <div className="card-body px-5">
                        {/*begin:Nav*/}
                        <div className="navi navi-hover navi-active navi-link-rounded navi-bold navi-icon-center navi-light-icon">
                          {/*begin:Item*/}
                          <div className="navi-item my-2">
                            <Link to="/dashboard" className="navi-link">
                              <span className="navi-icon mr-4">
                                <span className="svg-icon svg-icon-xl">
                                  {/*begin::Svg Icon | path:assets/media/svg/icons/General/Trash.svg*/}
                                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                      <rect x={0} y={0} width={24} height={24} />
                                      <path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fillRule="nonzero" />
                                      <path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3" />
                                    </g>
                                  </svg>
                                  {/*end::Svg Icon*/}
                                </span>
                              </span>
                              <span className="navi-text font-weight-bolder font-size-lg">Dashboard</span>
                            </Link>
                          </div>
                          {/*end:Item*/}
                          {/*begin:Item*/}
                          <div className="navi-item my-2">
                            <Link to="/allprojects" className="navi-link">
                              <span className="navi-icon mr-4">
                                <span className="svg-icon svg-icon-xl">
                                  {/*begin::Svg Icon | path:assets/media/svg/icons/General/Half-star.svg*/}
                                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                      <polygon points="0 0 24 0 24 24 0 24" />
                                      <path d="M12,4.25932872 C12.1488635,4.25921584 12.3000368,4.29247316 12.4425657,4.36281539 C12.6397783,4.46014562 12.7994058,4.61977315 12.8967361,4.81698575 L14.9389263,8.95491503 L19.5054023,9.61846284 C20.0519472,9.69788046 20.4306287,10.2053233 20.351211,10.7518682 C20.3195865,10.9695052 20.2170993,11.1706476 20.0596157,11.3241562 L16.7552826,14.545085 L17.5353298,19.0931094 C17.6286908,19.6374458 17.263103,20.1544017 16.7187666,20.2477627 C16.5020089,20.2849396 16.2790408,20.2496249 16.0843804,20.1472858 L12,18 L12,4.25932872 Z" fill="#000000" opacity="0.3" />
                                      <path d="M12,4.25932872 L12,18 L7.91561963,20.1472858 C7.42677504,20.4042866 6.82214789,20.2163401 6.56514708,19.7274955 C6.46280801,19.5328351 6.42749334,19.309867 6.46467018,19.0931094 L7.24471742,14.545085 L3.94038429,11.3241562 C3.54490071,10.938655 3.5368084,10.3055417 3.92230962,9.91005817 C4.07581822,9.75257453 4.27696063,9.65008735 4.49459766,9.61846284 L9.06107374,8.95491503 L11.1032639,4.81698575 C11.277344,4.464261 11.6315987,4.25960807 12,4.25932872 Z" fill="#000000" />
                                    </g>
                                  </svg>
                                  {/*end::Svg Icon*/}
                                </span>
                              </span>
                              <span className="navi-text font-weight-bolder font-size-lg">All Projects</span>
                            </Link>
                          </div>
                          {/*end:Item*/}
                          {/*begin:Item*/}
                          <div className="navi-item my-2">
                            <Link to="/registerProject" className="navi-link">
                              <span className="navi-icon mr-4">
                                <span className="svg-icon svg-icon-xl">
                                  {/*begin::Svg Icon | path:assets/media/svg/icons/Design/PenAndRuller.svg*/}
                                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                      <rect x={0} y={0} width={24} height={24} />
                                      <path d="M3,16 L5,16 C5.55228475,16 6,15.5522847 6,15 C6,14.4477153 5.55228475,14 5,14 L3,14 L3,12 L5,12 C5.55228475,12 6,11.5522847 6,11 C6,10.4477153 5.55228475,10 5,10 L3,10 L3,8 L5,8 C5.55228475,8 6,7.55228475 6,7 C6,6.44771525 5.55228475,6 5,6 L3,6 L3,4 C3,3.44771525 3.44771525,3 4,3 L10,3 C10.5522847,3 11,3.44771525 11,4 L11,19 C11,19.5522847 10.5522847,20 10,20 L4,20 C3.44771525,20 3,19.5522847 3,19 L3,16 Z" fill="#000000" opacity="0.3" />
                                      <path d="M16,3 L19,3 C20.1045695,3 21,3.8954305 21,5 L21,15.2485298 C21,15.7329761 20.8241635,16.200956 20.5051534,16.565539 L17.8762883,19.5699562 C17.6944473,19.7777745 17.378566,19.7988332 17.1707477,19.6169922 C17.1540423,19.602375 17.1383289,19.5866616 17.1237117,19.5699562 L14.4948466,16.565539 C14.1758365,16.200956 14,15.7329761 14,15.2485298 L14,5 C14,3.8954305 14.8954305,3 16,3 Z" fill="#000000" />
                                    </g>
                                  </svg>
                                  {/*end::Svg Icon*/}
                                </span>
                              </span>
                              <span className="navi-text font-weight-bolder font-size-lg">Add Project</span>
                              <span className="navi-label">
                              </span>
                            </Link>
                          </div>
                          {/*end:Item*/}

                          {/*begin:Item*/}
                          <div className="navi-item my-2">
                            <Link to="/AssignTask" className="navi-link active">
                              <span className="navi-icon mr-4">
                                <span className="svg-icon svg-icon-xl">
                                  {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Mail-heart.svg*/}
                                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                      <rect x={0} y={0} width={24} height={24} />
                                      <path d="M6,2 L18,2 C18.5522847,2 19,2.44771525 19,3 L19,13 C19,13.5522847 18.5522847,14 18,14 L6,14 C5.44771525,14 5,13.5522847 5,13 L5,3 C5,2.44771525 5.44771525,2 6,2 Z M13.8,4 C13.1562,4 12.4033,4.72985286 12,5.2 C11.5967,4.72985286 10.8438,4 10.2,4 C9.0604,4 8.4,4.88887193 8.4,6.02016349 C8.4,7.27338783 9.6,8.6 12,10 C14.4,8.6 15.6,7.3 15.6,6.1 C15.6,4.96870845 14.9396,4 13.8,4 Z" fill="#000000" opacity="0.3" />
                                      <path d="M3.79274528,6.57253826 L12,12.5 L20.2072547,6.57253826 C20.4311176,6.4108595 20.7436609,6.46126971 20.9053396,6.68513259 C20.9668779,6.77033951 21,6.87277228 21,6.97787787 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,6.97787787 C3,6.70173549 3.22385763,6.47787787 3.5,6.47787787 C3.60510559,6.47787787 3.70753836,6.51099993 3.79274528,6.57253826 Z" fill="#000000" />
                                    </g>
                                  </svg>
                                  {/*end::Svg Icon*/}
                                </span>
                              </span>
                              <span className="navi-text font-weight-bolder font-size-lg">Assign Task</span>
                              <span className="navi-label">
                              </span>
                            </Link>
                          </div>
                          {/*end:Item*/}
                          {/*begin:Item*/}
                          <div className="navi-item my-2">
                            <Link to="/alltasks" className="navi-link">
                              <span className="navi-icon mr-4">
                                <span className="svg-icon svg-icon-xl">
                                  {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Sending.svg*/}
                                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                      <rect x={0} y={0} width={24} height={24} />
                                      <path d="M8,13.1668961 L20.4470385,11.9999863 L8,10.8330764 L8,5.77181995 C8,5.70108058 8.01501031,5.63114635 8.04403925,5.56663761 C8.15735832,5.31481744 8.45336217,5.20254012 8.70518234,5.31585919 L22.545552,11.5440255 C22.6569791,11.5941677 22.7461882,11.6833768 22.7963304,11.794804 C22.9096495,12.0466241 22.7973722,12.342628 22.545552,12.455947 L8.70518234,18.6841134 C8.64067359,18.7131423 8.57073936,18.7281526 8.5,18.7281526 C8.22385763,18.7281526 8,18.504295 8,18.2281526 L8,13.1668961 Z" fill="#000000" />
                                      <path d="M4,16 L5,16 C5.55228475,16 6,16.4477153 6,17 C6,17.5522847 5.55228475,18 5,18 L4,18 C3.44771525,18 3,17.5522847 3,17 C3,16.4477153 3.44771525,16 4,16 Z M1,11 L5,11 C5.55228475,11 6,11.4477153 6,12 C6,12.5522847 5.55228475,13 5,13 L1,13 C0.44771525,13 6.76353751e-17,12.5522847 0,12 C-6.76353751e-17,11.4477153 0.44771525,11 1,11 Z M4,6 L5,6 C5.55228475,6 6,6.44771525 6,7 C6,7.55228475 5.55228475,8 5,8 L4,8 C3.44771525,8 3,7.55228475 3,7 C3,6.44771525 3.44771525,6 4,6 Z" fill="#000000" opacity="0.3" />
                                    </g>
                                  </svg>
                                  {/*end::Svg Icon*/}
                                </span>
                              </span>
                              <span className="navi-text font-weight-bolder font-size-lg">All Tasks</span>
                            </Link>
                          </div>
                          {/*end:Item*/}

                          

                          {/*begin:Item*/}

                          {/*end:Item*/}



                        </div>
                        {/*end:Nav*/}
                      </div>
                      {/*end::Body*/}
                    </div>
                  </div>

                  {/*end::Card*/}
                  {/*begin::Container*/}
                  <div className="container">

                    <div className="card card-custom">
                      <div className="card-body p-0">
                        {/*begin::Wizard*/}
                        <div className="wizard wizard-1" id="kt_wizard" data-wizard-state="step-first" data-wizard-clickable="false">
                          {/*begin::Wizard Nav*/}
                          <div className="wizard-nav border-bottom">
                            <div className="wizard-steps p-8 p-lg-10">
                              {/*begin::Wizard Step 1 Nav*/}
                              <div className="wizard-step" data-wizard-type="step" data-wizard-state="current">
                                <div className="wizard-label">
                                  <i className="wizard-icon flaticon-list" />
                                  <h3 className="wizard-title">1. Setup Project Details</h3>
                                </div>
                                <span className="svg-icon svg-icon-xl wizard-arrow">
                                  {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Arrow-right.svg*/}
                                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                      <polygon points="0 0 24 0 24 24 0 24" />
                                      <rect fill="#000000" opacity="0.3" transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)" x={11} y={5} width={2} height={14} rx={1} />
                                      <path d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z" fill="#000000" fillRule="nonzero" transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)" />
                                    </g>
                                  </svg>
                                  {/*end::Svg Icon*/}
                                </span>
                              </div>
                              {/*begin::Wizard Step 4 Nav*/}
                              <div className="wizard-step" data-wizard-type="step">
                                <div className="wizard-label">
                                  <i className="wizard-icon flaticon-truck" />
                                  <h3 className="wizard-title">2. Project Duration</h3>
                                </div>
                                <span className="svg-icon svg-icon-xl wizard-arrow">
                                  {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Arrow-right.svg*/}
                                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                      <polygon points="0 0 24 0 24 24 0 24" />
                                      <rect fill="#000000" opacity="0.3" transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)" x={11} y={5} width={2} height={14} rx={1} />
                                      <path d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z" fill="#000000" fillRule="nonzero" transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)" />
                                    </g>
                                  </svg>
                                  {/*end::Svg Icon*/}
                                </span>
                              </div>
                              {/*end::Wizard Step 4 Nav*/}
                              
                              {/*begin::Wizard Step 5 Nav*/}
                              <div className="wizard-step" data-wizard-type="step">
                                <div className="wizard-label">
                                  <i className="wizard-icon flaticon-globe" />
                                  <h3 className="wizard-title">3. review & submit </h3>
                                </div>
                                <span className="svg-icon svg-icon-xl wizard-arrow last">
                                  {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Arrow-right.svg*/}
                                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                      <polygon points="0 0 24 0 24 24 0 24" />
                                      <rect fill="#000000" opacity="0.3" transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)" x={11} y={5} width={2} height={14} rx={1} />
                                      <path d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z" fill="#000000" fillRule="nonzero" transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)" />
                                    </g>
                                  </svg>
                                  {/*end::Svg Icon*/}
                                </span>
                              </div>
                              {/*end::Wizard Step 5 Nav*/}

                              <div className="wizard-step" data-wizard-type="step">
                                
                              </div>
                           </div>
                          </div>
                          {/*end::Wizard Nav*/}
                          {/*begin::Wizard Body*/}
                          <div className="row justify-content-center my-10 px-8 my-lg-15 px-lg-10">
                            <div className="col-xl-12 col-xxl-7">
                              {/*begin::Wizard Form*/}

                              <Form onSubmit={this.handleRegisterProject} ref={c => { this.form = c; }} className="form" id="kt_form">

                                {!this.state.successful && (
                                  <div>
                                    {/*begin::Wizard Step 1*/}
                                    <div className="pb-5" data-wizard-type="step-content" data-wizard-state="current">
                                      <h3 className="mb-10 font-weight-bold text-dark">Setup Your Project Details</h3>
                                      {/*begin::Input*/}
                                      <div className="form-group">
                                        <label>Project Name</label>
                                        <Input type="text" className="form-control form-control-solid form-control-lg"
                                          value={this.state.title}
                                          onChange={this.onChangeTitle}
                                          validations={[required]}
                                          name="projectname"
                                          placeholder="Project Name" />
                                        <span className="form-text text-muted">Please enter Project Name.</span>
                                      </div>
                                      {/*end::Input*/}
                                      {/*begin::Input*/}
                                      <div className="form-group">
                                        <label>Project Description</label>
                                        <Textarea type="text" className="form-control form-control-solid form-control-lg"
                                          value={this.state.description}
                                          onChange={this.onChangeDescription}
                                          validations={[required]}
                                          name="projectdescription"
                                          placeholder="Project Name" />
                                        <span className="form-text text-muted">limit 50</span>
                                      </div>
                                      {/*end::Input*/}

                                      <div className="form-group">
                                        {/* <label>Project Status</label> */}
                                        <label className="font-size-h6 font-weight-bolder text-dark">Status</label>

                                        <select name="country" className="form-control h-auto p-5 border-0 rounded-lg font-size-h6"
                                          value={this.state.status}
                                          onChange={this.onChangeStatus}
                                          validations={[required]}
                                          name="projectstatus"
                                        >

                                          <option value>Select</option>
                                          <option value="open">Open</option>
                                          <option value="inprogress">In Progress</option>
                                          <option value="completed">Completed</option>
                                        </select>
                                      </div>


                                      <div className="row">

                                        <div className="col-xl-12">
                                          {/*begin::Select*/}
                                          <div className="form-group">
                                            <label>Project Location</label>
                                            <Textarea type="text" className="form-control form-control-solid form-control-lg"
                                              value={this.state.location}
                                              onChange={this.onChangeLocation}
                                              validations={[required]}
                                              name="projectlocation" />
                                            <span className="form-text text-muted">limit 50</span>
                                          </div>
                                          {/*end::Select*/}
                                        </div>
                                        {/*end::Form Group*/}

                                        {/*end::Form Group*/}
                                      </div>
                                    </div>
                                    {/*end::Wizard Step 1*/}

                                    {/*begin::Wizard Step 3*/}
                                    <div className="pb-5" data-wizard-type="step-content">
                                      {/* <h4 className="mb-10 font-weight-bold text-dark">Select your Services</h4> */}
                                      {/*begin::Select*/}
                                      <div className="form-group">
                                        <div className="form-group">
                                          <label>Start Date</label>
                                          <Input type="text" className="form-control form-control-solid form-control-lg"
                                            value={this.state.start_date}
                                            onChange={this.onChangeStartDate}
                                            validations={[required]}
                                            name="startdate"
                                            placeholder="YYYY-MM-DD" />
                                          <span className="form-text text-muted">Start date</span>
                                        </div>
                                      </div>
                                      {/*end::Select*/}
                                      {/*begin::Select*/}
                                      <div className="form-group">
                                        <div className="form-group">
                                          <label>Due Date</label>
                                          <Input type="text" className="form-control form-control-solid form-control-lg"
                                            value={this.state.due_date}
                                            onChange={this.onChangeDueDate}
                                            validations={[required]}
                                            name="startdate"
                                            placeholder="YYYY-MM-DD" />
                                          <span className="form-text text-muted">Due date</span>
                                        </div>
                                      </div>
                                      {/*end::Select*/}

                                    </div>
                                    {/*end::Wizard Step 3*/}

                                    {/*begin::Wizard Step 5*/}
                                    <div className="pb-5" data-wizard-type="step-content">
                                      {/*begin::Section*/}
                                      <h4 className="mb-10 font-weight-bold text-dark">Review your Details and Submit</h4>
                                      <h6 className="font-weight-bolder mb-3">Project Detailss:</h6>
                                      <div className="text-dark-50 line-height-lg">
                                        <div>Project Name</div>
                                        <div>{this.state.title}</div>
                                        <div>Project Description</div>
                                        <div>{this.state.description}</div>
                                        <div>Project Location</div>
                                        <div>{this.state.location}</div>
                                      </div>
                                      <div className="separator separator-dashed my-5" />
                                      {/*end::Section*/}
                                      {/*begin::Section*/}
                                      <h6 className="font-weight-bolder mb-3">Project Duration</h6>
                                      <div className="text-dark-50 line-height-lg">
                                        <div>Project Status</div>
                                        <div>{this.state.status}</div>
                                        <div>Start Date</div>
                                        <div>{this.state.start_date}</div>
                                        <div>Due Date</div>
                                        <div>{this.state.due_date}</div>
                                      </div>
                                    </div>
                                    
                                    {/*end::Wizard Step 5*/}
                                    {/*begin::Wizard Step 5*/}
                                  

                                    </div>
                                                 )}
                                                 <center> {this.state.message && (
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
                                      
                                    <div className="d-flex justify-content-between border-top mt-5 pt-10">
                                      <div className="mr-2">
                                        <button type="button" className="btn btn-light-primary font-weight-bolder text-uppercase px-9 py-4" data-wizard-type="action-prev">Previous</button>
                                      </div>
                                      <div>

                                        <button type="button" className="btn btn-primary font-weight-bolder text-uppercase px-9 py-4" data-wizard-type="action-next">Next</button>
                                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                       <button
                                          className="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-3"
                                          data-wizard-type="step-content"
                                          disabled={this.state.loading}

                                        >
                                           {this.state.loading && (
                                            <span className="spinner-border spinner-border-sm"></span>
                                        )}
                                        <span>submit</span>
                                        </button>

                                      

                                        {/* <Modal show={this.state.show} onHide={this.handleClose}>
                                      <Modal.Header closeButton>
                                        <Modal.Title>Modal heading</Modal.Title>
                                      </Modal.Header>
                                      <Modal.Body> {this.state.message}</Modal.Body>
                                      <Modal.Footer>
                                        <Button variant="secondary" onClick={this.handleClose}>
                                          Close
                                      </Button>
                                        <Button variant="primary" onClick={this.handleClose}>
                                          Save Changes
                                     </Button>
                                       </Modal.Footer>
                                    </Modal> */}

                                     

                                       

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
                              {/*end::Wizard Form*/}
                            </div>
                          </div>
                          {/*end::Wizard Body*/}
                        </div>
                        {/*end::Wizard*/}
                      </div>
                      {/*end::Wizard*/}
                    </div>
                  </div>
                  {/*end::Container*/}
                </div>
                {/*end::Entry*/}
              </div>
              {/*end::Content*/}
              <Footer />
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