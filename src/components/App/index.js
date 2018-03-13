import React, { Component } from 'react'
import ChartIntent from '../ChartIntent'
import QuestionList from '../QuestionList'

class App extends Component {
    
    render(props) {
        return (
            <div>
                <code>wizard-visuals</code>
                <ChartIntent />
                <QuestionList />        
            </div>
        )
    }
}