// Write your code here



import React, { Component } from 'react'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
    constructor(props) {
        super(props);
        const { suggestionsList } = this.props
        const { id, suggestion } = suggestionsList

        this.state = {
            searchValue: "",
            searchList: suggestionsList
        }
    }
    updateSearch = (event) => {
        const { searchValue, searchList } = this.state
        const { suggestionsList } = this.props

        this.setState({
            searchValue: event.target.value,
            searchList: suggestionsList.filter(item => item.suggestion.toLowerCase().includes(searchValue.toLowerCase())),
        })
        console.log(searchValue)
    }

    selectSearch = (suggestion) => {
        const { searchValue } = this.state

        this.setState({
            searchValue: suggestion
        })
        console.log(searchValue)
    }

    render(props) {
        const { suggestionsList } = this.props
        const { searchList, searchValue } = this.state

        return (
            <div className="flex flex-col justify-center items-center h-screen text-center px-10">
                <div className="h-80">
                    <div className="flex flex-col justify-center items-center">
                        <img className="w-56 p-3 " src="https://assets.ccbp.in/frontend/react-js/google-logo.png" />
                        <input value={searchValue} onChange={this.updateSearch} type="search" placeholder="Search" className="rounded-lg bg-white shadow py-2 w-96 pl-3  pr-2 border-3 border-gray-300 rounded" />
                    </div>
                    <ul className="rounded-lg bg-white card border-3 shadow border-gray-300 p-1.5 w-96">
                        {searchList.map(eachItem => (
                            <SuggestionItem selectSearch={this.selectSearch} searchList={eachItem} key={eachItem.id} />
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default GoogleSuggestions
