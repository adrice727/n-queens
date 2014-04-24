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

  var buildBoards = function( size, first, arr1, arr2 ){

    // arr1 = arr1 || [];
    // arr2 = arr2 || _.range(0, Math.power(size,2));

    var count = arr2.length;

    for ( var i = 0; i < count; i++ ) {
      var arr1Copy = arr1.slice();
      var arr2Copy = arr2.slice();

      arr1Copy.push(arr2Copy.shift());

      if ( arr1Copy.length === size ){
        var board = new Board ({n: size});
        for ( var j = 0; j < size; j++ ) {
          board.rows()[Math.floor( arr1Copy[j] / size )][ arr1Copy[j] % size ] = 1;
        }
        if ( !board.hasAnyRookConflicts() ){
          return board;
        }
      } else {
        this.boardCombination(size, false, arr1Copy, arr2Copy);
      }
    }
  };

  var solution = buildBoards(n, true, [], _.range(0, Math.power(n,2)));
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;

  var buildBoards = function( size, first, arr1, arr2 ){

    // arr1 = arr1 || [];
    // arr2 = arr2 || _.range(0, Math.power(size,2));

    var count = arr2.length;

    for ( var i = 0; i < count; i++ ) {
      var arr1Copy = arr1.slice();
      var arr2Copy = arr2.slice();

      arr1Copy.push(arr2Copy.shift());

      if ( arr1Copy.length === size ){
        var board = new Board ({n: size});
        for ( var j = 0; j < size; j++ ) {
          board.rows()[Math.floor( arr1Copy[j] / size )][ arr1Copy[j] % size ] = 1;
        }
        if ( !board.hasAnyRookConflicts() ){
          solutionCount++;
        }
      } else {
        this.boardCombination(size, false, arr1Copy, arr2Copy);
      }
    }
  };
  
  buildBoards(n, true, [], _.range(0, Math.power(n,2)));

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
window.boardCombos = function(size, arr1, arr2, first) {

  var buildBoards = function( size, first, arr1, arr2){
    var storage = [];

    arr1 = arr1 || [];
    arr2 = arr2 || _.range(Math.power(size,2));

    var count = arr2.length;

    for ( var i = 0; i < count; i++ ) {
      var arr1Copy = arr1.slice();
      var arr2Copy = arr2.slice();

      arr1Copy.push(arr2Copy.shift());

      

      if ( arr1Copy.length === size ){
        var board = new Board ({n: size});
        for ( var j = 0; j < size; j++ ) {
          board.rows()[Math.floor( arr1Copy[j] / size )][ arr1Copy[j] % size ] = 1;
        }
        storage.push(board);
      } else {
        this.boardCombination(size, arr1Copy, arr2Copy, false);
      }
    }
  };

  boardCombinations(n, true);
};


