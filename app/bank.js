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

// withdraw 

document.getElementById('withdraw-button').addEventListener('click',function(){
	const withdraw=document.getElementById('withdraw-ammount');
	const newwithdrawAmmount=withdraw.value;
	const withdrawTotal=document.getElementById('withdraw-total');
	const previouswithdrawTotal=withdrawTotal.innerText;
	const total=document.getElementById('balance');
	const previousBalance=total.innerText;

   if(isNaN(newwithdrawAmmount)){
	  const p= document.createElement('small');
	   p.innerText='please enter a valid ammount!'
	   p.style.color='red';
	   const errorP=document.getElementById('error');
	   errorP.appendChild(p);
   }
   else{
	const totalwithdraw=parseFloat(newwithdrawAmmount)+parseFloat(previouswithdrawTotal);
	withdrawTotal.innerText=totalwithdraw;
	const totalbalance =parseFloat(previousBalance)-parseFloat(newwithdrawAmmount);
	total.innerText=totalbalance;
	 withdraw.value=null;
 
   }
}) 
document.getElementById('plusW').addEventListener('click',function(){
	const withdraw=document.getElementById('withdraw-ammount');
	const withdrawAmmount=withdraw.value;
	if(isNaN(withdrawAmmount)){
		const p= document.createElement('small');
		 p.innerText='please enter a valid ammount!'
		 p.style.color='red';
		 const errorP=document.getElementById('error');
		 errorP.appendChild(p);
	 }
	 else{
		const withdraw=document.getElementById('withdraw-ammount');
		const depositAmmount=withdraw.value;
		withdraw.value++;
		
	 }

})

// minus

document.getElementById('minusW').addEventListener('click',function(){
	const withdraw=document.getElementById('withdraw-ammount');
	const withdarwAmmount=withdraw.value;
	if(isNaN(withdarwAmmount)){
		const p= document.createElement('small');
		 p.innerText='please enter a valid ammount!'
		 p.style.color='red';
		 const errorP=document.getElementById('error');
		 errorP.appendChild(p);
	 }
	 else{
		const withdarw=document.getElementById('withdarw-ammount');
		const withdrawAmmount=withdraw.value;
		if(withdrawAmmount>=0)
		{
			withdraw.value--;
		}
		else{
			withdraw.value=0;
		}
		
	 }

})
	
   

   