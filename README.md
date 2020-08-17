# Donate Instead

This repository uses yarn for package management. Get set-up with the following commands:

```sh
git clone https://github.com/rylancole/donate-instead.git
cd donate-instead
yarn
yarn start
```

## Reddit API
snoowrap is used to interact with the Reddit API. Change the `useEffect` hook to see all the data we have access to about a post.

```js
  useEffect(() => {
    r.getSubmission('iavm5h').fetch()
    .then(submission => {
      console.log(submission)
      setContent(filterSubmission(submission))
    })
  })
```

Note the submission id used `'iavm5h'`. This comes from the post's url:
* /r/HumansBeingBros/comments/**iavm5h**/bbc_crew_rescues_trapped_penguins/
