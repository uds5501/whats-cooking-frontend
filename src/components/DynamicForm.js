import React, { Component } from 'react'
import { Card, Form, Button } from 'react-bootstrap'

class DynamicForm extends Component {
    constructor() {
        super();
        this.state = {
            ingredients: [{ name : "" }]
        };
    }

    handleIngredientNameChange = index => eve => {
        const newIngredient = this.state.ingredients.map((ingredient, sidx) => {
            if (index !== sidx) return ingredient;
            return { ...ingredient, name: eve.target.value }
        });
        this.setState({ ingredients: newIngredient });
    }

    handleSubmit = eve => {
        const { ingredients } = this.state;
        alert(`Ingredients are of length ${ingredients.length}`);
    }

    handleAddIngredient = () => {
        this.setState({
            ingredients: this.state.ingredients.concat([{ name : "" }])
        })
    }

    handleRemoveIngredient = idx => () => {
        this.setState({
            ingredients : this.state.ingredients.filter((s, sidx) => idx !== sidx)
        });
    };

    render() {
        return (
            <Card style={{ 'margin-top': '10px'}}>
                <h4 className="text-center">Ingredients</h4>
                <Form>
                    {this.state.ingredients.map((ingredient, idx) => (
                        <Form.Group style={{'margin' : '15px'}}>
                            <Form.Label for="description">Ingredient #{idx+1}</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={ingredient.name}
                                onChange={this.handleIngredientNameChange}
                                placeholder="Enter ingredient name"
                            />
                            
                        </Form.Group>
                    ))}
                </Form>
            </Card>
        )
    }
}

export default DynamicForm