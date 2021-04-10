
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
  const [tasks, setTask] = useState([]);
  const [OpTasks, setOpTasks] = useState([]);
  const [OpProjects, setOpProjects] = useState([]);
  const [InprogressTasks, setInproTask] = useState([]);
  const [InprogressProjects, setInproProject] = useState([]);
  const [CompletedProjects, setCompletedProject] = useState([]);
  const [CompletedTasks, setCompletedTask] = useState([]);
  const [barchartData, setbarChartData] = useState({});

  







  const ProjectCounts = () => {
    let Projects = [];
    let ProjectDetails = [];
    const ProjectDashboardChart =
      [

        {
          "Project_details": "Total Projects",
          "total_project": `${projects}`,

        },
        {
          "Project_details": "Total Tasks",
          "total_project": `${tasks}`,

        },



      ];

    for (const dataObj of ProjectDashboardChart) {
      Projects.push(parseInt(dataObj.total_project));
      ProjectDetails.push(dataObj.Project_details);
    }

    setbarChartData({
      labels: ProjectDetails,
      datasets: [
        {
          label: 'Meters Captured',
          backgroundColor: 'rgba(60,141,188,0.9)',
          borderColor: 'rgba(60,141,188,0.8)',
          pointRadius: false,
          pointColor: '#3b8bba',
          data: Projects,
          pointStrokeColor: 'rgba(60,141,188,1)',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(60,141,188,1)'
        },
        {
          label: 'Meters in Region',
          backgroundColor: 'rgba(210, 214, 222, 1)',
          borderColor: 'rgba(210, 214, 222, 1)',
          pointRadius: false,
          pointColor: 'rgba(210, 214, 222, 1)',
          pointStrokeColor: '#c1c7d1',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(220,220,220,1)',
          data: Projects
        }
      ]

    })

    setLoading(false);


  };


  const TotalTask = () => {
    const username = 'admin'
    const password = 'Pass@1234'
    const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')

    axios.get(" https://ecological.chinikiguard.com/projects/api/dashboard/",
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
        const tasks = res.data.all_tasks;
        setTask(tasks);
        setLoading(false)
        console.log(res);
        // console.log(res.data.all_tasks);
        // window.location = "/dashboard"
      })

  }

  const TotalProject = () => {


    const username = 'admin'
    const password = 'Pass@1234'
    const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
    axios.get("https://ecological.chinikiguard.com/projects/api/dashboard/",
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
        const projects = res.data.all_projects;
        setProjects(projects);
        setLoading(true)
        console.log(res);
        // console.log(res.data.all_projects);
        // window.location = "/dashboard"
      })

  }

  const OpenProject = () => {


    const username = 'admin'
    const password = 'Pass@1234'
    const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
    axios.get("https://ecological.chinikiguard.com/projects/api/dashboard/",
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
        const OPProject = res.data.open_projects;
        setOpProjects(OPProject);
        setLoading(false)
        console.log(res);
        // console.log(res.data.open_projects);
        // window.location = "/dashboard"
      })

  }

  const OpenTask = () => {


    const username = 'admin'
    const password = 'Pass@1234'
    const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
    axios.get("https://ecological.chinikiguard.com/projects/api/dashboard/",
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
        const OPTask = res.data.open_tasks;
        setOpTasks(OPTask);
        setLoading(false)
        console.log(res);
        // console.log(res.data.open_projects);
        // window.location = "/dashboard"
      })

  }


  const OngoingProject = () => {


    const username = 'admin'
    const password = 'Pass@1234'
    const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
    axios.get("https://ecological.chinikiguard.com/projects/api/dashboard/",
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
        const InproPro = res.data.inprogress_projects;
        setInproProject(InproPro);
        setLoading(false)
        console.log(res);
        // console.log(res.data.open_projects);
        // window.location = "/dashboard"
      })

  }
  const OngoingTask = () => {


    const username = 'admin'
    const password = 'Pass@1234'
    const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
    axios.get("https://ecological.chinikiguard.com/projects/api/dashboard/",
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
        const InProTasks = res.data.inprogress_tasks;
        setInproTask(InProTasks);
        setLoading(false)
        console.log(res);
        // console.log(res.data.open_projects);
        // window.location = "/dashboard"
      })

  }

  const CompletedProject = () => {


    const username = 'admin'
    const password = 'Pass@1234'
    const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
    axios.get("https://ecological.chinikiguard.com/projects/api/dashboard/",
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
        const CompletedProject = res.data.completed_projects;
        setCompletedProject(CompletedProject);
        setLoading(false)
        console.log(res);
        // console.log(res.data.open_projects);
        // window.location = "/dashboard"
      })

  }

  const CompletedTask = () => {


    const username = 'admin'
    const password = 'Pass@1234'
    const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
    axios.get("https://ecological.chinikiguard.com/projects/api/dashboard/",
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
        const CompletedTask = res.data.completed_tasks;
        setCompletedTask(CompletedTask);
        setLoading(false)
        console.log(res);
        // console.log(res.data.open_projects);
        // window.location = "/dashboard"
      })

  }

  useEffect(() => {

    TotalProject();
    TotalTask();
    OpenProject();
    OpenTask();
    OngoingProject();
    OngoingTask();
    CompletedProject();
    CompletedTask();
    ProjectCounts();
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
                            <>
                              <center><Spinner animation="border" variant="primary" /></center>
                            </>

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
                        {/*end::Body*/}
                      </div>
                      {/*end::Stats Widget 26*/}
                    </div>
                    <div className="col-xl-2">
                      {/*begin::Stats Widget 27*/}
                      <div className="card card-custom bg-green card-stretch gutter-b">
                        {/*begin::Body*/}
                        <div className="card-body">
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
                        {/*end::Body*/}
                      </div>
                      {/*end::Stats Widget 27*/}
                    </div>

                    <div className="col-xl-2">
                      {/*begin::Stats Widget 27*/}
                      <div className="card card-custom bg-green card-stretch gutter-b">
                        {/*begin::Body*/}
                        <div className="card-body">
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
                        {/*end::Body*/}
                      </div>
                      {/*end::Stats Widget 27*/}
                    </div>
                    <div className="col-xl-2">
                      {/*begin::Stats Widget 27*/}
                      <div className="card card-custom bg-green card-stretch gutter-b">
                        {/*begin::Body*/}
                        <div className="card-body">
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
                        {/*end::Body*/}
                      </div>
                      {/*end::Stats Widget 27*/}
                    </div>


                    <div className="col-xl-2">
                      {/*begin::Stats Widget 28*/}
                      <div className="card card-custom bg-green card-stretch gutter-b">
                        {/*begin::Body*/}
                        <div className="card-body">
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
                        {/*end::Body*/}
                      </div>
                      {/*end::Stat: Widget 28*/}
                    </div>
                  </div>


                  <div className="row">
                    <div className="col-xl-6">
                      {/* {myloading ? (
                                            <>
                                                    <center><Spinner animation="border" variant="primary" /></center>
                                                </>

                                        ) : (
                                           
                                                
                                            )} */}


                    </div>

                  </div>

                  <div className="row">
                    <div className="col-xl-6">
                      {/*begin::Stats Widget 22*/}
                      <div className="card card-custom bgi-no-repeat card-stretch gutter-b" style={{ backgroundPosition: 'right top', backgroundSize: '30% auto', backgroundImage: 'url(assets/media/svg/shapes/abstract-3.svg)' }}>
                        {/*begin::Body*/}
                        <div className="card-body my-4">
                          <a href="#" className="card-title font-weight-bolder text-info font-size-h6 mb-4 text-hover-state-dark d-block">Completed Projects</a>
                          <div className="font-weight-bold text-muted font-size-sm">
                            <span className="text-dark-75 font-weight-bolder font-size-h2 mr-2">{CompletedProjects}</span></div>
                          <div className="progress progress-xs mt-7 bg-info-o-60">
                            <div className="progress-bar bg-info" role="progressbar" style={{ width: '100%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                          </div>
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
                          <a href="#" className="card-title font-weight-bolder text-success font-size-h6 mb-4 text-hover-state-dark d-block">Completed Tasks</a>
                          <div className="font-weight-bold text-muted font-size-sm">
                            <span className="text-dark-75 font-weight-bolder font-size-h2 mr-2">{CompletedTasks}</span></div>
                          <div className="progress progress-xs mt-7 bg-success-o-60">
                            <div className="progress-bar bg-success" role="progressbar" style={{ width: '100%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                        </div>
                        {/*end::Body*/}
                      </div>
                      {/*end::Stats Widget 22*/}
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


