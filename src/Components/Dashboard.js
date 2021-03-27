import React, { Component, useState, useEffect } from "react";
import { Redirect, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer'
import Menu_Aside from "./Menu_Aside";
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner'



const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [myloading, setLoading] = useState([false]);

  useEffect(() => {
    //start js style
    const script = document.createElement("script");
    script.src = "./assets/dist/assets/js/pages/widgets.js";
    script.async = true;
    document.body.appendChild(script);
    //end js stye

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
        const projects = res.data.length;
        setProjects(projects);
        setLoading(false)
        console.log(res);
        console.log(res.data.length);
        // window.location = "/dashboard"
      })

  }, []);

  return (
    // if (localStorage.getItem('user')) {
    //     return (<Redirect to={'/dashboard'} />)
    // }


    <div>
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
                <Menu_Aside />
                {/*begin::Container*/}
                <div className="container">
                  <div className="row">
                    <div className="col-xl-4">
                      {/*begin::Stats Widget 16*/}
                      <a href="#" className="card card-custom card-stretch gutter-b">
                        {/*begin::Body*/}
                        <div className="card-body">
                          <span className="svg-icon svg-icon-info svg-icon-3x ml-n1">
                            {/*begin::Svg Icon | path:assets/media/svg/icons/Shopping/Cart3.svg*/}
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                              <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                <rect x={0} y={0} width={24} height={24} />
                                <path d="M12.7037037,14 L15.6666667,10 L13.4444444,10 L13.4444444,6 L9,12 L11.2222222,12 L11.2222222,14 L6,14 C5.44771525,14 5,13.5522847 5,13 L5,3 C5,2.44771525 5.44771525,2 6,2 L18,2 C18.5522847,2 19,2.44771525 19,3 L19,13 C19,13.5522847 18.5522847,14 18,14 L12.7037037,14 Z" fill="#000000" opacity="0.3" />
                                <path d="M9.80428954,10.9142091 L9,12 L11.2222222,12 L11.2222222,16 L15.6666667,10 L15.4615385,10 L20.2072547,6.57253826 C20.4311176,6.4108595 20.7436609,6.46126971 20.9053396,6.68513259 C20.9668779,6.77033951 21,6.87277228 21,6.97787787 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,6.97787787 C3,6.70173549 3.22385763,6.47787787 3.5,6.47787787 C3.60510559,6.47787787 3.70753836,6.51099993 3.79274528,6.57253826 L9.80428954,10.9142091 Z" fill="#000000" />
                              </g>
                            </svg>
                            {/*end::Svg Icon*/}
                          </span>
                          <div className="text-inverse-white font-weight-bolder font-size-h5 mb-2 mt-5"> Total Projects</div>
                          {myloading ? (

                            <>
                              <Spinner animation="spinner-border" variant="danger" />
                            </>



                          ) : (

                            <div className="font-weight-bold text-inverse-white font-size-sm"><h3>{projects}</h3></div>
                          )}
                          {/* <div className="font-weight-bold text-inverse-white font-size-sm">Lands, Houses, Ranchos, Farms</div> */}
                        </div>
                        {/*end::Body*/}
                      </a>
                      {/*end::Stats Widget 16*/}
                    </div>
                    <div className="col-xl-4">
                      {/*begin::Stats Widget 17*/}
                      <a href="#" className="card card-custom bg-info bg-hover-state-info card-stretch card-stretch gutter-b">
                        {/*begin::Body*/}
                        <div className="card-body">
                          <span className="svg-icon svg-icon-white svg-icon-3x ml-n1">
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
                          <div className="text-inverse-info font-weight-bolder font-size-h5 mb-2 mt-5">Pending Projects</div>
                          <div className="font-weight-bold text-inverse-dark font-size-sm"><h3>40</h3></div>

                        </div>
                        {/*end::Body*/}
                      </a>
                      {/*end::Stats Widget 17*/}
                    </div>
                    <div className="col-xl-4">
                      {/*begin::Stats Widget 18*/}
                      <a href="#" className="card card-custom bg-dark bg-hover-state-dark card-stretch gutter-b">
                        {/*begin::Body*/}
                        <div className="card-body">
                          <span className="svg-icon svg-icon-white svg-icon-3x ml-n1">
                            {/*begin::Svg Icon | path:assets/media/svg/icons/Media/Equalizer.svg*/}
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                              <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                <rect x={0} y={0} width={24} height={24} />
                                <rect fill="#000000" opacity="0.3" x={13} y={4} width={3} height={16} rx="1.5" />
                                <rect fill="#000000" x={8} y={9} width={3} height={11} rx="1.5" />
                                <rect fill="#000000" x={18} y={11} width={3} height={9} rx="1.5" />
                                <rect fill="#000000" x={3} y={13} width={3} height={7} rx="1.5" />
                              </g>
                            </svg>
                            {/*end::Svg Icon*/}
                          </span>
                          <div className="text-inverse-dark font-weight-bolder font-size-h5 mb-2 mt-5">Costs</div>
                          <div className="font-weight-bold text-inverse-dark font-size-sm"><h3>₦5467,8984</h3></div>
                        </div>
                        {/*end::Body*/}
                      </a>
                      {/*end::Stats Widget 18*/}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-4">
                      {/*begin::Mixed Widget 2*/}
                      <div className="card card-custom bg-gray-100 gutter-b card-stretch">
                        {/*begin::Header*/}
                        <div className="card-header border-0 bg-primary py-5">
                          <h3 className="card-title font-weight-bolder text-white">Projects Stat</h3>
                          <div className="card-toolbar">
                            <div className="dropdown dropdown-inline">
                              <a href="#" className="btn btn-transparent-white btn-sm font-weight-bolder dropdown-toggle px-5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Export</a>
                              <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                                {/*begin::Navigation*/}
                                <ul className="navi navi-hover">
                                  <li className="navi-header pb-1">
                                    <span className="text-primary text-uppercase font-weight-bold font-size-sm">Add new:</span>
                                  </li>
                                  <li className="navi-item">
                                    <a href="#" className="navi-link">
                                      <span className="navi-icon">
                                        <i className="flaticon2-shopping-cart-1" />
                                      </span>
                                      <span className="navi-text">Order</span>
                                    </a>
                                  </li>
                                  <li className="navi-item">
                                    <a href="#" className="navi-link">
                                      <span className="navi-icon">
                                        <i className="flaticon2-calendar-8" />
                                      </span>
                                      <span className="navi-text">Event</span>
                                    </a>
                                  </li>
                                  <li className="navi-item">
                                    <a href="#" className="navi-link">
                                      <span className="navi-icon">
                                        <i className="flaticon2-graph-1" />
                                      </span>
                                      <span className="navi-text">Report</span>
                                    </a>
                                  </li>
                                  <li className="navi-item">
                                    <a href="#" className="navi-link">
                                      <span className="navi-icon">
                                        <i className="flaticon2-rocket-1" />
                                      </span>
                                      <span className="navi-text">Post</span>
                                    </a>
                                  </li>
                                  <li className="navi-item">
                                    <a href="#" className="navi-link">
                                      <span className="navi-icon">
                                        <i className="flaticon2-writing" />
                                      </span>
                                      <span className="navi-text">File</span>
                                    </a>
                                  </li>
                                </ul>
                                {/*end::Navigation*/}
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*end::Header*/}
                        {/*begin::Body*/}
                        <div className="card-body p-0 position-relative overflow-hidden">
                          {/*begin::Chart*/}
                          <div id="kt_mixed_widget_2_chart" className="card-rounded-bottom bg-primary" style={{ height: 200 }} />
                          {/*end::Chart*/}
                          {/*begin::Stats*/}
                          <div className="card-spacer mt-n25">
                            {/*begin::Row*/}
                            <div className="row m-0">
                              <div className="col bg-white px-6 py-8 rounded-xl mr-7 mb-7">
                                <span className="svg-icon svg-icon-3x svg-icon-info d-block my-2">
                                  {/*begin::Svg Icon | path:assets/media/svg/icons/Media/Equalizer.svg*/}
                                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                      <rect x={0} y={0} width={24} height={24} />
                                      <rect fill="#000000" opacity="0.3" x={13} y={4} width={3} height={16} rx="1.5" />
                                      <rect fill="#000000" x={8} y={9} width={3} height={11} rx="1.5" />
                                      <rect fill="#000000" x={18} y={11} width={3} height={9} rx="1.5" />
                                      <rect fill="#000000" x={3} y={13} width={3} height={7} rx="1.5" />
                                    </g>
                                  </svg>
                                  {/*end::Svg Icon*/}
                                </span>
                                <a href="#" className="text-info font-weight-bold font-size-h6">Daily  stats</a>
                              </div>
                              <div className="col bg-white px-6 py-8 rounded-xl mb-7">
                                <span className="svg-icon svg-icon-3x svg-icon-warning d-block my-2">
                                  {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Add-user.svg*/}
                                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                      <polygon points="0 0 24 0 24 24 0 24" />
                                      <path d="M18,8 L16,8 C15.4477153,8 15,7.55228475 15,7 C15,6.44771525 15.4477153,6 16,6 L18,6 L18,4 C18,3.44771525 18.4477153,3 19,3 C19.5522847,3 20,3.44771525 20,4 L20,6 L22,6 C22.5522847,6 23,6.44771525 23,7 C23,7.55228475 22.5522847,8 22,8 L20,8 L20,10 C20,10.5522847 19.5522847,11 19,11 C18.4477153,11 18,10.5522847 18,10 L18,8 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                      <path d="M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z" fill="#000000" fillRule="nonzero" />
                                    </g>
                                  </svg>
                                  {/*end::Svg Icon*/}
                                </span>
                                <a href="#" className="text-warning font-weight-bold font-size-h6 mt-2">Weekly stats</a>
                              </div>
                            </div>
                            {/*end::Row*/}
                            {/*begin::Row*/}
                            <div className="row m-0">
                              <div className="col bg-white px-6 py-8 rounded-xl mr-7">
                                <span className="svg-icon svg-icon-3x svg-icon-danger d-block my-2">
                                  {/*begin::Svg Icon | path:assets/media/svg/icons/Design/Layers.svg*/}
                                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                      <polygon points="0 0 24 0 24 24 0 24" />
                                      <path d="M12.9336061,16.072447 L19.36,10.9564761 L19.5181585,10.8312381 C20.1676248,10.3169571 20.2772143,9.3735535 19.7629333,8.72408713 C19.6917232,8.63415859 19.6104327,8.55269514 19.5206557,8.48129411 L12.9336854,3.24257445 C12.3871201,2.80788259 11.6128799,2.80788259 11.0663146,3.24257445 L4.47482784,8.48488609 C3.82645598,9.00054628 3.71887192,9.94418071 4.23453211,10.5925526 C4.30500305,10.6811601 4.38527899,10.7615046 4.47382636,10.8320511 L4.63,10.9564761 L11.0659024,16.0730648 C11.6126744,16.5077525 12.3871218,16.5074963 12.9336061,16.072447 Z" fill="#000000" fillRule="nonzero" />
                                      <path d="M11.0563554,18.6706981 L5.33593024,14.122919 C4.94553994,13.8125559 4.37746707,13.8774308 4.06710397,14.2678211 C4.06471678,14.2708238 4.06234874,14.2738418 4.06,14.2768747 L4.06,14.2768747 C3.75257288,14.6738539 3.82516916,15.244888 4.22214834,15.5523151 C4.22358765,15.5534297 4.2250303,15.55454 4.22647627,15.555646 L11.0872776,20.8031356 C11.6250734,21.2144692 12.371757,21.2145375 12.909628,20.8033023 L19.7677785,15.559828 C20.1693192,15.2528257 20.2459576,14.6784381 19.9389553,14.2768974 C19.9376429,14.2751809 19.9363245,14.2734691 19.935,14.2717619 L19.935,14.2717619 C19.6266937,13.8743807 19.0546209,13.8021712 18.6572397,14.1104775 C18.654352,14.112718 18.6514778,14.1149757 18.6486172,14.1172508 L12.9235044,18.6705218 C12.377022,19.1051477 11.6029199,19.1052208 11.0563554,18.6706981 Z" fill="#000000" opacity="0.3" />
                                    </g>
                                  </svg>
                                  {/*end::Svg Icon*/}
                                </span>
                                <a href="#" className="text-danger font-weight-bold font-size-h6 mt-2">Monthly stats</a>
                              </div>
                              <div className="col bg-white px-6 py-8 rounded-xl">
                                <span className="svg-icon svg-icon-3x svg-icon-success d-block my-2">
                                  {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Urgent-mail.svg*/}
                                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                      <rect x={0} y={0} width={24} height={24} />
                                      <path d="M12.7037037,14 L15.6666667,10 L13.4444444,10 L13.4444444,6 L9,12 L11.2222222,12 L11.2222222,14 L6,14 C5.44771525,14 5,13.5522847 5,13 L5,3 C5,2.44771525 5.44771525,2 6,2 L18,2 C18.5522847,2 19,2.44771525 19,3 L19,13 C19,13.5522847 18.5522847,14 18,14 L12.7037037,14 Z" fill="#000000" opacity="0.3" />
                                      <path d="M9.80428954,10.9142091 L9,12 L11.2222222,12 L11.2222222,16 L15.6666667,10 L15.4615385,10 L20.2072547,6.57253826 C20.4311176,6.4108595 20.7436609,6.46126971 20.9053396,6.68513259 C20.9668779,6.77033951 21,6.87277228 21,6.97787787 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,6.97787787 C3,6.70173549 3.22385763,6.47787787 3.5,6.47787787 C3.60510559,6.47787787 3.70753836,6.51099993 3.79274528,6.57253826 L9.80428954,10.9142091 Z" fill="#000000" />
                                    </g>
                                  </svg>
                                  {/*end::Svg Icon*/}
                                </span>
                                <a href="#" className="text-success font-weight-bold font-size-h6 mt-2">Annual stats</a>
                              </div>
                            </div>
                            {/*end::Row*/}
                          </div>
                          {/*end::Stats*/}
                        </div>
                        {/*end::Body*/}
                      </div>
                      {/*end::Mixed Widget 2*/}
                    </div>
                    <div className="col-xl-4">
                      {/*begin::Mixed Widget 18*/}
                      <div className="card card-custom gutter-b card-stretch">
                        {/*begin::Header*/}
                        <div className="card-header border-0 pt-5">
                          <div className="card-title font-weight-bolder">
                            <div className="card-label">Weekly Task Progress
            <div className="font-size-sm text-muted mt-2">890,344 task</div></div>
                          </div>
                          <div className="card-toolbar">
                            <div className="dropdown dropdown-inline">
                              <a href="#" className="btn btn-clean btn-sm btn-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="ki ki-bold-more-hor" />
                              </a>
                              <div className="dropdown-menu dropdown-menu-md dropdown-menu-right">
                                {/*begin::Navigation*/}
                                <ul className="navi navi-hover">
                                  <li className="navi-header font-weight-bold py-4">
                                    <span className="font-size-lg">Choose Label:</span>
                                    <i className="flaticon2-information icon-md text-muted" data-toggle="tooltip" data-placement="right" title="Click to learn more..." />
                                  </li>
                                  <li className="navi-separator mb-3 opacity-70" />
                                  <li className="navi-item">
                                    <a href="#" className="navi-link">
                                      <span className="navi-text">
                                        <span className="label label-xl label-inline label-light-success">Customer</span>
                                      </span>
                                    </a>
                                  </li>
                                  <li className="navi-item">
                                    <a href="#" className="navi-link">
                                      <span className="navi-text">
                                        <span className="label label-xl label-inline label-light-danger">Partner</span>
                                      </span>
                                    </a>
                                  </li>
                                  <li className="navi-item">
                                    <a href="#" className="navi-link">
                                      <span className="navi-text">
                                        <span className="label label-xl label-inline label-light-warning">Suplier</span>
                                      </span>
                                    </a>
                                  </li>
                                  <li className="navi-item">
                                    <a href="#" className="navi-link">
                                      <span className="navi-text">
                                        <span className="label label-xl label-inline label-light-primary">Member</span>
                                      </span>
                                    </a>
                                  </li>
                                  <li className="navi-item">
                                    <a href="#" className="navi-link">
                                      <span className="navi-text">
                                        <span className="label label-xl label-inline label-light-dark">Staff</span>
                                      </span>
                                    </a>
                                  </li>
                                  <li className="navi-separator mt-3 opacity-70" />
                                  <li className="navi-footer py-4">
                                    <a className="btn btn-clean font-weight-bold btn-sm" href="#">
                                      <i className="ki ki-plus icon-sm" />Add new</a>
                                  </li>
                                </ul>
                                {/*end::Navigation*/}
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*end::Header*/}
                        {/*begin::Body*/}
                        <div className="card-body">
                          {/*begin::Chart*/}
                          <div id="kt_mixed_widget_18_chart" style={{ height: 250 }} />
                          {/*end::Chart*/}
                          {/*begin::Items*/}
                          <div className="mt-n12 position-relative zindex-0">
                            {/*begin::Widget Item*/}
                            <div className="d-flex align-items-center mb-8">
                              {/*begin::Symbol*/}
                              <div className="symbol symbol-circle symbol-40 symbol-light mr-3 flex-shrink-0">
                                <div className="symbol-label">
                                  <span className="svg-icon svg-icon-lg svg-icon-gray-500">
                                    {/*begin::Svg Icon | path:assets/media/svg/icons/Media/Equalizer.svg*/}
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                        <rect x={0} y={0} width={24} height={24} />
                                        <rect fill="#000000" opacity="0.3" x={13} y={4} width={3} height={16} rx="1.5" />
                                        <rect fill="#000000" x={8} y={9} width={3} height={11} rx="1.5" />
                                        <rect fill="#000000" x={18} y={11} width={3} height={9} rx="1.5" />
                                        <rect fill="#000000" x={3} y={13} width={3} height={7} rx="1.5" />
                                      </g>
                                    </svg>
                                    {/*end::Svg Icon*/}
                                  </span>
                                </div>
                              </div>
                              {/*end::Symbol*/}
                              {/*begin::Title*/}
                              <div>
                                <a href="#" className="font-size-h6 text-dark-75 text-hover-primary font-weight-bolder">Most Sales</a>
                                <div className="font-size-sm text-muted font-weight-bold mt-1">Authors with the best sales</div>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Widget Item*/}
                            {/*begin::Widget Item*/}
                            <div className="d-flex align-items-center mb-8">
                              {/*begin::Symbol*/}
                              <div className="symbol symbol-circle symbol-40 symbol-light mr-3 flex-shrink-0">
                                <div className="symbol-label">
                                  <span className="svg-icon svg-icon-lg svg-icon-gray-500">
                                    {/*begin::Svg Icon | path:assets/media/svg/icons/Shopping/Chart-pie.svg*/}
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                        <rect x={0} y={0} width={24} height={24} />
                                        <path d="M4.00246329,12.2004927 L13,14 L13,4.06189375 C16.9463116,4.55399184 20,7.92038235 20,12 C20,16.418278 16.418278,20 12,20 C7.64874861,20 4.10886412,16.5261253 4.00246329,12.2004927 Z" fill="#000000" opacity="0.3" />
                                        <path d="M3.0603968,10.0120794 C3.54712466,6.05992157 6.91622084,3 11,3 L11,11.6 L3.0603968,10.0120794 Z" fill="#000000" />
                                      </g>
                                    </svg>
                                    {/*end::Svg Icon*/}
                                  </span>
                                </div>
                              </div>
                              {/*end::Symbol*/}
                              {/*begin::Title*/}
                              <div>
                                <a href="#" className="font-size-h6 text-dark-75 text-hover-primary font-weight-bolder">Total Sales Lead</a>
                                <div className="font-size-sm text-muted font-weight-bold mt-1">40% increased on week-to-week reports</div>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Widget Item*/}
                            {/*begin::Widget Item*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Symbol*/}
                              <div className="symbol symbol-circle symbol-40 symbol-light mr-3 flex-shrink-0">
                                <div className="symbol-label">
                                  <span className="svg-icon svg-icon-lg svg-icon-gray-500">
                                    {/*begin::Svg Icon | path:assets/media/svg/icons/Design/Layers.svg*/}
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                        <polygon points="0 0 24 0 24 24 0 24" />
                                        <path d="M12.9336061,16.072447 L19.36,10.9564761 L19.5181585,10.8312381 C20.1676248,10.3169571 20.2772143,9.3735535 19.7629333,8.72408713 C19.6917232,8.63415859 19.6104327,8.55269514 19.5206557,8.48129411 L12.9336854,3.24257445 C12.3871201,2.80788259 11.6128799,2.80788259 11.0663146,3.24257445 L4.47482784,8.48488609 C3.82645598,9.00054628 3.71887192,9.94418071 4.23453211,10.5925526 C4.30500305,10.6811601 4.38527899,10.7615046 4.47382636,10.8320511 L4.63,10.9564761 L11.0659024,16.0730648 C11.6126744,16.5077525 12.3871218,16.5074963 12.9336061,16.072447 Z" fill="#000000" fillRule="nonzero" />
                                        <path d="M11.0563554,18.6706981 L5.33593024,14.122919 C4.94553994,13.8125559 4.37746707,13.8774308 4.06710397,14.2678211 C4.06471678,14.2708238 4.06234874,14.2738418 4.06,14.2768747 L4.06,14.2768747 C3.75257288,14.6738539 3.82516916,15.244888 4.22214834,15.5523151 C4.22358765,15.5534297 4.2250303,15.55454 4.22647627,15.555646 L11.0872776,20.8031356 C11.6250734,21.2144692 12.371757,21.2145375 12.909628,20.8033023 L19.7677785,15.559828 C20.1693192,15.2528257 20.2459576,14.6784381 19.9389553,14.2768974 C19.9376429,14.2751809 19.9363245,14.2734691 19.935,14.2717619 L19.935,14.2717619 C19.6266937,13.8743807 19.0546209,13.8021712 18.6572397,14.1104775 C18.654352,14.112718 18.6514778,14.1149757 18.6486172,14.1172508 L12.9235044,18.6705218 C12.377022,19.1051477 11.6029199,19.1052208 11.0563554,18.6706981 Z" fill="#000000" opacity="0.3" />
                                      </g>
                                    </svg>
                                    {/*end::Svg Icon*/}
                                  </span>
                                </div>
                              </div>
                              {/*end::Symbol*/}
                              {/*begin::Title*/}
                              <div>
                                <a href="#" className="font-size-h6 text-dark-75 text-hover-primary font-weight-bolder">Average Bestseller</a>
                                <div className="font-size-sm text-muted font-weight-bold mt-1">Pitstop Email Marketing</div>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Widget Item*/}
                          </div>
                          {/*end::Items*/}
                        </div>
                        {/*end::Body*/}
                      </div>
                      {/*end::Mixed Widget 18*/}
                    </div>
                    <div className="col-xl-4">
                      {/*begin::List Widget 7*/}
                      <div className="card card-custom gutter-b card-stretch">
                        {/*begin::Header*/}
                        <div className="card-header border-0">
                          <h3 className="card-title font-weight-bolder text-dark">Tasks</h3>
                          <div className="card-toolbar">
                            <div className="dropdown dropdown-inline">
                              <a href="#" className="btn btn-clean btn-hover-light-primary btn-sm btn-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="ki ki-bold-more-ver" />
                              </a>
                              <div className="dropdown-menu dropdown-menu-md dropdown-menu-right">
                                {/*begin::Naviigation*/}
                                <ul className="navi">
                                  <li className="navi-header font-weight-bold py-5">
                                    <span className="font-size-lg">Add New:</span>
                                    <i className="flaticon2-information icon-md text-muted" data-toggle="tooltip" data-placement="right" title="Click to learn more..." />
                                  </li>
                                  <li className="navi-separator mb-3 opacity-70" />
                                  <li className="navi-item">
                                    <a href="#" className="navi-link">
                                      <span className="navi-icon">
                                        <i className="flaticon2-shopping-cart-1" />
                                      </span>
                                      <span className="navi-text">Order</span>
                                    </a>
                                  </li>
                                  <li className="navi-item">
                                    <a href="#" className="navi-link">
                                      <span className="navi-icon">
                                        <i className="navi-icon flaticon2-calendar-8" />
                                      </span>
                                      <span className="navi-text">Members</span>
                                      <span className="navi-label">
                                        <span className="label label-light-danger label-rounded font-weight-bold">3</span>
                                      </span>
                                    </a>
                                  </li>
                                  <li className="navi-item">
                                    <a href="#" className="navi-link">
                                      <span className="navi-icon">
                                        <i className="navi-icon flaticon2-telegram-logo" />
                                      </span>
                                      <span className="navi-text">Project</span>
                                    </a>
                                  </li>
                                  <li className="navi-item">
                                    <a href="#" className="navi-link">
                                      <span className="navi-icon">
                                        <i className="navi-icon flaticon2-new-email" />
                                      </span>
                                      <span className="navi-text">Record</span>
                                      <span className="navi-label">
                                        <span className="label label-light-success label-rounded font-weight-bold">5</span>
                                      </span>
                                    </a>
                                  </li>
                                  <li className="navi-separator mt-3 opacity-70" />
                                  <li className="navi-footer pt-5 pb-4">
                                    <a className="btn btn-light-primary font-weight-bolder btn-sm" href="#">More options</a>
                                    <a className="btn btn-clean font-weight-bold btn-sm d-none" href="#" data-toggle="tooltip" data-placement="right" title="Click to learn more...">Learn more</a>
                                  </li>
                                </ul>
                                {/*end::Naviigation*/}
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*end::Header*/}
                        {/*begin::Body*/}
                        <div className="card-body pt-0">
                          {/*begin::Item*/}
                          <div className="d-flex align-items-center flex-wrap mb-10">
                            {/*begin::Symbol*/}
                            <div className="symbol symbol-50 symbol-light mr-5">
                              <span className="symbol-label">
                                <img src="./assets/dist/assets/media/svg/misc/006-plurk.svg" className="h-50 align-self-center" alt />
                              </span>
                            </div>
                            {/*end::Symbol*/}
                            {/*begin::Text*/}
                            <div className="d-flex flex-column flex-grow-1 mr-2">
                              <a href="#" className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1">Top Authors</a>
                              <span className="text-muted font-weight-bold">Mark, Rowling, Esther</span>
                            </div>
                            {/*end::Text*/}
                            <span className="label label-xl label-light label-inline my-lg-0 my-2 text-dark-50 font-weight-bolder">+82$</span>
                          </div>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <div className="d-flex align-items-center flex-wrap mb-10">
                            {/*begin::Symbol*/}
                            <div className="symbol symbol-50 symbol-light mr-5">
                              <span className="symbol-label">
                                <img src="./assets/dist/assets/media/svg/misc/015-telegram.svg" className="h-50 align-self-center" alt />
                              </span>
                            </div>
                            {/*end::Symbol*/}
                            {/*begin::Text*/}
                            <div className="d-flex flex-column flex-grow-1 mr-2">
                              <a href="#" className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1">Popular Authors</a>
                              <span className="text-muted font-weight-bold">Randy, Steve, Mike</span>
                            </div>
                            {/*end::Text*/}
                            <span className="label label-xl label-light label-inline my-lg-0 my-2 text-dark-50 font-weight-bolder">+280$</span>
                          </div>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <div className="d-flex align-items-center flex-wrap mb-10">
                            {/*begin::Symbol*/}
                            <div className="symbol symbol-50 symbol-light mr-5">
                              <span className="symbol-label">
                                <img src="./assets/dist/assets/media/svg/misc/003-puzzle.svg" className="h-50 align-self-center" alt />
                              </span>
                            </div>
                            {/*end::Symbol*/}
                            {/*begin::Text*/}
                            <div className="d-flex flex-column flex-grow-1 mr-2">
                              <a href="#" className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1">New Users</a>
                              <span className="text-muted font-weight-bold">John, Pat, Jimmy</span>
                            </div>
                            {/*end::Text*/}
                            <span className="label label-xl label-light label-inline my-lg-0 my-2 text-dark-50 font-weight-bolder">+4500$</span>
                          </div>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <div className="d-flex align-items-center flex-wrap mb-10">
                            {/*begin::Symbol*/}
                            <div className="symbol symbol-50 symbol-light mr-5">
                              <span className="symbol-label">
                                <img src="./assets/dist/assets/media/svg/misc/005-bebo.svg" className="h-50 align-self-center" alt />
                              </span>
                            </div>
                            {/*end::Symbol*/}
                            {/*begin::Text*/}
                            <div className="d-flex flex-column flex-grow-1 mr-2">
                              <a href="#" className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1">Active Customers</a>
                              <span className="text-muted font-weight-bold">Sandra, Tim, Louis</span>
                            </div>
                            {/*end::Text*/}
                            <span className="label label-xl label-light label-inline my-lg-0 my-2 text-dark-50 font-weight-bolder">+4500$</span>
                          </div>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <div className="d-flex align-items-center flex-wrap">
                            {/*begin::Symbol*/}
                            <div className="symbol symbol-50 symbol-light mr-5">
                              <span className="symbol-label">
                                <img src="./assets/dist/assets/media/svg/misc/014-kickstarter.svg" className="h-50 align-self-center" alt />
                              </span>
                            </div>
                            {/*end::Symbol*/}
                            {/*begin::Text*/}
                            <div className="d-flex flex-column flex-grow-1 mr-2">
                              <a href="#" className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1">Bestseller Theme</a>
                              <span className="text-muted font-weight-bold">Disco, Retro, Sports</span>
                            </div>
                            {/*end::Text*/}
                            <span className="label label-xl label-light label-inline my-lg-0 my-2 text-dark-50 font-weight-bolder">+4500$</span>
                          </div>
                          {/*end::Item*/}
                        </div>
                        {/*end::Body*/}
                      </div>
                      {/*end::List Widget 7*/}
                    </div>
                  </div>





                </div>







              </div>
            </div>
          </div>



        </div>
        {/*end::Content*/}


      </div>
      <Footer />
    </div>

  );
};

export default Dashboard;


