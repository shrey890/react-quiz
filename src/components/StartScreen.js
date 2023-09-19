function StartScreen({ numQ, dispatch }) {
	return (
		<div className="start">
			<h2 className="">Welcome to The React Quiz</h2>
			<p style={{ margin: "7px", fontSize: "2rem" }}>
				{numQ} Question to Test Your React Mastery
			</p>
			<button
				className="btn btn-ui"
				style={{ margin: "20px" }}
				onClick={() => dispatch({ type: "start" })}
			>
				Let's Start
			</button>
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<h3>
				<a href="https://twitter.com/shrey4875" target="_blank" style={{ color: "white" }}>
					<i class="fa-brands fa-x-twitter"></i>
				</a>
			</h3>

			<h3>
				<a href="https://github.com/shrey890" target="_blank" style={{ color: "white" }}>
					<i class="fa-brands fa-github"></i>
				</a>
			</h3>
			<h4 style={{ fontSize: "small" }}>&copy; shrey</h4>
		</div>
	);
}

export default StartScreen;
