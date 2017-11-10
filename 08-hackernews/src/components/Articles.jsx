import React, { Component } from 'react'

function Articles (_articles) {
  const { articles } = _articles
  console.log(articles.length)
  if (articles.length === 0) {
    return (<div className="articles"></div>)
  }
  var list = articles.map((article) => {
    return (
      <tbody>
        <tr>
          <td>{article.id}</td>
          <td>{article.by}</td>
          <td><a href={`https://news.ycombinator.com/item?id=${article.id}`}>{article.title}</a></td>
        </tr>
      </tbody>
    )
  })
  return (
    <div className="articles">
      <table border="1">
        <thead>
          <tr>
            <th>id</th>
            <th>by</th>
            <th>title</th>
          </tr>
        </thead>
        {list}
      </table>
    </div>
  )
}

export default Articles
