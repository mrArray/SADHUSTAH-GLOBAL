import React, { Component, useState, useEffect } from "react";
import { Redirect, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer'
import Menu_Aside from "./Menu_Aside";
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner'

const Dashboard = () => {
  const [projects, setProjects] = useState([]); 
  const [myloading, setLoading] = useState([true]);
  const [tasks, setTask] = useState([]);
  const [OpTasks, setOpTasks] = useState([]);
  const [OpProjects, setOpProjects] = useState([]);
  const [InprogressTasks, setInproTask] = useState([]);
  const [InprogressProjects, setInproProject] = useState([]);
  const [CompletedProjects, setCompletedProject] = useState([]);
  const [CompletedTasks, setCompletedTask] = useState([]);
  


  const TotalProjectTasks = async () => {  
    setLoading(false); 
    const username = 'admin'
    const password = 'Pass@1234'
    const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
    const DashboardUrl='https://ecological.chinikiguard.com/projects/api/dashboard/'
          await  axios.all([
            axios.get(DashboardUrl,  {
                    
                    headers: {
                        'Authorization': `Basic ${token}`,
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS',
                        'Access-Control-Allow-Credentials': true

                    },
                }),
               
            ])
                .then(axios.spread((...responses) => {
                  setLoading(false);  
                 // output of req.
                    console.log(responses)
                    const allTasks =responses[0].data.all_tasks ;
                    const allprojects =responses[0].data.all_projects ;
                    const openProject = responses[0].data.open_projects;
                    const openTask = responses[0].data.open_tasks;
                    const ongoingProject = responses[0].data.inprogress_projects;
                    const ongoingTask= responses[0].data.inprogress_tasks;
                    const completedProject= responses[0].data.completed_projects;
                    const completedTask = responses[0].data.completed_tasks;
                    // adding the data to the hook methods      
                     setProjects(allprojects) 
                     setTask(allTasks) 
                     setOpTasks(openTask)
                     setOpProjects(openProject)
                     setInproTask(ongoingTask)
                     setInproProject(ongoingProject)
                     setCompletedProject(completedProject) 
                     setCompletedTask(completedTask)
                }));

    };

  useEffect(() => {
    TotalProjectTasks();

    //start js style
    const script = document.createElement("script");
    script.src = "./assets/dist/assets/js/pages/widgets.js";
    script.async = true;
    document.body.appendChild(script);
    //end js stye

  }, []);

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
              {/*begin::Entry*/}
              <div className="d-flex flex-column-fluid">
                <Menu_Aside />
                {/*begin::Container*/}
                <div className="container">
                  <div className="row">
                    <div className="col-xl-2">
                      <div className="card card-custom bg-green card-stretch gutter-b">
                        <div className="card-body">
                      
                          {myloading ? (
                              <center><Spinner animation="border" variant="primary" /></center>

                          ) : (
                            <div>
                              <span className="svg-icon svg-icon-2x svg-icon-success">
                                {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Mail-opened.svg*/}
                                <center>
                                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                      <rect x={0} y={0} width={24} height={24} />
                                      <rect fill="#000000" opacity="0.3" x={13} y={4} width={3} height={16} rx="1.5" />
                                      <rect fill="#000000" x={8} y={9} width={3} height={11} rx="1.5" />
                                      <rect fill="#000000" x={18} y={11} width={3} height={9} rx="1.5" />
                                      <rect fill="#000000" x={3} y={13} width={3} height={7} rx="1.5" />
                                    </g>
                                  </svg>
                                </center>
                                {/*end::Svg Icon*/}
                              </span>

                              <center> <span className="card-title font-weight-bolder text-dark-75 font-size-h2 mb-0 mt-6 d-block">


                                <h1>{projects}</h1>

                              </span>

                              </center>

                              <center><span className="font-weight-bold text font-size-sm">Total Projects</span></center>
                            </div>
                          )}

                        </div>



                      </div>

                    </div>

                    <div className="col-xl-2">

                      {/*begin::Stats Widget 26*/}
                      <div className="card card-custom bg-green card-stretch gutter-b">
                        {/*begin::ody*/}
                        <div className="card-body">
                        {myloading ? (
                            <>
                              <center><Spinner animation="border" variant="primary" /></center>
                            </>

                          ) : (
                            <div>
                          <span className="svg-icon svg-icon-2x svg-icon-success">
                            {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Group.svg*/}
                            <center>
                              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                  <rect x={0} y={0} width={24} height={24} />
                                  <rect fill="#000000" opacity="0.3" x={13} y={4} width={3} height={16} rx="1.5" />
                                  <rect fill="#000000" x={8} y={9} width={3} height={11} rx="1.5" />
                                  <rect fill="#000000" x={18} y={11} width={3} height={9} rx="1.5" />
                                  <rect fill="#000000" x={3} y={13} width={3} height={7} rx="1.5" />
                                </g>
                              </svg>
                            </center>
                            {/*end::Svg Icon*/}
                          </span>
                          <center> <span className="card-title font-weight-bolder text-dark-75 font-size-h2 mb-0 mt-6 d-block"><h1>{tasks}</h1></span></center>
                          <center><span className="font-weight-bold text font-size-sm">Total Tasks</span></center>
                        </div>
                        
                        )}
                        </div>

                        {/*end::Body*/}
                      </div>
                      {/*end::Stats Widget 26*/}
                    </div>
                    <div className="col-xl-2">
                      {/*begin::Stats Widget 27*/}
                      <div className="card card-custom bg-green card-stretch gutter-b">
                        {/*begin::Body*/}
                        <div className="card-body">
                        {myloading ? (
                            <>
                              <center><Spinner animation="border" variant="primary" /></center>
                            </>

                          ) : (
                            <div>
                          <span className="svg-icon svg-icon-2x svg-icon-warning">
                            {/*begin::Svg Icon | path:assets/media/svg/icons/Media/Equalizer.svg*/}
                            <center>
                              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                  <rect x={0} y={0} width={24} height={24} />
                                  <rect fill="#000000" opacity="0.3" x={13} y={4} width={3} height={16} rx="1.5" />
                                  <rect fill="#000000" x={8} y={9} width={3} height={11} rx="1.5" />
                                  <rect fill="#000000" x={18} y={11} width={3} height={9} rx="1.5" />
                                  <rect fill="#000000" x={3} y={13} width={3} height={7} rx="1.5" />
                                </g>
                              </svg>
                            </center>
                            {/*end::Svg Icon*/}
                          </span>
                          <center> <span className="card-title font-weight-bolder text-dark-75 font-size-h2 mb-0 mt-6 d-block"><h1>{OpProjects}</h1></span></center>
                          <center><span className="font-weight-bold text font-size-sm">New Projects</span></center>
                        </div>
                          )}
                        </div>
                        {/*end::Body*/}
                      </div>
                      {/*end::Stats Widget 27*/}
                    </div>

                    <div className="col-xl-2">
                      {/*begin::Stats Widget 27*/}
                      <div className="card card-custom bg-green card-stretch gutter-b">
                        {/*begin::Body*/}
                        <div className="card-body">
                        {myloading ? (
                            <>
                              <center><Spinner animation="border" variant="primary" /></center>
                            </>

                          ) : (
                            <div>
                          <span className="svg-icon svg-icon-2x svg-icon-warning">
                            {/*begin::Svg Icon | path:assets/media/svg/icons/Media/Equalizer.svg*/}
                            <center>
                              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                  <rect x={0} y={0} width={24} height={24} />
                                  <rect fill="#000000" opacity="0.3" x={13} y={4} width={3} height={16} rx="1.5" />
                                  <rect fill="#000000" x={8} y={9} width={3} height={11} rx="1.5" />
                                  <rect fill="#000000" x={18} y={11} width={3} height={9} rx="1.5" />
                                  <rect fill="#000000" x={3} y={13} width={3} height={7} rx="1.5" />
                                </g>
                              </svg>
                            </center>
                            {/*end::Svg Icon*/}
                          </span>
                          <center> <span className="card-title font-weight-bolder text-dark-75 font-size-h2 mb-0 mt-6 d-block"><h1>{OpTasks}</h1></span></center>
                          <center><span className="font-weight-bold text font-size-sm">New Tasks</span></center>
                        </div>
                          )}
                        {/*end::Body*/}
                      </div>
                      </div>
                      {/*end::Stats Widget 27*/}
                    </div>
                    <div className="col-xl-2">
                      {/*begin::Stats Widget 27*/}
                      <div className="card card-custom bg-green card-stretch gutter-b">
                        {/*begin::Body*/}
                        <div className="card-body">
                        {myloading ? (
                            <>
                              <center><Spinner animation="border" variant="primary" /></center>
                            </>

                          ) : (
                            <div>
                          <span className="svg-icon svg-icon-2x svg-icon-danger">
                            {/*begin::Svg Icon | path:assets/media/svg/icons/Media/Equalizer.svg*/}
                            <center>
                              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                  <rect x={0} y={0} width={24} height={24} />
                                  <rect fill="#000000" opacity="0.3" x={13} y={4} width={3} height={16} rx="1.5" />
                                  <rect fill="#000000" x={8} y={9} width={3} height={11} rx="1.5" />
                                  <rect fill="#000000" x={18} y={11} width={3} height={9} rx="1.5" />
                                  <rect fill="#000000" x={3} y={13} width={3} height={7} rx="1.5" />
                                </g>
                              </svg>
                            </center>
                            {/*end::Svg Icon*/}
                          </span>
                          <center> <span className="card-title font-weight-bolder text-dark-75 font-size-h2 mb-0 mt-6 d-block"><h1>{InprogressProjects}</h1></span></center>
                          <center><span className="font-weight-bold text font-size-sm">Ongoing Projects</span></center>
                        </div>
                          )}
                          </div>
                        {/*end::Body*/}
                      </div>
                      {/*end::Stats Widget 27*/}
                    </div>


                    <div className="col-xl-2">
                      {/*begin::Stats Widget 28*/}
                      <div className="card card-custom bg-green card-stretch gutter-b">
                        {/*begin::Body*/}
                        <div className="card-body">
                        {myloading ? (
                            <>
                              <center><Spinner animation="border" variant="primary" /></center>
                            </>

                          ) : (
                            <div>
                          <span className="svg-icon svg-icon-2x svg-icon-danger">
                            {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Group-chat.svg*/}
                            <center>
                              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                  <rect x={0} y={0} width={24} height={24} />
                                  <rect fill="#000000" opacity="0.3" x={13} y={4} width={3} height={16} rx="1.5" />
                                  <rect fill="#000000" x={8} y={9} width={3} height={11} rx="1.5" />
                                  <rect fill="#000000" x={18} y={11} width={3} height={9} rx="1.5" />
                                  <rect fill="#000000" x={3} y={13} width={3} height={7} rx="1.5" />
                                </g>
                              </svg>
                            </center>
                            {/*end::Svg Icon*/}
                          </span>
                          <center> <span className="card-title font-weight-bolder text-dark-75 font-size-h2 mb-0 mt-6 d-block"><h1>{InprogressTasks}</h1></span></center>
                          <center><span className="font-weight-bold text font-size-sm">Ongoing Tasks</span></center>
                        </div>
                          )}
                        </div>
                        {/*end::Body*/}
                      </div>
                      {/*end::Stat: Widget 28*/}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-6">
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-6">
                      {/*begin::Stats Widget 22*/}
                      <div className="card card-custom bgi-no-repeat card-stretch gutter-b" style={{ backgroundPosition: 'right top', backgroundSize: '30% auto', backgroundImage: 'url(assets/media/svg/shapes/abstract-3.svg)' }}>
                        {/*begin::Body*/}
                        <div className="card-body my-4">
                        {myloading ? (
                            <>
                              <center><Spinner animation="border" variant="primary" /></center>
                            </>

                          ) : (
                            <div>
                          <a href="#" className="card-title font-weight-bolder text-info font-size-h6 mb-4 text-hover-state-dark d-block">Completed Projects</a>
                          <div className="font-weight-bold text-muted font-size-sm">
                            <span className="text-dark-75 font-weight-bolder font-size-h2 mr-2">{CompletedProjects}</span></div>
                          <div className="progress progress-xs mt-7 bg-info-o-60">
                            <div className="progress-bar bg-info" role="progressbar" style={{ width: '100%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                        </div>
                          )}
                        </div>
                        {/*end::Body*/}
                      </div>
                      {/*end::Stats Widget 22*/}
                    </div>
                    <div className="col-xl-6">
                      {/*begin::Stats Widget 22*/}
                      <div className="card card-custom bgi-no-repeat card-stretch gutter-b" style={{ backgroundPosition: 'right top', backgroundSize: '30% auto', backgroundImage: 'url(assets/media/svg/shapes/abstract-3.svg)' }}>
                        {/*begin::Body*/}
                        <div className="card-body my-4">
                        {myloading ? (
                            <>
                              <center><Spinner animation="border" variant="primary" /></center>
                            </>

                          ) : (
                            <div>
                          <a href="#" className="card-title font-weight-bolder text-success font-size-h6 mb-4 text-hover-state-dark d-block">Completed Tasks</a>
                          <div className="font-weight-bold text-muted font-size-sm">
                            <span className="text-dark-75 font-weight-bolder font-size-h2 mr-2">{CompletedTasks}</span></div>
                          <div className="progress progress-xs mt-7 bg-success-o-60">
                            <div className="progress-bar bg-success" role="progressbar" style={{ width: '100%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                        </div>
                          )}
                        </div>
                        {/*end::Body*/}
                      </div>
                      {/*end::Stats Widget 22*/}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-6">
                      
                    </div>
                    <div className="col-xl-6">
                      
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


