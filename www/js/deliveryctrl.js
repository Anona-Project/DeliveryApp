app.controller('DeliveryCtrl', function($scope, $http, $ionicPopup, $rootScope, $cordovaBarcodeScanner) {

$scope.scanBarcode = function () {
  $cordovaBarcodeScanner.scan().then(function(imageData) {
    console.log("Barcode Format -> " + imageData.format);
    console.log("Cancelled -> " + imageData.cancelled);
    $scope.ReadQR = imageData.text;
    $scope.getShelf = Math.floor((Math.random() * 10) + 1);
    $scope.getFloor = Math.floor((Math.random() * 2) + 1);
    $scope.getCorridor = Math.random().toString(36).replace(/[^a-f]+/g, '').substr(0, 1);
    $scope.productInfo = {
      productid: $scope.ReadQR,
      corridor: $scope.getCorridor,
      shelf:  $scope.getShelf,
      floor: $scope.getFloor
    }

  }, function(error) {
    console.log("An error happened -> " + error);
  });
}

})
