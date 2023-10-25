document.addEventListener("DOMContentLoaded", function() {
    const surveyForm = document.getElementById("surveyForm");
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("closePopup");
    const submitBtn = document.getElementById("submitBtn");
    const resetBtn = document.getElementById("resetBtn");
    const surveyData = document.getElementById("surveyData");
 
    submitBtn.addEventListener("click", function(event) {
        event.preventDefault();
        
        // Collect form data
        const Name = document.getElementById("Name").value;
        const email = document.getElementById("email").value;
        const dob = document.getElementById("dob").value;
        const country = document.getElementById("country").value;
        const genderElements = document.querySelectorAll('input[name="gender"]:checked');
        const gender = Array.from(genderElements).map(input => input.value).join(', ');
        const profession = document.getElementById("profession").value;
        const mobile = document.getElementById("mobile").value;

        // Display data in the popup
        surveyData.innerHTML = `
            <p><strong>Name:</strong> ${Name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Profession:</strong> ${profession}</p>
            <p><strong>Mobile Number:</strong> ${mobile}</p>
        `;

        popup.style.display = "block";
    });

    closePopup.addEventListener("click", function() {
        popup.style.display = "none";
        surveyForm.reset();
    });

    resetBtn.addEventListener("click", function() {
        surveyForm.reset();
    });
});
