import React, { Component } from 'react';
import { connect } from 'react-redux';

export const ACTIONS = {
    isAppReady: "isAppReady",
    isLoggedIn: "isUserLoggedIn",
}

export function addPerson(person) {
    return {
        type: 'ADD_PERSON',
        person,
    };
}

export function deletePerson(person) {
    return {
        type: 'DELETE_PERSON',
        person,
    };
}