var app=angular.module("browsemall", ["ngMaterial","ui-router"]);
app.controller("myCtrl", function($scope) {
 console.log("myctrl");
   $scope.menu = [
     {
       "item":"Upload Products/Add Offers",
       "icon":"card_giftcard"

     },
     {
       "item":"Perday Revenue",
       "icon":"trending_up"
     },
     {
       "item":"Monthly Revenue",
       "icon":"description"
     },
     {
       "item":"Revenue Dashboard",
       "icon":"insert_chart"
     },
     {
       "item":"Send communication",
       "icon":"email"
     }

   ];
   $scope.selectcategory="false";

    $scope.selectcg()=function(){
      console.log("Select category");
      if($scope.selectcategory)
      {
          $scope.selectcategory="false";
      }
      else{
          $scope.selectcategory="true";
      }
    }
});
