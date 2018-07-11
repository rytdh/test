function sayhello(){
	alert("welcome to Javascript World!");
}
	var n1,n2;
function inputdata(){

	n1=parseInt(prompt("Enter first number"));
	n2=parseInt(prompt("Enter second number"));
}
	function add(){
		inputdata();
			a=n1+n2;
	document.write("<br><h1>The sum is" + a + "</h1>");
}
function sub(){
	inputdata();
	s=n1-n2;
	document.write("<br><h1>The diffrence is" + s + "</h1>")
}
function validateForm(){
	//alert("Validation Form");
	var user,pass;
	user=document.getElementById('user').value
	pass=document.getElementById('pass').value
	//alert("user=" + user + "password=" + pass);
if(user=="" && pass==""){
document.getElementById("error").innerHTML="Error Please fill all the fields";
return false;
}
else if(user==""){
document.getElementById("error").innerHTML="Error Please fill the username";
return false;
}
else if(pass==""){
document.getElementById("error").innerHTML="Error Please fill the password";
return false;
}
else{
	if(user=='admin' && pass=='admin')
	{
		window.location="http://www.youtube.com"
	}
	else{
		document.getElementById('error').innerHTML="Error password mismatch"
	return false;
	}
	return false;
}
return;
//value tanna lai .value lekhna parcha
	//while calling the java script we have to use the camel case i.e small front back large get is small after that every word has captial in first letter
	//(pascal case is all word have first word capital eg ValidateForm())
}
