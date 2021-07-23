import React from 'react';
import reducer from './todo';

describe('TODO reducer', () => {
    test('returns a state object', () => {
        const result = reducer(undefined, {type: 'FETCH_TODOS'});
        expect(result).toBeDefined();
    });

    test('adds a new todo item to state object', () => {
        const initialState = {
            todos: [
                {item:'Send a file down to Mexico', status:false},
                {item:'Discuss Abidgan Project with Tola', status:true},
                {item:'Assign duties to workers on Datsun Farmland', status:true},
                {item:'Dissolve 2020 Contribution with AJEO', status:false},
                {item:'Submit Proposal and Quotation for Danlax Agrc Farm', status:true}
            ]
        }

        const expectedState = {
            todos: [
                {item:'Send a file down to Mexico', status:false},
                {item:'Discuss Abidgan Project with Tola', status:true},
                {item:'Assign duties to workers on Datsun Farmland', status:true},
                {item:'Dissolve 2020 Contribution with AJEO', status:false},
                {item:'Submit Proposal and Quotation for Danlax Agrc Farm', status:true},
                {item:'Finish my TODO APP', status: false},
            ]
        }

        const action = {type: 'ADD_TODO', payload:{item:'Finish my TODO APP', status: false}};
        const result = reducer(initialState, action);
        expect(result).toEqual(expectedState);
    });

    test('fetch all todo item in state object', () => {
        const initialState = {
            todos: [
                {item:'Send a file down to Mexico', status:false},
                {item:'Discuss Abidgan Project with Tola', status:true},
                {item:'Assign duties to workers on Datsun Farmland', status:true},
                {item:'Dissolve 2020 Contribution with AJEO', status:false},
                {item:'Submit Proposal and Quotation for Danlax Agrc Farm', status:true}
            ]
        }

        const action = {type: 'FETCH_TODOS'};
        const result = reducer(initialState, action);
        expect(result).toEqual(initialState);
    });
})