function threeMaxThreeMin(N,arr){
    //write code here
arr.sort((a,b)=>a-b);
let minMax=[];
let count=0;

for(let i=0;i<N;i++){
  if(i==0||arr[i]!=arr[i-1]){
    minMax.push(arr[i])
  }
}
let x=minMax.length;
if (x>=6){
  console.log(minMax[0],minMax[1],minMax[2]);
  console.log(minMax[x-3],minMax[x-2],minMax[x-1]);
}
else{
  console.log("Not Possible");
  console.log("Not Possible")
}
}
