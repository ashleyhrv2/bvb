window.addEventListener("load",addListener);

function addListener()
{
	document.getElementById("btnsubmit").addEventListener("click",Uselocal);
}

function UseLocal()
{
	localStorage.clear();
	fname = document.getElementById("txtfname").value;
	localStorage.setItem("firstname")
}