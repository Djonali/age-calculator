

function onSubmitClick(){  
  let  dataValid = checkValidity();
  if(dataValid){
    formResult();
  }
}

var days = document.getElementById('days');
var month = document.getElementById('month');
var year = document.getElementById('year'); 


function checkValidity(){      
    let dayOK = checkDays(days);
    let monthOK = checkMonth(month);
    let yearOK = checkYear(year);     
    if(dayOK && monthOK && yearOK){
        return true
    }else{
        return false;
    }
   
}

function checkDays(inputdays){
    let errorEl = document.getElementById('errorDayId');
    let daysVal = inputdays && inputdays.value ?  days.value : "";
    let labelEl = document.getElementById('lbday');
    if(daysVal == ''){      
        labelEl.classList.add('invalid');
        inputdays.classList.add('invalid');
        errorEl.removeAttribute('hidden');
        errorEl.innerText = "This field is required";
        return false;
      }else if(  1 > daysVal || daysVal > 31){
        labelEl.classList.add('invalid');
        days.classList.add('invalid');
        errorEl.removeAttribute('hidden');
        errorEl.innerText = "Must be a valid date";
        return false;
      }else{
        labelEl.classList.remove('invalid');
        errorEl.setAttribute('hidden', true);
        days.classList.remove('invalid');
        return true;
      }
}

function checkMonth(monthEL){
    let errorEl = document.getElementById('errorMonthId');
    let monthVal = monthEL && monthEL.value ?  monthEL.value : "";
    let labelEl = document.getElementById('lbmonth');
    if(monthVal == ''){      
        labelEl.classList.add('invalid');
        monthEL.classList.add('invalid');
        errorEl.removeAttribute('hidden');
        errorEl.innerText = "This field is required";
        return false;
      }else if(  1 > monthVal || monthVal > 31){
        labelEl.classList.add('invalid');
        monthEL.classList.add('invalid');
        errorEl.removeAttribute('hidden');
        errorEl.innerText = "Must be a valid date";
        return false;
      }else{
        labelEl.classList.remove('invalid');
        errorEl.setAttribute('hidden', true);
        monthEL.classList.remove('invalid');
        return true;
      }
}

function checkYear(yearEL){
    let errorEl = document.getElementById('errorYearId');
    let yearVal = yearEL && yearEL.value ?  yearEL.value : "";
    let labelEl = document.getElementById('lbyear');
    if(yearVal == ''){      
        labelEl.classList.add('invalid');
        yearEL.classList.add('invalid');
        errorEl.removeAttribute('hidden');
        errorEl.innerText = "This field is required";
        return false;
      }else if(  String(yearVal).length != 4 ){
        labelEl.classList.add('invalid');
        yearEL.classList.add('invalid');
        errorEl.removeAttribute('hidden');
        errorEl.innerText = "Must be a valid date";
        return false;
      }else{
        labelEl.classList.remove('invalid');
        errorEl.setAttribute('hidden', true);
        yearEL.classList.remove('invalid');
        return true;
      }
}


function formResult(){
  let daysEL = document.getElementById('daysText');
  let monthEL = document.getElementById('monthText');
  let yearEL = document.getElementById('yearText');
  let dob = new Date(parseInt(year.value), parseInt(month.value), parseInt(days.value));
  let now = new Date();
  let dobYear = dob.getYear();  
  let dobMonth = dob.getMonth();  
  let dobDate = dob.getDate();  
  
  let currentYear = now.getYear();  
  let currentMonth = now.getMonth();  
  let currentDate = now.getDate(); 

   //get years  
   let yearAge = currentYear - dobYear;
    //get months  
    if (currentMonth >= dobMonth)  
      //get months when current month is greater  
      var monthAge = currentMonth - dobMonth;  
    else {  
      yearAge--;  
      var monthAge = 12 + currentMonth - dobMonth;  
    }  
  
    //get days  
    if (currentDate >= dobDate)  
      //get days when the current date is greater  
      var dateAge = currentDate - dobDate;  
    else {  
      monthAge--;  
      var dateAge = 31 + currentDate - dobDate;  
  
      if (monthAge < 0) {  
        monthAge = 11;  
        yearAge--;  
      }  
    }  
    daysEL.innerText = dateAge;
    monthEL.innerText = monthAge;
    yearEL.innerText = yearAge; 

}


function onInputChange(value, event){
    let data = parseInt(value);
    let regExp  = /^\d+$/;
    if(!regExp.test(data)){
        event.preventDefault(); 
    }     
}