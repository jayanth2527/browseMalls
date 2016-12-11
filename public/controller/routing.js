var app=angular.module("BlankApp");

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/Home');

  $stateProvider.state('Home', {
    url: '/Home',
    views : {
      "content":{
        templateUrl: '/templates/f1.html'
      }
    }})
    .state('shopDetails', {
      url: '/shopDetails',
      views:{
        "header":{
          templateUrl:'/templates/header.html'
        },
        'content':{
          templateUrl: '/templates/shopDetails2.html'
        }
      }
    })
    .state('mallManager', {
      url: '/mallManager',
      views:{
        "header":{
          templateUrl:'/templates/header.html'
        },
        'content':{
          templateUrl: '/templates/mallManager/innerContent.html'
        },
        'sideNav@mallManager':{
          templateUrl: '/templates/mallManager/sideNav.html'
        },
        'innerContent@mallManager':{
          templateUrl: '/templates/mallManager/uploadEvent.html'
        }
      }
    })

    .state('transactionsPerDay', {
      url: '/transactionsPerDay',
      views:{
        "header":{
          templateUrl:'/templates/header.html'
        },
        'content':{
          templateUrl: '/templates/mallManager/innerContent.html'
        },
        'sideNav@transactionsPerDay':{
          templateUrl: '/templates/mallManager/sideNav.html'
        },
        'innerContent@transactionsPerDay':{
          templateUrl: '/templates/mallManager/transactionsPerDay.html'
        }
      }
    })
    .state('transactionsPerMonth', {
      url: '/transactionsPerMonth',
      views:{
        "header":{
          templateUrl:'/templates/header.html'
        },
        'content':{
          templateUrl: '/templates/mallManager/innerContent.html'
        },
        'sideNav@transactionsPerMonth':{
          templateUrl: '/templates/mallManager/sideNav.html'
        },
        'innerContent@transactionsPerMonth':{
          templateUrl: '/templates/mallManager/transactionsPerMonth.html'
        }
      }
    })
    .state('sendCommunication', {
      url: '/sendCommunication',
      views:{
        "header":{
          templateUrl:'/templates/header.html'
        },
        'content':{
          templateUrl: '/templates/mallManager/innerContent.html'
        },
        'sideNav@sendCommunication':{
          templateUrl: '/templates/mallManager/sideNav.html'
        },
        'innerContent@sendCommunication':{
          templateUrl: '/templates/mallManager/sendCommunication.html'
        }
      }
    })

    .state('shopManager',{
      url: '/shopManager',
      views:{
        "content":{
          templateUrl:'/templates/shopManager/shopmanager.html'
        },
        // 'content':{
        //   templateUrl: '/templates/shopManager/innerContent.html'
        // },

        'sideNav@shopManager':{
          templateUrl: '/templates/shopManager/sideNav.html'
        },

        "offers@shopManager":{
          templateUrl:'/templates/shopManager/upload_add.html'
        }
      }

    })
    .state('shopManager.newoffer',{
      url: '/newoffer',
      views:{
        "new@shopManager.newoffer":{
          templateUrl:'/templates/shopManager/addofferform.html'
        }
      }

    })
    .state('Upload Products/Add Offers', {
      url: '/Upload Products/Add Offers',
      views:{
        "header":{
          templateUrl:'/templates/header.html'
        },
        'content':{
          templateUrl: '/templates/shopManager/innerContent.html'
        },
        'sideNav@Upload Products/Add Offers':{
          templateUrl: '/templates/shopManager/sideNav.html'
        },
        'innerContent@Upload Products/Add Offers':{
          templateUrl: '/templates/shopManager/upload_add.html'
        }
      }
    })

    .state('Perday Revenue', {
      url: '/Perday Revenue',
      views:{
        "header":{
          templateUrl:'/templates/header.html'
        },
        'content':{
          templateUrl: '/templates/shopManager/innerContent.html'
        },
        'sideNav@Perday Revenue':{
          templateUrl: '/templates/shopManager/sideNav.html'
        },
        'innerContent@Perday Revenue':{
          templateUrl: '/templates/shopManager/transactionsPerDay.html'
        }
      }
    })
    .state('Monthly Revenue', {
      url: '/Monthly Revenue',
      views:{
        "header":{
          templateUrl:'/templates/header.html'
        },
        'content':{
          templateUrl: '/templates/shopManager/innerContent.html'
        },
        'sideNav@Monthly Revenue':{
          templateUrl: '/templates/shopManager/sideNav.html'
        },
        'innerContent@Monthly Revenue':{
          templateUrl: '/templates/shopManager/transactionsPerMonth.html'
        }
      }
    })
    .state('Pay Bill', {
      url: '/Pay Bill',
      views:{
        "header":{
          templateUrl:'/templates/header.html'
        },
        'content':{
          templateUrl: '/templates/shopManager/innerContent.html'
        },
        'sideNav@Pay Bill':{
          templateUrl: '/templates/shopManager/sideNav.html'
        },
        'innerContent@Pay Bill':{
          templateUrl: '/templates/shopManager/payBill.html'
        }
      }
    })
    .state('Send communication', {
      url: '/Send communication',
      views:{
        "header":{
          templateUrl:'/templates/header.html'
        },
        'content':{
          templateUrl: '/templates/shopManager/innerContent.html'
        },
        'sideNav@Send communication':{
          templateUrl: '/templates/shopManager/sideNav.html'
        },
        'innerContent@Send communication':{
          templateUrl: '/templates/shopManager/sendCommunication.html'
        }
      }
    })
    .state('admin', {
      url: '/admin',
      views:{
        "header":{
          templateUrl:'/templates/admin/header.html'
        },
        'content':{
          templateUrl: '/templates/admin/innerContent.html'
        },
        'sideNav@admin':{
          templateUrl: '/templates/admin/sideNav.html'
        },
        'innerContent@admin':{
          templateUrl: '/templates/admin/createManager.html'
        }
      }
    })
    .state('createManagerAdmin', {
      url: '/createManagerAdmin',
      views:{
        "header":{
          templateUrl:'/templates/admin/header.html'
        },
        'content':{
          templateUrl: '/templates/admin/innerContent.html'
        },
        'sideNav@createManagerAdmin':{
          templateUrl: '/templates/admin/sideNav.html'
        },
        'innerContent@createManagerAdmin':{
          templateUrl: '/templates/admin/createManager.html'
        }
      }
    })
    .state('transactionsPerDayAdmin', {
      url: '/transactionsPerDayAdmin',
      views:{
        "header":{
          templateUrl:'/templates/admin/header.html'
        },
        'content':{
          templateUrl: '/templates/admin/innerContent.html'
        },
        'sideNav@transactionsPerDayAdmin':{
          templateUrl: '/templates/admin/sideNav.html'
        },
        'innerContent@transactionsPerDayAdmin':{
          templateUrl: '/templates/admin/transactionsPerDay.html'
        }
      }
    })
    .state('transactionsMallWiseAdmin', {
      url: '/transactionsMallWiseAdmin',
      views:{
        "header":{
          templateUrl:'/templates/admin/header.html'
        },
        'content':{
          templateUrl: '/templates/admin/innerContent.html'
        },
        'sideNav@transactionsMallWiseAdmin':{
          templateUrl: '/templates/admin/sideNav.html'
        },
        'innerContent@transactionsMallWiseAdmin':{
          templateUrl: '/templates/admin/mallWise.html'
        }
      }
    })
    .state('transactionsPerMonthAdmin', {
      url: '/transactionsPerMonthAdmin',
      views:{
        "header":{
          templateUrl:'/templates/admin/header.html'
        },
        'content':{
          templateUrl: '/templates/admin/innerContent.html'
        },
        'sideNav@transactionsPerMonthAdmin':{
          templateUrl: '/templates/admin/sideNav.html'
        },
        'innerContent@transactionsPerMonthAdmin':{
          templateUrl: '/templates/admin/transactionsPerMonth.html'
        }
      }
    })
    .state('graphViewAdmin', {
      url: '/graphViewAdmin',
      views:{
        "header":{
          templateUrl:'/templates/admin/header.html'
        },
        'content':{
          templateUrl: '/templates/admin/innerContent.html'
        },
        'sideNav@graphViewAdmin':{
          templateUrl: '/templates/admin/sideNav.html'
        },
        'innerContent@graphViewAdmin':{
          templateUrl: '/templates/admin/graphView.html'
        }
      }
    })

    .state('sendCommunicationAdmin', {
      url: '/sendCommunicationAdmin',
      views:{
        "header":{
          templateUrl:'/templates/admin/header.html'
        },
        'content':{
          templateUrl: '/templates/admin/innerContent.html'
        },
        'sideNav@sendCommunicationAdmin':{
          templateUrl: '/templates/admin/sideNav.html'
        },
        'innerContent@sendCommunicationAdmin':{
          templateUrl: '/templates/admin/sendCommunication.html'
        }
      }
    })
    .state('viewBillSummary', {
      url: '/viewBillSummary',
      views:{
        "header":{
          templateUrl:'/templates/admin/header.html'
        },
        'content':{
          templateUrl: '/templates/admin/innerContent.html'
        },
        'sideNav@viewBillSummary':{
          templateUrl: '/templates/admin/sideNav.html'
        },
        'innerContent@viewBillSummary':{
          templateUrl: '/templates/admin/viewBillSummary.html'
        }
      }
    })


  });
