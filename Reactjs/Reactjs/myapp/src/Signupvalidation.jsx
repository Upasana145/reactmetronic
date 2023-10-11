//Here i have to validate using react.js

function Validation(values)
{
  let error = {}
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  // const password_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  // /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
 
  if(values.firstname === ""){
    error.firstname = "Name should not be empty"
  }
  else
  {
    error.firstname = ""
  }
  if(values.lastname === ""){
    error.lastname = "Name should not be empty"
  }
  else
  {
    error.lastname = ""
  }
 
  if(values.email === ""){
    error.email = "Name should not be empty"
  }
  else if(!email_pattern.test(values.email)){
    error.email = "Email Didn't match"
  }else
  {
    error.email = ""
  }
 

if(values.password === ""){
    error.password = "Password should not be empty"
}
// else if(!password_pattern.test(values.password))
// {
// error.password = "Password didn't match"
// }
else{
    error.password =""
}

return error;

}



export default Validation;