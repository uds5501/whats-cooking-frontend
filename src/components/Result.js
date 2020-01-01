import React from 'react'
import { Card } from 'react-bootstrap'
class Result extends React.Component {
    showResult = () => {
        if (this.props.msg === "") {
            return (
                <h4> Hit predict to get your result</h4>
            )
        } else if (this.props.msg === "wait") {
            return (
                <h4> Please wait ... </h4>
            )
        } else {
            return (
                <div>
                    <Card.Title>Results are in</Card.Title>
                    <Card.Subtitle className="mb-2-text-muted">
                        We have determined that your dish is {this.props.msg}!
                    </Card.Subtitle>
                </div>
            )
        }
    }
    render() {
        return (
            <React.Fragment>
                <Card style={{'marginTop': '25px' }}>
                    <Card.Body>
                        <this.showResult />
                    </Card.Body>
                </Card>
            </React.Fragment>
        );
    }
}
export default Result