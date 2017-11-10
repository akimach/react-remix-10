import React, { Component } from 'react'
import request from 'superagent'

import Articles from './Articles'

class News extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: [],
    }
  }

  handleOnSubmit(e) {
    e.preventDefault()

    const url = 'https://hacker-news.firebaseio.com/v0/newstories.json'

    const cb = (err, res) => {
      if (err) throw err
      console.log(this)
      console.log(res.body)

      const cb2 = (err, res) => {
        if (err) throw err
        console.log(this)
        console.log(res.body)
        this.state.articles.push(res.body)
        console.log(this.state)
        this.setState(this.state)
        if (this.state.articles.length === 10) {
          this.state.articles = []
        }
      }

      const id_list = res.body.slice(0, 10)
      for (const id of id_list) {
        const url = `https://hacker-news.firebaseio.com/v0/item/${id}.json`
        console.log(url)
        request.get(url)
          .end(cb2)
      }
    }

    request.get(url)
      .end(cb)
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleOnSubmit(e)}>
          <input type="submit" value="Reload" />
        </form>
        <Articles articles={this.state.articles} />
      </div>
    )
  }
}

export default News
