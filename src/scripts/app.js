const auth = firebase.auth();

const whenSignedIn = document.getElementById("whenSignedIn");
const whenSignedOut = document.getElementById("whenSignedOut");
const signup = document.getElementById("signup");

const signInBtn = document.getElementById("signInBtn");
const signOutBtn = document.getElementById("signOutBtn");

const userDetails = document.getElementById("userDetails");

const provider = new firebase.auth.GoogleAuthProvider();

/// Sign in event handlers
signInBtn.onclick = () => auth.signInWithPopup(provider);

signOutBtn.onclick = () => auth.signOut();

auth.onAuthStateChanged((user) => {
  if (user) {
    // signed in
    whenSignedIn.hidden = false;
    signup.hidden = true;
    userDetails.innerHTML = `<img src="${user.photoURL}"><div class="userInfo"><h3>${user.displayName}</h3><p>${user.email}</p></div>`;
    document.getElementById("signup").style.display = "none";
  } else {
    // not signed in
    whenSignedIn.hidden = true;
    signup.hidden = false;
    userDetails.innerHTML = "";
  }
});
