/** GENERAL FEEDBACK:
 *
 */

const handleSubmit = (event) => {
    event.preventDefault();
    // Other form handling logic
    
    // Get the value of didLikeAssignment
    const didLikeAssignment = document.querySelector('input[name="didLikeAssignment"]').checked;
    
    // Get the span element
    const didLikeResultSpan = document.getElementById('didLikeResult');
    
    // Update the span content based on the value of didLikeAssignment
    didLikeResultSpan.textContent = didLikeAssignment ? 'Yes' : 'No';
  
    // Clear the form
    event.target.reset();
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#new-user-form");
    form.addEventListener("submit", handleSubmit);
  });
  
  
  
  
