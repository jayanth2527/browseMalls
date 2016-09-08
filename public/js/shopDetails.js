var app=angular.module("app",["ngMaterial"]);
app.controller("shop",function($scope) {
  $scope.fname="hwlllo";
  $scope.image="gucci.jpg";
  $scope.list=[
    {
      "name":"Jeans",
      "offer":"40% cashback offer"
    },
    {
      "name":"Shirts",
      "offer":"Flat 40% off"
    },
    {
      "name":"Watches",
      "offer":"40% cashback offer"
    },
    {
      "name":"Goggles",
      "offer":"Flat 40% off"
    },
    {
      "name":"Bags",
      "offer":"Flat 40% off"
    },
    {
      "name":"Belts",
      "offer":"Flat 40% off"
    },
    {
      "name":"Apparels",
      "offer":"Flat 40% off"
    },
    {
      "name":"Apparels",
      "offer":"40% cashoffer"
    }
  ];
  $scope.images=[
    {
      "url":"../../public/assets/lifestyle.jpg"
    },
    {
      "url":"../../public/assets/lifestyle2.jpg"
    },
    {
      "url":"../../public/assets/lifestyle3.jpg"
    }
  ];

  $scope.list2=[
    {
      "brandName":"Gucci",
      "categories":[
        {
          "name":"Jeans",
          "offer":"40% cashback offer"
        },
        {
          "name":"Shirts",
          "offer":"Flat 40% off"
        },
        {
          "name":"Watches",
          "offer":"40% cashback offer"
        },
        {
          "name":"Goggles",
          "offer":"Flat 40% off"
        },
        {
          "name":"Bags",
          "offer":"Flat 40% off"
        },
        {
          "name":"Belts",
          "offer":"Flat 40% off"
        },
        {
          "name":"Apparels",
          "offer":"Flat 40% off"
        },
        {
          "name":"Apparels",
          "offer":"40% cashoffer"
        }
      ]
    },
    {
      "brandName":"Nike",
      "categories":[
        {
          "name":"Jeans",
          "offer":"40% cashback offer"
        },
        {
          "name":"Shirts",
          "offer":"Flat 40% off"
        },
        {
          "name":"Watches",
          "offer":"40% cashback offer"
        },
        {
          "name":"Goggles",
          "offer":"Flat 40% off"
        },
        {
          "name":"Bags",
          "offer":"Flat 40% off"
        },
        {
          "name":"Belts",
          "offer":"Flat 40% off"
        },
        {
          "name":"Apparels",
          "offer":"Flat 40% off"
        },
        {
          "name":"Apparels",
          "offer":"40% cashoffer"
        }
      ]
    }
  ];


  $scope.showImg=function(src){
    console.log("hello...................");
    console.log(src);
    $scope.image=src;
  };

  $scope.explore=false;
  $scope.openExploreFunction=function () {
    $scope.explore=true;
  };
  $scope.closeExploreFunction=function () {
    $scope.explore=false;
  };
});
