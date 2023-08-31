  // Function to get URL parameters
  function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  // Check if the URL contains "?trusted=true"
  const trustedParam = getUrlParam('trusted');

  // Get the phone number div element
  const phoneNumberDiv = document.getElementById('phone-number');
  // Get the trusted email div element
  const trustedEmailDiv = document.getElementById('trusted-email');
  // Get the general email div element
  const generalEmailDiv = document.getElementById('general-email');

  // If "?trusted=true" is present, reveal the trusted email and hide the general email
  if (trustedParam === 'true') {
    phoneNumberDiv.style.display = ''; // or your desired style
    trustedEmailDiv.style.display = ''; // or your desired style
    generalEmailDiv.style.display = 'none';
  } else {
    // If "?trusted=true" is not present, hide the trusted email and reveal the general email
    phoneNumberDiv.style.display = 'none';
    trustedEmailDiv.style.display = 'none';
    generalEmailDiv.style.display = ''; // or your desired style
  }