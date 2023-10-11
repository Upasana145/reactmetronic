const asyncHandler = require("express-async-handler");
const connection = require("../config/db")


const mySubject = asyncHandler(async (req, res) => {
     const { student_id } = req.body;
    
   const sql ="SELECT * FROM t_rel_teacher"
   const sql2 =`SELECT t1.t_rel_student_id, t2.name FROM t_rel_students_exam_paper as t1 INNER JOIN t_rel_subject as t2 ON t1.t_rel_subject_id =t2.t_rel_subject_id WHERE t_rel_student_id = ${student_id}`
console.log(student_id, "=====stude==========")

    connection.query(sql2,[student_id], async (err, result) => {
        console.log(result)
        if (err) throw err;
        if (result) {
            res.status(201).json({ data: result });
        } else {
            res.status(400).json({ status: 0, msg: "" })
        }
    })
})


const myClassTeacherInfo = asyncHandler(async (req, res) => {
   
  const sql ="SELECT * FROM t_rel_teacher"
   connection.query(sql, async (err, result) => {
       console.log(result)
       if (err) throw err;
       if (result) {
           res.status(201).json({ data: result });
       } else {
           res.status(400).json({ status: 0, msg: "" })
       }
   })
}) 
    





module.exports = { mySubject,myClassTeacherInfo }
//http://3.110.158.229/phpmyadmin/tbl_sql.php?db=sms_tffs&table=t_rel_students_exam_paper
// exam papet table, class table teacher table
//SELECT t1.t_rel_student_id, t2.name FROM `t_rel_students_exam_paper` as t1 INNER JOIN t_rel_subject as t2 ON t1.`t_rel_subject_id` =t2.t_rel_subject_id WHERE `t_rel_student_id` = 2




