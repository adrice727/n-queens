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
  var solution = undefined;
  var boardCombinations = function(arr1, arr2, num, first){


    if(!first){
      var arr2Filtered = [];
      //purging of numbers with same Math.floor(k/num) & k%num
      var div = Math.floor(arr1[arr1.length - 1] / num);
      var mod = arr1[arr1.length - 1] % num;
      for(var i = 0; i < arr2.length; i++){
        if ( Math.floor(arr2[i] / num) !== div && arr2[i] % num !== mod){
          arr2Filtered.push(arr2[i]);
        }
      }
    }else{
      var arr2Filtered = arr2;
    }

    //console.log('here: clonedArr1 is: ' + arr1 + ' , clonedFilteredArr2 is :' + arr2Filtered);

    var count = arr2Filtered.length;

    for ( var i = 0 ; i < count; i++ ){
      var arr1Copy = arr1.slice();
      var arr2Copy = arr2Filtered.slice();
      arr1Copy.push(arr2Copy.shift());
      //console.log('iteration no.' + i + ': arr1Copy is: ' + arr1Copy + ' , arr2Copy is :' + arr2Copy);

      if ( arr2Copy.length > 0 ){
        boardCombinations(arr1Copy, arr2Copy, num, false);
      } else if ( arr1Copy.length === num ){
        //insert chess to board here according to arr1Copy

        var board = new Board({n:num});
        //console.log('this is n: ' + board.get('n'));
        for ( var k = 0; k < arr1Copy.length; k++){
          board.rows()[Math.floor(arr1Copy[k]/num)][arr1Copy[k]%num] = 1;
        }
        if (! board.hasAnyRooksConflicts()){
          //console.log('board', JSON.stringify(board));
          throw board.rows();
        }
      }
      filteredArr2.shift();
    }
  };

  try{
    boardCombinations([], _.range(0,Math.pow(n,2)),n, true);
  }catch (firstSolution){
    //console.log(solution);
    solution = firstSolution;
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var boardCombinations = function(arr1, arr2, num, first){


    if(!first){
      var arr2Filtered = [];
      //filtering of numbers with same Math.floor(k/num) i.e same row & k%num i.e. same column
      var div = Math.floor(arr1[arr1.length - 1] / num);
      var mod = arr1[arr1.length - 1] % num;
      for(var i = 0; i < arr2.length; i++){
        if ( Math.floor(arr2[i] / num) !== div && arr2[i] % num !== mod){
          arr2Filtered.push(arr2[i]);
        }
      }
    }else{
      var arr2Filtered = arr2;
    }

    //console.log('here: clonedArr1 is: ' + arr1 + ' , clonedFilteredArr2 is :' + arr2Filtered);

    var count = arr2Filtered.length;

    for ( var i = 0 ; i < count; i++ ){
      var arr1Copy = arr1.slice();
      var arr2Copy = arr2Filtered.slice();
      arr1Copy.push(arr2Copy.shift());
      //console.log('iteration no.' + i + ': arr1Copy is: ' + arr1Copy + ' , arr2Copy is :' + arr2Copy);

      if ( arr2Copy.length > 0 ){
        boardCombinations(arr1Copy, arr2Copy, num, false);
      } else if ( arr1Copy.length === num ){
        //insert chess to board here according to arr1Copy

        var board = new Board({n:num});
        for ( var k = 0; k < arr1Copy.length; k++){
          board.rows()[Math.floor(arr1Copy[k]/num)][arr1Copy[k]%num] = 1;
        }
        if (! board.hasAnyRooksConflicts()){
          //console.log('board', JSON.stringify(board));
          solutionCount++;
        }
      }
      arr2Filtered.shift();
    }

  };
  boardCombinations([], _.range(0,Math.pow(n,2)),n, true);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};


// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme
  var boardCombinations = function(arr1, arr2, num, first){


    if(!first){
      var arr2Filtered = [];
      //filtering of numbers with same Math.floor(k/num) i.e same row & k%num i.e. same column
      var x1 = Math.floor(arr1[arr1.length - 1] / num);
      var y1 = arr1[arr1.length - 1] % num;
      var sum1 = x1 + y1;
      var diff1 = x1 - y1;
      for(var i = 0; i < arr2.length; i++){
        var x2 = Math.floor(arr2[i] / num);
        var y2 = arr2[i] % num;
        var sum2 = x2 + y2;
        var diff2 = x2 - y2;
        if ( x1 !== x2 && y1 !== y2 && sum1 !== sum2 && diff1 !== diff2){
          arr2Filtered.push(arr2[i]);
        }
      }
    }else{
      var arr2Filtered = arr2;
    }

    //console.log('here: clonedArr1 is: ' + arr1 + ' , clonedFilteredArr2 is :' + arr2Filtered);

    var count = arr2Filtered.length;

    for ( var i = 0 ; i < count; i++ ){
      var arr1Copy = arr1.slice();
      var arr2Copy = arr2Filtered.slice();
      arr1Copy.push(arr2Copy.shift());
      //console.log('iteration no.' + i + ': arr1Copy is: ' + arr1Copy + ' , arr2Copy is :' + arr2Copy);

      if ( arr2Copy.length > 0 ){
        boardCombinations(arr1Copy, arr2Copy, num, false);
      } else if ( arr1Copy.length === num ){
        //insert chess to board here according to arr1Copy

        var board = new Board({n:num});
        //console.log('this is n: ' + board.get('n'));
        for ( var k = 0; k < arr1Copy.length; k++){
          board.rows()[Math.floor(arr1Copy[k]/num)][arr1Copy[k]%num] = 1;
        }
        throw board.rows();
      }
      arr2Filtered.shift();
    }
  };

  try{
    boardCombinations([], _.range(0,Math.pow(n,2)), n, true);
  }catch (firstSolution){
    //console.log(solution);
    solution = firstSolution;
  }

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// // return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var boardCombinations = function(arr1, arr2, num, first){


    if(!first){
      var filteredArr2 = [];
      //filtering of numbers with same Math.floor(k/num) i.e same row & k%num i.e. same column
      var x1 = Math.floor(arr1[arr1.length - 1] / num);
      var y1 = arr1[arr1.length - 1] % num;
      var sum1 = x1 + y1;
      var diff1 = x1 - y1;
      for(var i = 0; i < arr2.length; i++){
        var x2 = Math.floor(arr2[i] / num);
        var y2 = arr2[i] % num;
        var sum2 = x2 + y2;
        var diff2 = x2 - y2;
        if ( x1 !== x2 && y1 !== y2 && sum1 !== sum2 && diff1 !== diff2){
          filteredArr2.push(arr2[i]);
        }
      }
    }else{
      var filteredArr2 = arr2;
    }

    //console.log('here: clonedArr1 is: ' + arr1 + ' , clonedFilteredArr2 is :' + filteredArr2);

    var count = filteredArr2.length;

    for ( var i = 0 ; i < count; i++ ){
      var arr1Copy = arr1.slice();
      var arr2Copy = filteredArr2.slice();
      arr1Copy.push(arr2Copy.shift());
      //console.log('iteration no.' + i + ': arr1Copy is: ' + arr1Copy + ' , arr2Copy is :' + arr2Copy);

      if ( arr2Copy.length > 0 ){
        boardCombinations(arr1Copy, arr2Copy, num, false);
      } else if ( arr1Copy.length === num ){
        //insert chess to board here according to arr1Copy

        var board = new Board({n:num});
        for ( var k = 0; k < arr1Copy.length; k++){
          board.rows()[Math.floor(arr1Copy[k]/num)][arr1Copy[k]%num] = 1;
        }
        if (! board.hasAnyQueensConflicts()){
          //console.log('board', JSON.stringify(board));
          solutionCount++;
        }
      }
      filteredArr2.shift();
    }

  };
  boardCombinations([], _.range(0,Math.pow(n,2)),n, true);

  //console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};