/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {

  var buildBoards = function(size, first, arr1, arr2 ) {
  console.log("bb called");
  console.log('here: arr1Copy is: ' + arr1 + ' , arr2Copy is :' + arr2);

    var arr2Filtered = [];

    if ( ! first ) {
      var div = Math.floor(arr1[arr1.length - 1] / size);
      var mod = arr1[arr1.length - 1] % size;

      for ( var i = 0; i < arr2.length; i++ ){
        if ( arr2[i] !== div && arr2[i] !== mod ){
          arr2Filtered.push(arr2[i]);
        }
      }
    } else{
      arr2Filtered = arr2;
    }

    var count = arr2Filtered.length;

    for ( var i = 0 ; i < count; i++ ){
      var arr1Copy = arr1.slice();
      var arr2Copy = arr2Filtered.slice();
      
      arr1Copy.push(arr2Copy.shift());
      console.log('iteration no.' + i + ': arr1Copy is: ' + arr1Copy + ' , arr2Copy is :' + arr2Copy);

      if ( arr2Copy.length > 0 ) {
        console.log('recurse');
        buildBoards(size, false, arr1Copy, arr2Copy);
      } else if ( arr1Copy.length === size ){
        console.log(arr1Copy);
        var board = new Board({n: size});
        console.log('this is n: ' + board.get('n'));
        for ( var k = 0; k < arr1Copy.length; k++){
          board.rows()[Math.floor(arr1Copy[k]/size)][arr1Copy[k]%size] = 1;
        }
        if (! board.hasAnyRooksConflicts() ){
          console.log('board', JSON.stringify(board));
          throw board.rows();
        }
      }
      arr2.shift();
    }
  };

  try{
    buildBoards(n, true,[], _.range(0,Math.pow(n,2)));
  }catch (firstSolution){
     console.log("here go: " + firstSolution);
    solution = firstSolution;
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  
  var solutionCount = 0;

  // var buildBoards = function( size, first, arr1, arr2 ){

  //   var count = arr2.length;
    
  // console.log("arr1");
  // console.log(arr1);
  // console.log("arr2");
  // console.log(arr2);

  //   for ( var i = 0; i < count; i++ ) {
  //     var arr1Copy = arr1.slice();
  //     var arr2Copy = arr2.slice();

  //     arr1Copy.push(arr2Copy.shift());

  //     if ( arr1Copy.length === size ) {
  //     console.log("create board");
  //       var board = new Board({n: size});
  //       for ( var k = 0; k < size; k++ ){
  //         board.rows()[Math.floor( arr1Copy[k] / size )][ arr1Copy[k] % size ] = 1;
  //       }
  //     console.log("checking board");
  //     console.log(board);
  //       if ( ! board.hasAnyRooksConflicts() ) {
  //         solutionCount++;
  //       }
  //     } else {
  //       buildBoards(size, false, arr1Copy, arr2Copy);
  //     }
  //     arr2Copy.shift();
  //   }
  // };
  
  // buildBoards(n, true, [], _.range(0,Math.pow(n,2)));

   console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;

};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme
 console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme
 console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

// builds all possible board configurations for an n x n chess board
// window.boardCombos = function(size, arr1, arr2, first) {

//   var buildBoards = function( size, first, arr1, arr2){
//     var storage = [];

//     arr1 = arr1 || [];
//     arr2 = arr2 || _.range(Math.power(size,2));

//     var count = arr2.length;

//     for ( var i = 0; i < count; i++ ) {
//       var arr1Copy = arr1.slice();
//       var arr2Copy = arr2.slice();

//       arr1Copy.push(arr2Copy.shift());

      

//       if ( arr1Copy.length === size ){
//         var board = new Board ({n: size});
//         for ( var j = 0; j < size; j++ ) {
//           board.rows()[Math.floor( arr1Copy[j] / size )][ arr1Copy[j] % size ] = 1;
//         }
//         storage.push(board);
//       } else {
//         this.boardCombination(size, arr1Copy, arr2Copy, false);
//       }
//     }
//   };

//   boardCombinations(n, true);
// };


