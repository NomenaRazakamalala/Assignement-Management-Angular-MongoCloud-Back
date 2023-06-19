let Teacher = require('../model/teacher');

// Récupérer tous les teacher (GET)
function getTeacherSansPagination(req, res){
    Teacher.find((err, teachers) => {
        if(err){
            res.send(err)
        }

        res.send(teachers);
    });
}

function getTeachers(req, res) {
    var aggregateQuery = Teacher.aggregate();
    
    Teacher.aggregatePaginate(aggregateQuery,
      {
        page: parseInt(req.query.page) || 1,
        limit: parseInt(req.query.limit) || 10,
      },
      (err, teachers) => {
        if (err) {
          res.send(err);
        }
        res.send(teachers);
      }
    );
   }

   function getTeacher(req, res){
    let teacherId = req.params.id;

    Teacher.findOne({id: teacherId}, (err, teacher) =>{
        if(err){res.send(err)}
        res.json(teacher);
    })
}

module.exports = { getTeachers, getTeacher };
