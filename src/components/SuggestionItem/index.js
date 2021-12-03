// Write your code here

const SuggestionItem = (props) => {
    const { searchList, selectSearch } = props
    const { id, suggestion } = searchList

    const clickItems = () => {
        selectSearch(suggestion)
    }


    return (
        <button onClick={clickItems} className={`${id} text-left pl-3 pr-2 py-1.5 w-full flex flex-row justify-between items-center align-middle`}>
            <p className="text-gray-500">{suggestion}</p>
            <img className="w-6" src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png" />
        </button>
    )
}
export default SuggestionItem