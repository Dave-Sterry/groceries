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
      $("#results").html("<li>" + uppercaseList[0] + "</li>" + "<li>" + uppercaseList[1] + "</li>" + "<li>" + uppercaseList[2] + "</li>" + "<li>" + uppercaseList[3] + "</li>" + "<li>" + uppercaseList[4] + "</li>" + "<li>" + uppercaseList[5] + "</li>");
    });
    event.preventDefault();
  });
});