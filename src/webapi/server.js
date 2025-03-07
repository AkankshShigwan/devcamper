import path from 'path';
import express from 'express';
import morgan from 'morgan';
import colors from 'colors';
import fileUpload from 'express-fileupload';
import cookieParser from 'cookie-parser';
import mongoSanitize from 'express-mongo-sanitize';
import helmet from 'helmet';
import xss from 'xss-clean';
import rateLimit from 'express-rate-limit';
import hpp from 'hpp';
import cors from 'cors';
import bootcamps from './routes/bootcamps.js';
import courses from './routes/courses.js';
import user from './routes/user.js';
import admin from './routes/admin.js';
import reviews from './routes/reviews.js';
import home from './routes/home.js';
import connectDB from './config/db.js';
import errorHandler from './middleware/errorHandler.js';
import loadEnvironmentConfig from './config/env.js';

// Load environment variables
loadEnvironmentConfig();
const PORT = process.env.PORT || 5000;

const app = express();

// Connect to MongoDB
connectDB();

// Middleware registration
app.use(express.json()); // Body parser
app.use(cookieParser()); // Cookie parser
app.use(mongoSanitize()); // Sanitize data
app.use(helmet()); // Set security headers
app.use(xss()); // Prevent cross site scripting attacks

// Trust the proxies
app.set('trust proxy', 1);

const rateLimitMax = process.env.rate_limit_max || 100;
const rateLimitWindowMs = process.env.rate_limit_window || 15 * 60 * 1000; // Default to 15 minutes

const limiter = rateLimit({
  windowMs: rateLimitWindowMs, // Use environment variable or default to 15 minutes
  max: rateLimitMax, // Use environment variable or default to 1
});

app.use(limiter); // Rate limiting
app.use(hpp()); // Prevent http param pollution
app.use(fileUpload()); // File upload
app.use(cors()); // Enable CORS
app.use(express.static(path.join(path.resolve(), 'public'))); // Set static folder
app.use('/api/v1', home);
app.use('/api/v1/bootcamps', bootcamps);
app.use('/api/v1/courses', courses);
app.use('/api/v1/reviews', reviews);
app.use('/api/v1/user', user);
app.use('/api/v1/admin', admin);
app.use(errorHandler);

if (process.env.NODE_ENV === 'development' ? app.use(morgan('dev')) : null); // Logging

const server = app.listen(PORT, () => {
  console.log(`API server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (error) => {
  console.error(`Error: ${error.message}`.red);
  server.close(() => process.exit(1));
});
