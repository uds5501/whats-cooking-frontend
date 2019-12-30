import React, { Component } from 'react'
import DynamicForm from './components/DynamicForm'
import { Card } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <main className="content">
        <h1 className="text-white text-uppercase text-center my-4">What's Cooking</h1>
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
          <Card>
            <Card.Header>Guessing which cuisine is in Dinner?</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  Welcome to what's cooking. The game is simple, you give us the ingredients, and we will guess the
                  cuisine for you. 
                </p>
                <footer className="blockquote-footer">
                  Holiday wishes and Bon Apetite!
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
          <DynamicForm />
          </div>          
        </div>
      </main>
    )
  }
}

export default App