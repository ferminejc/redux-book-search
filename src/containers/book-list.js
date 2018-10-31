import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook, selectTest } from '../actions/index'
 
class BookList extends Component {
    
    renderList() {
        return this.props.books.map(book => {
            return (
                <li 
                    className="list-group-item" 
                    key={book.title} 
                    onClick={() => this.props.selectBook(book)}>{ book.title }</li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                { this.renderList() }
            </ul>
        )
    }
}

function mapStateToProps(state) {
    // Whatever is returned will show up as props
    // inside BookList
    return {
        books: state.books,
        activeBook: state.activeBook
    }

}    

    
// Anything returned from this function will end up as props
    
// on the BookList container
    
function mapDispatchToProps(dispatch) {
    
    // Whenever selectBook is called, the result should be passed
    
    // to all of our reducers
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

// Promote BookList from a component to a container - it needs to know 
// about this new dispatch method, selectBook. Make it available
// as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
