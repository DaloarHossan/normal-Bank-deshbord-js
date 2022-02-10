document.getElementById('deposit-button').addEventListener('click',function(){
	const deposit=document.getElementById('deposit-ammount');
	const depositAmmount=deposit.value;
	const depositTotal=document.getElementById('deposit-total');
   if(isNaN(depositAmmount)){
	  const p= document.createElement('small');
	   p.innerText='please enter a valid ammount!'
	   p.style.color='red';
	   const errorP=document.getElementById('error');
	   errorP.appendChild(p);
   }
   else{
	   depositTotal.innerText=depositAmmount;
	 
        deposit.value=null;
	
   }
}) 
document.getElementById('plus').addEventListener('click',function(){
	const deposit=document.getElementById('deposit-ammount');
	const depositAmmount=deposit.value;
	if(isNaN(depositAmmount)){
		const p= document.createElement('small');
		 p.innerText='please enter a valid ammount!'
		 p.style.color='red';
		 const errorP=document.getElementById('error');
		 errorP.appendChild(p);
	 }
	 else{
		const deposit=document.getElementById('deposit-ammount');
		const depositAmmount=deposit.value;
		deposit.value++;
		
	 }

})

// minus

document.getElementById('minus').addEventListener('click',function(){
	const deposit=document.getElementById('deposit-ammount');
	const depositAmmount=deposit.value;
	if(isNaN(depositAmmount)){
		const p= document.createElement('small');
		 p.innerText='please enter a valid ammount!'
		 p.style.color='red';
		 const errorP=document.getElementById('error');
		 errorP.appendChild(p);
	 }
	 else{
		const deposit=document.getElementById('deposit-ammount');
		const depositAmmount=deposit.value;
		if(depositAmmount>=0)
		{
			deposit.value--;
		}
		else{
			deposit.value=0;
		}
		
	 }

})

	
   

   