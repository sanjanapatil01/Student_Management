const db = require('../config/db')

const addSchool = async (data) => {
  const { name, address, latitude, longitude } = data
  const query = `
    INSERT INTO schools (name, address, latitude, longitude)
    VALUES (?, ?, ?, ?)
  `
  const [result] = await db.execute(query, [name, address, latitude, longitude])
  return result
}

const getAllSchools = async () => {
  const [rows] = await db.execute('SELECT * FROM schools')
  return rows
}
const createTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS schools (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255),
      address VARCHAR(255),
      latitude FLOAT,
      longitude FLOAT
    )
  `
  await db.execute(query)
}

module.exports = { addSchool, getAllSchools, createTable }