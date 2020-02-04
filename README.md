# Weather Widget

## Assumptions
* Assuming it should work on all resolutions, if there is not enough width to fit both components, they're stacked on top of each other

## Setup/installation
```
npm install
npm start
```


## Description
* I implemented the solution with the belief that the widget may be extended/modified in the future. Hence, I used a reducer which unifies the application under a single state for easy communication between components if required. It also sounds super cool.
* I modularised the CSS for each component for easy maintainability.
* I also used destructuring to ensure only the data that is needed gets passed outside of the function.
* Using OpenWeatherMap's images through their API

## Possible Improvements if I had more time
* Typescript but need more familiarity with it in a professional environment before I can understand acceptable standards.
* Absolute paths
* Limit the reducer to only accept predefined parameters rather than anything
* Front-end tests using Jest


## Feedback
* Using a wireframing tool such as Figma to create the mock UI and sharing that with applicants will make it much easier to figure out dimensions/colours