(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService'];
function SignupController(MenuService) {
  var signCtrl = this;
    signCtrl.user =
    {
      menuitem : "",
      firstname : "",
      lastname : "",
      email : "",
      phone : ""

    };
    signCtrl.submit = function () {
      signCtrl.completed = true ;
      MenuService.setData(signCtrl.user);

    };
  }



})();
