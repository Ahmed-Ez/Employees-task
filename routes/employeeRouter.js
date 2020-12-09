const router = require('express').Router();
const Employee = require('../models/Employee');

router.get('/', async (req, res) => {
  try {
    let employees = await Employee.find({});
    res.status(200).json(employees);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    console.log(employee);
    res.status(201).json(employee);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { attendanceTime, leaveTime } = req.body;
    let netAvailable = leaveTime - attendanceTime - 1;
    let efficiecy = (5 / netAvailable) * 100;
    let employee = await Employee.findOneAndUpdate(
      { _id: req.params.id },
      {
        attendanceTime,
        leaveTime,
        netAvailable,
        efficiecy,
      },
      { new: true }
    );
    console.log(employee);
    if (!employee) return res.status(400).json({ error: 'employee not found' });
    return res.status(200).json({ employee });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});
module.exports = router;
