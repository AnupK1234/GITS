// Year, Division Handling
// const yearSelect = document.getElementById("yearSelect");
// const divisionSelect = document.getElementById("divisionSelect");

// const selectedYear = yearSelect.value;
// console.log("Selected Year:", selectedYear);
// const selectedDivision = divisionSelect.value;
// console.log("Selected Division:", selectedDivision);



// document.addEventListener("DOMContentLoaded", function() {
//     const form = document.querySelector("form");
  
//     form.addEventListener("submit", function(event) {
//       event.preventDefault(); // Prevent the form from submitting
  
//       // Get all input fields
//       const inputFields = form.querySelectorAll("input, select");
  
//       // Create an object to store the input values
//       const inputData = {};
  
//       inputFields.forEach(function(input) {
//         if (input.type === "select-one") {
//           inputData[input.name] = input.options[input.selectedIndex].value;
//         } else {
//           inputData[input.name] = input.value;
//         }
//       });
  
//       console.log("Input Data:", inputData);
//     });
//   });
  
  

// Transaction Image Upload Handling
const imageInput = document.getElementById("imageInput");
const selectedFileName = document.getElementById("selectedFileName");

  imageInput.addEventListener("change", function () {
    if (imageInput.files.length > 0) {
      selectedFileName.textContent = "Selected file: " + imageInput.files[0].name;
    } else {
      selectedFileName.textContent = "";
    }
  });

