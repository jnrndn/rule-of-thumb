This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available scripts

In the project directory, you can run:

### npm install

To install all the dependencies of the project

### npm start

To start the develptment environment.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# About this project

The project was developed using React and some libraries to help/inprove the look-and-feel and the funcionality of the application.<br>
Those libraries include:

- Material UI - for styled components and styles in general
- Redux - for state management, to make the data flow easier
- ESLint - to have common rules and follow better practices on code style

Accomplished Requirements:

- [x] Use media queries to adapt the layout in small screens. (comp not provided, so use your creativity).
- [x] Non safe web font used: Lato
- [x] You can rely on preprocessors / transpilers such as LESS/SASS or any sort of CSS framework if you want. (Pure CSS is also an option but you must argue the benefits)
- [x] Clicking on one of the links of the main menu redirects the user to the other pages (we only provide a comp for the main page so just use white pages with the title section on them).
- [x] Create a data feed in JSON format with the structure that best suits the content for the voting boxes and populate the initial content from it.
- [x] The user can select either thumb up or thumb down button on each of the boxes (when the button is selected, a white border is displayed as featured in the comp)
- [x] Once the user clicks on the "Vote now” button, a message is displayed saying “Thank you for voting!” as well as a vote again button to vote again.
- [x] There is no limit in the amount of votes
- [x] Percentage bars change depending on the up/or downs votes.
- [x] Think on a way to persist the current votes so if the page is refreshed the data is not lost. (could be local in the browser or server side if you have those skills)
- [x] We want to see your vanilla/DOM JS skills so please do not use jQuery.
- [x] You can solve this part with either full Vanilla JS and some patterns, OR any sort of framework such as Angular, React, Vuejs, Ember, etc. Use the one you feel more confortable with.
- [ ] Bonus points: Some sort of Test (E2E, BDD, etc)

## Wall of shame:

Some of the things I wanted to finish but I did not have the time are:

- Adding all components (Banners) in the footer
- Improving the navbar
- Being more detailed on the header styles
- Resetting Material UI theme so I do not have to create a style file for each component
- Adding some unit test
- Making the Card component more ditached, maybe having small pieces
- Using Typescript or adding Proptypes for type checking
