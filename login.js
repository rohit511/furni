const submit_button = document.querySelector(".button");
submit_button.onclick = (e) => {
    e.preventDefault();
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const cpass = document.getElementById("cpass").value;
    const avatar=document.getElementsByClassName("navigation");
    localStorage.setItem('FirstName', fname);
    localStorage.setItem('LastName', lname);
    localStorage.setItem('Email', email);
    localStorage.setItem('Password', pass);
    localStorage.setItem('Cpassword', cpass);
    if(fname == "" && lname == "" && email == "" && pass == "" && cpass == ""){
        Swal.fire(
            'Opps..!',
            'input field has no value!',
            'error'
        );
    }
    else
    {
        if(pass.length >= 6 && pass.length <= 20)
    {
        if( pass !== cpass){
            Swal.fire(
                'Opps..!',
                'Password not matching!',
                'error'
            );
        }
        else
        {
            Swal.fire(
                'Good job!',
                'Register successful!',
                'success'

            );
            setTimeout(()=>{
                    location.href='LoginBox.html';
                    },500)
        }
    }
    else
    {
        Swal.fire(
            'Opps..!',
            'Input mim six digit password!',
            'error'
        );
    }
    }


}


const login=document.querySelector('.login');
login.onclick=(e)=>{
    e.preventDefault();
    const emailAddress=document.getElementById("Email").value;
    const  passWord=document.getElementById("password").value;
    const Email=localStorage.getItem("Email");
    const Password=localStorage.getItem("Password");
    if(emailAddress=="" && passWord==""){
 Swal.fire(
            'Opps..!',
            'input field has no value!',
            'error'
        );
}
else{
    if(emailAddress==Email && passWord==Password){
         
    

       Swal.fire(


               'Good job!',
                'Register successful!',
                'success'
            );
          
     
                        setTimeout(()=>{window.location.href = "index.html";},"800")();
                        const litem=document.createElement('li');
            avatar.innerHTML=`
         <div class="avatar">
    
    </div>
    `;
    
                    

    } 
    else{
        Swal.fire(
                'Opps..!',
                'Something is wrong!',
                'error'
            );
    }
}
}



