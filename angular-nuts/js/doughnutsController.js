angular.module('doughnutsApp')
       .controller('DoughnutsController', DoughnutsController)

DoughnutsController.$inject = ['$http']

function DoughnutsController($http){
  vm = this
  vm.title = "Angular Doughnuts?!"
  vm.all = []

  function getNuts(){
    $http.get('http://api.doughnuts.ga/doughnuts')
    .then(function(response){
      vm.all = response.data
    })
  }
  getNuts()
}
