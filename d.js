var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true)
request.send();
request.onload = function(){
    var data = JSON.parse(this.response);
    // var datas = data.population;
    var res = data.reduce((accumulator,data)=>{
                  return accumulator+data.population;
    },0)
    console.log(res);
}