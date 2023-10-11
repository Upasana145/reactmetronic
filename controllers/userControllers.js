const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const connection = require("../config/db")


const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
        expiresIn: '1d'
    })
}

const loginUser = asyncHandler(async (req, res) => {
    const { registrationNo, password } = req.body;
    // validation
    if (!registrationNo || !password) {
        res.status(400)
        throw new Error("Please provide all require info");
    }
    if (password.length < 6) {
        res.status(400)
        throw new Error("Password should be more than 6 characters");
    }
    
    const sql = "SELECT * FROM t_rel_students WHERE registration_no = ?"
   
    connection.query(sql, [registrationNo], async (err, result) => {
        if (err) throw err;
        // check pasword
        console.log(result)
        if(result && result.length == 0){
            res.status(400).json({ status: 0, msg: "registration number  is not registered. Please register!" });
            return;
        }
        

        //compare password
        const pwIsCorrect = await bcrypt.compare(password, result[0].password);
      
        
        //checking condition if the password is correct the move on the token and cookies things
        if (pwIsCorrect) {
            //generate token
            const token = generateToken(result[0].t_rel_student_id);
            // cookie set
            res.cookie("token", token, {
                path: '/',
                httpOnly: true,
                expires: new Date(Date.now() + 1000 * 86400), // 1 day
                sameSite: "none",
                secure: true
            })
            
            res.status(201).json({ data: result[0], token });
        } else {
            res.status(400).json({ status: 0, msg: "Password is not correct" })
        }
    })
})


// // SELECT user_id FROM users WHERE email ='john@example.com'
// const studentProfile = asyncHandler(async (req, res) => {
//     // const { token, userId } = req.body;
//     const sql = "SELECT first_name, last_name, t_rel_student_id,t_rel_student_id,t_mst_client_id,t_rel_class_id,first_name, last_name,middle_name,admission_academic_year_id,gender,date_of_birth,photo,mother_name,mother_occupation,is_parent_working,family_income_annual,mother_last_qualification,blood_group,father_name,father_occupation,father_occupation,same_address,primary_mobile,secondary_email,primary_email FROM t_rel_students"
//     connection.query(sql, async (err, result) => {
//         console.log(result)
//         if (err) throw err;
//         const token = generateToken(result[0].t_mst_user_id);
//         if (result) {
//             res.status(201).json({ data: result[0], token });
//         } else {
//             res.status(400).json({ status: 0, msg: "" })
//         }
//     })
// })




module.exports = { loginUser }



// exam papet table, class table teacher table

