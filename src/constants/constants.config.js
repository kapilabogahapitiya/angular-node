/**
 * App constants are for anything that is fixed across environments - put those in app-constants.json.
 * If something is different across environments then it should go in the appropriate json (prod, dev, etc.)
 */
import appConstants from './app-constants.json';
import prodConstants from './prod-constants.json';
import devConstants from './dev-constants.json';
import localConstants from './local-constants.json';

// Default config is dev
var envConstants = devConstants;

// Override this config if we are running in prod
if (window.location.hostname === 'firstnear.com') {
  envConstants = prodConstants;
}
else if (window.location.hostname === 'dev.firstnear.com') {
  envConstants = devConstants;
}
else if (window.location.port === '9001') {
  envConstants = localConstants;
}

// Combine app constants with env constants
export default _.assign(appConstants, envConstants);