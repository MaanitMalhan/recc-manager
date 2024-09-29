# Recommendation Manager 
This is a website created to help the Southern New England Industrial Assessment Center manage their recommendations and to act as a database that holds their templates for recommendations. The tech stack used for this website is MERN. The website is virtualized in docker for deployment. 

# Guide and Explanation
Everything below is a guide for people contributing to the project. It should explain everything in detail.

## Frontend
Everything we will be working with is in the `frontend/src` folder. 

1. The `Asset` folder has all the images used to style the website. As a note all styling is specified by UConn guidelines or they will deny deployment on their server. 

2. The next folder is `components` If you have familiarity with React you should understand this. But just to explain it components are individual smaller parts of React frontends that help make up the whole website. 
    - The `Navbar.js` file is the header of the website holding the title and links to other pages on the website. 
    - The `ReccDetails.js` file holds the individual blocks shown on the home page that show all the template data.
    - The `ReccForm.js` file is where the employees can add templates which will be shown in the blocks from `ReccDetails.js`.
    - The `SearchBar.js` file is just the search bar, it is essentially a filter on the frontend, so the backend does not get overloaded with requests there is also hardcoded ARC codes to speed up finding details on codes not inputted into the database. 
    - The `SearchResults.js` file is supplementary to the `SearchBar.js` it returns the results from search.

3. The `Context` folder is files of react context.
    - The `AuthContext.js` file manages context for whether a user is logged in or out, and what information a user has access to. 
    - The `ReactContext.js` file manages the context of the home page. It is the reason why new recommendation templates are shown as soon as they are added. 

4. The `Hooks` folder is files of react hooks.
    - The `useAuthContext.js` and `useReccContext.js` these files simplify the process of accessing and using certain data.
    - The `useLogin.js` and `useLogout.js` help handle updating whether a user is logged in or out. 
    - The `useSignup.js` file is not used but left in case we wanted anyone to be able to sign up as a user and gain access to all the data. 

5. The `Pages` folder holds all the pages of the website.

6. The `scripts` folder holder the hard mapping of the ARC codes, so people can look up ARC codes even if there is no template for them.

7. The `App.js` file is handles all the pages. It also has left over code from the sign-up page which is deactivated for safety. 

8. The `index.css` file holds all the styling for the website. All styling must meet standards set by UConn. 

9. The `index.js` file renders and acts as the entry point for the entire web-application. 

## Backend

1. The `Controller` folder holds files that explain the requirements for manipulating data. 

2. The `middleware` folder makes sure that authentication is required for before users are given access to a website. 

3. The `models` folder holds the mongoDB schemas. Which defines how the data will be structured before being sent to the database. 

4. The `routes` folder holds the internal routes used by the data for things like adding and deleting things from the database. 

5. The `server.js` file connects the webapp to the mongoDB server. 
