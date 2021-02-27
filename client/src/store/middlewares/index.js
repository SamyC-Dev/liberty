import { applyMiddleware } from 'redux';

import loggerMW from './logger';
// import authMW from './auth';

export default applyMiddleware(
    loggerMW,
);