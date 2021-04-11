
// import { Button } from "semantic-ui-react";
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
// import AuthService from "../services/auth.service";
import axios from 'axios';



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

    componentWillMount() {
      const username = 'admin'
      const password = 'Pass@1234'
      const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
      axios.get("hhttps://ecological.chinikiguard.com/projects/api/list/?all_record=1",
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
  
  {/*begin::Bottom*/}
  <div className="header-bottom">

    {/*begin::Container*/}
    <div className="container">

      {/*begin::Header Menu Wrapper*/}
      <div className="header-navs header-navs-left" id="kt_header_navs">

        {/*begin::Tab Navs(for tablet and mobile modes)*/}
        
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















