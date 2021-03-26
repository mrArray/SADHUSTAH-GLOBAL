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

  register(username, email, password, firstName, lastName, address ,lg, state) {
    return axios.post('https://gridxadmin.kedco.com.ng/accounts/api/jwt/', {
      username,
      email,
      password,
      firstName,
      lastName,
      address,
      lg,
      state
    },
    );
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

  
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthLogin();
