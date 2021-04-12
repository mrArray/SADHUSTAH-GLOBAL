import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Content from './Components/Content'
import axios from "axios";



export default function App() {

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
    axios.get("https://ecological.chinikiguard.com/accounts/api/users/",
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
          localStorage.setItem("AllUsersData", JSON.stringify(res.data));
        }
        console.log(res);
        console.log(res.data);
        // window.location = "/dashboard"
      })
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
        // window.location = "/dashboard"
      })

  return (
    <div>
      <BrowserRouter>

      <Content/>

      </BrowserRouter>

    </div>
    
  ) 
}