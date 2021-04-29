var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true)
request.send();
request.onload = function(){
    var data = JSON.parse(this.response);
    var res = data.forEach((element) => {
        console.log(element.name,element.capital,element.flag);
            });
}