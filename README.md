# Fetch lesson

A small browser-based lesson for practising the `fetch` API with [JSONPlaceholder](https://jsonplaceholder.typicode.com/).

## What is included

- `index.html` and `app.js` — starter code for a Team Directory that loads users.
- `app.final.js` — completed Team Directory example.
- `exercise.html` and `exercise.js` — starter exercise: load posts for a user ID.
- `exercise.solution.js` — completed solution for the posts exercise.
- `style.css` — shared page styles.

## Run the lesson

Open either HTML file in a modern browser:

- `index.html` for the Team Directory demo
- `exercise.html` for the Posts by User exercise

For the exercise, enter a user ID from 1 to 10 and select **Load posts**. The request uses:

```text
https://jsonplaceholder.typicode.com/posts?userId=1
```

## Fetch workflow

Each example follows the same four steps:

1. Request data with `fetch()`.
2. Check `response.ok`.
3. Unpack JSON with `response.json()`.
4. Display the resulting data in the page.

The completed examples also clear previous results, show loading and error messages, and handle an empty posts result.
