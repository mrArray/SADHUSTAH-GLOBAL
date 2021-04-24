
import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { Redirect, Switch, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer'
import Menu_Aside from "./Menu_Aside";
import AuthLogin from "../Authentications/AuthLogin";
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner'
import {ProgressBar} from 'react-bootstrap';







const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

export default class EditTask extends Component {

    constructor(props) {
        super(props);
        this.handleStatus = this.handleStatus.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);


        this.state = {
            status: "",
            loading: false,
            myloading: false,
            show: false,
            message: "",
            title: '',
            image: null,
            showAdministrator: false,
            showTaskManager: false,
            showProjectManager: false,
            currentUser: undefined,
            uploadPercentage:0

        };
    }


    componentDidMount() {

        //user  stored user information (including JWT) from AuthService class
        const user = AuthLogin.getCurrentUser();
        //check User Group
        if (user) {
            this.setState({
                currentUser: user,
                showAdministrator: user.profile.user_groups.includes("ADMINISTRATOR"),
                showTaskManager: user.profile.user_groups.includes("TASK MANAGER"),
                showProjectManager: user.profile.user_groups.includes("PROJECT MANAGER"),
            });
        }




    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    handleImageChange = (e) => {
        this.setState({
            image: e.target.files[0]
        })
    };
    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    };

    handleSubmitImage = (e) => {
        e.preventDefault();

        const options = {
            onUploadProgress: (progressEvent) => {
              const {loaded, total} = progressEvent;
              let percent = Math.floor( (loaded * 100) / total )
              console.log( `${loaded}kb of ${total}kb | ${percent}%` );
      
              if( percent < 100 ){
                this.setState({ uploadPercentage: percent })
              }
            }
          }


        this.setState({
            message: "",
            successful: false,
            myloading: true
        });

        const mytoken = JSON.parse(localStorage.getItem('user'));
        const token = mytoken.token;
        const singleTask = JSON.parse(localStorage.getItem('singleTask'))
        const task = singleTask.pk;
        let formData = new FormData();
        formData.append('image', this.state.image);
        formData.append('title', this.state.title);
        formData.append('task', task);

        let url = 'https://ecological1.chinikiguard.com/projects/api/task/image/add/';

        axios.post(url,formData,
            {
            headers: {
                'content-type': 'multipart/form-data',
                'Authorization': `Token ${token}`,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS',
                'Access-Control-Allow-Credentials': true
            }
        },
        
        options)
            .then(res => {
                console.log(res)
                this.setState({ avatar: res.data.image, uploadPercentage: 100 }, ()=>{
                    setTimeout(() => {
                      this.setState({ uploadPercentage: 0 })
                    }, 1000);
                  })

                this.setState({
                    message: "",
                    successful: false,
                    myloading: true
                });
                window.location = "/alltasks"
            })
    };

    onChangeStatus(e) {
        this.setState({
            status: e.target.value
        });
    }

    ChangeStatus(status) {

        let username = 'admin';
        let password = 'Pass@1234';
        const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
        const singleTask = JSON.parse(localStorage.getItem('singleTask'))
        const TaskPk = singleTask.pk;
        // console.log(TaskPk)

        return axios.put(`https://ecological1.chinikiguard.com/projects/api/tasks/update/${TaskPk}/`, {
            status: `${status}`,
        },
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
                    localStorage.setItem("singleTask", JSON.stringify(singleTask));
                    // localStorage.setItem("statusTask", JSON.stringify(res.data.status));


                }


                // console.log(res);
                // console.log(res.data.status);

                window.location = "/Alltasks"
            })
    }

    handleStatus(e) {
        e.preventDefault();

        this.setState({
            message: "",
            successful: false,
            loading: true

        });

        this.form.validateAll();
        if (this.checkBtn.context._errors.length === 0) {
            this.ChangeStatus(
                this.state.status
            ).then(
                response => {
                    this.setState({
                        message: response.data.detail,
                        successful: true,
                        loading: true
                    });

                    // window.location = "/Alltasks"
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

        const {uploadPercentage} = this.state;


        if (!localStorage.getItem('user')) {

            return (<Redirect to={'/login'} />)
        }

        const singleTask = JSON.parse(localStorage.getItem('singleTask'))
        const singleTaskImage = JSON.parse(localStorage.getItem('singleTaskImage'))

        console.log(singleTaskImage)
        const { loading } = this.state;


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
                                    {/*begin::Container*/}

                                    <div className="container">
                                    {/* <br/> */}
                                    <Link  class="btn btn-light-primary font-weight-bolder btn-sm" to="/alltasks" >Back</Link>

                                        <div className="card card-custom gutter-b">
                                            <div className="card-body">
                                                <div className="d-flex">
                                                    {/*begin: Pic*/}
                                                    <div className="flex-shrink-0 mr-7 mt-lg-0 mt-3">
                                                        <div className="symbol symbol-50 symbol-lg-120">
                                                            {/* <img alt="Pic" src="assets/media/project-logos/3.png" /> */}
                                                        </div>
                                                        <div className="symbol symbol-50 symbol-lg-120 symbol-primary d-none">
                                                            <span className="font-size-h3 symbol-label font-weight-boldest"></span>
                                                        </div>
                                                    </div>

                                                    {/*end: Pic*/}
                                                    {/*begin: Info*/}
                                                    <div className="flex-grow-1">
                                                        {/*begin: Title*/}

                                                        <div className="d-flex align-items-center justify-content-between flex-wrap">

                                                            <div className="mr-3">

                                                                {/*begin::Name*/}
                                                                <a href="#" className="d-flex align-items-center text-dark text-hover-primary font-size-h5 font-weight-bold mr-3">{singleTask.title}
                                                                    <i className="flaticon2-correct text-success icon-md ml-2" /></a>
                                                                <div className>
                                                                    {/* <div className="font-weight-bold mb-2">Project Name</div> */}
                                                                    <span className="flex-grow-1 flex-shrink-0 w-150px w-xl-300px mt-4 mt-sm-0">{singleTask.project_name}</span>
                                                                </div>
                                                                {/*end::Name*/}
                                                                {/*begin::Contacts*/}
                                                                <div className="d-flex flex-wrap my-2">

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
                                                                        </span>{singleTask.assigned_to_name}</a>
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
                                                                        </span>{singleTask.location}</a>
                                                                </div>
                                                                {/*end::Contacts*/}
                                                            </div>
                                                            <div className="my-lg-0 my-1">
                                                                {/* <a href="#" className="btn btn-sm btn-light-success font-weight-bolder text-uppercase mr-3">Reports</a> */}
                                                                <a href="#" className="btn btn-sm btn-light-success  font-weight-bolder text-uppercase">{singleTask.status}</a>
                                                            </div>
                                                        </div>
                                                        {/*end: Title*/}
                                                        {/*begin: Content*/}
                                                        <div className="d-flex align-items-center flex-wrap justify-content-between">

                                                            <div className="flex-grow-1 font-weight-bold text-dark-50 py-5 py-lg-2 mr-5">{singleTask.description}</div>


                                                            <div className="d-flex flex-wrap align-items-center py-2">

                                                                <div className="d-flex align-items-center mr-10">

                                                                    <div className="mr-6">
                                                                        <div className="font-weight-bold mb-2">Start Date</div>
                                                                        <span className="btn btn-sm btn-text btn-light-primary text-uppercase font-weight-bold">{singleTask.start_date}</span>
                                                                    </div>
                                                                    <div className>
                                                                        <div className="font-weight-bold mb-2">Due Date</div>
                                                                        <span className="btn btn-sm btn-text btn-light-danger text-uppercase font-weight-bold">{singleTask.due_date}</span>
                                                                    </div>

                                                                </div>
                                                                <div >
                                                                    <div className="flex-grow-1 flex-shrink-0 w-150px w-xl-300px mt-4 mt-sm-0">
                                                                        <div className="font-weight-bold mb-2">Progress</div>
                                                                        <div className="progress progress-xs mt-2 mb-2">
                                                                            <div className="progress-bar bg-success" role="progressbar" style={{ width: `${singleTask.progress}` }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                                                                        </div>
                                                                        <span className="font-weight-bolder text-dark">{singleTask.progress}</span>
                                                                    </div>
                                                                    <span className="font-weight-bold"></span>
                                                                    {/* <div className="progress progress-xs mt-2 mb-2"> */}
                                                                    {/* <div className="progress-bar bg-success" role="progressbar" style={{ width: `${singleTask.progress}` }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} /> */}
                                                                    {/* </div> */}
                                                                    {/* <span className="font-weight-bolder text-dark">{singleTask.project}</span> */}
                                                                </div>
                                                            </div>
                                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                                            <Form onSubmit={this.handleStatus} ref={c => { this.form = c; }} className="form" id="kt_form">
                                                                {!this.state.successful && (
                                                                    <div>
                                                                        <div className="separator separator-solid my-7" />
                                                                        <div className="form-group">
                                                                            <label className="font-weight-bold mb-2">Change Status</label>
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
                                                                                // data-wizard-type="step-content"
                                                                                enabled={this.state.loading}
                                                                            >
                                                                                {this.state.loading && (
                                                                                    <center><Spinner animation="border" variant="white" /></center>
                                                                                )}
                                                                                <span>Change</span>
                                                                            </button></center>
                                                                        <CheckButton
                                                                            style={{ display: "none" }}
                                                                            ref={c => {
                                                                                this.checkBtn = c;
                                                                            }}
                                                                        />
                                                                    </div>
                                                                )}
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
                                                                )}
                                                            </Form>

                                                        </div>
                                                        {/*end: Content*/}
                                                    </div>

                                                    {/*end: Info*/}
                                                </div>


                                                <Form onSubmit={this.handleSubmitImage} ref={c => { this.form = c; }} className="form" id="kt_form">
                                                    {!this.state.successful && (
                                                        <div>
                                                        { uploadPercentage > 0 && <ProgressBar now={uploadPercentage} active label={`${uploadPercentage}%`} /> }

                                                            <div className="form-group">
                                                                <label className="font-weight-bold mb-2">Image Title</label>

                                                                <Input type="text" className="form-control form-control-solid form-control-lg" placeholder='Title' id='title' value={this.state.title} onChange={this.handleChange} required />
                                                            </div>

                                                            <Input type="file"
                                                                onChange={this.handleImageChange} required />

                                                            <center>
                                                                <button
                                                                    type="submit"
                                                                    enabled={this.state.myloading}
                                                                    className="btn btn-sm btn-success font-weight-bolder text-uppercase"
                                                                    id="kt_login_singin_form_submit_button"
                                                                    // onChange={this.handleSubmitImage}

                                                                >
                                                                    {this.state.myloading && (
                                                                        <center><Spinner animation="border" variant="white" /></center>
                                                                    )}
                                                        Submit</button>
                                                            </center>
                                                            <CheckButton
                                                                style={{ display: "none" }}
                                                                ref={c => {
                                                                    this.checkBtn = c;
                                                                }}
                                                            />
                                                        </div>
                                                    )}
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
                                                    )}
                                                </Form>

{/* 
                                                <Form onSubmit={this.handleSubmitImage} ref={c => { this.form = c; }} className="form" id="kt_form">
                                                    {!this.state.successful && (
                                                        <div>
                                                            <div className="form-group">
                                                                <label className="font-weight-bold mb-2">Document Title</label>

                                                                <Input type="text" className="form-control form-control-solid form-control-lg" placeholder='Title' id='title' value={this.state.title} onChange={this.handleChange} required />
                                                            </div>

                                                            <Input type="file"
                                                                onChange={this.handleImageChange} required />

                                                            <center>
                                                                <button
                                                                    type="submit"
                                                                    enabled={this.state.myloading}
                                                                    className="btn btn-sm btn-success font-weight-bolder text-uppercase"
                                                                    id="kt_login_singin_form_submit_button"

                                                                >
                                                                    {this.state.myloading && (
                                                                        <center><Spinner animation="border" variant="white" /></center>
                                                                    )}
                                                        Submit</button>
                                                            </center>

                                                            <CheckButton
                                                                style={{ display: "none" }}
                                                                ref={c => {
                                                                    this.checkBtn = c;
                                                                }}
                                                            />
                                                        </div>
                                                    )}
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
                                                    )}
                                                </Form> */}

                                            </div>
                                        </div>

                                        <div className="row">
                                            {/*begin::Col*/}
                                            {singleTaskImage.map(taskImage => (

                                                <div className="card-body p-0">
                                                    {/*begin::Details*/}
                                                    <div className="text-center mt-5 mb-md-0 mb-lg-5 mb-md-0 mb-lg-5 mb-lg-0 mb-5 d-flex flex-column">
                                                        <a href="#" className="font-size-h5 font-weight-bolder text-dark-75 text-hover-primary mb-1">{taskImage.title}</a>
                                                        {/* <span className="font-size-lg">Outlines keep poorly thought</span> */}
                                                    </div>
                                                    {/*end::Details*/}
                                                    {/*begin::Image*/}
                                                    <div className="overlay">
                                                        <div className="overlay-wrapper rounded bg-light text-center">
                                                            <a href={taskImage.image}>
                                                                <img src={taskImage.image} alt className="mw-100 w-200px" />
                                                            </a>
                                                        </div>
                                                        <div className="overlay-layer">
                                                            <a href={taskImage.image} target="_blank" className="btn font-weight-bolder btn-sm btn-primary mr-2"> View</a>

                                                            {/* <a href={taskImage.image}  download="taskImage" className="btn font-weight-bolder btn-sm btn-light-primary ">Download */}


                                                            {/* </a> */}
                                                        </div>


                                                    </div>
                                                    {/*end::Image*/}

                                                </div>


                                                // <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                                                //     {/*begin::Card*/}

                                                //     <div className="card card-custom gutter-b card-stretch">
                                                //         <div className="card-header border-0">
                                                //             <h3 className="card-title" />
                                                //             <div className="card-toolbar">
                                                //                 <div className="dropdown dropdown-inline" data-toggle="tooltip" title data-placement="left" data-original-title="Quick actions">
                                                //                     <a href="#" className="btn btn-clean btn-hover-light-primary btn-sm btn-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                //                         <i className="ki ki-bold-more-hor" />
                                                //                     </a>

                                                //                 </div>
                                                //             </div>
                                                //         </div>
                                                //         <div className="card-body">
                                                //             <div className="d-flex flex-column align-items-center">
                                                //                 {/*begin: Icon*/}
                                                //                 {/*end: Icon*/}
                                                //                 {/*begin: Tite*/}

                                                //                 {taskImage.title}
                                                //                 <a href={taskImage.url} className="mw-100 w-200px">
                                                //                 <img alt className="mw-100 w-200px" src={taskImage.image}  alt="image"/>


                                                //                 </a>
                                                //                 {/*end: Tite*/}
                                                //             </div>
                                                //         </div>
                                                //     </div>
                                                //     {/*end:: Card*/}

                                                // </div>
                                            ))}

                                            {/*end::Col*/}
                                        </div>


                                    </div>

                                    {/*end::Container*/}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <Footer />

            </div>

        );
    }
}










