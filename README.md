https://crisarranz.github.io/proyect-street-ironter/index.html

The Street Fighter Vol. Ironhack is a fight game, two players (although you can play alone) fight between them during 60 seconds. If one of them loses all live then the other player win the match, also if the time is over, the match finish and both players loss.

The game is programming using JavaScript and using CANVAS for animate and draw the elements that appear in the game.

In the project we will have an index.html, this will be the main html where we saw the project, and the following folder structure:

- assets: This is the root folder, in this we will have all data necesary to run the project.

Inside assets we will have:
- images: Here we will have all images necessary to animate and draw in the project. We will pull apart in folders, depending the use of the image
- sounds: Here we will have all sounds necessary to play in the project. We will pull apart in folders the sounds of the characters and the common sounds, like selectedCharacter, will be directly inside in sounds folder
- styles: Here we will have all styles necessary, including font family imported and .css
- js: Here we will have all the logic in the project. We will have the following items:

constants.js: Here we will have all constants in the game (e.g: MATCH_DURATION, that have the time of the match)

index.js: Here we will have all logic that the user execute, all listeners to interact with the user

models (folder): Here we will have all classes necessary, we have the following elements:


frameImages.js: Here we will have an array of objects that contains the positions of each frame to draw the characters, background images (animated and non animated)

game.js: Here we will have the main file of this project, with this we will have the game working and drawing all items and give them the necessary utility

live.js: Here we will have the live of each character

message.js: Here we will have the message (KO or TIME OVER) when the match finish

special.js: Here we will have all logic to draw the special hability that the characters have.

timer.js: Here we will have the time of each match


drawler (folder): Here we will have all classes necessary to draw elements in canvas section, we pull apart in three classes:

picasso.js: This class have all methods necessary to draw the images

animatedSprite.js: This class extends of picasso and have all information logic to draw the items using draw method of the father.

staticSprite.js: This class extends of picasso and have all information logic to draw the items using draw method of the father.


background (folder): Here we will have all classes necessary to draw the backgrounds, we pull apart in two classes:

animatedBackground.js: This class extends of AnimatedSprite class and have all info necessary to pass the info to animate the sprites

staticBackground.js: This class extends of StaticSprite class and have all info necessary to pass the info to draw the sprites


characters (folder)

character.js: This class extends of AnimateSprite, it have all information to draw and give all methods to move and interact

ken.js: This class extends of Character, contains all information necessary to draw Ken character

ryu.js: This class extends of Character, contains all information necessary to draw Ryu character

chunli.js: This class extends of Character, contains all information necessary to draw Chunli character

honda.js: This class extends of Character, contains all information necessary to draw Honda character
