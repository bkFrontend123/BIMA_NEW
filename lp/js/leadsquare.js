
function handleFormSubmission(dataLayer) {
  var companyname = document.getElementById('floatingInputCompanyName').value;
  var name = document.getElementById('floatingInputName').value;
  var number = document.getElementById('floatingInputNumber').value;
  var email = document.getElementById('floatingInputWorkEmail').value;
  var product = document.getElementById('floatingInputProduct').value;
  var thankyou = document.getElementById('thankYouDiv');
  var getQuoteForm = document.getElementById('GetRecommendations');
  if(companyname == ""){
      alert("Please enter company name")
      return false;
  }
  if(name == ""){
      alert("Please enter name")
      return false;
  }
  if(number == "" || !validateMobileNumber(number)){
      alert("Please enter valid number")
      return false;
  }
  if(email == "" || !validateEmail(email)){
      alert("Please enter valid email")
      return false;
  }
  // Prepare the data to send to the API
  var requestData = {
    // Add any additional data you want to send
    // For example:
    name: name,
    lastName: "",
    email: email,
    phone: number,
    company_name: companyname,
    product_name : product,

    // ...
  };

  // Make a POST request to the API endpoint
  fetch('https://api.bimakavach.com/lead-square/lp', {
    method: 'POST',
    mode: "cors",
    Accept : "*/*",
    body: JSON.stringify(requestData),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(async function(response) {
      // Handle the API response
      if (response.status == 200) {
        thankyou.style.display='block';
        getQuoteForm.style.display='none';
        dataLayer.push({"event": "getQuote"})
      } else {
        // Request failed, handle the error
        alert("Request failed, Please try again");
      }
    })
    .catch(function(error) {
      // Handle any error that occurred during the request
      console.error(error);
    });
}


function validateMobileNumber(mobileNumber) {
  // Use a regular expression to validate the mobile number
  // Modify the regex pattern as per your requirements
  var mobileRegex = /^\d{10}$/; // Assumes a 10-digit mobile number

  return mobileRegex.test(mobileNumber);
}

function validateEmail(email) {
  // Use a regular expression to validate the email
  // Modify the regex pattern as per your requirements
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
}

