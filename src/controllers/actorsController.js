const db = require("../database/models")
const {Op} = db.Sequelize
module.exports = {
  list:(req,res) => {
    
    db.Actor.findAll()
    .then((actors) => {

      res.render("actorList",{
        actors
      })

    })

  .catch((err) => {
    res.send(err.message)
  }) 
  
},
 detail: (req,res) => {
  const{id} = req.params
  db.Actor.findByPk(id)
  .then((actor) => { res.render("actorsDetail",{
    actor
  })
})
  .catch((err) => {
    res.send(err.message)
  }) 
},
}
