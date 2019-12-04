// function to enforce whitespace in the email box for the contact form [contact_Stephen.html]
function whitespace_email(){
  // gets email address from email box as a buffer variable
    let str_buffer1 = document.getElementById('email_box').value;
    //uses regex to find whitespacearound text in the buffer variable
    if(/\S/.test(str_buffer1)){
      // sets a swap variable equal to the variable with whitespace trimmed off
        let str_swap1 = str_buffer1.trim();
        // automatically replaces the value on the page with the trimmed variable
        document.getElementById('email_box').value = str_buffer1.replace(str_buffer1, str_swap1);
    } else {
      // if the input is all whitespace...
        window.alert("Email cannot be white space");
        // input is replaced by an empty string
        document.getElementById('email_box').value = str_buffer1.replace(str_buffer1, "");
    } // endif
} // email whitespace_enforcement
// function to enforce whitespace in the subject box for the contact form || [contact_Stephen.html]
// function uses the same method as above to detect and trim whitespace
function whitespace_subject(){
    let str_buffer1 = document.getElementById('subject_box').value;
    if(/\S/.test(str_buffer1)){
        let str_swap1 = str_buffer1.trim();
        document.getElementById('subject_box').value = str_buffer1.replace(str_buffer1, str_swap1);
    } else {
        window.alert("Subject cannot be white space");
        document.getElementById('subject_box').value = str_buffer1.replace(str_buffer1, "");
    } // endif
} // subject whitespace_enforcement
// function to validate that there is input in either of the input boxes for the contact form || [contact_Stephen.html]
function check_input(){
  let email = document.getElementById('email_box').value;
  let subject = document.getElementById('subject_box').value;
  if (email === ""){
    window.alert("Email cannot be blank");
  } else if (subject === "") {
    window.alert("Subject cannot be blank")
  } else {
    open_emailDialog();
  }
}
