$(document).ready(function() {
  $("#formOne").submit(function(event){
    const list=[];
    list.push($("input#item1").val());
    list.push($("input#item2").val());
    list.push($("input#item3").val());
    list.push($("input#item4").val());
    list.push($("input#item5").val());
    list.push($("input#item6").val());
 
    list.sort();
    let uppercaseList =[];
    list.forEach(function(element) {
      uppercaseList.push(element.toUpperCase());
    });
    console.log(uppercaseList);
    event.preventDefault();
  });
});