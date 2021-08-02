# Notes for submission

Thank you for the opportunity to participate in this challenge!

### Overall result

I've created a simple quiz app, decently styled and fast. I installed a few "utility" packages and used simple state management. I also added several tests to check if components render correctly.

### Time estimations

I spent about two hours to create styles, components and connect them together. Additional 30 minutes were spent to create tests. Another 30 minutes I used to write these notes and manually test the app.

UPDATE: I added more functionality - quiz settings and quiz reset. It took about 20 mins

### Javascript/Typescript

Although the role assumes Typescript knowledge I decided to stick with provided setup and use only js. To add TS support I would need to install additional packages, but README clearly states that "Changing how the application is bundled and run" is not expected.

### Styles

I took the liberty to get brand fonts and colors to make the app look more authentic. I used only simple CSS without modules due to the small codebase (no change of naming collisions). I used CSS variables and BEM naming conventions.
For layout and positioning I used CSS grid and flexbox. I assumed that the app would be used on modern browsers (I corrected browserslist support accordingly).
I added few lines of code to make the app look good on mobile devices.

### State

State management is kept simple with handlers and props passed down (no unnecessary prop drilling is required due to the small codebase). The only place that have multiple handlers and state manipulations is the `Quiz` component. I've seen no need to use reducer here as the logic remain clear.

### Tests

I've added multiple tests for components. Most of them are pretty straightforward, but the `Quiz` component required mocking fetch (for that purpose I used a `jest-fetch-mock` package)

### Additional packages

I added several packages, mostly for "convenience":

- classnames - For easier classnames management
- lodash - I used only shuffle method from there to save time
- parse-entities - The API returns escaped html entitites, so I needed to parse them back
- jest-fetch-mock - For mocking fetch in tests
