studentarray = [];

function submit() {
    studentarray.push(document.getElementById("Studentname1").value);
    studentarray.push(document.getElementById("Studentname2").value);
    studentarray.push(document.getElementById("Studentname3").value);
    studentarray.push(document.getElementById("Studentname4").value);
    document.getElementById("theirnames").innerHTML = studentarray;
    document.getElementById("button1").style.display = "none";
    document.getElementById("button2").style.display = "inline-block";
}


function sorting() {
 studentarray.sort();
 document.getElementById("theirnames").innerHTML= studentarray;
}