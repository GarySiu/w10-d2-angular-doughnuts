angular.module('doughnutsApp')
       .controller('DoughnutsController', DoughnutsController)

DoughnutsController.$inject = ['$http']

function DoughnutsController($http){
  vm = this
  vm.title = "Angular Doughnuts?!"
  vm.all = []
  vm.newNut = {}

  getNuts()

  function getNuts(){
    $http.get('http://api.doughnuts.ga/doughnuts')
    .then(function(response){
      vm.all = response.data
    })
  }

  vm.add = addNuts

  function addNuts(){
    $http.post('http://api.doughnuts.ga/doughnuts', vm.newNut)
    .then(function(response){
      vm.all.push(response.data)
      vm.newNut = {}
    })
  }

  vm.remove = removeNuts

  var deleteId

  function removeNuts(id){
    deleteId = id
    $http.delete('http://api.doughnuts.ga/doughnuts/' + id)
    .then(function(){
      vm.all.splice(deleteId, 1)
    })
  }

}
