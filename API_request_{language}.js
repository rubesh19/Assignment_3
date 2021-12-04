var request = new XMLHttpRequest();

request.open('GET','GET https://api.countrylayer.com/v2/language/{language}?access_key=ba1b6faea17e612a135eafbfc10a69f1');

request.send();

request.onload = function(){
    var data = JSON.parse(this.response);
    console.log(data);  
}   
 