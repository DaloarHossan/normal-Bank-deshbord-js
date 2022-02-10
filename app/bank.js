document.getElementById('deposit-button').addEventListener('click',function(){
	const deposit=document.getElementById('deposit-ammount');
	const newdepositAmmount=deposit.value;
	const depositTotal=document.getElementById('deposit-total');
	const previousdepositTotal=depositTotal.innerText;
	const total=document.getElementById('balance');
	const previousBalance=total.innerText;

   if(isNaN(newdepositAmmount)){
	  const p= document.createElement('small');
	   p.innerText='please enter a valid ammount!'
	   p.style.color='red';
	   const errorP=document.getElementById('error');
	   errorP.appendChild(p);
   }
   else{
	const totalDeposit=parseFloat(newdepositAmmount)+parseFloat(previousdepositTotal);
	depositTotal.innerText=totalDeposit;
	const totalbalance =parseFloat(newdepositAmmount)+parseFloat(previousBalance);
	total.innerText=totalbalance;
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

	
   

   