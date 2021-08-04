var weight=[20,25,30,35,40];
var sum=0;
function averageweight(){
  sum=weight[0] + weight[1] + weight[2] + weight[3] + weight[4];
  var average=sum/weight.length;
  console.log(average);
}
function setup() 
{
  createCanvas(400,400);
  averageweight();
}

function draw() 
{
background(51);

}

