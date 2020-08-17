# Donate Instead

This repository uses yarn for package management. Get set-up with the following commands:

```sh
git clone https://github.com/rylancole/donate-instead.git
cd donate-instead
yarn
yarn start
```

## Reddit API
snoowrap is used to interact with the Reddit API. Change the `useEffect` hook in `EmbededPost` of `App.js` to see all the data we have access to about a post.

```js
  useEffect(() => {
    r.getSubmission(props.submission_id).fetch()
    .then(submission => {
      console.log(submission)
      setContent(filterSubmission(submission))
    })
  }, [props.submission_id])
```

Note the submission id used `'iavm5h'`. This comes from the post's url:
* /r/HumansBeingBros/comments/**iavm5h**/bbc_crew_rescues_trapped_penguins/

## Url Parsing
When you run `yarn start` the Home Page will load at http://localhost:3000 and inform you of a _bad id_. This is because posts are loaded via url parameters, so you must have something like http://localhost:3000/?id=ibj74o
