var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true)
request.send();
request.onload = function(){
    var countryData = JSON.parse(this.response);
    
let countriesUsingUsDollars = countryData.filter((x) => { for (let curr in x.currencies) 
    { if (x.currencies[curr].code == 'USD') 
{ return true; }
 }
 }).map(x => console.log(x.name));
}