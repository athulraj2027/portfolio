 var nameError = document.getElementById('nameError');
 var emailError = document.getElementById('emailError');

 function validateName(){
    var name = document.getElementById('userName').value;
    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name*';
        return false;
    }
    nameError.innerHTML='valid';
    return true;
 }

 
 function validateEmail(){
    var email = document.getElementById('userEmail').value;
    if(email.length == 0){
        emailError.innerHTML = 'Email is required*';
        return false;
    }
    if(!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        emailError.innerHTML = 'Email invalid*';
        return false;
    }
    emailError.innerHTML = 'valid';
    return true;
 }

 function submitForm() {

    if (!validateName() || !validateEmail()) {
        submitError.innerHTML = 'Please fix errors to submit';
        return false;
    }else{
    alert('Form submitted successfully!');
    return true;
    }
}
