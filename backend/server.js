import app from './src/app.js';
import config from './src/config/config.js';
import connectDB from './src/config/db.js';

// Connect the DB
connectDB()

// Port
const PORT = config.PORT || 4000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));