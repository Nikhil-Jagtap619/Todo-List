//Question 2
function Addition()
{
	var ele = document.getElementsByClassName("add");
	var c =ele[0].value + ele[1].value;
	console.log(c);
}





//Question 1
/* We can access DOM via many method such as html tags, classname, id, type, all the html attributes 
by using document.getElementsByClassname("name of the class"); or document.getElementById(""); here you see there is 
only single element fetched, so doesnt become an array otherwise when you fetch elements they var become an array and to access them
you use arrayname[index number]; you can even change them without altering html codes, thats why DOM is for. */