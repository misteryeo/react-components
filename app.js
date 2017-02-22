var GroceryList = () => (
  <div>
    <h2>Grocery List</h2>
    <ToBuyList tobuy={['Carrots', 'Spinach', 'Mango']}/>
  </div>
);

var ToBuyList = (props) => {

var onItemClick = (event) => {
  alert('Woo this works!');
};

  return(
    <ul>
      <li onClick={onItemClick}>{props.tobuy[0]}</li>
      <li>{props.tobuy[1]}</li>
      <li>{props.tobuy[2]}</li>
    </ul>
    );

};

ReactDOM.render(<GroceryList />, document.getElementById("app"))

