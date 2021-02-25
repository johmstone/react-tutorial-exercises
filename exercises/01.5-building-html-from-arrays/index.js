import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

// only update the value of this array
const navlinkItems = ["google", "facebook", "amazon"];

const listItems = navlinkItems.map(page => (
	<li class="nav-item">
		<a class="nav-link" href="#">
			Link to {page}.com
		</a>
	</li>
));

const content = <ul className="nav">{listItems}</ul>;

ReactDOM.render(content, document.querySelector("#myDiv"));
