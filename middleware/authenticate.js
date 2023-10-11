const jwt = require('jsonwebtoken');

//JWT Token verification
let authenticate = (request , response , next) =>{
if(!request.headers.authorization){
    return response.status(401).send('Unauthorized Request')
   }
   let token = request.headers.authorization.split( ' ')[1];
   if(token === null){
    return response.status(401).send('Unauthorized Request')
   }
   let payload = jwt.verify(token , process.env.JWT_SECRET_KEY);
   console.log(payload, 'payload------------------')
   if(!payload){
    return response.status(401).send('Unauthorized Request')
   }
   request.user = payload.user;
   next()
};

module.exports = authenticate;







// const jwt = require('jsonwebtoken');


// let authenticate = (response, request, next) => {

// if(!request.headers.authorization){
//     console.log(request.headers.authorization,'---------')
//     return response.status(401).send('Unauthorized Request')
// }

// let token = request.headers.authorization.split('')[1]
// if(token === null){
//     return response.status(401).send('Unauthorized Request')
// }

// let payload = jwt.verify(token, process.env.JWT_SECRET_KEY)
// if(!payload){
//     return response.status(401).send('Unauthorized Request')
// }
// request.user = payload.user
// next()
// }
// module.exports = authenticate
