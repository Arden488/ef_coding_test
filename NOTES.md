# Notes for submission

Thank you for the opportunity to participate in this challenge!

### Overall result

I've created a simple quiz app, decently styled and fast. I installed a few "utility" packages and used simple state management. I also added several tests to check if components render correctly.

After that I decided to add a bit more features to the app and eventually changed the state management approach (more details below).
To see the early version (without some features and simple state) see this git commit tree: https://github.com/Arden488/ef_coding_test/tree/6efc387a44993e615c522708d733237ce4e83428

### Time estimations

I spent about two hours to create styles, components and connect them together. Additional 30 minutes were spent to create tests. Another 30 minutes I used to write these notes and manually test the app.

**UPDATE #1**: I added more functionality - quiz settings and quiz reset. It took about 20 mins

**UPDATE #2**: I decided to refactor the app and add context and reducer instead of callback state management. It took about 1 hour.

### Javascript/Typescript

Although the role assumes Typescript knowledge I decided to stick with provided setup and use only js. To add TS support I would need to install additional packages, but README clearly states that "Changing how the application is bundled and run" is not expected.

### Styles

I took the liberty to get brand fonts and colors to make the app look more authentic. I used only simple CSS without modules due to the small codebase (no change of naming collisions). I used CSS variables and BEM naming conventions.
For layout and positioning I used CSS grid and flexbox. I assumed that the app would be used on modern browsers (I corrected browserslist support accordingly).
I added few lines of code to make the app look good on mobile devices.

### State

State management is kept simple with handlers and props passed down (no unnecessary prop drilling is required due to the small codebase). The only place that have multiple handlers and state manipulations is the `Quiz` component. I've seen no need to use reducer here as the logic remain clear.

**UPDATE**: After introducing some additional functionality, the App state became harder to manage. I decided to rewrite the state management to use context and reducer. It adds a lit bit of complexity, but there is no need to pass props anymore and the app components have global state without redux. It is probably not necessary for such small application, but I decided that it is a good way to show this technique.

### Tests

I've added multiple tests for components. Most of them are pretty straightforward, but the `Quiz` component required mocking fetch (for that purpose I used a `jest-fetch-mock` package)

### Additional packages

I added several packages, mostly for "convenience":

- classnames - For easier classnames management
- lodash - I used only shuffle method from there to save time
- parse-entities - The API returns escaped html entitites, so I needed to parse them back
- jest-fetch-mock - For mocking fetch in tests
