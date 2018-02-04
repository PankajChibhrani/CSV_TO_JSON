const fs=require('fs')
const uuidv1=require('uuid/v1')
const path=require('path')

const filePath = path.join(__dirname, 'customer-data.csv');

fs.readFile(filePath,'utf-8',function(error,data){
	
	console.log(data)
data=data.split('\r\n') // \r is carriage return 

var headers=data.shift().split(",");



var json=[];
var j=0;
data.forEach(function(d){

var tmp={}

var row=d.split(",")

for(var i=0;i<headers.length;i++){
		tmp[headers[i]] =row[i];
	}

j++;
json.push(tmp)
})
console.log(j)
// remove 1 element from 1000th index
fs.writeFileSync(path.join(__dirname,'customer-data.json'),JSON.stringify(json,null," "))

console.log("Data has been written in directory "+__dirname)


})