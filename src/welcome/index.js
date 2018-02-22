import core from '../core';
import WelcomeRoutes from './welcome.routes';
import WelcomeCtrl from './welcome.controller';

export default angular.module('firstNear.welcome', [core])
  .config(WelcomeRoutes)
  .controller('WelcomeCtrl', WelcomeCtrl)
  .name;
