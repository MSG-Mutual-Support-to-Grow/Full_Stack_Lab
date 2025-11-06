// Create the AngularJS module
angular.module('inventoryApp', [])
    .controller('inventoryController', function($scope) {
        
        // Initialize products array
        $scope.products = [
            { name: 'Apple', price: 200 },
            { name: 'Mango', price: 80 },
            { name: 'Orange', price: 70 },
            { name: 'Pineapple', price: 80 }
        ];

        // Initialize new product object
        $scope.newProduct = {
            name: '',
            price: ''
        };

        // Add Product Function
        $scope.addProduct = function() {
            // Validate product name
            if (!$scope.newProduct.name || $scope.newProduct.name.trim() === '') {
                alert('Please enter a product name');
                return;
            }

            // Validate product price
            if (!$scope.newProduct.price || $scope.newProduct.price === '') {
                alert('Please enter a product price');
                return;
            }

            // Validate price is a positive number
            if ($scope.newProduct.price < 0) {
                alert('Price must be a positive number');
                return;
            }

            // Check if product already exists
            var exists = $scope.products.some(function(product) {
                return product.name.toLowerCase() === $scope.newProduct.name.toLowerCase();
            });

            if (exists) {
                alert('Product already exists in the inventory');
                return;
            }

            // Add product to array
            $scope.products.push({
                name: $scope.newProduct.name.trim(),
                price: parseFloat($scope.newProduct.price)
            });

            // Clear input fields
            $scope.newProduct.name = '';
            $scope.newProduct.price = '';
        };

        // Remove Product Function
        $scope.removeProduct = function(index) {
            // Confirm before deletion
            var productName = $scope.products[index].name;
            
            if (confirm('Are you sure you want to delete "' + productName + '"?')) {
                // Remove product from array
                $scope.products.splice(index, 1);
            }
        };

        // Optional: Get product count
        $scope.getProductCount = function() {
            return $scope.products.length;
        };

        // Optional: Search product by name
        $scope.searchProduct = function(name) {
            return $scope.products.find(function(product) {
                return product.name.toLowerCase() === name.toLowerCase();
            });
        };
    });
