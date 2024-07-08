/** GENERAL FEEDBACK:
 *
 */

const handleSubmit = (event) => {
    event.preventDefault();
    // Other form handling logic
    const form = event.target
const formData = new FormData(event.target);
const {username, codingLevel, location, didLikeAssignment } = Object.fromEntries(formData);


    
    // Get the value of didLikeAssignment
    
    const usernameSpan = document.querySelector('#results-username');

    const codingLevelSpan = document.querySelector('#results-coding-level');

    const locationSpan = document.querySelector('#results-location');

    // Get the span element
    const didLikeResultSpan = document.getElementById('results-did-like-assignment');
    
    // Update the span content based on the value of didLikeAssignment
    didLikeResultSpan.textContent = didLikeAssignment ? 'Yes' : 'No';
  
    usernameSpan.textContent = username

    codingLevelSpan.textContent = codingLevel

    locationSpan.textContent = location




    // Clear the form
    form.reset();
  };
  
 const main = () => {
    const form = document.querySelector("#new-user-form");
    form.addEventListener("submit", handleSubmit);
  };

  main()
  
  
  
  
