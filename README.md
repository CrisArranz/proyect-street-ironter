https://crisarranz.github.io/proyect-street-ironter/index.html

The Street Fighter Vol. Ironhack is a fight game, two players (although you can play alone) fight between them during 60 seconds. If one of them loses all live then the other player win the match, also if the time is over, the match finish and both players loss.

The game is programming using JavaScript and using CANVAS for animate and draw the elements that appear in the game.

In the project we will have an index.html, this will be the main html where we saw the project, and the following folder structure:

<details>
  <summary>Project Structure</summary>
  <ol>
    <li>
      <a href="#assets">assets</a>
      <ul>
        <li><a href="#images">images</a></li>
        <li><a href="#sounds">sounds</a></li>
        <li><a href="#styles">styles</a></li>
        <li>
          <a href="#js">js</a>
          <ul>
            <li><a href="#constants">constants.js</a></li>
            <li><a href="#index">index.js</a></li>
            <li>
                <a href="#models">models</a>
                <ul>
                  <li><a href="#frame-images">frameImages.js</a></li>
                  <li><a href="#game">game.js</a></li>
                  <li><a href="#live">live.js</a></li>
                  <li><a href="#message">message.js</a></li>
                  <li><a href="#special">special.js</a></li>
                  <li><a href="#timer">timer.js</a></li>
                  <li>
                      <a href="#drawler">drawler</a>
                      <ul>
                        <li><a href="#picasso">picasso.js</a></li>
                        <li><a href="#animated-sprite">animatedSprite.js</a></li>
                        <li><a href="#static-sprite">staticSprite.js</a></li>
                      </ul>
                  </li>
                  <li>
                      <a href="#background">background</a>
                      <ul>
                        <li><a href="#animated-background">animatedBackground.js</a></li>
                        <li><a href="#static-background">staticBackground.js</a></li>
                      </ul>
                  </li>
                  <li>
                      <a href="#characters">characters</a>
                      <ul>
                        <li><a href="#character">character.js</a></li>
                        <li><a href="#ken">ken.js</a></li>
                        <li><a href="#ryu">ryu.js</a></li>
                        <li><a href="#chunli">chunli.js</a></li>
                        <li><a href="#honda">honda.js</a></li>
                      </ul>
                  </li>
                </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ol>
</details>


## assets
This is the root folder, in this we will have all data necesary to run the project.

### images
Here we will have all images necessary to animate and draw in the project. We will pull apart in folders, depending the use of the image

### sounds
Here we will have all sounds necessary to play in the project. We will pull apart in folders the sounds of the characters and the common sounds, like selectedCharacter, will be directly inside in sounds folder

### styles
Here we will have all styles necessary, including font family imported and .css

### js
Here we will have all the logic in the project. We will have the following items:

#### constants
Here we will have all constants in the game (e.g: MATCH_DURATION, that have the time of the match)

#### index
Here we will have all logic that the user execute, all listeners to interact with the user

#### models
Here we will have all classes necessary, we have the following elements:


##### frame Images
Here we will have an array of objects that contains the positions of each frame to draw the characters, background images (animated and non animated)

##### game
Here we will have the main file of this project, with this we will have the game working and drawing all items and give them the necessary utility

##### live
Here we will have the live of each character

##### message
Here we will have the message (KO or TIME OVER) when the match finish

##### special
Here we will have all logic to draw the special hability that the characters have.

##### timer
Here we will have the time of each match

##### drawler
Here we will have all classes necessary to draw elements in canvas section, we pull apart in three classes:

###### picasso
This class have all methods necessary to draw the images

###### animated Sprite
This class extends of picasso and have all information logic to draw the items using draw method of the father.

###### static Sprite
This class extends of picasso and have all information logic to draw the items using draw method of the father.

##### background
Here we will have all classes necessary to draw the backgrounds, we pull apart in two classes:

###### animated Background
This class extends of AnimatedSprite class and have all info necessary to pass the info to animate the sprites

###### static Background
This class extends of StaticSprite class and have all info necessary to pass the info to draw the sprites

##### characters

###### character
This class extends of AnimateSprite, it have all information to draw and give all methods to move and interact

###### ken
This class extends of Character, contains all information necessary to draw Ken character

###### ryu
This class extends of Character, contains all information necessary to draw Ryu character

###### chunli
This class extends of Character, contains all information necessary to draw Chunli character

###### honda
This class extends of Character, contains all information necessary to draw Honda character
