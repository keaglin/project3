# Grading

10/15
Great work everyone! Your app is deployed and fully functional. Your code looks really great too. I've given more specific feedback below and also left a few notes throughout your code. Check the `files changed` on the pull request.

Also, ignore any significant formatting changes. My linter autoformats on save so it's adjusted your spacing a bit in several files. The way you have your code indented and spaced is clear as is.

## Feedback

### Back-end Technology | PERFORMING (2)

- 2 models are present!
- the API looks really good. Your index.js file is a little bloated with unnecessary stuff but otherwise your directory is well organized.

### Front-end Technology | EXCELLING (3)

- your code looks really good. It's consistent throughout.
- I left a little comment in `ItemAdd.js` about DRYing up form handlers that can be applied to the rest of your applications forms as well.
- interesting use of state in Redirect components and in initializing state without a constructor

### Code Quality | PERFORMING (2)

- Code quality looks really good throughout and your style remains consistent.
- Good use of components separation
- Room to improve separation of container / presentation components. I did notice the use of functional components, great job!
- Try to keep half-baked code out of your production files. Specifically the passport stuff in your API. Build features in a separate branch and merge in once it's working so your production code stays tidy.

### Deployment and Functionality | PERFORMING (2)

- App is deployed and functioning without any major errors!
- Great job deploying to Surge
- interface is clear and easy to use

### Planning/Process/Submission | PROGRESSING (1)

- planning is present, consider adding more user stories for bronze/silver/gold levels of completion
  - ERD would be helpful to see in planning too
- readme is present but gives very little info about the application
  - readme should definitely include a link to deployed app
  - consider adding an introduction, setup instructions, and detailed team member contributions.

## Evaluation Criteria

| Category
| Incomplete
| Progressing
| Performing
| Excelling                                                      |
|---------------------------------|-------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Back-end Technology
| No back-end present, or unable to persist data and return JSON | Lacking more than one model | Includes 2 models | Includes many well-structured models, and advanced functionality such as authorization, 3rd-party API integration, or other technology not covered in class                        |
| Front-end Technology | No use of React code | Basic front-end with React components | Front-end makes appropriate use of React components and views with React Router. | In addition to appropriate React use, includes 1 React topic not covered in class. |
| Code Quality | Minimal functional code is present | Code lacks proper formatting, includes commented out, non-functional code, or otherwise contains major issues of quality (DRY, naming, etc) | Code is well-formatted, well-named, and contains few style / quality issues | No major code quality issues, and follows React best practices such as container/presentation component separation|
| Deployment and Functionality | Application is not deployed, and contains minimal functionality | Application contains minimal functionality, but deployment is non-functional, or application contains major errors when used | Application contains no major errors, is deployed correctly, and contains a custom Heroku app name appropriate for the app. | App has advanced functionality that works with minimal errors, and may make use of advanced tools such as APIs, plugins, etc. App may be deployed to a service other than Heroku (e.g. Digital Ocean). |
| Planning / Process / Submission | No submission received, or submission does not contain basic documentation of planning (ERD, wireframes, commit history, etc) | App is submitted, with basic evidence of planning. Documentation exists, but lacks common areas such as setup instructions, description of application functionality and link to deployed application | Submission contains clear evidence of planning, adequate documentation, include all from previous category, as well as additional information such as unsolved issues. | Submission includes everything in previous category, as well as evidence of proper teamwork, such as feature branching, code review, github issue / user story tracking, and justification of technical decisions. |


<!-- Generated from http://www.tablesgenerator.com/markdown_tables -->