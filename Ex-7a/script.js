$(document).ready(function() {
    
    // Function to handle the age calculation
    function calculateAge() {
        const day = parseInt($('#day').val());
        const month = parseInt($('#month').val());
        const year = parseInt($('#year').val());

        // Simple validation check
        if (isNaN(day) || isNaN(month) || isNaN(year) || month < 1 || month > 12 || day < 1 || day > 31) {
            $('#age-result').text('Please enter a valid date.').css('color', 'red');
            return;
        }
        
        // Construct the birth date object
        const birthDate = new Date(year, month - 1, day); // month is 0-indexed in Date object

        const today = new Date();

        // Check if birth date is in the future
        if (birthDate > today) {
            $('#age-result').text('Birth date cannot be in the future.').css('color', 'red');
            return;
        }

        // --- Core Calculation Logic ---
        let ageYears = today.getFullYear() - birthDate.getFullYear();
        let ageMonths = today.getMonth() - birthDate.getMonth();
        let ageDays = today.getDate() - birthDate.getDate();

        // Adjust months if current day is before birth day
        if (ageDays < 0) {
            ageMonths--;
            // Get number of days in the previous month
            let prevMonthLastDay = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
            ageDays += prevMonthLastDay;
        }

        // Adjust years if current month/day is before birth month/day
        if (ageMonths < 0) {
            ageYears--;
            ageMonths += 12;
        }

        // --- Display the Result ---
        const resultText = `${ageYears} Years ${ageMonths} Months ${ageDays} Days`;
        
        $('#age-result').text(resultText).css('color', '#2e8b57');
    }

    // Bind the click event to the "Find Age" button
    $('#find-age-btn').click(calculateAge);
    
    // Optional: Run on load with the default values
    calculateAge();

});