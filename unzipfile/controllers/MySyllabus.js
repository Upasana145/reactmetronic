const asyncHandler = require("express-async-handler");
const connection = require("../config/db")


const mySyllabus = asyncHandler(async (req, res) => {
     const { student_id } = req.body;
    
   const sql =`SELECT t1.t_rel_student_id, t2.title, t2.author, t2.publisher, t3.name, t1.t_rel_subject_id FROM t_rel_students_exam_paper as t1 INNER JOIN t_rel_students as t4 ON t4.t_rel_student_id = t1.t_rel_student_id LEFT JOIN t_rel_book_master as t2 ON t1.t_rel_subject_id =t2.t_rel_subject_id AND t4.t_rel_class_id = t2.t_rel_class_id INNER JOIN t_rel_subject as t3 on t1.t_rel_subject_id = t3.t_rel_subject_id where t1.t_rel_student_id = ${student_id}`

    connection.query(sql,[student_id], async (err, result) => {
        console.log(result)
        if (err) throw err;
        if (result) {
            res.status(201).json({ data: result });
        } else {
            res.status(400).json({ status: 0, msg: "" })
        }
    })
})

module.exports = { mySyllabus }
//http://3.110.158.229/phpmyadmin/tbl_sql.php?db=sms_tffs&table=t_rel_students_exam_paper
// exam papet table, class table teacher table
//SELECT t1.t_rel_student_id, t2.name FROM `t_rel_students_exam_paper` as t1 INNER JOIN t_rel_subject as t2 ON t1.`t_rel_subject_id` =t2.t_rel_subject_id WHERE `t_rel_student_id` = 2




