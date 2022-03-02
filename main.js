name_of_the_guest_array=[];
function submit_button(){
   var display_guest_array=[];
   for (var j=1;j<=4;j++)
   {
       var name_of_the_guest=document.getElementById("name_of_the_guest_"+j).value;
       console.log("name_of_the_guest");
       name_of_the_guest_array.push(name_of_the_guest);
   }

    console.log(name_of_the_guest_array);
    var length_of_name_of_guest_array=name_of_the_guest_array.length;
    console.log(length_of_name_of_guest_array);

    for( var k=0;k<length_of_name_of_guest_array;k++)
    {
display_guest_array.push("<h4> NAME- "+name_of_the_guest_array[k]+"</h4>");
   console.log(display_student_guest);
}
   console.log (display_student_guest);
  

    document.getElementById("submit_button").style.display="none"; 
    document.getElementById("sort_button").style.display="inline-block";

function sort()
{
    name_of_the_student_guest.sort();
    console.log(name_of_the_student_guest);
    document.getElementById("display_name").innerHTML=name_of_the_student_guest;
}}
