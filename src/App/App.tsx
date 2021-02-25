import React, { useRef } from 'react';
import { Button, Container, FormControl, InputGroup, ListGroup, ListGroupItem } from "react-bootstrap";
import { connect } from 'react-redux';

import { deleteTodo, markComplete, markInComplete } from 'action/index';
import storeType from 'Type/storeType';
import AppPropType from 'App/AppPropType';


const App: React.FC<AppPropType> = ({ complete, incomplete, deleteTodo, markComplete, markIncomplete }) => {

    const input = useRef<HTMLInputElement>(null);

    const renderList = (type: "complete" | "incomplete") => {
        const looper = type === "complete" ? complete : incomplete;
        return (
            <ListGroup variant="flush" className="m-2">
                <h3>{type}</h3>
                {looper.map((todo: any, index: any) => {
                    return (
                        <ListGroupItem key={index} variant={type === "complete" ? "success" : "danger"}
                            style={{ display: "flex", justifyContent: "space-between" }}
                        >
                            <div>{todo}</div>
                            <div>
                                <i className={`fas fa-${type === "complete" ? "minus" : "check"} m-2`} onClick={() => type === "complete" ? markIncomplete(todo) : markComplete(todo)}  ></i>
                                <i className="fas fa-trash m-2" onClick={() => deleteTodo(todo)}></i>
                            </div>
                        </ListGroupItem>
                    )
                })}
            </ListGroup>
        )
    }

    const addTodo = () => {
        if (input.current) {
            const val = input.current.value;
            markInComplete(val);
        }
    }

    return (
        <Container>
            <InputGroup className="m-3">
                <FormControl placeholder="Todo" ref={input} />
                <InputGroup.Append>
                    <Button variant="secondary" onClick={() => addTodo()}>
                        <i className="fas fa-plus mr-3"></i>
                        Add
                </Button>
                </InputGroup.Append>
            </InputGroup>
            {renderList("complete")}
            {renderList("incomplete")}
        </Container>
    )
}

const mapStateToProps = (state: storeType) => {
    return {
        complete: state.complete,
        incomplete: state.incomplete
    }
}

export default connect(mapStateToProps, { deleteTodo, markComplete, markInComplete })(App);