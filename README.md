
## BRAIN BLITZ
The web application is a memory board game, where users can register an account, select a desired difficulty level and card theme, and enjoy the challenge of matching pairs of cards. Additionally, users can track their progress as their score is updated at the end of each game.
## Introduction
The Brain Blitz project is a simple game that tests and improves the player's memory skills. It involves flipping cards on a game board to find matching pairs of images. The project aims to provide an engaging and entertaining experience for players of all ages while helping them develop their cognitive abilities.
## Soft Skills to be Assessed:
The Memory Game project can help assess several soft skills such as memory, concentration, attention to detail, problem-solving, and decision-making. These skills are essential for everyday life, and the game can help players improve them in a fun and engaging way.
## All the possible ways to solve the puzzle
The game board for the Memory Game project contains an even number of cards with identical images. To play the game, the player has to flip over two cards to reveal their images. If the images match, the player scores a point and the cards remain face up. If the images do not match, the cards are flipped back face down, and the player has to try again.

One of the possible ways to solve the puzzle is to remember the location of each image and the card pairs that have already been flipped. This approach requires the player to have a good memory and attention to detail. Another way is to guess the location of the matching card pair, which is more random and less effective than the first approach.


## Steps to set up the project
    Clone the GitHub repository containing the memory game project to your local system.

    Install the required dependencies for the project by running the command npm install in your terminal from the project directory.

    Once the dependencies are installed, start the development server by running the command npm run dev in your terminal from the project directory.
    
    If the project starts without any errors, open your web browser and go to localhost:3000 to access the memory game website locally on your system.

It's important to note that these steps assume that you have Node.js and npm (Node Package Manager) installed on your system. If you don't have these tools installed, you'll need to download and install them first before following the above steps. Additionally, the specific commands and steps may vary depending on the project's structure and dependencies.
## Implemented Features

    Anyone with an email address can create an Id and password to participate in the game
    puzzle contains
        Minimum 5 clues
        Minimum 2 dead-ends
        Minimum 1 solution 
    All the progress / user data (eg - time taken by each user for every step, solution accuracy, etc.) depending on your puzzle requirements should be stored for every user

    On refreshing, from either browser or website, the puzzle should start from the same step or give the user an option to restart

    A dashboard for the admin where the progress of all the users can be tracked & analyzed
    
## Additional Features
User analytics (eg - time taken by each user for every step, solution accuracy, etc.) depending on your puzzle is stored and can be seen by the admin in the database

## Deployment

The project is Deployed using render .

The live Website => https://brainblitz.onrender.com

## Tech Used

HTML, CSS, MaterializeCSS, JS, React for front end

MongoDB, Express, Node, Mongoose for backend

Context API for state management

Nodemon and Concurrently for development

JWToken and Bcrypt for hashing passwords

Robohash for card images

Axios for image API requests

Render for deployment
