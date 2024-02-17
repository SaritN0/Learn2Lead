function redirectToLoginPage() {
    // Get the form element
    var loginForm = document.getElementById('loginForm');

    // Assuming you want to redirect to a page named "dashboard.html" after successful login
    var targetPage = "main.html";

    // Redirect to the target page
    window.location.href = targetPage;
  }