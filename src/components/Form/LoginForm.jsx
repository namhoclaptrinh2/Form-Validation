import React, { useState }  from 'react'

const LoginForm = () => {

  const [userLogin,setUserLogin] = useState({
    username:'',
    email:'',
    gender:'male',
    country:'Autralia',
    password:'',
  })

  const [error,setError] = useState({
    username:'',
    email:'',
    gender:'male',
    country:'Autralia',
    password:''
  })

  
console.log('userLogin',userLogin)

  
  const handleSubmit = (e)=>{
      e.preventDefault(); //Chặn reload browser
      console.log('submit')
  }

const handleChangeInput = (e)=>{

  //state value
  const {name, value}= e.target;

  let attrType= e.target.getAttribute('data-type');
  console.log(attrType)
  //state error
  let messError='';
  if(value === '') {//nếu value rỗng thì lỗi
    messError=`${name} không được để trống !`;
  }else{
    //xét lỗi nếu như đã nhập liệu thì xét lỗi regex
    switch(attrType){
      case 'username':{
        const regexUsername = /^[a-zA-Z]{6,50}$/;

        if(!regexUsername.test(value)){
          messError=`${name} không hợp lệ`
        }
      };break;
      case'email':{
          const regexEmail =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(!regexEmail.test(value)){
          messError=`${name} không hợp lệ`
        }
      };break;
      case 'password':{
        const regexPassword = /.{8,}/;
        if(!regexPassword.test(value)){
          messError=`${name} không hợp lệ`
        }      
      }
      
    }

  }
  setError({
    ...error,
    [name]:messError
  })


  //setState
    setUserLogin({
      ...userLogin,
      [name]:value
    }) 

  }
  return (
<form className="container mt-5" onSubmit={handleSubmit}>
  <div className="row justify-content-center">
    <div className="col-md-6">
      <div className="card">
        <div className="card-body">
          <h3 className="text-center mb-4">User Registration</h3>
          
         {/* Username */}
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input data-type="username" className="form-control" id="username" name="username" placeholder="Enter username" onChange={(handleChangeInput)}/>
              {error.username && <p className='text text-danger ' >{error.username}</p>}
            </div>
            {/* Email */} *
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input data-type="email" className="form-control" id="email" name="email" placeholder="Enter email" onChange={(handleChangeInput)}/>
              {error.email&&<p className='text text-danger ' >{error.email}</p>}
            </div>
                {/* Gioi tinh */}
            <div className="mb-3">
              <label className="form-label">Gender</label>
              <div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="gender" id="male" defaultValue="male" onChange={(handleChangeInput)}/>
                  <label className="form-check-label" htmlFor="male">Male</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="gender" id="female" defaultValue="female" onChange={(handleChangeInput)}/>
                  <label className="form-check-label" htmlFor="female">Female</label>
                </div>
              </div>
            </div>
            {/* Country */}
            <div className="mb-3">
              <label htmlFor="country" className="form-label">Country</label>
              <select className="form-select" id="country" name="country" onChange={(handleChangeInput)}>
                <option value={'austra'}>Australia</option>
                <option value={'USA'}>United States</option>
                <option value={'canada'}>Canada</option>
                <option value={'UK'}>United Kingdom</option>
              </select>
            </div>
            {/* Password */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input data-type="password" className="form-control" id="password" name="password" placeholder="Enter password" autocomplete="current-password"  onChange={(handleChangeInput)}/>
              {error.password &&<p className='text text-danger ' >{error.password}</p>}
              </div>
              
            {/* Submit Button */}
            <div className="d-grid">
              <button data-data-type="submit" className="btn btn-primary">Register</button>
            </div>
         
        </div>
      </div>
    </div>
  </div>
</form>

  )
}

export default LoginForm