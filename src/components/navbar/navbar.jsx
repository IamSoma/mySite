

const navbarInstane = (
	<Navbar inverse collapseOnSelect>
		<Navbar.Header>
			<Navbar.Brand>
				<a href="#">Nicks Site</a>
			</Navbar.Brand>
			<Navbar.Toggle/>
		</Navbar.Header>
		<Navbar.Collapse>
			<Nav>
				<NavItem eventKey={1} href="#">Page1</NavItem>
				<NavItem eventKey={2} href="#">Page2</NavItem>
			</Nav>
		</Navbar.Collapse>
	</Navbar>	
);

ReactDOM.render(navbarInstane, mountNode)