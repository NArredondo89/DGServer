const create = (req,res) => {
  res.send("This is my create comments route")
}


const destroy = (req,res) => {
  res.send("This is my destoy comments route")
}


module.exports = {
  create,
  destroy,
}