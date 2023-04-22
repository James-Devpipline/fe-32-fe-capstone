/* 
Final Capstone - Soft deadline: Wednesday April 26. Due by graduation day.
Submit via the "React Capstone" Guide in the curriculum: https://classroom.devpipeline.com/mod/assign/view.php?id=772

Routing
	- Landing Page
	- About Page
		- Describe your project
		- What are your industry goals
		- What did you learn in your time here at DevPipeline so far
		- What projects have you built
		- What is your favorite language, and why
	- Gallery
		- Fetch data from given api
		- Display the poster image and title at the least (broken down and organized by genre or network)
		- Link each poster to a show page
		- Setup filters for tv shows (maybe network, genre, rating, etc) (at least 2 filters)
	- Show Page
		- Fetch the appropriate show from the given api
		- Display information about the show in question
			- Big image, title, rating, description, network, maybe there's trailer??? Etc...
			- This page should be clean but VERY information heavy.
			--------\/ (focus on this last)
		- Setup the ability to allow reviews to be written about the show
			- These do not need to be persistent. If they disappear on refresh, that's ok, but try working with localstorage if you'd like to stretch yourself.
			- Create, Update, and Delete Reviews.
			--------/\ (focus on this last)
	- Contact
		- Web form
			- email
			- first name
			- last name
			- subject
			- content (text area)
			- Submit button
				- This needs a submit handler, but you just need to display something like an alert, it doesn't have to actually send an email off.
		- Contact information
			- Does not need to actually contain your real info. Fake info is perfect.

Navigation
	- Sidebar or Header
	- Footer
	- Pages MAY have other links to navigate around the app as well (like a "go back" type button)

Research and Bring in a library you haven't used or learned about in class
	- IE: a carousel component to display your shows.
	(go through npm docs and find one that is built for react and properly use one)

This MUST be responsive. Develop your projects for at least desktop and mobile phone. Any other breakpoints would be extra.
ALL pages that have asynchronous behavior need to reflect good UX (IE: Disabling buttons, rendering loading components, etc).
You need to include a valid SCSS mixin.
You need to include a SCSS variable (reuse colors with variables?)
You must use the CRA toolchain to spin up your project. Prune all irrelevant tools (files, functions, comments, dependencies, etc…)
Include at LEAST one icon from font awesome. Set it up for a global store, not individual imports.
Commit commit commit!!! I should not see 1 commit for the entire project. Find logical stopping points to commit and push to Github. (IE: per feature). I will not accept excuses related to you losing your code, that is a failing mark.
You will be graded on things like proper data flow, code composition, best practices, naming conventions, proper state and prop management, along with having the requirements met.

This is an INDIVIDUAL project. You can only use your mentors, TA's, or instructor for help (in that order).
You can work in groups, but leveraging each other's code will result in both students failing. Don't test this!

Resources 
 - API:
	- https://static.tvmaze.com/apidoc/
	- https://www.tvmaze.com/api
	- Base url for shows https://api.tvmaze.com/show
- NPM:
    - Font awesome libraries
    - SASS library (as a dev dep)
    - React router dom@5
    - One library you haven't learned about or worked with before
Use other sites for design ideas. The internet is a big place.

If you have time, try your hand at deploying to Netlify (or other hosting service). This is NOT a requirement. Focus on this last if anything.
*/
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./navigation/Navbar";
import Landing from "./pages/Landing"
import About from "./pages/About";
import Contact from "./pages/Contact"
import ShowPage from "./pages/ShowPage";
import Footer from "./navigation/Footer"


export default function App() {
  return (
    <div className="App">
			<Router>
				<Navbar />

				<Switch>
					<Route exact path='/' component = {Landing} />
					<Route path='/about' component = {About} />
					<Route path='/contact' component = {Contact} />
					<Route path='/show/:showID' component={ShowPage} />
				</Switch>
				<Footer />
			</Router>
    </div>
  );
}


