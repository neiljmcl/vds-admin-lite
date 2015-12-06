'use strict';

describe('myApp.vegetables module', function() {

  beforeEach(module('myApp.vegetables'));

  describe('This directive should ... ', function(){

    xit('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('View1Ctrl');
      expect(view1Ctrl).toBeDefined();
    }));

    it('print a title', function() {
      module(function($provide) {
        $provide.value('title', 'Eeeee-oh rocks!');
      });
      inject(function($compile, $rootScope) {
        var element = $compile('<demo-title></demo-title>')($rootScope);
        expect(element.text()).toEqual('feck');
      });
    })


  });
});