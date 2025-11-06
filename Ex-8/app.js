// Create the Angular module
angular.module('gradeApp', [])
    .controller('gradeController', function($scope) {
        
        // Initialize student object
        $scope.student = {
            name: '',
            rollNo: '',
            course1: null,
            course2: null,
            course3: null,
            course4: null,
            course5: null
        };

        // Initialize grade calculation flag
        $scope.gradeCalculated = false;
        $scope.averageMarks = 0;
        $scope.letterGrade = '';

        // Calculate grade function
        $scope.calculateGrade = function() {
            // Validate inputs
            if (!$scope.student.name || !$scope.student.rollNo) {
                alert('Please enter student name and roll number');
                return;
            }

            // Get all marks
            var marks = [
                $scope.student.course1,
                $scope.student.course2,
                $scope.student.course3,
                $scope.student.course4,
                $scope.student.course5
            ];

            // Check if all marks are entered
            for (var i = 0; i < marks.length; i++) {
                if (marks[i] === null || marks[i] === undefined || marks[i] === '') {
                    alert('Please enter marks for all 5 courses');
                    return;
                }
                
                // Validate marks range
                if (marks[i] < 0 || marks[i] > 100) {
                    alert('Marks must be between 0 and 100');
                    return;
                }
            }

            // Calculate average
            var total = 0;
            for (var i = 0; i < marks.length; i++) {
                total += parseFloat(marks[i]);
            }
            $scope.averageMarks = total / marks.length;

            // Determine letter grade
            if ($scope.averageMarks >= 90) {
                $scope.letterGrade = 'A+';
            } else if ($scope.averageMarks >= 80) {
                $scope.letterGrade = 'A';
            } else if ($scope.averageMarks >= 70) {
                $scope.letterGrade = 'B';
            } else if ($scope.averageMarks >= 60) {
                $scope.letterGrade = 'C';
            } else if ($scope.averageMarks >= 50) {
                $scope.letterGrade = 'D';
            } else {
                $scope.letterGrade = 'F';
            }

            // Show grade details
            $scope.gradeCalculated = true;
        };

        // Reset function (optional)
        $scope.resetForm = function() {
            $scope.student = {
                name: '',
                rollNo: '',
                course1: null,
                course2: null,
                course3: null,
                course4: null,
                course5: null
            };
            $scope.gradeCalculated = false;
            $scope.averageMarks = 0;
            $scope.letterGrade = '';
        };
    });
