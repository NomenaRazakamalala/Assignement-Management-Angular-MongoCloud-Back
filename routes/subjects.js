let Subject = require('../model/subject');

// Récupérer tous les subject (GET)
function getSubjectSansPagination(req, res){
    Subject.find((err, subjects) => {
        if(err){
            res.send(err)
        }

        res.send(subjects);
    });
}

function getSubjects(req, res) {
    var aggregateQuery = Subject.aggregate();
    
    Subject.aggregatePaginate(aggregateQuery,
      {
        page: parseInt(req.query.page) || 1,
        limit: parseInt(req.query.limit) || 10,
      },
      (err, subjects) => {
        if (err) {
          res.send(err);
        }
        res.send(subjects);
      }
    );
   }

module.exports = { getSubjects };
