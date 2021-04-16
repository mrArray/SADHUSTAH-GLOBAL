import axios from "axios";


const Url ='https://ecological.chinikiguard.com/accounts/api/jwt/';

class AuthLogin {

 
  login(username, password) {
    

    return axios.post( Url, { username,  password },  { headers: { 
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS',
    'Access-Control-Allow-Credentials': true }, }   )
    
      .then(response => {
        if (response.data) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        console.log(response.data)
        return response.data;
      }
      
      );
    
  }
  



  logout() {
    localStorage.removeItem("user");
  }

  logout() {
    
    localStorage.removeItem("user");
  }
  

  createNewUser( username,password,first_name,last_name,address, lga,state,dob,email,phone_number) {
    const mytoken = JSON.parse(localStorage.getItem('user'));
const token = mytoken.token;
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
      'Authorization': `Token ${token}`,
       'Access-Control-Allow-Origin': '*',
       'Access-Control-Allow-Methods': 'POST, GET,HEAD,OPTIONS',
       'Access-Control-Allow-Credentials': true 
      }, 
    }   
    )
  }

  //this handle projects
  RegisterProject(title,description,location,status,start_date,due_date){
    const mytoken = JSON.parse(localStorage.getItem('user'));
const token = mytoken.token;
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
    'Authorization': `Token ${token}`,
     'Access-Control-Allow-Origin': '*',
     'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS',
     'Access-Control-Allow-Credentials': true 
    }, 
  }   
  )


}
//this handle Tasks
RegisterTask(project,title,description,location,status,start_date,due_date,assigned_to){
  const mytoken = JSON.parse(localStorage.getItem('user'));
const token = mytoken.token;
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
 'Authorization': `Token ${token}`,
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
