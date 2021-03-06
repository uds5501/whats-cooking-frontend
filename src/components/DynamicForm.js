import React, { Component } from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import axios from 'axios'
import Result from './Result'

class DynamicForm extends Component {
    constructor() {
        super();
        this.state = {
            ingredients: [{ name : "" }],
            result: ""
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
        this.setState({'result':'wait'})
        axios
            .post("/results/", ingredients)
            .then(res => this.setState({'result': res['data']}))
            .catch(error => this.setState({'result': 'error'}))
        
    }

    handleAddIngredient = () => {
        this.setState({
            ingredients: this.state.ingredients.concat([{ name : "" }])
        })
    }

    handleRemoveIngredient = idx => () => {
        if (this.state.ingredients.length === 1) {
            alert("At least one ingredient should be present");
        } else {
        this.setState({
            ingredients : this.state.ingredients.filter((s, sidx) => idx !== sidx)
        });
        }
    };
    
    render() {
        return (
            <React.Fragment>
                <Card style={{ 'marginTop': '25px'}}>
                    <h4 className="text-center">Ingredients</h4>
                    <div class="">
                        <Button style={{'margin' : '15px'}} onClick={this.handleAddIngredient}>
                            Add Ingredient
                        </Button>
                    </div>
                    <Form>
                        {this.state.ingredients.map((ingredient, idx) => (
                            <Form.Group style={{'margin' : '15px'}}>
                                <Form.Label for="description">Ingredient #{idx+1}</Form.Label>
                                <div class="form-row">
                                    <div class="form-group col-lg-10 col-md-7 col-sm-3 col-xs-3">
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            value={ingredient.name}
                                            onChange={this.handleIngredientNameChange(idx)}
                                            placeholder="Enter ingredient name"
                                        />
                                    </div>
                                    <div class="form-group col">
                                        <Button variant="danger" onClick={this.handleRemoveIngredient(idx)}>
                                            Remove
                                        </Button>
                                    </div>
                                </div>
                            </Form.Group>
                        ))}
                    </Form>
                    <center>
                        <div style={{ 'margin' : '10px'}}>
                            <Button variant="success" onClick={this.handleSubmit}>
                                Predict
                            </Button>
                        </div>
                    </center>
                </Card>
                <Result msg={this.state.result}/>
            </React.Fragment>            
        )
    }
}

export default DynamicForm