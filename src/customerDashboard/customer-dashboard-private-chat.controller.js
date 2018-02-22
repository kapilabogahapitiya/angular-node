CustomerDashboardPrivateChatCtrl.$inject = ['$state','localStorageService','$scope'];

export default function CustomerDashboardPrivateChatCtrl($state, localStorageService, $scope) {
  /*jshint validthis: true */
  var vm = this;
  vm.pageLoaded = false;
  $scope.privateChatData = [];
  $scope.$on('$viewContentLoaded',function(){
    $scope.cur_sidebar = "firstNearMember.customer-dashboard-inbox";
  });
 $scope.chatDatas = [
   {
     ask: {
      message: 'Hello Sam,',
      time : 'Today, 2:30pm '
    },
    answer: {
        message: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        time : 'Today, 2:30pm '
      }
   
   },
   {
    ask: {
     message: 'Hello Sam,',
     time : 'Today, 2:30pm '
   },
   answer: {
       message: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
       time : 'Today, 2:30pm '
     }
  
  },
  {
    ask: {
     message: 'Hello Sam,',
     time : 'Today, 2:30pm '
   },
   answer: {
       message: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
       time : 'Today, 2:30pm '
     }
  
  },
  {
    ask: {
     message: 'Hello Sam,',
     time : 'Today, 2:30pm '
   },
   answer: {
       message: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
       time : 'Today, 2:30pm '
     }
  
  },
  {
    ask: {
     message: 'Hello Sam,',
     time : 'Today, 2:30pm '
   },
   answer: {
       message: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
       time : 'Today, 2:30pm '
     }
  
  },
  {
    ask: {
     message: 'Hello Sam,',
     time : 'Today, 2:30pm '
   },
   answer: {
       message: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
       time : 'Today, 2:30pm '
     }
  
  }
 ];
  $scope.loadMore = function() {   
    var askData = {
      message: 'Hello Sam,',
      time : 'Today, 2:30pm '
    };
    var answerData = {
      message: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      time : 'Today, 2:30pm '
    };
    for( var i = 0; i < 5; i++){
      $scope.chatDatas.push({
        ask: askData,
        answer: answerData
      });
      
    }
   
  };
  
  
}
