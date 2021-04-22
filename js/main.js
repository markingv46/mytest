(function() {
  'use strict';

  var vm = new Vue({
    el: '.navi',
    data: {
      itemsCA: [
        '顧客検索',
        '顧客登録',
        '求職登録',
        // '求職タスク登録',

       ],
      itemsRA: [
        '求職マッチング',
        '求職カルテ',

        '企業検索',
        '企業登録',
        '求人登録',
        '求人タスク登録',
        '求人マッチング',
        '求人カルテ',
      ]
    }
  });

  var vm = new Vue({
    el: '#app',
    data: {
      newItem: '',
      todos: [{
        title: 'セールスマネージャー',
      }, {
        title: '職種 2',
      }, {
        title: '職種 3',
      
      }]
    },
  });

  var vm = new Vue({
    el: '#jobs',
  });




  var firebaseConfig = {
    apiKey: "AIzaSyD0VDAix6PcYZQpZsbt-Andkn57JHNqHbs",
    authDomain: "test-jms-478b3.firebaseapp.com",
    projectId: "test-jms-478b3",
    storageBucket: "test-jms-478b3.appspot.com",
    messagingSenderId: "494775133169",
    appId: "1:494775133169:web:d9c49023fb5133f6231a50",
    measurementId: "G-ECZ4Z550T6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

})();