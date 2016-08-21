// var app=angular.module("BlankApp", ["ngMaterial"]);
// app.controller("cntr",function($scope){
//  $scope.data=["Forum","Phenix","Central","Star Bazar","DV Mall"];
//  $scope.brandData=["Adidas","puma"];
//  $scope.locationData=["Koramangala","Electronic city","Marathalli"];
//  $scope.explore=false;
//  $scope.openExploreFunction=function () {
//    $scope.explore=true;
//  };
//  $scope.closeExploreFunction=function () {
//    $scope.explore=false;
//  };
// });

var app=angular.module("BlankApp", ["ngMaterial"]);
app.controller("cntr",function($http, $scope){
  //  var locations=[];
  //  $http.get("public/jsons/location.json").then(function(err,data){
  //    if(err){
  //      console.log("error");
  //    }
  //    else{
  //      $scope.locations=data;
  //      console.log($scope.locations);
  //    }
  //  });

 var locationData=[
   {
     "location_name":"Bangalore",
     "mall_id":["blr-for-kor","blr-for-whi","blr-sho-kor"]
   },
   {
     "location_name":"Hyderabad",
     "mall_id":["blr-for-kor","blr-for-whi","blr-sho-kor"]
   },
   {
     "location_name":"Pune",
     "mall_id":["blr-for-kor","blr-for-whi","blr-sho-kor"]
   }
 ];
 var location_array=[];
 if(locationData.length!=0){
   for(var i=0;i<locationData.length;i++){
     var location_name=locationData[i].location_name;
     location_array.push(location_name);
   }
 }
 $scope.locations=location_array;
 console.log("location array aayega");
 console.log(location_array);

 var malls_id_array=[];
  var selected_location="Bangalore";
  if(selected_location!=null){
    for(var i=0;i<locationData.length;i++){
      if(selected_location==locationData[i].location_name){
        malls_id_array=locationData[i].mall_id;
      }
    }
  }

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
  console.log(mall_names_array);


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
  var selected_mall="Forum Mall-Koramangala";
  var selected_mall_id;
  var brand_array=[];
  if(selected_mall!=null){
    for(var i=0;i<mall_details.length;i++){
      if(selected_mall==mall_details[i].name){
         selected_mall_id=mall_details[i].id;
         console.log(selected_mall_id);
      }
    }
    var mall_array=[];
    var brand_name;
    for(var j=0;j<brands_details.length;j++){
      console.log("inside brands");
      mall_array=brands_details[j].mall_id;
      for(var k=0;k<mall_array.length;k++){
        console.log(mall_array[k]);
        if(selected_mall_id==mall_array[k]){
          brand_name=brands_details[j].name;
          brand_array.push(brand_name);
        }
      }
    }//end of for second loop
  }
  console.log(brand_array);
  $scope.brands=brand_array;



  //filter offers
  var offer_details={
      "cashback":
      [
        {
          "brand_id":"puma",
          "mall_id":"blr-for-kor",
          "offerDetails":"10% cashback on shoes"
        },
        {
          "brand_id":"puma",
          "mall_id":"blr-for-whi",
          "offerDetails":"5% cashback on shoes"
        }
      ],
      "discount":[
        {
          "brand_id":"levis",
          "mall_id":"blr-for-kor",
          "offerDetails":"10% discount on shoes"
        },
        {
          "brand_id":"pepe_jeans",
          "mall_id":"blr-for-whi",
          "offerDetails":"35% discount on shirts"
        }
      ],
      "wallet":[
        {
          "brand_id":"and",
          "mall_id":"hyd-ino-ban",
          "offerDetails":"10% discount on using Mobikwik"
        },
        {
          "brand_id":"puma",
          "mall_id":"che-phe-vel",
          "offerDetails":"5% discount on paytm"
        }
      ],
      "bank":[
        {
          "brand_id":"puma",
          "mall_id":"blr-for-kor",
          "offerDetails":"10% discount on 4999"
        },
        {
          "brand_id":"levis",
          "mall_id":"che-phe-vel",
          "offerDetails":"5% discount on 5000"
        }
      ],
      "first_time_user":[{
        "brand_id":"elle",
        "mall_id":"blr-for-kor",
        "offerDetails":"500 discount on Apparels"
      },
      {
        "brand_id":"raymonds",
        "mall_id":"blr-for-whi",
        "offerDetails":"250 discount on Apparels"
      }],
      "buy_x_get_x":[{
        "brand_id":"peter_england",
        "mall_id":"blr-for-kor",
        "offerDetails":"Buy 2 get 2"
      },
      {
        "brand_id":"peter_england",
        "mall_id":"blr-for-whi",
        "offerDetails":"Buy 3 get 4"
      }],
      "emi":[{
        "brand_id":"mustard",
        "mall_id":"blr-for-kor",
        "offerDetails":"12% Interest for 12 months"
      },
      {
        "brand_id":"adidas",
        "mall_id":"blr-for-whi",
        "offerDetails":"0 % Interest for 12 months"
      }],
      "flash_offers":[{
        "brand_id":"nike",
        "mall_id":"blr-for-kor",
        "offerDetails":"2x points on 2pm-4pm sale"
      },
      {
        "brand_id":"nike",
        "mall_id":"blr-for-whi",
        "offerDetails":"2x points on 6pm-8pm sale"
      }]
    };

   var selected_brand_name="Levis";
   var selected_brand_name_id;
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

 $scope.data=["Forum","Phenix","Central","Star Bazar","DV Mall"];
 $scope.brandData=["Adidas","puma"];

 $scope.explore=false;
 $scope.openExploreFunction=function () {
   $scope.explore=true;
 };
 $scope.closeExploreFunction=function () {
   $scope.explore=false;
 };
});
