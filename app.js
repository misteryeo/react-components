// This is the component within the root component
// Create a class component here which extends to React.Components
class ToBuyList extends React.Component {

  // As a result, you'll need a constructor function which takes in props
  constructor(props) {
    super(props);
    this.state = {
      done: false
    }
  }

  // All class components require a render method
  render() {

  var onItemClick = (event) => {
    alert('Woo this works!');
  }

  var onItemHover = (event) => {
    this.setState({
      done: !this.state.done
    });
  }

  var style = {
    fontWeight: this.state.done ? 'bold' : 'normal'
  };

    return (
      <ul>
        <li style={style} onMouseEnter={onItemHover.bind(this)} onClick={onItemClick}>{this.props.groceries.name}</li>
      </ul>
    );
  }

}


// This is the root component
var GroceryList = (props) => (
  <div>
    <h2>Grocery List</h2>
    {props.tobuy.map(groceries =>
      <ToBuyList key={groceries.name} groceries={groceries} />
    )}
  </div>
);

var GROCERIES = [{name: 'Carrots'}, {name: 'Spinach'}, {name: 'Mango'}];
  
// This renders the components onto the page
ReactDOM.render(<GroceryList tobuy={GROCERIES} />, document.getElementById('app'))

