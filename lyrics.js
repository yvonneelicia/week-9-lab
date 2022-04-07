function count(){
	for (i=99; i>=2; i-1){
			document.getElementById("main").innerHTML+="<br />" +i+ " bottles of beer on the wall," +i+ "bottles of beer, Take one down and pass it around " +(i-1)+ " bottles of beer on the wall";
		if (i==1){
			document.getElementById("main").innerHTML+="<br />" +i+ "bottle of beer on the wall, "+i+ " bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.";

		}
		else{
			if (i==0)
			document.getElementById("main").innerHTML+= "<br/ > No more bottles of beer on the wall, no more bottles of beer, Go to the store and buy more, 99 bottles of beer on the wall";
		}
	}
}


