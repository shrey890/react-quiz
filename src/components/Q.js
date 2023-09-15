import O from "./O";

function Q({ question , dispatch , answer }) {
	return (
		<div>
			<h4>{question.question}</h4>
			<O question={question} dispatch={dispatch} answer={answer} />
		</div>
	);
}

export default Q;
