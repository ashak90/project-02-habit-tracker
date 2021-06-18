const addNewBtn=document.getElementById("addNewBtn"),logOutBtn=document.getElementById("logOutBtn"),habitTable=document.getElementById("habitTable"),handleTableClick=async a=>{const b=a.target.parentElement,c=b.dataset.id,d=b.dataset.type;if("delete"==d)return void handleDelete(b);if("reset"==d)return void handleReset(b);const e=b.childNodes[5],f=await fetch(`/api/habits/increment/${c}`,{method:"PUT"});if(f.ok){const a=await f.json();console.log(a),e.innerHTML=a.frequency,e.innerHTML==a.target_freq&&a.good_habit&&document.location.replace("/congrats"),e.innerHTML>a.target_freq&&!a.good_habit&&console.log("better luck next time")}else alert(f.statusText)},handleReset=async a=>{const b=a.parentElement.dataset.id,c=await fetch(`/api/habits/${b}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({frequency:0})});c.ok&&document.location.reload()},handleDelete=async a=>{const b=a.parentElement.dataset.id,c=await fetch(`/api/habits/${b}`,{method:"DELETE"});c.ok&&document.location.reload()};let date=new Date;document.getElementById("todayDate").innerHTML=date.toDateString(),addNewBtn.addEventListener("click",function(){window.location.href="/addHabit"}),logOutBtn.addEventListener("click",async function(){const a=await fetch("/api/users/logout",{method:"POST",headers:{"Content-Type":"application/json"}});a.ok?document.location.replace("/habits"):alert(a.statusText)}),habitTable.addEventListener("click",handleTableClick);