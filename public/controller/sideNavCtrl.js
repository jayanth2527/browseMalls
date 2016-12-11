angular.module('BlankApp')
.controller('sideNavCtrl',function ($scope,$document) {
  var booleanValue=true;
  $scope.sidenavBar=function(){
    if(booleanValue==true){
      openNav();
      booleanValue=false;
    }else{
      closeNav();
      booleanValue=true;
    }
    function openNav() {
      $document[0].getElementById('mySidenav').style.width="300px";
      $document[0].getElementById('uploadEvent').style.marginLeft="300px";
    }
    function closeNav() {
      $document[0].getElementById('mySidenav').style.width="0px";
      $document[0].getElementById('uploadEvent').style.marginLeft="4.5%";
    }
  }
});
