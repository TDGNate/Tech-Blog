# N8 Tech Blog

**N8 Tech Blog** is a full-stack CMS-style blog site where developers can publish their blogs and add comments on others. Users can also view all their posts and comments they've made along with having access of updating/deleting their posts/comments from their dashboard.

They can access individual posts from there as well. The app is deployed on Heroku and uses the MVC paradigm, handlebars, Sequelize (ORM), and express-sessions for authentication.

I did go all out on the styling 😂 and spent some time messing around on how I wanted each page to be styled.

The tools for styling that came in clutch:

- [Bootstrap](https://getbootstrap.com/)
- [Sweet Alert](https://sweetalert.js.org/)
- [fontawesome](https://fontawesome.com/)

---

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

[ISC](https://choosealicense.com/licenses/isc/)

Deployed app: https://techer-blogger.herokuapp.com/


## Table Of Contents

- [Usage](#usage)
- [Install](#install)
- [Contribute](#contributing)
- [Questions](#questions)

---

## Starter

As a new user/dev, you are able to share concepts, recent advancements, and new technologies by navigating to the dashboard from the navbar and creating your first post.

But before anything, you'll be prompted to login if you try clicking on an existing post or the dashboard while you're not signed in. But once you're in, you can create posts and comment on other user's post.

You are able to view, edit, or completely delete your posts/comments all from the dashboard.

---

## Install

_Before Cloning/forking, this app runs on Node.js and has a few NPM packages within, just keep in mind._

- Once you're ready, install all packages with `npm install` in the terminal.

- Set up your `.env` file. This project will automatically acquire an `.env.example` with a demo layout inside. You can just remove the `.example` and replace the demo values with your own.

- The `.env` values you're change will be the database name, user name, and password.

- Now let's actually start to create the database by running `mysql -u root -p` in the terminal, then enter your password.

- When you are in, run `source db/schema.sql` to create the database, then type `exit` to exit the mysql CLI.

Boom! that's it for setting it up, you're ready to start the server.

To run the application, simply do `npm start` in the terminal, for nodemon you can use `npm run watch`.

_If everything went smooth, you should see 'Now listening on http:/localhost:3001', just 'ctrl + click' the link and it will take you to the page._

---

## Pictures

<p align="middle">

### Home Page (Posts, and add comment)

  <img src="assets\app_pictures\desktop_home.png" width="48%" />
  <img src="assets\app_pictures\desktop_home_add_comment.png" width="48%" />

### Dashboard Page (Create a post, User's Posts/Comments)

  <img src="assets\app_pictures\desktop_dashboard.png" width="48%" />
  <img src="assets\app_pictures\desktop_dashboard2.png" width="48%" />

### Modify Page (Modifying User's Posts/Comments)

  <img src="assets\app_pictures\desktop_modify_post.png" width="48%" />
  <img src="assets\app_pictures\desktop_modify_comment.png" width="48%" />

### Others (View signle post, Register Success)

  <img src="assets\app_pictures\desktop_single_post.png" width="48%" />
  <img src="assets\app_pictures\success.png" width="48%" />

</p>

[You can go here to see mobile version](/assets/mobile_version.md)

Folders containing the images:

[Desktop pictures](/assets/app_pictures/)

[Mobile pictures](/assets/mobile_pictures/)

---

## Contributing

No specific rules for contributing, but if you want to support you can make issues which I will review to improve the app.

Or feel free to fork this repo, add your changes, and make a pull req!

---

## Questions

_Hey hey, Reach Out!_

Github: [TDGNate](https://github.com/TDGNate)

Email: itsnzte@gmail.com
