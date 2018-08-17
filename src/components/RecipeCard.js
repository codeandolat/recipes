import React, { Component } from 'react';
import { Card, Icon, Image } from "semantic-ui-react";

class RecipeCard extends Component {
  render() {
    return (
      <Card>
        <Image src={this.props.recipe.image} />
        <Card.Content>
          <Card.Header>{this.props.recipe.author}</Card.Header>
          <Card.Meta>
            <span className='date'>{this.props.recipe.created_at}</span>
          </Card.Meta>
          <Card.Description>{this.props.recipe.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='like' />
            {this.props.recipe.likes}
          </a>
        </Card.Content>
      </Card>
    )
  }
}

export default RecipeCard;
