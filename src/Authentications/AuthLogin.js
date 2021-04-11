import axios from "axios";

    let username = 'admin';
    let password = 'Pass@1234';
    const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')

    // const title = new FormData();
    // title.append('title', 'title');
    // const description = new FormData();
    // description.append('description', 'description');
    // const status = new FormData();
    // status.append('status', 'status');
    // const location = new FormData();
    // location.append('location', 'location');
    // const start_date = new FormData();
    // start_date.append('start_date', 'start_date');
    // const due_date = new FormData();
    // due_date.append('due_date', 'due_date');


class AuthLogin {

  login(username, password) {
    return axios.post('https://ecological.chinikiguard.com/accounts/api/jwt/' , { username,  password },  { headers: { 'Authorization': `Basic ${token}`,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS',
    'Access-Control-Allow-Credentials': true }, }   )
      .then(response => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }



  logout() {
    localStorage.removeItem("user");
  }

  logout() {
    localStorage.removeItem("user");
  }

  createNewUser( username,password,first_name,last_name,address, lga,state,dob,email,phone_number) {
    return axios.post('https://ecological.chinikiguard.com/accounts/api/create-user/', {
      username,
      password,
      first_name,
      last_name,
      address,
      lga,
      state,
      dob,
      email,
      phone_number,
    },
    { 
    
    
      headers: { 
        'Content-Type':'application/json',
      'Authorization': `Basic ${token}`,
       'Access-Control-Allow-Origin': '*',
       'Access-Control-Allow-Methods': 'POST, GET,HEAD,OPTIONS',
       'Access-Control-Allow-Credentials': true 
      }, 
    }   
    )
  }

  //this handle projects
  RegisterProject(title,description,location,status,start_date,due_date){
     return  axios.post("https://ecological.chinikiguard.com/projects/api/create/", {

     title,
     description,
     location,
     status,
     start_date,
     due_date,
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


}
//this handle Tasks
RegisterTask(project,title,description,location,status,start_date,due_date,assigned_to){
  return  axios.post("https://ecological.chinikiguard.com/projects/api/tasks/create/", {

  project,
  title,
  description,
  location,
  assigned_to,
  status,
  start_date,
  due_date,
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
}



//this handle View Project
// ViewProject(project){
//   return  axios.get("https://ecological.chinikiguard.com/projects/api/details/"+`${project}`,
  
  
// { 
//  headers: { 
//  'Authorization': `Basic ${token}`,
//   'Access-Control-Allow-Origin': '*',
//   'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS',
//   'Access-Control-Allow-Credentials': true 
//  }, 
// }   
// )
// }



  
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthLogin();
