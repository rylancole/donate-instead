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

## Url Parsing
Note the `props.submission_id` in the `useEffect`, this is parsed from the url you call e.g. localhost:3000/?id=**ibj74o**.

You can find a submission id from a Reddit post's url e.g. .../r/HumansBeingBros/comments/**iavm5h**/bbc_crew_rescues_trapped_penguins/

When you run `yarn start` the page will load at http://localhost:3000 and inform you of a _bad id_, just add some `/?id=` to the end and call an id from some Reddit post. 

## Example Ids 
_all these ids are valid, feel free to use them_

- ibj74o 
- ibikdr
- ibhlhf
- ibhb4l

Find more on [/r/all](https://www.reddit.com/r/all/)
