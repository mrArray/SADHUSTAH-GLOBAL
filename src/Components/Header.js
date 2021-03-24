
// import { Button } from "semantic-ui-react";
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
// import AuthService from "../services/auth.service";


class Header extends Component {


    constructor(props) {
        super(props);

        this.state = {
            //   showModeratorBoard: false,
            //   showAdminBoard: false,
            //   currentUser: undefined
        };
    }
    state = {
        navigate: false
    };

    componentDidMount() {

        //user  stored user information (including JWT) from AuthService class
        // const user = AuthService.getCurrentUser();

        // if (user) {
        //   this.setState({
        //     currentUser: user,
        //     showModeratorBoard: user,
        //     showAdminBoard: user
        //   });
        // }
    }


    logout = () => {

      // <Redirect to="/dashboard" push={true} />
        window.location.reload("/dashboard");
    };

    render() {
        // const { currentUser, showModeratorBoard, showAdminBoard } = this.state;
        // const { navigate } = this.state;

        //    if (navigate){ 
        //          return <Redirect to="/" push={true} />;


        //         }


        return (

            <Router>
               <div id="kt_header" className="header flex-column header-fixed">
  {/*begin::Top*/}
  <div className="header-top">
    {/*begin::Container*/}
    <div className="container">
      {/*begin::Left*/}
      <div className="d-none d-lg-flex align-items-center mr-3">
        {/*begin::Logo*/}
        <Link onClick={this.logout}    to="/dashboard"            
className="mr-20">
          <img alt="Logo" src="./assets/dist/assets/media/svg/illustrations/ecooo.png" className="max-h-35px" />

        </Link>

        {/*end::Logo*/}
        {/*begin::Tab Navs(for desktop mode)*/}
        <ul className="header-tabs nav align-self-end font-size-lg" role="tablist">
       
         
        </ul>
        {/*begin::Tab Navs*/}
      </div>
      {/*end::Left*/}
      {/*begin::Topbar*/}
      <div className="topbar bg-primary">

       
        {/*begin::User*/}
        <div className="topbar-item">
          <div className="btn btn-icon btn-hover-transparent-white w-sm-auto d-flex align-items-center btn-lg px-2" id="kt_quick_user_toggle">
            <div className="d-flex flex-column text-right pr-sm-3">
              <span className="text-white opacity-50 font-weight-bold font-size-sm d-none d-sm-inline">Salisu</span>
              <span className="text-white font-weight-bolder font-size-sm d-none d-sm-inline">Manager</span>
            </div>
            <span className="symbol symbol-35">
              <span className="symbol-label font-size-h5 font-weight-bold text-white bg-white-o-30">S</span>
            </span>
          </div>
        </div>
        {/*end::User*/}
      </div>
      {/*end::Topbar*/}
    </div>
    {/*end::Container*/}
  </div>
  {/*end::Top*/}
  {/*begin::Bottom*/}
  <div className="header-bottom">

    {/*begin::Container*/}
    <div className="container">

      {/*begin::Header Menu Wrapper*/}
      <div className="header-navs header-navs-left" id="kt_header_navs">

        {/*begin::Tab Navs(for tablet and mobile modes)*/}
        <ul className="header-tabs p-5 p-lg-0 d-flex d-lg-none nav nav-bold nav-tabs" role="tablist">

          {/*begin::Item*/}
          <li className="nav-item mr-2">
            <a href="#" className="nav-link btn btn-clean active" data-toggle="tab" data-target="#kt_header_tab_1" role="tab">Home</a>

          </li>
          {/*end::Item*/}
          {/*begin::Item*/}
          <li className="nav-item mr-2">
            <a href="#" className="nav-link btn btn-clean" data-toggle="tab" data-target="#kt_header_tab_2" role="tab">Reports</a>
          </li>
          {/*end::Item*/}
          {/*begin::Item*/}
          <li className="nav-item mr-2">
            <a href="#" className="nav-link btn btn-clean" data-toggle="tab" data-target="#kt_header_tab_2" role="tab">Orders</a>
          </li>
          {/*end::Item*/}
          {/*begin::Item*/}
          <li className="nav-item mr-2">
            <a href="#" className="nav-link btn btn-clean" data-toggle="tab" data-target="#kt_header_tab_2" role="tab">Help Ceter</a>
          </li>
          {/*end::Item*/}
        </ul>
        {/*begin::Tab Navs*/}
        {/*begin::Tab Content*/}
        <div className="tab-content">
          {/*begin::Tab Pane*/}
        
        </div>
        {/*end::Tab Content*/}
      </div>
      {/*end::Header Menu Wrapper*/}
    </div>
    {/*end::Container*/}
  </div>
  {/*end::Bottom*/}
</div>

  

            </Router>

        )
    }

}


export default Header;















