import React from 'react'
import articles from './articles.json'

const hydrateArticle = ({title, url, author, date, pullQuote}) => <div>
  <h4><a href={url}>{title}</a></h4>
  <i>{author} - {date}</i>
  <p>{pullQuote}</p>
  <hr/>
</div>
const byDate = (a, b) => new Date(b.date) - new Date(a.date);

export default () => (
  <div style={{ textAlign: 'center' }}>
    {articles.sort(byDate).map(hydrateArticle)}
  </div>
)
