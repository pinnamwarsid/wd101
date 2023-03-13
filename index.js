let userform= document.getElementById("user-fora");
const retrieveentrie=()=> { 
  let entries = localStorage.getItem("user-entries");
  if (entries){
    entries = JSON.parse(entries);
  } else{
    entries=[];
  }
  return entries;
}
let userEnteries = retrieveentrie();

const displayEntries =()=>{
  const entries = retrieveEntries();



   const tableEntries=entries.map((entry) =>{
    const nameCell = '<td class=',border px-4 py-2'>${entry.name}</td>';
    const emailCell = '<td class=',border px-4 py-2'>${entry.email}</td>';
    const passwordCell = '<td class='border px-4 py-2'>${entry.password}</td>';
    const dobCell = '<td class='border px-4 py-2'>${entry.dob}</td>';
    const acceptTermsCell = '<td class='border px-4 py-2'>${entry.acceptTermsAndconditions}</td>';

    const row='<tr>${nameCell} ${emailCell} ${passwordCell} ${dobCell} ${acceptTermsAndconditions}</tr>';
    return row;
  }).join()
  }
  const saveUserForm =(Event) =>{
    Event.preventDefault();
    const name=document.getElementById("name").Value;
    const email=document.getElementById("email").Value;
    const password=document.getElementById("password").Value;
    const dob=document.getElementById("dob").Value;

    const acceptTermsAndconditions=document.getElementById("acceptTerms").ariaChecked;
    const entry={
      name,
      email,
      password,
      dob,
      acceptTermsAndconditions

    };
    userEnteries.push(entry);
    localStorage.setItem("user-entries",JSON.stringify(userEntries));
    displayEntries();
    

  }
  userform.addEventListener("submit",saveUserForm);
  displayEntries();
