auth.onAuthStateChanged((user) => {
  if (user) {
    // signed in
    whenSignedIn.hidden = false;
    signup.hidden = true;
    userDetails.innerHTML = `<img src="${user.photoURL}"><div class="userInfo"><h3>Hello👋, ${user.displayName}</h3><p>${user.email}</p></div>`;
    document.getElementById("signup").style.display = "none";
  } else {
    // not signed in
    whenSignedIn.hidden = true;
    signup.hidden = false;
    userDetails.innerHTML = "";
  }
});
