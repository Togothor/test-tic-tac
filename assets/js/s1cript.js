/** -------------------------------------------------------------------------¦ 
 * Greetings , welcome to tic tac toe, student edition.**                    ¦
 *                                                                           ¦
 * Here i will explain the order of the code                                 ¦
 * and the functions therein.                                                ¦ 
 *                                                                           ¦
 * Above every function there's a info box                                   ¦
 * where one can read about how the functions works.                         ¦
 *                                                                           ¦
 * ** Top down order **                                                      ¦
 * It starts out with the creation of the game-area                          ¦              ¦
 * function createBoard.                                                     ¦
 *                                                                           ¦
 * Below comes the eventlistener which itself is not a function              ¦
 * but rather a method, which acts as a "middleman"                          ¦
 * that can connect events with each other.                                  ¦
 * This one listens for clicked boxes and calls/assign                       ¦
 * the function addMark for that specific box.                               ¦
 *                                                                           ¦
 * Which is the next function in line.                                       ¦
 *                                                                           ¦
 * addMark is the function that put the actual                               ¦
 * circles and crosses in place.                                             ¦
 *                                                                           ¦
 * Next is the function checkScore.                                          ¦
 * This function compares the index[cells] inside the arrays                 ¦
 * looking for a winning combination.                                        ¦
 *                                                                           ¦
 *                                                                           ¦
 * checkScore contains 3 more functions,                                     ¦
 * but these functions looks abit different from the standard (function)     ¦
 * and you will recognize them by this look (=>)                             ¦
 * the name before is the name of the function                               ¦
 * is looking a bit different, that is the                                   ¦
 *                                                                           ¦
 *                                                                           ¦
 * Also gives the signal for a winning combination or a draw.                ¦
 *                                                                           ¦
 *                                                                           ¦
 *                                                                           ¦
 *                                                                           ¦
 *                                                                           ¦
 *                                                                           ¦
 *                                                          (❁´◡`❁)        ¦
 *                                                        *Happy mascot*     ¦
 ----------------------------------------------------------------------------*/

 /** Here lives varables-------------------------------------------------*/
  const container = document.getElementById("grid-container");       
  //const playerOneScore = document.getElementById("playerOneScore");
  //const playerTwoScore = document.getElementById("playerTwoScore");

  /**__Starting player__------------------------------------------------ */
  let player = "circle";
  playerTurnDisplay.textContent = "Circle goes first";
 /**---------------------------------------------------------------------*/
 
 /** Creating a grid--------------------------¦
 * The grid is made out of 3 columns          ¦
 * Each column gets a class ="column"         ¦
 * where each contains 3 divs                 ¦
 * Each div gets a class ="box"               ¦
 * All of whitch sits inside the              ¦
 * columnContainer with id= "columnContainer" ¦
 *                                            ¦
 * Each box get uniqe id. *good to have*      ¦
 * // like this //                            ¦
 * "0-0", "1-0", "2-0"                        ¦
 * "0-1", "1-1", "2,1"                        ¦
 * "0-2", "1-2", "2-2"                        ¦
 *                                            ¦
 *                                            ¦
 *--------------------------------------------*/
    function createBoard() {
        const columnContainer = document.createElement("div");
            columnContainer.id= "columnContainer";
               container.appendChild(columnContainer)


        for (let i = 0; i < 3; i++) {
          const column = document.createElement("div");                      // Creates *3 columns horisontally.
            column.classList.add("column");                                    // Add class="column"

          for (let j = 0; j < 3; j++) {
          const box = document.createElement("div");                       // Creates *3 divs in the columns vertically.
            box.classList.add("box");                                        // Add class="box"
              box.setAttribute("id", `${i}-${j}`);                             // Assigns Id to all divs inside the columns.
                column.appendChild(box);                                         // Appends the child(box) to its parent (column)
        }

  columnContainer.appendChild(column);                                     // Appends the child(column) to its parent (columnContainer)



/**Event listener--------------------------------------------¦
 * A eventListener itself is not a function                  ¦
 * but rather a method, which acts as a "middleman"          ¦
 * that can connect events with each other.                  ¦
 * This one listens for clicked boxes and calls/assign       ¦
 * the function addMark for that specific box.               ¦
 *                                                           ¦
 *                                                           ¦
-------------------------------------------------------------*/
        const boxes = document.querySelectorAll(".box");
          boxes.forEach(box => {
            box.addEventListener('click', addMark)                             // The eventlistener triggers a event(function) that is called addMark
                                                        
 
              // Uncomment eventlistener below* to log the 'event' =id of the individual box.

              /* box.addEventListener("click", e => {
              console.log(`Box ${box.id} has been clicked`);                   
              });  */
          });
    
 }} /** Closing tag for function createBoard ---------------------*/

 /* CREATE BOARD */
 createBoard();                  // Calls createBoard function.


 /** function addMark----------------------------------------¦
 * When this function is triggered by eventListener 'click'  ¦
 * it creates a new div inside the clicked "box'div"         ¦
 * depending on whos turn it is, it will mark                ¦
 * the box with either a cross or circle                     ¦
 * that shows up on the screen created from a style.css      ¦                                ¦
 *                                                           ¦
 * It will also add textContent to the playerTurnDisplay'div'¦ 
 * and tell players whos turn it is.                         ¦
 ____________________________________________________________*/
  function addMark(e) {
    const markDisplay = document.createElement('div')                  // Creates the div containing the circle or cross.
      markDisplay.classList.add(player)                                  // Inserts the "starting player": string ='circle'
        e.target.append(markDisplay)                                       // Adds a div inside the clicked div class='box' (contains circle or cross)
          player = player === "circle" ? "cross" : "circle"                  // If player ="circle" is true, then add a player ="cross", if not , add circle. Assigning cross or circle to the player string.
            playerTurnDisplay.textContent = "it is now " + player + "'s turn." // Updates playerturn display in html.
              e.target.removeEventListener("click", addMark)                     // removes the ability to click the same box again.
                checkScore()                                                       // calls checksScore function.
  }



  /** function checkScore ------------------------------¦
  * function contains total of 8 arrays,                ¦
  * each filled with one possible winning combination.  ¦
  *-----------------------------------------------------*/
  function checkScore() {
    const allBoxes = document.getElementsByClassName("box")   // Assign all boxes with the class= "box" to an variable called allBoxes.
    const winningCombo = [                                       // Arrays with uniqe indexes where every index is a box position.
      //vertical
      [0,1,2],
      [3,4,5],
      [6,7,8],

      //horisontal                
      [0,3,6],
      [1,4,7],
      [2,5,8],

      //diagonal
      [0,4,8],
      [2,4,6]

    ]

     /*console.log(allBoxes[4])*/ // if it logs box [4] even if another box is clicked. * just to see if the arrays works.*
    

     /** winningCombo-------------------------------------------------------------¦
     * This function listens inside the firstChild of the ('box'> allBoxes)       ¦
     * first child is either a div with class= "circle" or "cross"                ¦
     * if the function finds that a whole array if filled it turns true.          ¦
     *                                                                            ¦
     *             *** Now we have a winner. ***                                  ¦
     *                                                                            ¦
     * If any player wins it calls playerTurnDisplay and updates the textcontent  ¦
     * with the winners message!                                                  ¦
     *                                                                            ¦
     * ///////////////////////////////////////////////////////////////////////////¦
     * After the winner is celebrated.                                            ¦
     *                                                                            ¦
     * The whole game-area is cleared with the clearing of the "grid-container"   ¦
     * "equalisation" happens when container.innerHTML = ""; is called upon.      ¦
     * Which empties all strings.                                                 ¦
     * A new game can begin !  >> createBoard()                                   ¦
     *____________________________________________________________________________*/                                                                         

     winningCombo.forEach(array => {
          const circleWins = array.every(cell =>                            // Listens circle wins if every cell in one of the arrays conains a circle.
             allBoxes[cell].firstChild?.classList.contains('circle'))         // listens for a child with (class='circle') inside the div(class='box')

              if (circleWins) {
                  playerTurnDisplay.textContent= "Circle Wins!!!"//   ╰(*°▽°*)╯  Congrats!
                     container.innerHTML = "";                                     // clear the container's HTML as in > everything within the "grid-container".     
                        createBoard();
                            return ;       
            }
      })
  
     winningCombo.forEach(array => {
          const crossWins = array.every(cell =>
              allBoxes[cell].firstChild?.classList.contains('cross'))
                  
              if (crossWins) {
                  playerTurnDisplay.textContent= "Cross Wins!!!"//     ☜(ﾟヮﾟ☜)  Congrats!
                      container.innerHTML = ""; 
                          createBoard();
                              return ;    
              }
      })
   
          const boxesArray = Array.from(allBoxes);                         // Creates an element containing an array made up from all boxes.
              
          if (boxesArray.every(box => box.firstChild !== null)) {                        // checks if every box in boxesArray has been clicked.
                  playerTurnDisplay.textContent = "OMG! It's a draw!";//      ¯\_(ツ)_/¯ well well well..
                      container.innerHTML = "";
                          createBoard()
                            return ;
          }

  } //**__Closing tag for check score function__*/