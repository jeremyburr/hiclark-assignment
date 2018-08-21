# Simple Bill Formatting - React JS

This is a simple data formatting task completed in React JS. Task instructions are below: 

Take a look at `src/data.js`. This is an approximation of what data from our API looks like once it has been normalized.

For this exercise, we'd like you to do the following:

- calculate the total amount billed (`paid`, `overdue`, and `outstanding`) in dollars
- calculate the total amount `paid` in dollars
- calculate the total amount `overdue` (a bill with a `status: 'pending'` and `dueDate` in the past) in dollars
- calculate the total amount `outstanding` (a bill with a `status: 'pending'` and `dueDate` in the future) in dollars

Please render these values to the screen along with an ordered list of the bills sorted by `dueDate` and grouped by `status` (`outstanding`, `overdue`, `paid`).

The final product should look like this:

![Final Product](/public/image.png)
