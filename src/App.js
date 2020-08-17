import React, { useEffect } from 'react';
import snoowrap from 'snoowrap';

const r = new snoowrap({
  userAgent: 'test',
  clientId: 'wzqtMiLpg3TWnQ',
  clientSecret: 'FrjcB9AgxblsERw8HHkJH_zuf_o',
  refreshToken: '23524788-w2JO3W9Lo6O7-uIKHJ3DHg_PnAE'
});

function sumCoins(awards) {
  let s = 0
  for (const award of awards ) {
    s += award.coin_price
  } 
  return s
}

function filterSubmission(sub) {
  return ({
    ready: true,
    title: sub.title,
    authorName: sub.author.name,
    body: sub.body,
    thumbnail: sub.thumbnail,
    url: sub.url,
    cost: sumCoins(sub.all_awardings)
  });
}

function EmbededPost(props) {
  const { title, authorName, url, cost } = props
  return (
    <div>
      /u/{authorName} <br/>
      <a href={url}>{title}</a> <br/>
      Value = {cost} coins
    </div>
  )
}

function App() {
  const [content, setContent] = React.useState({})
  useEffect(() => {
    r.getSubmission('iavm5h').fetch()
    .then(submission => {
      setContent(filterSubmission(submission))
    })
  })
  return (
    <div>
      {
        (content.ready) 
        ? <EmbededPost {...content}/>
        : " Loading . . ." 
      }
    </div>
  );
}

export default App;
