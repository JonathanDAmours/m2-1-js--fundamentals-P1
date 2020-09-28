function exercise11() {
  // Exercise 11
  //
  // Write a program that creates a string that represents an 8×8 grid,
  // using newline characters to separate lines. At each position of the grid
  // there is either an "_" or a "#" character. The characters should form a chessboard.
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------

    // find out if row is even or odd. 
    // First loop (Rows)
    // index of Characters to know if even or odd.
    // if i % 2 === 0 (even) if not odd.    \n  
    // if % 8 ===0 new line


    let char = "";
    for (let i = 0; i <= 8; i++) {
      for (let x = 0; x < 8; x++) {
        if ((x + i) % 2 == 0)
          char += "#";
        else
          char += "_";
      }
      char += "\n";
    }
    
    console.log(char);
    




  // -----------------------------------------------------------------
  // Write code between the lines (above)
  //
  //
  //
  //
  //
  //
}

// Once you are done type the following in the terminal to test your answer(s).
// yarn test exercise-11

module.exports = exercise11;
