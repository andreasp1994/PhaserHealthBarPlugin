#Phaser Simple HealthBar Plugin

## Description
This is a small plugin for creating simple custom health bars for your game objects easily. It is developed to be used in conjuction with the
Phaser game engine javascript library.

## Usage
The usage is pretty simple. If you just want to use it you can just download the healthBar.js, import it to your project and get started 
by loading the module and creating a new health bar object in your create method.<br /> 
# Example
This will create a health bar for the sprite named exSprite with the following properties: <br />
width: 50 <br />
height: 10 <br />
xOffset: 0 <br />
yOffset: 35 <br />
barBgColor: RED <br />
barFgColor: GREEN <br />
#Javascript
```
var healthBar = require("./healthBar");
...
var exampleHealthBar = new healthBar.HealthBar(this.game, this.exSprite, 50, 10, 0, 35, '#FF0000', '#00FF00');
```
<br />

#Typescript
```
import { HealthBar } from "./healthBar" //change this to the location of your healthBar.js
...
let exampleHealthBar = new HealthBar(this.game, this.exSprite, 50, 10, 0, 35, '#FF0000', '#00FF00');
```
<br />

On the other hand if you would like to customize it you can clone the repository and run 
`npm install`
and then 
`typings install`
This will download the necessary typescript dependencies for you in order to be able to compile it. 

## Screenshots

## Contributing
Feel free to add suggest new ideas and contribute to the project.