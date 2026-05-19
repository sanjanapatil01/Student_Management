const schoolModel = require('../models/schoolModel')

const toRadians = (deg) => deg * (Math.PI / 180)

const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371
  const dLat = toRadians(lat2 - lat1)
  const dLon = toRadians(lon2 - lon1)

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

const addSchool = async (req, res) => {
  try {
    const { name, address, latitude, longitude } = req.body

    if (!name || !address || latitude == null || longitude == null) {
      return res.status(400).json({ message: 'All fields are required' })
    }

    if (isNaN(latitude) || isNaN(longitude)) {
      return res.status(400).json({ message: 'Invalid coordinates' })
    }

    await schoolModel.addSchool({ name, address, latitude, longitude })

    res.status(201).json({ message: 'School added successfully' })
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
}

const listSchools = async (req, res) => {
  try {
    const { latitude, longitude } = req.query

    if (!latitude || !longitude) {
      return res.status(400).json({ message: 'Latitude and longitude required' })
    }

    const userLat = parseFloat(latitude)
    const userLon = parseFloat(longitude)

    const schools = await schoolModel.getAllSchools()

    const sorted = schools
      .map((school) => {
        const distance = calculateDistance(
          userLat,
          userLon,
          school.latitude,
          school.longitude
        )
        return { ...school, distance }
      })
      .sort((a, b) => a.distance - b.distance)

    res.json(sorted)
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
}

module.exports = { addSchool, listSchools }