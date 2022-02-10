document.getElementById('button-submit').addEventListener('click',function(){
	const userEmail =document.getElementById('user-email').value;
	const userPass =document.getElementById('user-pass').value;
	if(userEmail=='user@gmail.com' && userPass=='password'){
      window.location.href='banking.html'
	}
	else{
		const wrongP=document.createElement('small');
		wrongP.innerText='Please enter your correct email or password!';
		wrongP.style.color='red';
		const sectionP=document.getElementById('new-p');
		sectionP.appendChild(wrongP);
	}
})