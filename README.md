# <p align="center">biblioTECHa
### <p align="center">📚</p>
#### <p align="center">Virtual Library & Book Club Application</p> 
#### <p align="center"> Created with [Node.js](https://nodejs.org/en/), [Express.js](https://expressjs.com/), [MySQL](https://www.mysql.com/), and [Sequalize](https://sequelize.org/) to interact with [Open Library API](https://openlibrary.org/dev/docs/api/read), and [Bootstrap](https://getbootstrap.com/).</p>

## 📖 User Story
***As a user,*** I am able to sign up for biblioTECHA with a username, email, and password, add books to my book list, create reviews, and post comments.

***biblioTECHa*** is a website that gives users their own virtual library card. As a user you will be able to search and add books to your booklist, create reviews, and comment on fellow readers' posts. This application implements the following features:
-  **Authentication.**  Make your own account, all that's needed is your desired username, email, and password.
-   **Posting and Commenting.**  This thread is aggregated onto the side in chronological order.
-   **Calls to the Open Library API**  The [Open Library API](https://openlibrary.org/dev/docs/api/read) is an open, editable library catalog, building towards a web page for every book ever published. Read, borrow, and discover more than 3M books for free.   
- **Styled with Bootstrap.**  [Bootstrap](https://getbootstrap.com/)  is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas or build your entire app with our Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful plugins built on jQuery.
 - **Hosted with Heroku.**  [Heroku](https://www.heroku.com/)  offers both web-based and command-line interfaces in order to adapt to an extremely easy and intuitive user interface dependent on the user.

## 🤔 What's Inside?

A quick look at the files and directories you'll see in this project:
```
1  ├── config
2  ├── controlers
3  ├── db
4  ├── models
5  ├── public
6  ├── utils
7  ├── views
8  ├── .gitignore
9  ├── README.md
10 ├── package-lock.json 
11 ├── package.json
12 └── server.js
```
## 📈Paths                
                Server Start
                    |
                main.handlebars
                ____|______________________
                |                          |
        if logged in                      else
                |                          |
    profile.handlebars                 login.handlebars
            |                               |
    inputs for:                     ________|_________
        id                          |                 |
        title                  sign-up inputs      sign-in inputs
        author
        category
        date_published

## Link to Website
[https://arcane-harbor-36381.herokuapp.com/](https://arcane-harbor-36381.herokuapp.com/)

