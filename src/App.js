import React, { useEffect } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  useLocation 
} from "react-router-dom";
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
  const [content, setContent] = React.useState({})
  useEffect(() => {
    r.getSubmission(props.submission_id).fetch()
    .then(submission => {
      setContent(filterSubmission(submission))
    })
  }, [props.submission_id])

  return (
    <div>
      {
        (content.ready) 
        ? 
        <>
          /u/{content.authorName} <br/>
          <a href={content.url}>{content.title}</a> <br/>
          Value = {content.cost} coins
        </>
        : "Loading . . ."
      }
    </div>
  )
}

function PageContent(props) {
  let location = useLocation()
  let urlQuery = /\?id=(\w+)/.exec(location.search)
  console.log(urlQuery)
  return (
    <>
      {
        (urlQuery && urlQuery.length > 1)
        ? <EmbededPost submission_id={urlQuery[1]}/>
        : "Bad id, try http://localhost:3000/?id=ibj74o"
      }
    </>
    
  )
}

function App() {
  return (
    <Router>
      <Switch>
        <PageContent/>
      </Switch>
    </Router>
  );
}

export default App;
