import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import { recipes } from './data.json';
import RecipeCard from './components/RecipeCard';

class App extends Component {
  render() {
    const recipesList = recipes.map(recipe => {
      return (
        <Col xs={4} style={style}>
          <RecipeCard recipe={recipe}/>
        </Col>
      )
    })

    return (
      <Grid>
        <Row>
          {recipesList}
        </Row>
      </Grid>
    );
  }
}

var style = {
  display: "flex",
  justifyContent: "center"
};

export default App;
