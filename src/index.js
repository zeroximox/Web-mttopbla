const express = require('express');
const bodyParser = require('body-parser');
const solicitudRoutes = require('./routes/solicitudRoutes');
const app = express();

app.use(bodyParser.json());
app.use('/api/solicitudes', solicitudRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
