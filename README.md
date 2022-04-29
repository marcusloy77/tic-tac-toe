# Tic Tac Toe

<a href="https://marcusloy77.github.io/tic-tac-toe">Click here to play the game! </a>

Project Plan:

1. HTML Skeleton - plan is is to create a set of boxes, then align them with grid. this will then have 'players' next to it. The boxes will all have both an ID and a class. These ids and classes will be the main point of interaction with the js code.

2. JS code. the main logic that works here is creating a board object for the game state, then modifying this game state using listeners for when the boxes are clicked. The board has keys that are identical to the IDs in the box divs. This allows for ease of editing each div to add the X or O to indicate the player has clicked on it.

So far it includes functions that each independently; Check if the board is full, check if either player has achieved a victory combination, check if a move is legal, declare a winner using DOM, declare a draw using DOM, restart the game by resetting all the variables, and finally the main function, which is what is running every other funciton when something is clicked

The main function works by
  1. checking the class of what is clicked, and if it is a square, proceeding.
  2. checking the gamestate to see if the click should do anything with gameFinished (bool) and boardFull (bool function)
  3. checking if the box that was clicked already has an assigned value - if so do nothing, otherwise;
  4. changing both the DOM to the player character (X or O) and the board state to reflect this change
  5. evalBoard is then run to check if the game is finished - it does this through a series of switch statements
  6. if it is finished, the winner is declared and the gameFinished bool is set to true
  7. if the board is full and the game is not 'finished', a draw is declared
  8. finally, the player move is switched each click.


3. CSS Plan - this is a slightly looser plan, but I want a street fighter theme. I'm gonna see what gifs and such are avaliable for attacks, to be played when someone clicks. I'll also add some stages in the background.

4. Further plans - I want to as an extension add a computer with variable difficulty. My plan so far for this is to hardcode in some responses, possibly utilising the fact that the game is symmetrical to reduce the amount of code. The best resonses to this game are fairly simple, so I'll set a difficulty called impossible which always makes moves that lead to either a draw or a win. I'll then move down from there, and add a menu to allow the player to choose what difficulty.





Cool Tech
