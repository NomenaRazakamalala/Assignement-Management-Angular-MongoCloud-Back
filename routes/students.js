let Student = require('../model/student');

// Récupérer tous les assignments (GET)
function getStudentsSansPagination(req, res){
    Student.find((err, students) => {
        if(err){
            res.send(err)
        }

        res.send(students);
    });
}

function getStudents(req, res) {
    var aggregateQuery = Student.aggregate();
    
    Student.aggregatePaginate(aggregateQuery,
      {
        page: parseInt(req.query.page) || 1,
        limit: parseInt(req.query.limit) || 10,
      },
      (err, students) => {
        if (err) {
          res.send(err);
        }
        res.send(students);
      }
    );
   }

module.exports = { getStudents };
