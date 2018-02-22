import core from '../core';
import CommonRoutes from './common.routes';
import CommonCtrl from './common.controller';

export default angular.module('firstNear.common', [core])
  .config(CommonRoutes)
  .controller('CommonCtrl', CommonCtrl)
  .name;
