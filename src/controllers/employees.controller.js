import {pool} from '../db.js'

export const getEmployees = async (req, res)=>{
 try{
  const [rows] =  await pool.query('SELECT * FROM employee')
  res.json(rows)
 }
 catch(error){
  return res.status(500).json({
    message:'algo salio mal'
  })
 }

}

export const getEmployee = async (req, res)=>{
try{
  const [rows] = await pool.query('SELECT * FROM employee WHERE id= ?', [req.params.id])
  console.log(rows [0])
  if (rows.length <=0) return res.status(404).json({
   message: 'employee not found'
  })
   res.json(rows[0])
}catch(error){
  return res.status(500).json({
    message:'algo salio mal'
  })
}
 }

export const postEmployee =async (req, res)=>{
try{
  const {name, salary}= req.body
const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?,?)', [name, salary])
res.send({
  id:rows.insertId,
  name,
  salary,
  })
}catch(error){
  return res.status(500).json({
    message:'algo salio mal'
  })
}
}


export const deleteEmployee = async (req, res)=>{
try{
  const [result] =  await pool.query('DELETE FROM employee WHERE id=?', [req.params.id])
  if(result.affectedRows <= 0 ){ return res.status(400).json({
    message: 'employee not found'
  })

  }
  res.sendStatus(204)
}catch(error){
  return res.status(500).json({
    message:'algo salio mal'
  })
}
}

export const putEmployee =  async (req,res)=>{
  const {id}= req.params
  const {name, salary} = req.body
try{
  const [result] =  await pool.query('UPDATE employee SET name = IFNULL(?, name), salary= IFNULL(?, salary)   WHERE id=?', [name,salary,id])
  if(result.affectedRows === 0 ) return res.status(404).json({
    message:'Employee not found'
  })

  const [rows]= await pool.query('SELECT * FROM employee WHERE id = ?', [id])
  res.json(rows[0])
}catch(error){
  return res.status(500).json({
    message:'algo salio mal'
  })
}
}