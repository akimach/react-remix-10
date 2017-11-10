import React from 'react'
import {GridList, GridTile} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import Subheader from 'material-ui/Subheader'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
}

const tilesData = [
  {
    img: 'http://via.placeholder.com/350x15',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'http://via.placeholder.com/350x15',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'http://via.placeholder.com/350x15',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'http://via.placeholder.com/350x15',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'http://via.placeholder.com/350x15',
    title: 'Hats',
    author: 'Hans',
  },
]

function GridListExampleSimple() {
  return (
    <div style={styles.root} className="box">
      <GridList
        cellHeight={180}
        style={styles.gridList}
      >
        <Subheader>December</Subheader>
        {tilesData.map((tile) => (
          <GridTile
            key={tile.title}
            title={tile.title}
            subtitle={<span>by <b>{tile.author}</b></span>}
          >
            <img src={tile.img} />
          </GridTile>
        ))}
      </GridList>
    </div>
  )
}

export default GridListExampleSimple
