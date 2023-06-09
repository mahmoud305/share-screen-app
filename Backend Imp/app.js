const express = require('express');
const cors = require('cors');
const employeeRouter = require('./src/Employees/Employee.Router');
const visitorsRouter = require('./src/Visitors/visitors.router');
const colorRouter = require('./src/Colors/colors.Router');
const app = express();
const port = process.env.PORT || 5000 || 3302 || 5000 || 5003;
app.use( cors() );
app.use(express.json());
app.use(employeeRouter);
app.use(visitorsRouter);
app.use(colorRouter);
app.listen(port, () => console.log(`listening on http://localhost:${port}`));
