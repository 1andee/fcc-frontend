getIndexToIns = (arr, num) => {

 arr.sort((a, b) => {
   return a - b;
 });

 let highestIndex = arr.length - 1;

 for (i = 0; i < arr.length; i++){
   if (arr[i] >= num) {
     return i;
   } else if (num > arr[highestIndex]) {
     return arr.length;
   };
 };

};

module.exports = getIndexToIns;
