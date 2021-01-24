import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Welcome from "../components/Welcome";
export default function Content() {
	return (
		<Switch>
			<Route exact path="/">
				<Welcome />
			</Route>
			<Route path="/hello">Hello</Route>
		</Switch>
	);
}
