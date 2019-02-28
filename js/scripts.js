//bussiness logic
function Account(name, deposit){
  this.name= name;
  this.deposit=deposit
}

//ui logic
$(document).ready(function(){
  $("form#new-contact").submit(function(event){
    event.preventDefault();

    var inputtedName=$("input#new-name").val()
    var inputtedDeposit=$("input#new-deposit").val()

    var newAccount = new Account(inputtedName, inputtedDeposit);
    $("ul#accounts").append("<li><span class='account'>" + newAccount.name + "</span></li>");

    $("input#new-name").val("");
    $("input#new-deposit").val("");
  });

});
