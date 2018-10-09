app.controller('mainPageController', function ($scope, $rootScope, $state, $timeout, $cookies, ROUTE, mainPageFactory) {

  $scope.setup = function () {
    $scope.viewType = 1;
    $scope.currentExameIndex = 0;
    $scope.examsToCronogram= {
     examToCronogram:[],
   } 
   $scope.exams = {
    exam: [],
  };

  $scope.cronogramaFinal = {};

  console.log('pega na caceta')
  $scope.myImage ='';
  $scope.isCreating = false;
  $timeout(function () {
    angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);
  }, 500);


};

var handleFileSelect = function(evt) {
  var file=evt.currentTarget.files[0];
  var fileType=evt.currentTarget.files[0].type;
  $scope.userExamSearch(file);
};

$scope.enviarGuia = function(){
  handleFileSelect();
}


$scope.userExamSearch = function(SearchValue){
  console.log(SearchValue)
  mainPageFactory.getExamsByImage(SearchValue).then(function(response){


    console.log(response.data);


    $scope.exams = response.data;
    $scope.currentExameIndex = ($scope.currentExameIndex + response.data.length);

    console.log(response.data.length);
    $scope.exams.exam = [];
    angular.forEach(response.data, function (marker, index) {

      marker.ExamTitle = marker.nome;
      marker.ExamDescription = marker.descricao;
      console.log(marker.ExamTitle)
      $scope.exams.exam.push(marker);
    });


  }).catch(function (err) {
    console.log(err)
  });

}

$scope.gerarCronograma = function(){

  angular.forEach($scope.exams.exam, function (marker, index) {
    $scope.examsToCronogram.examToCronogram.push(marker.id);

  });
  console.log($scope.examsToCronogram);
  mainPageFactory.getCronogram($scope.examsToCronogram).then(function(response){
    console.log(response);
    $scope.viewType = 2;
    $scope.cronogramaFinal = response.data;
    console.log($scope.cronogramaFinal);

  }).catch(function (err) {
    console.log(err)
  });
}

$scope.adicionarAoCalendario = function(){
  mainPageFactory.ics($scope.cronogramaFinal).then(function(response){
    console.log(response);


  }).catch(function (err) {
    console.log(err)
  });

}

$scope.TextToSpeechAPI = function(){
  user = {
    login: 'ec7be1aa-0793-47a3-b035-4ae6c3ea2a71',
    senha: 'ZHRbSnkgTqx5',
  }
  mainPageFactory.textToSpeech()
}


$scope.getExams = function(){
  console.log('getExams')
  mainPageFactory.getExams().then(function(response){
    console.log(response);
  }).catch(function (err) {
    console.log(err)
  });

};




$scope.setup();
})




