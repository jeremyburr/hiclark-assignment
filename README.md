# Clark Take-Home Code Challenge

## Requirements
Take a look at `src/data.js`. This is an approximation of what data from our API looks like once it has been normalized.

For this exercise, we'd like you to do the following:

- calculate the total amount billed (`paid`, `overdue`, and `outstanding`) in dollars
- calculate the total amount `paid` in dollars
- calculate the total amount `overdue` (a bill with a `status: 'pending'` and `dueDate` in the past) in dollars
- calculate the total amount `outstanding` (a bill with a `status: 'pending'` and `dueDate` in the future) in dollars

Please render these values to the screen along with an ordered list of the bills sorted by `dueDate` and grouped by `status` (`outstanding`, `overdue`, `paid`).

The final product should look like this:

![Final Product](/public/image.png)

Keep in mind that we're looking to see how you approach writing code and not just for the correct answers.

If you're comfortable, we'd love to see you use [Flow](https://flow.org/en/) to add type annotations to your work, but please don't feel that it's a requirement. Test your type annotations by running `yarn run flow`.

You're welcome to use any resources and packages, including [clark-utils](https://github.com/hiclark/clark-utils).

When you've finished, [zip](http://osxdaily.com/2012/01/10/how-to-zip-files-in-mac-os-x/) the repo and email it back to us at `engineering@hiclark.com`.

## To get started:

This app was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To get things running:

1. clone the project `git clone https://github.com/hiclark/candidate-test.git`
2. install [yarn](https://yarnpkg.com/lang/en/docs/install)
3. run `yarn` to install dependencies
4. run `yarn start` to start the development server
5. edit `src/App.js` and save to reload.

If you have any questions, please reach out to us at `engineering@hiclark.com`!
