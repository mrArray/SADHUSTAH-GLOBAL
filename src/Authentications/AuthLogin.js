import axios from "axios";

    let username = 'admin';
    let password = 'Pass@1234';
    const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')

    const title = new FormData();
    title.append('title', '');
    const description = new FormData();
    description.append('description', '');
    const status = new FormData();
    status.append('status', '');
    const location = new FormData();
    location.append('location', '');
    const startDate = new FormData();
    startDate.append('startDate', '');
    const dueDate = new FormData();
    dueDate.append('dueDate', '');


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

  
  RegisterProject(title,description,location,status,startDate,dueDate){
     return axios.post("https://ecological.chinikiguard.com/accounts/api/jwt/",{
     title,
     description,
     location,
     status,
     startDate,
     dueDate,
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
