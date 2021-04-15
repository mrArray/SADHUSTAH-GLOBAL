import React, { Component, useState, useEffect } from "react";
import { Redirect, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer'
import Menu_Aside from "./Menu_Aside";
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner'
import AuthLogin from "../Authentications/AuthLogin";




export default class AllTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: "",
      myloading: true,
      show: false,
      message: "",
      allProzz: [],
      showAdministrator: false,
      showTaskManager: false,
      showProjectManager: false,
      currentUser: undefined,
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

    const { currentUser, showAdministrator, showTaskManager, showProjectManager } = this.state;

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
                  {/*begin::Container*/}
  

                  <div className="container">



                  {showAdministrator && (

<div class="row">
  <div className="col-xl-12">
    {/*begin::Nav Panel Widget 1*/}
    <div className="card card-custom gutter-b">
      {/*begin::Body*/}
      <div className="card-body">
        {/*begin::Nav Tabs*/}
        <ul className="dashboard-tabs nav nav-pills nav-success row row-paddingless m-0 p-0 flex-column flex-sm-row" role="tablist">
          {/*begin::Item*/}
          <li className="nav-item d-flex col-sm flex-grow-1 flex-shrink-0 mr-3 mb-3 mb-lg-0">
            <Link to="/dashboard" className="nav-link border py-10 d-flex flex-grow-1 rounded flex-column align-items-center" data-toggle="pill" >
              <span className="nav-icon py-2 w-auto">
                <span className="svg-icon svg-icon-3x">
                  {/*begin::Svg Icon | path:assets/media/svg/icons/Home/Library.svg*/}
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <rect x={0} y={0} width={24} height={24} />
                      <path d="M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z" fill="#000000" />
                      <rect fill="#000000" opacity="0.3" transform="translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519)" x="16.3255682" y="2.94551858" width={3} height={18} rx={1} />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
              </span>
              <span className="nav-text font-size-lg py-2 font-weight-bold text-center"><h3>Dashboard</h3></span>
            </Link>
          </li>
          <li className="nav-item d-flex col-sm flex-grow-1 flex-shrink-0 mr-3 mb-3 mb-lg-0">
            <Link to="/allprojects" className="nav-link border py-10 d-flex flex-grow-1 rounded flex-column align-items-center" data-toggle="pill" href="#tab_forms_widget_1">
              <span className="nav-icon py-2 w-auto">
                <span className="svg-icon svg-icon-3x">
                  {/*begin::Svg Icon | path:assets/media/svg/icons/Home/Library.svg*/}
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <rect x={0} y={0} width={24} height={24} />
                      <path d="M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z" fill="#000000" />
                      <rect fill="#000000" opacity="0.3" transform="translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519)" x="16.3255682" y="2.94551858" width={3} height={18} rx={1} />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
              </span>
              <span className="nav-text font-size-lg py-2 font-weight-bold text-center"><h3>All Project</h3></span>
            </Link>
          </li>
          {/*end::Item*/}
          {/*begin::Item*/}
          <li className="nav-item d-flex col-sm flex-grow-1 flex-shrink-0 mr-3 mb-3 mb-lg-0">
            <Link to="/registerProject" className="nav-link border py-10 d-flex flex-grow-1 rounded flex-column align-items-center" data-toggle="pill" href="#tab_forms_widget_2">
              <span className="nav-icon py-2 w-auto">
                <span className="svg-icon svg-icon-3x">
                  {/*begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg*/}
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <rect x={0} y={0} width={24} height={24} />
                      <rect fill="#000000" x={4} y={4} width={7} height={7} rx="1.5" />
                      <path d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z" fill="#000000" opacity="0.3" />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
              </span>
              <span className="nav-text font-size-lg py-2 font-weight-bolder text-center"><h3>Add Project</h3></span>
            </Link>
          </li>
          {/*end::Item*/}
          {/*begin::Item*/}

          <li className="nav-item d-flex col-sm flex-grow-1 flex-shrink-0 mr-3 mb-3 mb-lg-0">
            <Link to="/alltasks" className="nav-link border py-10 d-flex flex-grow-1 rounded flex-column align-items-center" data-toggle="pill" href="#tab_forms_widget_2">
              <span className="nav-icon py-2 w-auto">
                <span className="svg-icon svg-icon-3x">
                  {/*begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg*/}
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <rect x={0} y={0} width={24} height={24} />
                      <path d="M4,4 L11.6314229,2.5691082 C11.8750185,2.52343403 12.1249815,2.52343403 12.3685771,2.5691082 L20,4 L20,13.2830094 C20,16.2173861 18.4883464,18.9447835 16,20.5 L12.5299989,22.6687507 C12.2057287,22.8714196 11.7942713,22.8714196 11.4700011,22.6687507 L8,20.5 C5.51165358,18.9447835 4,16.2173861 4,13.2830094 L4,4 Z" fill="#000000" opacity="0.3" />
                      <path d="M11.1750002,14.75 C10.9354169,14.75 10.6958335,14.6541667 10.5041669,14.4625 L8.58750019,12.5458333 C8.20416686,12.1625 8.20416686,11.5875 8.58750019,11.2041667 C8.97083352,10.8208333 9.59375019,10.8208333 9.92916686,11.2041667 L11.1750002,12.45 L14.3375002,9.2875 C14.7208335,8.90416667 15.2958335,8.90416667 15.6791669,9.2875 C16.0625002,9.67083333 16.0625002,10.2458333 15.6791669,10.6291667 L11.8458335,14.4625 C11.6541669,14.6541667 11.4145835,14.75 11.1750002,14.75 Z" fill="#000000" />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
              </span>
              <span className="nav-text font-size-lg py-2 font-weight-bolder text-center"><h3>All Task</h3></span>
            </Link>
          </li>
          <li className="nav-item d-flex col-sm flex-grow-1 flex-shrink-0 mr-3 mb-3 mb-lg-0">
            <Link to="/AssignTask" className="nav-link border py-10 d-flex flex-grow-1 rounded flex-column align-items-center" data-toggle="pill" href="#tab_forms_widget_2">
              <span className="nav-icon py-2 w-auto">
                <span className="svg-icon svg-icon-3x">
                  {/*begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg*/}
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <rect x={0} y={0} width={24} height={24} />
                      <path d="M4,4 L11.6314229,2.5691082 C11.8750185,2.52343403 12.1249815,2.52343403 12.3685771,2.5691082 L20,4 L20,13.2830094 C20,16.2173861 18.4883464,18.9447835 16,20.5 L12.5299989,22.6687507 C12.2057287,22.8714196 11.7942713,22.8714196 11.4700011,22.6687507 L8,20.5 C5.51165358,18.9447835 4,16.2173861 4,13.2830094 L4,4 Z" fill="#000000" opacity="0.3" />
                      <path d="M11.1750002,14.75 C10.9354169,14.75 10.6958335,14.6541667 10.5041669,14.4625 L8.58750019,12.5458333 C8.20416686,12.1625 8.20416686,11.5875 8.58750019,11.2041667 C8.97083352,10.8208333 9.59375019,10.8208333 9.92916686,11.2041667 L11.1750002,12.45 L14.3375002,9.2875 C14.7208335,8.90416667 15.2958335,8.90416667 15.6791669,9.2875 C16.0625002,9.67083333 16.0625002,10.2458333 15.6791669,10.6291667 L11.8458335,14.4625 C11.6541669,14.6541667 11.4145835,14.75 11.1750002,14.75 Z" fill="#000000" />
                    </g>
                  </svg>

                  {/*end::Svg Icon*/}
                </span>
              </span>
              <span className="nav-text font-size-lg py-2 font-weight-bolder text-center"><h3>Assign Task</h3></span>
            </Link>
          </li>

        </ul>
        {/*end::Nav Tabs*/}
        {/*begin::Nav Content*/}
        <div className="tab-content m-0 p-0">
          <div className="tab-pane active" id="forms_widget_tab_1" role="tabpanel" />
          <div className="tab-pane" id="forms_widget_tab_2" role="tabpanel" />
          <div className="tab-pane" id="forms_widget_tab_3" role="tabpanel" />
          <div className="tab-pane" id="forms_widget_tab_4" role="tabpanel" />
          <div className="tab-pane" id="forms_widget_tab_6" role="tabpanel" />
        </div>
        {/*end::Nav Content*/}
      </div>
      {/*end::Body*/}
    </div>
    {/*begin::Nav Panel Widget 1*/}
  </div>
</div>
)}
{/* project Manager */}
{showProjectManager && (

<div class="row">
  <div className="col-xl-12">
    {/*begin::Nav Panel Widget 1*/}
    <div className="card card-custom gutter-b">
      {/*begin::Body*/}
      <div className="card-body">
        {/*begin::Nav Tabs*/}
        <ul className="dashboard-tabs nav nav-pills nav-primary row row-paddingless m-0 p-0 flex-column flex-sm-row" role="tablist">
          {/*begin::Item*/}
          <li className="nav-item d-flex col-sm flex-grow-1 flex-shrink-0 mr-3 mb-3 mb-lg-0">
            <a className="nav-link border py-10 d-flex flex-grow-1 rounded flex-column align-items-center" data-toggle="pill" href="#tab_forms_widget_1">
              <span className="nav-icon py-2 w-auto">
                <span className="svg-icon svg-icon-3x">
                  {/*begin::Svg Icon | path:assets/media/svg/icons/Home/Library.svg*/}
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <rect x={0} y={0} width={24} height={24} />
                      <path d="M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z" fill="#000000" />
                      <rect fill="#000000" opacity="0.3" transform="translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519)" x="16.3255682" y="2.94551858" width={3} height={18} rx={1} />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
              </span>
              <span className="nav-text font-size-lg py-2 font-weight-bold text-center"><h3>All Project</h3></span>
            </a>
          </li>
          {/*end::Item*/}
          {/*begin::Item*/}
          <li className="nav-item d-flex col-sm flex-grow-1 flex-shrink-0 mr-3 mb-3 mb-lg-0">
            <a className="nav-link border py-10 d-flex flex-grow-1 rounded flex-column align-items-center" data-toggle="pill" href="#tab_forms_widget_2">
              <span className="nav-icon py-2 w-auto">
                <span className="svg-icon svg-icon-3x">
                  {/*begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg*/}
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <rect x={0} y={0} width={24} height={24} />
                      <rect fill="#000000" x={4} y={4} width={7} height={7} rx="1.5" />
                      <path d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z" fill="#000000" opacity="0.3" />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
              </span>
              <span className="nav-text font-size-lg py-2 font-weight-bolder text-center"><h3>Add Project</h3></span>
            </a>
          </li>
          {/*end::Item*/}
          {/*begin::Item*/}

          <li className="nav-item d-flex col-sm flex-grow-1 flex-shrink-0 mr-3 mb-3 mb-lg-0">
            <a className="nav-link border py-10 d-flex flex-grow-1 rounded flex-column align-items-center" data-toggle="pill" href="#tab_forms_widget_2">
              <span className="nav-icon py-2 w-auto">
                <span className="svg-icon svg-icon-3x">
                  {/*begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg*/}
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <rect x={0} y={0} width={24} height={24} />
                      <path d="M4,4 L11.6314229,2.5691082 C11.8750185,2.52343403 12.1249815,2.52343403 12.3685771,2.5691082 L20,4 L20,13.2830094 C20,16.2173861 18.4883464,18.9447835 16,20.5 L12.5299989,22.6687507 C12.2057287,22.8714196 11.7942713,22.8714196 11.4700011,22.6687507 L8,20.5 C5.51165358,18.9447835 4,16.2173861 4,13.2830094 L4,4 Z" fill="#000000" opacity="0.3" />
                      <path d="M11.1750002,14.75 C10.9354169,14.75 10.6958335,14.6541667 10.5041669,14.4625 L8.58750019,12.5458333 C8.20416686,12.1625 8.20416686,11.5875 8.58750019,11.2041667 C8.97083352,10.8208333 9.59375019,10.8208333 9.92916686,11.2041667 L11.1750002,12.45 L14.3375002,9.2875 C14.7208335,8.90416667 15.2958335,8.90416667 15.6791669,9.2875 C16.0625002,9.67083333 16.0625002,10.2458333 15.6791669,10.6291667 L11.8458335,14.4625 C11.6541669,14.6541667 11.4145835,14.75 11.1750002,14.75 Z" fill="#000000" />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
              </span>
              <span className="nav-text font-size-lg py-2 font-weight-bolder text-center"><h3>All Task</h3></span>
            </a>
          </li>
          <li className="nav-item d-flex col-sm flex-grow-1 flex-shrink-0 mr-3 mb-3 mb-lg-0">
            <a className="nav-link border py-10 d-flex flex-grow-1 rounded flex-column align-items-center" data-toggle="pill" href="#tab_forms_widget_2">
              <span className="nav-icon py-2 w-auto">
                <span className="svg-icon svg-icon-3x">
                  {/*begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg*/}
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <rect x={0} y={0} width={24} height={24} />
                      <path d="M4,4 L11.6314229,2.5691082 C11.8750185,2.52343403 12.1249815,2.52343403 12.3685771,2.5691082 L20,4 L20,13.2830094 C20,16.2173861 18.4883464,18.9447835 16,20.5 L12.5299989,22.6687507 C12.2057287,22.8714196 11.7942713,22.8714196 11.4700011,22.6687507 L8,20.5 C5.51165358,18.9447835 4,16.2173861 4,13.2830094 L4,4 Z" fill="#000000" opacity="0.3" />
                      <path d="M11.1750002,14.75 C10.9354169,14.75 10.6958335,14.6541667 10.5041669,14.4625 L8.58750019,12.5458333 C8.20416686,12.1625 8.20416686,11.5875 8.58750019,11.2041667 C8.97083352,10.8208333 9.59375019,10.8208333 9.92916686,11.2041667 L11.1750002,12.45 L14.3375002,9.2875 C14.7208335,8.90416667 15.2958335,8.90416667 15.6791669,9.2875 C16.0625002,9.67083333 16.0625002,10.2458333 15.6791669,10.6291667 L11.8458335,14.4625 C11.6541669,14.6541667 11.4145835,14.75 11.1750002,14.75 Z" fill="#000000" />
                    </g>
                  </svg>

                  {/*end::Svg Icon*/}
                </span>
              </span>
              <span className="nav-text font-size-lg py-2 font-weight-bolder text-center"><h3>Assign Task</h3></span>
            </a>
          </li>

        </ul>
        {/*end::Nav Tabs*/}
        {/*begin::Nav Content*/}
        <div className="tab-content m-0 p-0">
          <div className="tab-pane active" id="forms_widget_tab_1" role="tabpanel" />
          <div className="tab-pane" id="forms_widget_tab_2" role="tabpanel" />
          <div className="tab-pane" id="forms_widget_tab_3" role="tabpanel" />
          <div className="tab-pane" id="forms_widget_tab_4" role="tabpanel" />
          <div className="tab-pane" id="forms_widget_tab_6" role="tabpanel" />
        </div>
        {/*end::Nav Content*/}
      </div>
      {/*end::Body*/}
    </div>
    {/*begin::Nav Panel Widget 1*/}
  </div>
</div>

)}
{/* Task Manager */}
{showTaskManager && (

<div class="row">
  <div className="col-xl-12">
    {/*begin::Nav Panel Widget 1*/}
    <div className="card card-custom gutter-b">
      {/*begin::Body*/}
      <div className="card-body">
        {/*begin::Nav Tabs*/}
        <ul className="dashboard-tabs nav nav-pills nav-danger row row-paddingless m-0 p-0 flex-column flex-sm-row" role="tablist">
          {/*begin::Item*/}
          <li className="nav-item d-flex col-sm flex-grow-1 flex-shrink-0 mr-3 mb-3 mb-lg-0">
            <a className="nav-link border py-10 d-flex flex-grow-1 rounded flex-column align-items-center" data-toggle="pill" href="#tab_forms_widget_1">
              <span className="nav-icon py-2 w-auto">
                <span className="svg-icon svg-icon-3x">
                  {/*begin::Svg Icon | path:assets/media/svg/icons/Home/Library.svg*/}
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <rect x={0} y={0} width={24} height={24} />
                      <path d="M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z" fill="#000000" />
                      <rect fill="#000000" opacity="0.3" transform="translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519)" x="16.3255682" y="2.94551858" width={3} height={18} rx={1} />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
              </span>
              <span className="nav-text font-size-lg py-2 font-weight-bold text-center"><h3>All Tasks</h3></span>
            </a>
          </li>
          {/*end::Item*/}
          {/*begin::Item*/}
          <li className="nav-item d-flex col-sm flex-grow-1 flex-shrink-0 mr-3 mb-3 mb-lg-0">
            <a className="nav-link border py-10 d-flex flex-grow-1 rounded flex-column align-items-center" data-toggle="pill" href="#tab_forms_widget_2">
              <span className="nav-icon py-2 w-auto">
                <span className="svg-icon svg-icon-3x">
                  {/*begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg*/}
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <rect x={0} y={0} width={24} height={24} />
                      <rect fill="#000000" x={4} y={4} width={7} height={7} rx="1.5" />
                      <path d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z" fill="#000000" opacity="0.3" />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
              </span>
              <span className="nav-text font-size-lg py-2 font-weight-bolder text-center"><h3>Ongiong Task</h3></span>
            </a>
          </li>
          {/*end::Item*/}
          {/*begin::Item*/}

          <li className="nav-item d-flex col-sm flex-grow-1 flex-shrink-0 mr-3 mb-3 mb-lg-0">
            <a className="nav-link border py-10 d-flex flex-grow-1 rounded flex-column align-items-center" data-toggle="pill" href="#tab_forms_widget_2">
              <span className="nav-icon py-2 w-auto">
                <span className="svg-icon svg-icon-3x">
                  {/*begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg*/}
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <rect x={0} y={0} width={24} height={24} />
                      <path d="M4,4 L11.6314229,2.5691082 C11.8750185,2.52343403 12.1249815,2.52343403 12.3685771,2.5691082 L20,4 L20,13.2830094 C20,16.2173861 18.4883464,18.9447835 16,20.5 L12.5299989,22.6687507 C12.2057287,22.8714196 11.7942713,22.8714196 11.4700011,22.6687507 L8,20.5 C5.51165358,18.9447835 4,16.2173861 4,13.2830094 L4,4 Z" fill="#000000" opacity="0.3" />
                      <path d="M11.1750002,14.75 C10.9354169,14.75 10.6958335,14.6541667 10.5041669,14.4625 L8.58750019,12.5458333 C8.20416686,12.1625 8.20416686,11.5875 8.58750019,11.2041667 C8.97083352,10.8208333 9.59375019,10.8208333 9.92916686,11.2041667 L11.1750002,12.45 L14.3375002,9.2875 C14.7208335,8.90416667 15.2958335,8.90416667 15.6791669,9.2875 C16.0625002,9.67083333 16.0625002,10.2458333 15.6791669,10.6291667 L11.8458335,14.4625 C11.6541669,14.6541667 11.4145835,14.75 11.1750002,14.75 Z" fill="#000000" />
                    </g>
                  </svg>

                  {/*end::Svg Icon*/}
                </span>
              </span>
              <span className="nav-text font-size-lg py-2 font-weight-bolder text-center"><h3>Complete Task</h3></span>
            </a>
          </li>

        </ul>
        {/*end::Nav Tabs*/}
        {/*begin::Nav Content*/}
        <div className="tab-content m-0 p-0">
          <div className="tab-pane active" id="forms_widget_tab_1" role="tabpanel" />
          <div className="tab-pane" id="forms_widget_tab_2" role="tabpanel" />
          <div className="tab-pane" id="forms_widget_tab_3" role="tabpanel" />
          <div className="tab-pane" id="forms_widget_tab_4" role="tabpanel" />
          <div className="tab-pane" id="forms_widget_tab_6" role="tabpanel" />
        </div>
        {/*end::Nav Content*/}
      </div>
      {/*end::Body*/}
    </div>
    {/*begin::Nav Panel Widget 1*/}
  </div>
</div>
)}

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