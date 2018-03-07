# litswap!
### A media trading platform for all you analog folks out there.

# Technolgies Used
 - Mongoose  
 - Express  
 - React  
 - Node.js  
 - Surge  

 # Approach Taken
 
 Wireframe created.  
 Pair programming for back-end and front-end and separate repositories and branches.  
 Back-end must contain at least two models.  
 Front-end uses React that leverages back-end API and CRUD. Uses axios to make requests.  
 Deployed with Surge CLI tool.  

 # User Stories
 Forms  
---  
User signup: New user should be able to access the signup view and create a profile  
User login: Logged out user should be able to access the login view and login via the login form  
Media add: Logged in user should be able to add media to their profile  
Media edit: Logged in user should be able to edit the info for media that they own  
Media remove: Logged in user should be able to delete media they own from db  
swap -> 
2 users looking to swap ex: dropdown with user2's items has that user1 is willing to trade for user2's desired item  

Logged in user should be able to request swap,  
Logged in item owner should be able to view swap request  

# Installation Instructions
**Using `npm`**  
1. Clone down this repository  
2. Run `npm install`  
3. Start Server with `npm run start`   
4. Visit App at `localhost:3000`  
5. Build with `npm run build`  
6. Deploy `/build` with any tool or service that supports static sites  

**Using `yarn`**  
1. Clone down this repository  
2. Run `yarn install`  
3. Start Server with `yarn start`   
4. Visit App at `localhost:3000` 
5. Build with `yarn build` (generates a static site in the `/build` folder in the project root)  
6. Deploy `/build` with any tool or service that supports static sites

[Visit Surge Deployment Link](http://familiar-porter.surge.sh)

# Work On
- User authentication  
- User can view their and others swap contents by specific profiles  
- User can make a swap/trade request to other users  
- Work further on advancing user stories as set up above  

# Group
 Pair programming for back-end and front-end.
- Kevon  
  Front-end: React elements, components, props & routes. Deployment. 
- Ryan  
  Back-end: Mongoose, Node.js, Express, set up routes, schemas, json. CSS.
- Devon  
  Back-end: Mongoose, Node.js, Express, set up routes, schemas, json.
- Annette  
  Front-end: React elements, components & props. CSS. Wireframe Draft.

