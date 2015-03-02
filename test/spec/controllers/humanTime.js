'use strict';

describe('Controller: Human Time', function () {

  // load the controller's module
  beforeEach(module('yeomanAngularTestApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('HumanTimeController', {
      $scope: scope
    });
  }));

  it('should attach a list of time stamps to the scope', function () {
    expect(scope.timeStamp.length).toBe(24);
  });
});
