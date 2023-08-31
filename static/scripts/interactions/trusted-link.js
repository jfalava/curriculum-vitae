  function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }
  const trustedParam = getUrlParam('trusted');
  const phoneNumberDiv = document.getElementById('phone-number');

  if (trustedParam === 'true') {
    phoneNumberDiv.style.display = '';
  }
