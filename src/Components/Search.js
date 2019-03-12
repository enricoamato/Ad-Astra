import React from 'react'

class Search extends React.Component {
  state = {
    value: ''
  }

  handleChange = e => {
    this.setState({ value: e.target.value })
  }

  search = e => {
    e.preventDefault()
    this.props.search(this.state.value)
  }

  render() {
    return (
      <div className="apodSearch">

        <form onSubmit={this.search}>
          <label>Manually Search for Previous Apod: </label> <br/>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="YYYY-MM-DD"
          />
          <button type="submit">Search</button>
        </form>

      </div>
    )
  }
}

export default Search
