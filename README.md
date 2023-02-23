# Frontend Mentor - Interactive comments section solution

This is a solution to the [Interactive comments section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Your challenge is to build out this interactive comments section and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

We provide the data in a local `data.json` file, so use that to populate the content on the first load. If you want to take it up a notch, feel free to build this as a full-stack CRUD application!

Your users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, Read, Update, and Delete comments and replies
- Upvote and downvote comments
- **Bonus**: If you're building a purely front-end project, use `localStorage` to save the current state in the browser that persists when the browser is refreshed.
- **Bonus**: Instead of using the `createdAt` strings from the `data.json` file, try using timestamps and dynamically track the time since the comment or reply was posted.

### Expected behaviour

- First-level comments should be ordered by their score, whereas nested replies are ordered by time added.
- Replying to a comment adds the new reply to the bottom of the nested replies within that comment.
- A confirmation modal should pop up before a comment or reply is deleted.
- Adding a new comment or reply uses the `currentUser` object from within the `data.json` file.
- You can only edit or delete your own comments and replies.

### Screenshot

![](<./screenshots/Screenshot%20(124).png>)

### Links

- Solution URL: [Solution URL here](https://www.frontendmentor.io/solutions/interactive-comment-section-built-using-vanilla-js-and-scss-gw6ScK_tUQ)
- Live Site URL: [Live site URL here](https://interactive-comment-sect.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow
- Vanilla Javascript

### What I learned

This project was a little tough, but at the end became pretty easy

```js
const proudOfThisFunc = () => {
  console.log("🎉");
};
```

### Continued development

I need to keep getting better at developing myself into become a better programmer, I've also started to implement OOP in my recent projects. I really hope I get better at it, because I'm lovign it already.

### Useful resources

- [Resource](https://chat.openai.com/) - This AI is really God sent, this project would have been a lot tougher for me without this kind of AI, It helped me figure out some errors in my code and provided some coding snippets in some cases. And a good example of the some of the coding snippets it provided that helped me in this project is

```js
// create a range and insert the HTML string as a fragment
let range = document.createRange();
let fragment = range.createContextualFragment(
  this.renderComment(this.userComment)
);
```

```All of the code snippets where I used the code just as the above was because I was passing an argument to a function that probably required a node element of a pure string, so doing that fixed the problem.

```

## Author

- Website - [Abdullah Ayoola](https://github.com/abdullah43577)
- Frontend Mentor - [@abdullah43577](https://www.frontendmentor.io/profile/abdullah43577)
- Twitter - [@officialayo540](https://twitter.com/officialayo540)
