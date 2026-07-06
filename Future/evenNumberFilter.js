const a=[12,7,4,7,9,3,2,8,6,7,21];
const number=[];
for (let i=0;i<a.length;i++){
    if(a[i]%2===0){
        number.push(
            a[i]
        )
    }
}
console.log("Even Numbers:", number);
console.log("Length of Even Numbers:", number.length);