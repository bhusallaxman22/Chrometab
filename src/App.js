import React from 'react';
import Bookmark from './Bookmark'
import BookList from './BookList'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Bookmark: Bookmark,
      text: '',
    }
  }


handleChange = (event) => {
  this.setState({text: event.target.value})
}
handleSubmit = (event) => {
  event.preventDefault();
var olla= this.state.text;
var polla=`https://www.google.com/search?q=${olla}`
window.location= polla;
window.open(polla)

} 
  render() {
  return (
    <span className='db'>
    <h1>LAXMAN BHUSAL</h1><hr />
    <form onSubmit={this.handleSubmit}>
<input onChange={this.handleChange}  placeholder='Type To Search' className='green bg-light-pink br4' />
</form><hr />
<BookList Bookamrk={Bookmark} />
</span>
  );
}
}
export default App;
