function StartScreen({ numQ, dispatch }) {
	return (
		<div className="start">
			<h2 className="">Welcome to The React Quiz</h2>
			<p style={{margin:'7px' , fontSize:'2rem'}}>{numQ} Question to Test Your React Mastery</p>
			<button
				className="btn btn-ui"
				style={{margin:'10px'}}	
				onClick={() => dispatch({ type: "start" })}
			>
				Let's Start
			</button>
		</div>
	);
}

export default StartScreen;
