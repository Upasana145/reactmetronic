	
const mysql=require('mysql');
const connection=mysql.createConnection({
    host:"3.110.158.229",
    port: "3306",
    user:"umsadm",
    password:"20@w$19!",
    database:"sms_tffs"
});
connection.connect(function(error){
  if(error){
    console.log(error);
  } else {
    console.log('connected');
  }
});  
module.exports = connection;