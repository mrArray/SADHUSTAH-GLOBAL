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

export default class EditProject extends Component {

    constructor(props) {
        super(props);
        this.handleRegisterTask = this.handleRegisterTask.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this)
        this.onChangeLocation = this.onChangeLocation.bind(this)
        this.onChangeStartDate = this.onChangeStartDate.bind(this)
        this.onChangeDueDate = this.onChangeDueDate.bind(this)
        this.onChangeAssignedTo = this.onChangeAssignedTo.bind(this)
        this.onChangeProject = this.onChangeProject.bind(this)


        this.state = {
            project: "",
            title: "",
            description: "",
            status: "",
            location: "",
            start_date: "",
            due_date: "",
            assigned_to: "",
            loading: false,
            show: false,
            message: ""
        };
    }
    componentDidMount() {



    }
    componentWillMount() {


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
                if (res.data) {
                    localStorage.setItem("AllProjectData", JSON.stringify(res.data));



                }
                console.log(res);
                console.log(res.data);
                // window.location = "/dashboard"
            })

    }


    onChangeProject(e) {
        this.setState({
            project: e.target.value
        });
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

    onChangeAssignedTo(e) {
        this.setState({
            assigned_to: e.target.value
        });
    }




    handleRegisterTask(e) {
        e.preventDefault();




        this.setState({
            message: "",
            successful: false
        });

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            AuthLogin.RegisterTask(
                this.state.project,
                this.state.title,
                this.state.description,
                this.state.location,
                this.state.status,
                this.state.start_date,
                this.state.due_date,
                this.state.assigned_to
            ).then(
                response => {
                    this.setState({
                        message: response.data.detail,
                        successful: true
                    });
                    window.location = "/Alltasks"
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
                        loading: false
                    });
                }
            );
        }
    }

    render() {


        const projectId = JSON.parse(localStorage.getItem('AllProjectData'))
        console.log(projectId)
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

                                        <div className="card card-custom gutter-b">
                                            <div className="card-body">
                                                <div className="d-flex">
                                                    {/*begin: Pic*/}
                                                    <div className="flex-shrink-0 mr-7 mt-lg-0 mt-3">
                                                        <div className="symbol symbol-50 symbol-lg-120">
                                                            {/* <img alt="Pic" src="assets/media/project-logos/3.png" /> */}
                                                        </div>
                                                        <div className="symbol symbol-50 symbol-lg-120 symbol-primary d-none">
                                                            <span className="font-size-h3 symbol-label font-weight-boldest">JM</span>
                                                        </div>
                                                    </div>
                                                    {/*end: Pic*/}
                                                    {/*begin: Info*/}
                                                    <div className="flex-grow-1">
                                                        {/*begin: Title*/}
                                                        <div className="d-flex align-items-center justify-content-between flex-wrap">
                                                            <div className="mr-3">
                                                                {/*begin::Name*/}
                                                                <a href="#" className="d-flex align-items-center text-dark text-hover-primary font-size-h5 font-weight-bold mr-3">Nexa - Next generation SAAS
              <i className="flaticon2-correct text-success icon-md ml-2" /></a>
                                                                {/*end::Name*/}
                                                                {/*begin::Contacts*/}
                                                                <div className="d-flex flex-wrap my-2">
                                                                    <a href="#" className="text-muted text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                        <span className="svg-icon svg-icon-md svg-icon-gray-500 mr-1">
                                                                            {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Mail-notification.svg*/}
                                                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                    <rect x={0} y={0} width={24} height={24} />
                                                                                    <path d="M21,12.0829584 C20.6747915,12.0283988 20.3407122,12 20,12 C16.6862915,12 14,14.6862915 14,18 C14,18.3407122 14.0283988,18.6747915 14.0829584,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,8 C3,6.8954305 3.8954305,6 5,6 L19,6 C20.1045695,6 21,6.8954305 21,8 L21,12.0829584 Z M18.1444251,7.83964668 L12,11.1481833 L5.85557487,7.83964668 C5.4908718,7.6432681 5.03602525,7.77972206 4.83964668,8.14442513 C4.6432681,8.5091282 4.77972206,8.96397475 5.14442513,9.16035332 L11.6444251,12.6603533 C11.8664074,12.7798822 12.1335926,12.7798822 12.3555749,12.6603533 L18.8555749,9.16035332 C19.2202779,8.96397475 19.3567319,8.5091282 19.1603533,8.14442513 C18.9639747,7.77972206 18.5091282,7.6432681 18.1444251,7.83964668 Z" fill="#000000" />
                                                                                    <circle fill="#000000" opacity="0.3" cx="19.5" cy="17.5" r="2.5" />
                                                                                </g>
                                                                            </svg>
                                                                            {/*end::Svg Icon*/}
                                                                        </span>jason@siastudio.com</a>
                                                                    <a href="#" className="text-muted text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                        <span className="svg-icon svg-icon-md svg-icon-gray-500 mr-1">
                                                                            {/*begin::Svg Icon | path:assets/media/svg/icons/General/Lock.svg*/}
                                                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                    <mask fill="white">
                                                                                        <use xlinkHref="#path-1" />
                                                                                    </mask>
                                                                                    <g />
                                                                                    <path d="M7,10 L7,8 C7,5.23857625 9.23857625,3 12,3 C14.7614237,3 17,5.23857625 17,8 L17,10 L18,10 C19.1045695,10 20,10.8954305 20,12 L20,18 C20,19.1045695 19.1045695,20 18,20 L6,20 C4.8954305,20 4,19.1045695 4,18 L4,12 C4,10.8954305 4.8954305,10 6,10 L7,10 Z M12,5 C10.3431458,5 9,6.34314575 9,8 L9,10 L15,10 L15,8 C15,6.34314575 13.6568542,5 12,5 Z" fill="#000000" />
                                                                                </g>
                                                                            </svg>
                                                                            {/*end::Svg Icon*/}
                                                                        </span>PR Manager</a>
                                                                    <a href="#" className="text-muted text-hover-primary font-weight-bold">
                                                                        <span className="svg-icon svg-icon-md svg-icon-gray-500 mr-1">
                                                                            {/*begin::Svg Icon | path:assets/media/svg/icons/Map/Marker2.svg*/}
                                                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                    <rect x={0} y={0} width={24} height={24} />
                                                                                    <path d="M9.82829464,16.6565893 C7.02541569,15.7427556 5,13.1079084 5,10 C5,6.13400675 8.13400675,3 12,3 C15.8659932,3 19,6.13400675 19,10 C19,13.1079084 16.9745843,15.7427556 14.1717054,16.6565893 L12,21 L9.82829464,16.6565893 Z M12,12 C13.1045695,12 14,11.1045695 14,10 C14,8.8954305 13.1045695,8 12,8 C10.8954305,8 10,8.8954305 10,10 C10,11.1045695 10.8954305,12 12,12 Z" fill="#000000" />
                                                                                </g>
                                                                            </svg>
                                                                            {/*end::Svg Icon*/}
                                                                        </span>Melbourne</a>
                                                                </div>
                                                                {/*end::Contacts*/}
                                                            </div>
                                                            <div className="my-lg-0 my-1">
                                                                {/* <a href="#" className="btn btn-sm btn-light-success font-weight-bolder text-uppercase mr-3">Reports</a> */}
                                                                <a href="#" className="btn btn-sm btn-light-success  font-weight-bolder text-uppercase">Completed</a>
                                                            </div>
                                                        </div>
                                                        {/*end: Title*/}
                                                        {/*begin: Content*/}
                                                        <div className="d-flex align-items-center flex-wrap justify-content-between">
                                                            <div className="flex-grow-1 font-weight-bold text-dark-50 py-5 py-lg-2 mr-5">I distinguish three main text objectives
            <br />could be merely to inform people</div>
                                                            <div className="d-flex flex-wrap align-items-center py-2">
                                                                <div className="d-flex align-items-center mr-10">
                                                                    <div className="mr-6">
                                                                        <div className="font-weight-bold mb-2">Start Date</div>
                                                                        <span className="btn btn-sm btn-text btn-light-primary text-uppercase font-weight-bold">07 May, 2020</span>
                                                                    </div>
                                                                    <div className>
                                                                        <div className="font-weight-bold mb-2">Due Date</div>
                                                                        <span className="btn btn-sm btn-text btn-light-danger text-uppercase font-weight-bold">10 June, 2021</span>
                                                                    </div>
                                                                </div>
                                                                <div className="flex-grow-1 flex-shrink-0 w-150px w-xl-300px mt-4 mt-sm-0">
                                                                    <span className="font-weight-bold">Progress</span>
                                                                    <div className="progress progress-xs mt-2 mb-2">
                                                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: '63%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                                                                    </div>
                                                                    <span className="font-weight-bolder text-dark">78%</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/*end: Content*/}
                                                    </div>
                                                    {/*end: Info*/}
                                                </div>
                                                <div className="separator separator-solid my-7" />
                                                <div className="form-group">
                                                    <label><h5>Change Status</h5></label>
                                                    <select name="country" className="form-control"
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
                                                <center>
                                                <button id="kt_login_singin_form_submit_button"
                                                    className="btn btn-sm btn-primary font-weight-bolder text-uppercase"
                                                    data-wizard-type="step-content"
                                                    disabled={this.state.loading}

                                                >
                                                    {this.state.loading && (
                                                        <center><Spinner animation="border" variant="primary" /></center>
                                                    )}
                                                    <span>Change</span>
                                                </button></center>
                                            </div>
                                           
                                        </div>

                                        <div className="card card-custom card-stretch gutter-b">
                                            {/*begin::Header*/}
                                            <div className="card-header border-0 py-5">
                                                <h3 className="card-title align-items-start flex-column">
                                                    <span className="card-label font-weight-bolder text-dark">Task</span>
                                                    <span className="text-muted mt-3 font-weight-bold font-size-sm">List of all task under this Project</span>
                                                </h3>
                                                <div className="card-toolbar">
                                                    {/* <a href="#" className="btn btn-info font-weight-bolder font-size-sm">
                                                        <span className="svg-icon svg-icon-md svg-icon-white"> */}
                                                            {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Add-user.svg*/}
                                                            {/* <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                    <polygon points="0 0 24 0 24 24 0 24" />
                                                                    <path d="M18,8 L16,8 C15.4477153,8 15,7.55228475 15,7 C15,6.44771525 15.4477153,6 16,6 L18,6 L18,4 C18,3.44771525 18.4477153,3 19,3 C19.5522847,3 20,3.44771525 20,4 L20,6 L22,6 C22.5522847,6 23,6.44771525 23,7 C23,7.55228475 22.5522847,8 22,8 L20,8 L20,10 C20,10.5522847 19.5522847,11 19,11 C18.4477153,11 18,10.5522847 18,10 L18,8 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                                                    <path d="M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z" fill="#000000" fillRule="nonzero" />
                                                                </g>
                                                            </svg> */}
                                                            {/*end::Svg Icon*/}
                                                        {/* </span>Add New Task</a> */}
                                                </div>
                                            </div>
                                            {/*end::Header*/}
                                            {/*begin::Body*/}
                                            <div className="card-body pt-0 pb-3">
                                                {/*begin::Table*/}
                                                <div className="table-responsive">
                                                    <table className="table table-head-custom table-head-bg table-borderless table-vertical-center">
                                                        <thead>
                                                            <tr className="text-uppercase">
                                                                <th style={{ minWidth: 250 }} className="pl-7">
                                                                    <span className="text-dark-75">products</span>
                                                                </th>
                                                                <th style={{ minWidth: 100 }}>pruce</th>
                                                                <th style={{ minWidth: 100 }}>deposit</th>
                                                                <th style={{ minWidth: 150 }}>agent</th>
                                                                <th style={{ minWidth: 130 }}>status</th>
                                                                <th style={{ minWidth: 120 }} />
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td className="pl-0 py-8">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="symbol symbol-50 flex-shrink-0 mr-4">
                                                                            <div className="symbol-label" style={{ backgroundImage: 'url("assets/media/stock-600x400/img-26.jpg")' }} />
                                                                        </div>
                                                                        <div>
                                                                            <a href="#" className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">Sant Extreanet Solution</a>
                                                                            <span className="text-muted font-weight-bold d-block">HTML, JS, ReactJS</span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">$2,790</span>
                                                                    <span className="text-muted font-weight-bold">Paid</span>
                                                                </td>
                                                                <td>
                                                                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">$520</span>
                                                                    <span className="text-muted font-weight-bold">Paid</span>
                                                                </td>
                                                                <td>
                                                                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">Bradly Beal</span>
                                                                    <span className="text-muted font-weight-bold">Insurance</span>
                                                                </td>
                                                                <td>
                                                                    <span className="label label-lg label-light-primary label-inline">Approved</span>
                                                                </td>
                                                                <td className="text-right pr-0">
                                                                    <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm mr-3">
                                                                        <span className="svg-icon svg-icon-md svg-icon-primary">
                                                                            {/*begin::Svg Icon | path:assets/media/svg/icons/General/Bookmark.svg*/}
                                                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                    <rect x={0} y={0} width={24} height={24} />
                                                                                    <path d="M8,4 L16,4 C17.1045695,4 18,4.8954305 18,6 L18,17.726765 C18,18.2790497 17.5522847,18.726765 17,18.726765 C16.7498083,18.726765 16.5087052,18.6329798 16.3242754,18.4639191 L12.6757246,15.1194142 C12.2934034,14.7689531 11.7065966,14.7689531 11.3242754,15.1194142 L7.67572463,18.4639191 C7.26860564,18.8371115 6.63603827,18.8096086 6.26284586,18.4024896 C6.09378519,18.2180598 6,17.9769566 6,17.726765 L6,6 C6,4.8954305 6.8954305,4 8,4 Z" fill="#000000" />
                                                                                </g>
                                                                            </svg>
                                                                            {/*end::Svg Icon*/}
                                                                        </span>
                                                                    </a>
                                                                    <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                                                                        <span className="svg-icon svg-icon-md svg-icon-primary">
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
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="pl-0 py-0">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="symbol symbol-50 flex-shrink-0 mr-4">
                                                                            <div className="symbol-label" style={{ backgroundImage: 'url("assets/media/stock-600x400/img-3.jpg")' }} />
                                                                        </div>
                                                                        <div>
                                                                            <a href="#" className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">Telegram Development</a>
                                                                            <span className="text-muted font-weight-bold d-block">C#, ASP.NET, MS SQL</span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">$4,600</span>
                                                                    <span className="text-muted font-weight-bold">Pending</span>
                                                                </td>
                                                                <td>
                                                                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">$1,600</span>
                                                                    <span className="text-muted font-weight-bold">Rejected</span>
                                                                </td>
                                                                <td>
                                                                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">Chris Thompson</span>
                                                                    <span className="text-muted font-weight-bold">NBA Player</span>
                                                                </td>
                                                                <td>
                                                                    <span className="label label-lg label-light-warning label-inline">In Progress</span>
                                                                </td>
                                                                <td className="text-right pr-0">
                                                                    <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm mr-3">
                                                                        <span className="svg-icon svg-icon-md svg-icon-primary">
                                                                            {/*begin::Svg Icon | path:assets/media/svg/icons/General/Bookmark.svg*/}
                                                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                    <rect x={0} y={0} width={24} height={24} />
                                                                                    <path d="M8,4 L16,4 C17.1045695,4 18,4.8954305 18,6 L18,17.726765 C18,18.2790497 17.5522847,18.726765 17,18.726765 C16.7498083,18.726765 16.5087052,18.6329798 16.3242754,18.4639191 L12.6757246,15.1194142 C12.2934034,14.7689531 11.7065966,14.7689531 11.3242754,15.1194142 L7.67572463,18.4639191 C7.26860564,18.8371115 6.63603827,18.8096086 6.26284586,18.4024896 C6.09378519,18.2180598 6,17.9769566 6,17.726765 L6,6 C6,4.8954305 6.8954305,4 8,4 Z" fill="#000000" />
                                                                                </g>
                                                                            </svg>
                                                                            {/*end::Svg Icon*/}
                                                                        </span>
                                                                    </a>
                                                                    <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                                                                        <span className="svg-icon svg-icon-md svg-icon-primary">
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
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="pl-0 py-8">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="symbol symbol-50 flex-shrink-0 mr-4">
                                                                            <div className="symbol-label" style={{ backgroundImage: 'url("assets/media/stock-600x400/img-5.jpg")' }} />
                                                                        </div>
                                                                        <div>
                                                                            <a href="#" className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">Payroll Application</a>
                                                                            <span className="text-muted font-weight-bold d-block">PHP, Laravel, VueJS</span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">$23,800</span>
                                                                    <span className="text-muted font-weight-bold">Paid</span>
                                                                </td>
                                                                <td>
                                                                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">$6,700</span>
                                                                    <span className="text-muted font-weight-bold">Paid</span>
                                                                </td>
                                                                <td>
                                                                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">Zoey McGee</span>
                                                                    <span className="text-muted font-weight-bold">Ruby Developer</span>
                                                                </td>
                                                                <td>
                                                                    <span className="label label-lg label-light-success label-inline">Success</span>
                                                                </td>
                                                                <td className="text-right pr-0">
                                                                    <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm mr-3">
                                                                        <span className="svg-icon svg-icon-md svg-icon-primary">
                                                                            {/*begin::Svg Icon | path:assets/media/svg/icons/General/Bookmark.svg*/}
                                                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                    <rect x={0} y={0} width={24} height={24} />
                                                                                    <path d="M8,4 L16,4 C17.1045695,4 18,4.8954305 18,6 L18,17.726765 C18,18.2790497 17.5522847,18.726765 17,18.726765 C16.7498083,18.726765 16.5087052,18.6329798 16.3242754,18.4639191 L12.6757246,15.1194142 C12.2934034,14.7689531 11.7065966,14.7689531 11.3242754,15.1194142 L7.67572463,18.4639191 C7.26860564,18.8371115 6.63603827,18.8096086 6.26284586,18.4024896 C6.09378519,18.2180598 6,17.9769566 6,17.726765 L6,6 C6,4.8954305 6.8954305,4 8,4 Z" fill="#000000" />
                                                                                </g>
                                                                            </svg>
                                                                            {/*end::Svg Icon*/}
                                                                        </span>
                                                                    </a>
                                                                    <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                                                                        <span className="svg-icon svg-icon-md svg-icon-primary">
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
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="pl-0 py-0">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="symbol symbol-50 flex-shrink-0 mr-4">
                                                                            <div className="symbol-label" style={{ backgroundImage: 'url("assets/media/stock-600x400/img-18.jpg")' }} />
                                                                        </div>
                                                                        <div>
                                                                            <a href="#" className="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg">HR Management System</a>
                                                                            <span className="text-muted font-weight-bold d-block">Python, PostgreSQL, ReactJS</span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">$57,000</span>
                                                                    <span className="text-muted font-weight-bold">Paid</span>
                                                                </td>
                                                                <td>
                                                                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">$14,000</span>
                                                                    <span className="text-muted font-weight-bold">Paid</span>
                                                                </td>
                                                                <td>
                                                                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">Brandon Ingram</span>
                                                                    <span className="text-muted font-weight-bold">NBA Player</span>
                                                                </td>
                                                                <td>
                                                                    <span className="label label-lg label-light-danger label-inline">Rejected</span>
                                                                </td>
                                                                <td className="text-right pr-0">
                                                                    <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm mr-3">
                                                                        <span className="svg-icon svg-icon-md svg-icon-primary">
                                                                            {/*begin::Svg Icon | path:assets/media/svg/icons/General/Bookmark.svg*/}
                                                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                    <rect x={0} y={0} width={24} height={24} />
                                                                                    <path d="M8,4 L16,4 C17.1045695,4 18,4.8954305 18,6 L18,17.726765 C18,18.2790497 17.5522847,18.726765 17,18.726765 C16.7498083,18.726765 16.5087052,18.6329798 16.3242754,18.4639191 L12.6757246,15.1194142 C12.2934034,14.7689531 11.7065966,14.7689531 11.3242754,15.1194142 L7.67572463,18.4639191 C7.26860564,18.8371115 6.63603827,18.8096086 6.26284586,18.4024896 C6.09378519,18.2180598 6,17.9769566 6,17.726765 L6,6 C6,4.8954305 6.8954305,4 8,4 Z" fill="#000000" />
                                                                                </g>
                                                                            </svg>
                                                                            {/*end::Svg Icon*/}
                                                                        </span>
                                                                    </a>
                                                                    <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                                                                        <span className="svg-icon svg-icon-md svg-icon-primary">
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
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                {/*end::Table*/}
                                            </div>
                                            {/*end::Body*/}
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


















