

function myFunction()
{
    confirm("LOGIN FOR FURTHER DETAILS");
}



function func1() 
{
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('emailinput');
    const passInput = document.getElementById('passinput');
    const numberInput = document.getElementById('number');
    

    const usernameValue = usernameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const passwordValue = passInput.value.trim();
    const numberValue = numberInput.value.trim();
    

   if (usernameValue === '' || emailValue === '' || passwordValue === ''|| numberValue === '') 
   {
        alert('Please fill in all fields.');
    } 
  
    else 
    {
        alert('Form Registered and submitted successfully!');
        
    }
}



function func2()
{
    const eInput = document.getElementById('mail').value.trim();
    const pInput = document.getElementById('pswrd').value.trim();

    if (eInput !=''&& pInput !='')
    {
        if (pInput.length <=6)
        {
            alert('Login successfully');
            
        }
        else
        {
            confirm('Boxes are not filled or password is wrong not more than 6 characters ');
        }

    }
}


