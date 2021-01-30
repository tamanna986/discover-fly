<script>
   document.getElementById("Economy-IncreaseBtn").addEventListener("click",function(){
      productChangeHandle("EconomySeat-count",true);
  });

  document.getElementById("Economy-DecreaseBtn").addEventListener("click",function(){
   productChangeHandle("EconomySeat-count",false);
  });

  document.getElementById("First-Class-IncreaseBtn").addEventListener("click",function(){
      productChangeHandle("First-ClassSeat",true);
  });

  document.getElementById("First-Class-DecreaseBtn").addEventListener("click",function(){
   productChangeHandle("First-ClassSeat",false);
  });
function productChangeHandle(travelClass,IsIncrease){
   //console.log(IsIncrease);

   const seatCount = document.getElementById(travelClass + "-count");
   const seatCountNumber = parseInt(seatCount.value);
   let seatNewCount = seatCountNumber;
   if(IsIncrease == true){
      seatNewCount = seatCountNumber+1;
   }
   if( IsIncrease == false && seatCountNumber>0){
      seatNewCount = seatCountNumber-1;

   }
   seatCount.value  =  seatNewCount;
   let totalPrice = 0;

   //const caseTotal = caseNewCount* 59;
    if(travelClass == "First-ClassSeat"){
        totalPrice = seatNewCount* 150;
}

if(travelClass == "EconomySeat"){
    totalPrice = seatNewCount* 100;
}
//console.log(caseTotal);
   document.getElementById(travelClass + "-price").innerText =  totalPrice;
}


</script>
