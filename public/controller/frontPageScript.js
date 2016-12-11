var app=angular.module("BlankApp",["ngMaterial",'ui.router']);


app.controller("cntr",function($http, $state,$mdToast,$scope,$mdDialog){
  console.log("im in front page ctrl");

  var last = {
      bottom: false,
      top: true,
      left: false,
      right: true
    };

  $scope.toastPosition = angular.extend({},last);

  $scope.getToastPosition = function() {
    sanitizePosition();

    return Object.keys($scope.toastPosition)
      .filter(function(pos) { return $scope.toastPosition[pos]; })
      .join(' ');
  };

  function sanitizePosition() {
    var current = $scope.toastPosition;

    if ( current.bottom && last.top ) current.top = false;
    if ( current.top && last.bottom ) current.bottom = false;
    if ( current.right && last.left ) current.left = false;
    if ( current.left && last.right ) current.right = false;

    last = angular.extend({},current);
  }

  $scope.showSimpleToast = function() {
    var pinTo = $scope.getToastPosition();

    $mdToast.show(
      $mdToast.simple()
        .textContent('Simple Toast!')
        .position(pinTo )
        .hideDelay(3000)
    );
  };

  $scope.submitDialog=function (location) {
    $mdDialog.hide(location);

  };

  $scope.OnLoadFunction = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: '/templates/dialog1.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:false,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
    .then(function(answer) {
      console.log("location selected",answer);
      $scope.locationFunction(answer);
    }, function() {
      // $scope.status = 'You cancelled the dialog.';
    });
  };

  $scope.username='';
  $scope.pwd='';
  $scope.signIn=function (ev) {
    $mdDialog.show({
      templateUrl: '/templates/login.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:false,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
    .then(function(login) {
      $scope.authentication(login);
    }, function() {
      // $scope.status = 'You cancelled the dialog.';
    });
  }
  $scope.submitSignIn=function (login) {
    $mdDialog.hide(login);
  };
  $scope.authentication=function (login) {
    console.log(login);
    $scope.pwd=login.pwd;
    $scope.username=login.username;

    if($scope.username=="shopManager" && $scope.pwd=="shopManager"){
      $state.go("shopManager");
    }
    else if($scope.username=="mallManager" && $scope.pwd=="mallManager"){
      $state.go("mallManager");
    }
    else if ($scope.username=="admin" && $scope.pwd=="admin") {
      $state.go("admin");
    }
  }


  function DialogController($scope, $mdDialog) {

    $scope.hide = function() {
      $mdDialog.hide();
    };
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  }
  var selectedFilters={};
  $scope.creatArray=function (key,value) {
    selectedFilters[key]=value;
    console.log(selectedFilters);
  };



  var locationData=[
    {
      "location_name":"Bangalore",
      "mall_id":["blr-for-kor","blr-for-whi","blr-sho-kor","blr-gop-krp","blr-gop-jpn","blr-cen-bel","blr-oas-kor","blr-pho-mah"]
    },
    {
      "location_name":"Hyderabad",
      "mall_id":["hyd-ino-ban","hyd-gvk-jub"]
    },
    {
      "location_name":"Chennai",
      "mall_id":["che-for-kor","che-phe-vel"]
    }

  ];

  // malls names
  var mall_details=[
    {
      "id":"blr-for-kor",
      "name":"Forum Mall-Koramangala",
      "Location":"Bangalore",
      "address":"Forum Mall,Hosur Road, Koramangala, Bangalore, Pin-560029",
      "contact":"080-8080808, 9083190312"
    },
    {
      "id":"blr-for-whi",
      "name":"Forum Mall-WhiteField",
      "Location":"Bangalore",
      "address":"Forum Mall, WhiteField, Bangalore, Pin-560029",
      "contact":"080-8080808, 9083190312",
      "cbs":"offer_id"
    },
    {
      "id":"blr-tot-mad",
      "name":"Total Mall-Madivala",
      "Location":"Bangalore",
      "address":"Total Mall,Hosur Road, Madivala, Bangalore, Pin-560029",
      "contact":"080-8080808, 9083190312"
    },
    {
      "id":"blr-sho-kor",
      "name":"ShopperStop-Koramangala",
      "Location":"Bangalore",
      "address":"Beside Forum Mall,Hosur Road, Koramangala, Bangalore, Pin-560029",
      "contact":"080-8080808, 9083190312"
    },
    {
      "id":"blr-pho-mah",
      "name":"Phoenix-Mahadevapura",
      "Location":"Bangalore",
      "address":"Phoenix Mall, Mahadevapura, Bangalore, Pin-560029",
      "contact":"080-8080808, 9083190312"
    },
    {
      "id":"blr-oas-kor",
      "name":"Oasis Mall-Koramangala",
      "Location":"Bangalore",
      "address":"Oasis Mall, Sony Signal, Koramangala, Bangalore, Pin-560029",
      "contact":"080-8080808, 9083190312"
    },
    {
      "id":"blr-cen-bel",
      "name":"Central Mall-Bellandur",
      "Location":"Bangalore",
      "address":"Central Mall, Bellandur, Bangalore, Pin-560029",
      "contact":"080-8080808, 9083190312"
    },
    {
      "id":"blr-gop-jpn",
      "name":"Gopalan Mall-J.P.Nagar",
      "Location":"Bangalore",
      "address":"Gopalan Mall, J.P.Nagar, Bangalore, Pin-560029",
      "contact":"080-8080808, 9083190312"
    },
    {
      "id":"blr-gop-krp",
      "name":"Gopalan Mall-K.R.Puram",
      "Location":"Bangalore",
      "address":"Gopalan Mall, K.R.Puram, Bangalore, Pin-560029",
      "contact":"080-8080808, 9083190312"
    },
    {
      "id":"che-for-kor",
      "name":"White Forum Mall-Vadapalani",
      "Location":"Chennai",
      "address":"Gopalan Mall, Vadapalani, Chennai ,pin-600001",
      "contact":"044-8080808, 9083190312"
    },
    {
      "id":"che-phe-vel",
      "name":"Phoenix Mall-Velachery",
      "Location":"Chennai",
      "address":"Phoenix Mall, Velachery, Chennai ,pin-600001",
      "contact":"044-8080808, 9083190312"
    },
    {
      "id":"hyd-gvk-jub",
      "name":"GVK Mall-Jubli Hills",
      "Location":"Hyderabad",
      "address":"GVK Mall, Jubli Hills, Hyderabad ,pin-500082",
      "contact":"040-8080808, 9083190312"
    },
    {
      "id":"hyd-ino-ban",
      "name":"Inorbit Mall-Banjara Hills",
      "Location":"Hyderabad",
      "address":"Inorbit Mall, Banjara Hills, Hyderabad ,pin-500082",
      "contact":"040-8080808, 9083190312"
    }
  ];


  var malls_id_array=[];
  var location_array=[];
  var selected_location;

  // location array
  if(locationData.length!=0){
    for(var i=0;i<locationData.length;i++){
      var location_name=locationData[i].location_name;
      location_array.push(location_name);
    }
  }

  $scope.locations=location_array;
  console.log("location array aayega");
  console.log(location_array);
  $scope.location="";

  //************************************** location onclick function**********************************
  $scope.locationFunction=function(location){
    console.log("in locationFunction"+location);
    $scope.locations=location_array;
    $scope.selected_location=location;
    $scope.location=location;
    // malls list according the selected location
    if($scope.selected_location!=null){
      for(var i=0;i<locationData.length;i++){
        if($scope.selected_location==locationData[i].location_name){
          malls_id_array=locationData[i].mall_id;                   //storing comoplete mall is array into malls_id_array
        }
      }
    }
    var mall_names_array=[];
    if(malls_id_array.length!=0){
      for(var i=0;i<malls_id_array.length;i++){
        for(var j=0;j<mall_details.length;j++){
          if(malls_id_array[i]==mall_details[j].id){
            mall_names_array.push(mall_details[j].name);
          }
        }
      }
    }
    $scope.filter_malls=mall_names_array;
    // console.log("Malls names.............");
    // console.log($scope.filter_malls);
  }



  // filter brands
  var brands_details=[
    {
      "id":"levis",
      "name":"Levis",
      "mall_id":["blr-for-kor","blr-for-whi","blr-sho-kor","che-phe-vel"],
      "floor":["Shop No:32,Ground floor","Shop No:32,Ground floor","Shop No:32,Ground floor","Shop No:32,Ground floor"],
      "gender":["men","women"],
      "category":["Shirts","Jeans","Trousers","Briefs","Trunks","Belts","Wallets","Jackets","T-Shirts","Footwear"],

    },
    {
      "id":"puma",
      "name":"Puma",
      "mall_id":["blr-for-kor","blr-tot-mad","blr-sho-kor","che-phe-vel"],
      "floor":["Shop No:32,Ground floor","Shop No:32,Ground floor","Shop No:32,Ground floor","Shop No:32,Ground floor"],
      "gender":["men","women"],
      "category":["Shirts","Jeans","Trousers","Briefs","Trunks","Belts","Wallets","Jackets","T-Shirts","Footwear"],

    },
    {
      "id":"nike",
      "name":"Nike",
      "mall_id":["blr-for-kor","blr-sho-kor","che-phe-vel"],
      "floor":["Shop No:32,Ground floor","Shop No:32,Ground floor","Shop No:32,Ground floor","Shop No:32,Ground floor"],
      "gender":["men","women"],
      "category":["Shirts","Jeans","Trousers","Briefs","Trunks","Belts","Wallets","Jackets","T-Shirts","Footwear"],

    },
    {
      "id":"and",
      "name":"AND",
      "mall_id":["blr-for-kor","blr-for-whi","blr-sho-kor","hyd-gvk-jub"],
      "floor":["Shop No:32,Ground floor","Shop No:32,Ground floor","Shop No:32,Ground floor","Shop No:32,Ground floor"],
      "gender":["women"],
      "category":["Shirts","Jeans","Trousers","Briefs","Trunks","Belts","Wallets","Jackets","T-Shirts","Footwear"],

    },
    {
      "id":"pepe_jeans",
      "name":"PePe Jeans",
      "mall_id":["blr-for-kor","blr-pho-mah","blr-sho-kor","hyd-ino-ban"],
      "floor":["Shop No:32,Ground floor","Shop No:32,Ground floor","Shop No:32,Ground floor","Shop No:32,Ground floor"],
      "gender":["men","women","kids"],
      "category":["Shirts","Jeans","Trousers","Briefs","Trunks","Belts","Wallets","Jackets","T-Shirts","Footwear"],

    },
    {
      "id":"adidas",
      "name":"Adidas",
      "mall_id":["blr-for-kor","blr-for-whi","blr-sho-kor","che-phe-vel"],
      "floor":["Shop No:32,Ground floor","Shop No:32,Ground floor","Shop No:32,Ground floor","Shop No:32,Ground floor"],
      "gender":["men","women","kids"],
      "category":["Shirts","Jeans","Trousers","Briefs","Trunks","Belts","Wallets","Jackets","T-Shirts","Footwear"],

    },
    {
      "id":"elle",
      "name":"Elle",
      "mall_id":["blr-for-kor","blr-sho-kor","che-phe-vel"],
      "floor":["Shop No:32,Ground floor","Shop No:32,Ground floor","Shop No:32,Ground floor","Shop No:32,Ground floor"],
      "gender":["women"],
      "category":["Shirts","Jeans","Trousers","Briefs","Trunks","Belts","Wallets","Jackets","T-Shirts","Footwear"],

    },
    {
      "id":"mustard",
      "name":"Mustard",
      "mall_id":["blr-for-kor","che-for-kor","hyd-ino-ban","che-phe-vel"],
      "floor":["Shop No:32,Ground floor","Shop No:32,Ground floor","Shop No:32,Ground floor","Shop No:32,Ground floor"],
      "gender":["women"],
      "category":["Shirts","Jeans","Trousers","Briefs","Trunks","Belts","Wallets","Jackets","T-Shirts","Footwear"],

    },
    {
      "id":"raymonds",
      "name":"Reymonds",
      "mall_id":["blr-for-kor","hyd-ino-ban","che-phe-vel"],
      "floor":["Shop No:32,Ground floor","Shop No:32,Ground floor","Shop No:32,Ground floor","Shop No:32,Ground floor"],
      "gender":["men"],
      "category":["Shirts","Jeans","Trousers","Briefs","Trunks","Belts","Wallets","Jackets","T-Shirts","Footwear"],

    },
    {
      "id":"peter_england",
      "name":"Peter England",
      "mall_id":["blr-for-kor","che-for-kor","hyd-ino-ban","che-phe-vel"],
      "floor":["Shop No:32,Ground floor","Shop No:32,Ground floor","Shop No:32,Ground floor","Shop No:32,Ground floor"],
      "gender":["men"],
      "category":["Shirts","Jeans","Trousers","Briefs","Trunks","Belts","Wallets","Jackets","T-Shirts","Footwear"],

    }
  ];
  var selected_mall;
  var selected_mall_id;
  var brand_array=[];


// -----------------------------------------------------------------------------------------
  var mall_array=[];
  var brand_name;
  for(var j=0;j<brands_details.length;j++){

    mall_array=brands_details[j].mall_id;
    for(var k=0;k<mall_array.length;k++){

      brand_name=brands_details[j].name;
      if(brand_array.indexOf(brand_name)==-1){
        brand_array.push(brand_name);
      }
    }
  }
  $scope.brands=brand_array;
  var mall_names_array=[];
  for(var j=0;j<mall_details.length;j++){
    if(mall_names_array.indexOf(mall_details[j].name)==-1){
      mall_names_array.push(mall_details[j].name);
    }
  }
  $scope.filter_malls=mall_names_array;
  // ----------------------------------------------------------------------------------------


  //**********************display brands according to selected mall**************************
  $scope.brandFunction=function(mall){
    selected_mall=mall;
    if(selected_mall!=null){
      for(var i=0;i<mall_details.length;i++){
        if(selected_mall==mall_details[i].name){
          selected_mall_id=mall_details[i].id;
          console.log(selected_mall_id);
        }
      }

      for (var i = 0; i < offer_details.length; i++) {
        for (var j = 0; j < offer_details[i].offer_objects.length; j++) {

          if(offer_details[i].offer_objects[j].mall_id!=selected_mall_id){
            //  display_selected_malls.push(offer_details[i].offer_objects[j]);
            offer_details[i].offer_objects[j]={};
          }
        }

      }

      var mall_array=[];
      var brand_name;
      for(var j=0;j<brands_details.length;j++){
        mall_array=brands_details[j].mall_id;
        for(var k=0;k<mall_array.length;k++){
          if(selected_mall_id==mall_array[k]){
            brand_name=brands_details[j].name;
            brand_array.push(brand_name);
          }
        }
      }
      //end of for second loop
    }
    console.log(brand_array);
    $scope.brands=brand_array;
  };




  //filter offers
  $scope.offer_details=[
    {
      "offer_name":"Cashback",
      "offer_objects":[
        {
          "brand_id":"puma",
          "mall_id":"blr-for-kor",
          "image_url":"/assets/brand.jpg",
          "offer":"10% cashback on shoes"
        },
        {
          "brand_id":"puma",
          "mall_id":"blr-for-whi",
          "image_url":"/assets/brand1.jpg",
          "offer":"5% cashback on shoes"
        },
        {
          "brand_id":"nike",
          "mall_id":"blr-for-whi",
          "image_url":"/assets/brand2.jpg",
          "offer":"10% cashback on tracks"
        }
      ]
    },
    {
      "offer_name":"Discount",
      "offer_objects":[
        {
          "brand_id":"levis",
          "mall_id":"blr-for-kor",
          "image_url":"/assets/brand.jpg",
          "offer":"10% discount on shoes"
        },
        {
          "brand_id":"pepe_jeans",
          "mall_id":"blr-for-whi",
          "image_url":"/assets/brand1.jpg",
          "offer":"35% discount on shirts"
        },
        {
          "brand_id":"pepe_jeans",
          "mall_id":"blr-for-whi",
          "image_url":"/assets/brand2.jpg",
          "offer":"35% discount on shirts"
        }
      ]
    },
    {
      "offer_name":"Wallet",
      "offer_objects":[
        {
          "brand_id":"and",
          "mall_id":"hyd-ino-ban",
          "image_url":"/assets/brand1.jpg",
          "offer":"10% discount on using Mobikwik"
        },
        {
          "brand_id":"puma",
          "mall_id":"che-phe-vel",
          "image_url":"/assets/brand1.jpg",
          "offer":"5% discount on paytm"
        },
        {
          "brand_id":"puma",
          "mall_id":"che-phe-vel",
          "image_url":"/assets/brand1.jpg",
          "offer":"5% discount on paytm"
        }
      ]
    },
    {
      "offer_name":"Bank",
      "offer_objects":[
        {
          "brand_id":"puma",
          "mall_id":"blr-for-kor",
          "image_url":"/assets/brand1.jpg",
          "offer":"10% discount on 4999"
        },
        {
          "brand_id":"levis",
          "mall_id":"che-phe-vel",
          "image_url":"/assets/brand1.jpg",
          "offer":"5% discount on 5000"
        },
        {
          "brand_id":"levis",
          "mall_id":"che-phe-vel",
          "image_url":"/assets/brand1.jpg",
          "offer":"5% discount on 5000"
        }
      ]
    },
    {
      "offer_name":"First Time User",
      "offer_objects":[
        {
          "brand_id":"elle",
          "mall_id":"blr-for-kor",
          "image_url":"/assets/brand1.jpg",
          "offer":"500 discount on Apparels"
        },
        {
          "brand_id":"raymonds",
          "mall_id":"blr-for-whi",
          "image_url":"/assets/brand1.jpg",
          "offer":"250 discount on Apparels"
        },
        {
          "brand_id":"raymonds",
          "mall_id":"blr-for-whi",
          "image_url":"/assets/brand1.jpg",
          "offer":"250 discount on Apparels"
        }
      ]
    },
    {
      "offer_name":"Buy X get X",
      "offer_objects":[
        {
          "brand_id":"peter_england",
          "mall_id":"blr-for-kor",
          "image_url":"/assets/brand1.jpg",
          "offer":"Buy 2 get 2"
        },
        {
          "brand_id":"peter_england",
          "mall_id":"blr-for-whi",
          "image_url":"/assets/brand1.jpg",
          "offer":"Buy 3 get 4"
        },
        {
          "brand_id":"peter_england",
          "mall_id":"blr-for-whi",
          "image_url":"/assets/brand1.jpg",
          "offer":"Buy 3 get 4"
        }
      ]
    },
    {
      "offer_name":"EMI",
      "offer_objects":[
        {
          "brand_id":"mustard",
          "mall_id":"blr-for-kor",
          "image_url":"/assets/brand1.jpg",
          "offer":"12% Interest for 12 months"
        },
        {
          "brand_id":"adidas",
          "mall_id":"blr-for-whi",
          "image_url":"/assets/brand1.jpg",
          "offer":"0 % Interest for 12 months"
        },
        {
          "brand_id":"adidas",
          "mall_id":"blr-for-whi",
          "image_url":"/assets/brand1.jpg",
          "offer":"0 % Interest for 12 months"
        }
      ]
    },
    {
      "offer_name":"Flash Offers",
      "offer_objects":[
        {
          "brand_id":"nike",
          "mall_id":"blr-for-kor",
          "image_url":"/assets/brand1.jpg",
          "offer":"2x points on 2pm-4pm sale"
        },
        {
          "brand_id":"nike",
          "mall_id":"blr-for-whi",
          "image_url":"/assets/brand1.jpg",
          "offer":"2x points on 6pm-8pm sale"
        },
        {
          "brand_id":"nike",
          "mall_id":"blr-for-whi",
          "image_url":"/assets/brand2.jpg",
          "offer":"2x points on 6pm-8pm sale"
        }
      ]
    },
    {
      "offer_name":"On x purchase free gift",
      "offer_objects":[

      ]
    }
  ];
  var offer_details=$scope.offer_details;
  var selected_brand_name;
  var selected_brand_name_id;

  $scope.offerFunction=function(brandName){
    selected_brand_name=brandName;
  }
  if(selected_brand_name!=null){
    for(var i=0;i<brands_details.length;i++){
      if(selected_brand_name==brands_details[i].name){
        selected_brand_name_id=brands_details[i].id;
        console.log(selected_brand_name_id);
      }
    }
  }

  //cashback offers
  var cashback_offer_array=[];
  var discount_offer_array=[];
  var wallet_offer_array=[];
  var bank_offer_array=[];
  var first_time_user_offer_array=[];
  var buy_x_get_x_offer_array=[];
  var flash_offer_array=[];
  if(selected_brand_name_id!=null&&selected_mall_id!=null){
    for(key in offer_details){
      if(key=="cashback"){
        console.log("inside cashback")
        var cashback_array=offer_details[key];
        console.log(cashback_array);
        for(var i=0;i<cashback_array.length;i++){
          console.log(selected_brand_name_id);
          console.log(selected_mall_id);
          if(selected_brand_name_id==cashback_array[i].brand_id&&selected_mall_id==cashback_array[i].mall_id){
            cashback_offer_array.push(cashback_array[i].offerDetails);
          }
        }
      }
      if(key=="discount"){
        var discount_array=offer_details[key];
        console.log(discount_array);
        for(var i=0;i<discount_array.length;i++){
          console.log(selected_brand_name_id);
          console.log(selected_mall_id);
          if(selected_brand_name_id==discount_array[i].brand_id&&selected_mall_id==discount_array[i].mall_id){
            discount_offer_array.push(discount_array[i].offerDetails);
          }
        }
      }
      if(key=="wallet"){
        var wallet_array=offer_details[key];
        console.log(wallet_array);
        for(var i=0;i<wallet_array.length;i++){
          console.log(selected_brand_name_id);
          console.log(selected_mall_id);
          if(selected_brand_name_id==wallet_array[i].brand_id&&selected_mall_id==wallet_array[i].mall_id){
            wallet_offer_array.push(wallet_array[i].offerDetails);
          }
        }
      }
      if(key=="bank"){
        var bank_array=offer_details[key];
        console.log(bank_array);
        for(var i=0;i<bank_array.length;i++){
          console.log(selected_brand_name_id);
          console.log(selected_mall_id);
          if(selected_brand_name_id==bank_array[i].brand_id&&selected_mall_id==bank_array[i].mall_id){
            bank_offer_array.push(bank_array[i].offerDetails);
          }
        }
      }
      if(key=="first_time_user"){
        var first_time_user_array=offer_details[key];
        console.log(first_time_user_array);
        for(var i=0;i<first_time_user_array.length;i++){
          console.log(selected_brand_name_id);
          console.log(selected_mall_id);
          if(selected_brand_name_id==first_time_user_array[i].brand_id&&selected_mall_id==first_time_user_array[i].mall_id){
            first_time_user_offer_array.push(first_time_user_array[i].offerDetails);
          }
        }
      }
      if(key=="buy_x_get_x"){
        var buy_x_get_x_array=offer_details[key];
        console.log(buy_x_get_x_array);
        for(var i=0;i<buy_x_get_x_array.length;i++){
          console.log(selected_brand_name_id);
          console.log(selected_mall_id);
          if(selected_brand_name_id==buy_x_get_x_array[i].brand_id&&selected_mall_id==buy_x_get_x_array[i].mall_id){
            buy_x_get_x_offer_array.push(buy_x_get_x_array[i].offerDetails);
          }
        }
      }
      if(key=="emi"){
        var emi_array=offer_details[key];
        console.log(emi_array);
        for(var i=0;i<emi_array.length;i++){
          console.log(selected_brand_name_id);
          console.log(selected_mall_id);
          if(selected_brand_name_id==emi_array[i].brand_id&&selected_mall_id==emi_array[i].mall_id){
            emi_offer_array.push(emi_array[i].offerDetails);
          }
        }
      }
      if(key=="flash_offers"){
        var flash_array=offer_details[key];
        console.log(flash_array);
        for(var i=0;i<flash_array.length;i++){
          console.log(selected_brand_name_id);
          console.log(selected_mall_id);
          if(selected_brand_name_id==flash_array[i].brand_id&&selected_mall_id==flash_array[i].mall_id){
            flash_offer_array.push(flash_array[i].offerDetails);
          }
        }
      }
    }
    console.log("cashback offers will come");
    console.log(cashback_offer_array);
    console.log(discount_offer_array);
    console.log(bank_offer_array);
    console.log(first_time_user_offer_array);
    console.log(buy_x_get_x_offer_array);
    console.log(flash_offer_array);
  }

  var events_details=[
    {
      "name":"Car Expo 2016",
      "date":"12/9/2016",
      "mall_id":"blr-for-kor",
      "location_name":"Bangalore"
    }
    ,
    {
      "name":"Bike Expo 2016",
      "date":"11/9/2016",
      "mall_id":"blr-for-kor",
      "location_name":"Bangalore"
    }
    ,
    {
      "name":"Laptop Expo 2016",
      "date":"12/7/2016",
      "mall_id":"blr-for-kor",
      "location_name":"Bangalore"
    }
    ,
    {
      "name":"Brand Expo 2016",
      "date":"12/9/2016",
      "mall_id":"blr-for-kor",
      "location_name":"Bangalore"
    }
  ];
  var events_array=[];
  if(selected_location!=null){
    for (var i=0;i<events_details.length;i++){
      console.log("event part");
      console.log(events_details[i].location_name);
      if(selected_location==events_details[i].location_name){
        events_array.push(events_details[i]);
      }
    }
  }
  console.log(events_array);

  $scope.data=["Forum","Phoenix","Central","Star Bazar","DV Mall"];
  $scope.brandData=["Lifestyle","Pantaloons","BigBazar","Reliance Trends","Westside","MegaMart","ShoppersStop","Globus","Max","Plannet Fashion"];

  $scope.explore=false;
  $scope.openExploreFunction=function () {
    $scope.explore=true;
  };
  $scope.closeExploreFunction=function () {
    $scope.explore=false;
  };

});


app.controller('shopmanagerctrl',function($scope,$http,$mdDialog){
  // shopManager side menu

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
         "item":"Pay Bill",
         "icon":"insert_chart"
       },
       {
         "item":"Send communication",
         "icon":"email"
       }

     ];
     console.log($scope.menu[0]);
     $scope.categoryoptn=false;

     $scope.category=['men','women','kids'];
     $scope.selectcategory=[];
      $scope.selectcg = function(item){
        console.log("Select category", $scope.categoryoptn);
        if(!$scope.categoryoptn &&  item =='Upload Products/Add Offers')
        {
            $scope.categoryoptn=true;
        }
        else{
            $scope.categoryoptn=false;
        }
      }

      //category checkbox
      $scope.toggle = function (item, list) {
   var idx = list.indexOf(item);
   if (idx > -1) {
     list.splice(idx, 1);
   }
   else {
     list.push(item);
   }
 };

 $scope.exists = function (item, list) {
   return list.indexOf(item) > -1;
 };

 $scope.isIndeterminate = function() {
   return ($scope.selectcategory.length !== 0 &&
       $scope.selectcategory.length !== $scope.category.length);
 };

 $scope.isChecked = function() {
    console.log($scope.selectcategory);
   return $scope.selectcategory.length === $scope.category.length;
 };

 $scope.toggleAll = function() {
   console.log($scope.selectcategory);
   if ($scope.selectcategory.length === $scope.category.length) {
     $scope.selectcategory = [];
   } else if ($scope.selectcategory.length === 0 || $scope.selectcategory.length > 0) {
     $scope.selectcategory = $scope.category.slice(0);
   }
 };


 //upload/add offers
 //offers json
 $scope.offers=[
   {
     offer:"Buy two get one",
     offer_description:"Buy any two attires from store and get one absolutely free",
     category:"buy x get x"
   },
   {
     offer:"Get flat 50% off on winter clothings",
     offer_description:"Winter's offer Season. Get flat 50% off.",
     category:"discounts"

   },
   {
     offer:"Get 10% off on purchase using ICICI debit/credit cards",
     offer_description:"Minimum transaction: 5000",
     category:"bank"

   },
   {
     offer:"Get flat 5% off on purchase using freerecharge wallet ",
     offer_description:"5% or 500, whichever is minimum ",
     category:"wallet"
   },
   {
     offer:"Get Rs.2000 cashback on purchase using HDFC debit/credit card",
     offer_description:"minimum transaction 10000",
     category:"bank"
   },
   {
     offer:"40% off at 4-7pm sale..Hurry !!",
     offer_description:"No minimum transaction.",
     category:"flash"
   },
   {
     offer:"First Time Shop !!",
     offer_description:"On purchase Of RS 1500 get RS 500 Offer.",
     category:"First Time Registration"
   },
   {
     offer:"EMI Offers",
     offer_description:"On above RS 2000.",
     category:"EMI"
   }
 ];

//Offer's list
$scope.offerlist=[
{
  "type":"bank",
  "name":"Bank Offer",
  "icon":""
},
{
  "type":"discounts",
  "name":"Discounts",
  "icon":""
},
{
  "type":"wallet",
  "name":"Wallet",
  "icon":""
},
{
  "type":"buy_x_get_y",
  "name":"Buy x get y",
  "icon":""
},
{
  "type":"flash",
  "name":"Flash Offer",
  "icon":""
},
{
  "type":"other",
  "name":"Others",
  "icon":""
},

];


 //dialog for offer description
 $scope.navigateTo = function(to, event) {
   $mdDialog.show(
     $mdDialog.alert()
       .title('Offer Description')
       .textContent(to)
       .ariaLabel('Navigation demo')
       .ok('OK')
       .targetEvent(event)
   );
 };

 $scope.showform=false;
 $scope.showofferform=function()
 {
    console.log("showform");
   if($scope.showform)
   {
     $scope.showform=false;
   }
   else{
     $scope.showform=true;
   }
 }

//success dialog of apply offers
$scope.successapply = function(event) {
  $mdDialog.show(
    $mdDialog.alert()
      .title('Offers Applied Successfully')
      .ariaLabel('Navigation demo')
      .ok('OK')
      .targetEvent(event)
  );
};

//submit new added offers
$scope.newoffer={
  "offer":"",
  "offer_description":"",
  "category":""
};
$scope.offer="";
$scope.offer_description="";
$scope.offer_category="";
$scope.offersubmit=function(offer,offer_description,category)
{
  // $scope.newoffer=;
  console.log("new offer -- "+offer+" -- "+offer_description+"--"+category);
  $scope.offers.push($scope.newoffer);
  $scope.newoffer={};
  console.log("offer added",$scope.offers[($scope.offers.length-1)]);
  $mdDialog.show(
    $mdDialog.alert()
      .title('Offer Added Successfully')
      .ariaLabel('Navigation demo')
      .ok('OK')
      .targetEvent(event)
  );
  $scope.showofferform();

}
});
