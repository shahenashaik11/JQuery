function Display()
{
     var checkBox1=document.getElementById("check1");
     var checkBox2=document.getElementById("check2");
     var checkBox3=document.getElementById("check3");
     var checkBox4=document.getElementById("check4");
     

     
     document.getElementById("ShowFirstName").innerHTML=document.getElementById("name1").value;
     document.getElementById("ShowMark1").innerHTML=document.getElementById("mark1").value;
     document.getElementById("ShowMark2").innerHTML=document.getElementById("mark2").value;
     document.getElementById("ShowTotal").innerHTML=document.getElementById("total").value;
     document.getElementById("ShowGrade").innerHTML=document.getElementById("grade").value;
     document.getElementById("ShowCheck").innerHTML=document.getElementById("check").value;
     document.getElementById("ShowDOB").innerHTML=document.getElementById("DOB").value;
     document.getElementById("ShowCity").innerHTML=document.getElementById("City").value;
     
     

     if(checkBox1.checked==true)
     {
         document.getElementById("ShowVisited1").innerHTML=document.getElementById("check1").value;
     }
 
     if(checkBox2.checked==true)
     {
         document.getElementById("ShowVisited2").innerHTML=document.getElementById("check2").value;
     }
 
     if(checkBox3.checked==true)
     {
         document.getElementById("ShowVisited3").innerHTML=document.getElementById("check3").value;
     }
 
     if(checkBox4.checked==true)
     {
         document.getElementById("ShowVisited4").innerHTML=document.getElementById("check4").value;
     }
 
}
function addition()
{
    var mark1=parseInt(document.getElementById("mark1").value);
    var mark2=parseInt(document.getElementById("mark2").value);
    var total=mark1+mark2;
    
     document.getElementById("total").value=result;
}