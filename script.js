const cookiesPopup = document.querySelector('.cookies');
const acceptCookiesBtn = document.querySelector('.btn');
// // Check if the user has already accepted cookies
// const localCookiesAccepted = localStorage.getItem('localCookiesAccepted');

// // If cookies are already accepted, hide the popup
// if(localCookiesAccepted){
//     cookiesPopup.style.display = 'none';
// }
// Add an event listener to the button
acceptCookiesBtn.addEventListener('click', () => {
    // Hide the popup
    cookiesPopup.style.display = 'none';
    // // Save the user's consent in local storage
    // localStorage.setItem('localCookiesAccepted', 'true');
});