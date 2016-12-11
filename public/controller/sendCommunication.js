var app=angular.module("BlankApp");

app.controller("sendCommunication",function($scope){
  console.log("in sendCommunication");
  $scope.mailTo="";
  $scope.mailSubject="";
  $scope.mailBody="";
  $scope.sendMail=function () {
    console.log("in sendMail");
    window.open('mailto:'+$scope.mailTo+'?subject='+$scope.mailSubject+'&body='+$scope.mailBody);
    window.close();
  };
})
