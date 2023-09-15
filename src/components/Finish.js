function Finish({ maxPP, points, dispatch }) {
	const pt = (points / maxPP) * 100;
	return (
		<>
			<p className="result">
				You Scored <strong>{points}</strong> out of {maxPP}({Math.ceil(pt)}%)
			</p>
			<button
				className="btn btn-ui"
				onClick={() => dispatch({ type: "restart" })}
			>
				Restart Quiz
			</button>
		</>
	);
}

export default Finish;
