import React, { useEffect, useReducer } from "react";
import Main from "./Main";
import Header from "./Header";
import Loader from "./Loader";
import Error from "./Error";
import Q from "./Q";
import StartScreen from "./StartScreen";
import NextButton from "./NextButton";
import Progress from "./Progress";
import Finish from "./Finish";
const initialState = {
	questions: [],
	status: "loading",
	index: 0,
	answer: null,
	points: 0,
	sec: null,
};

function reducer(state, action) {
	switch (action.type) {
		case "dataReceived":
			return {
				...state,
				questions: action.payload,
				status: "ready",
			};
		case "dataFailed":
			return {
				...state,
				status: "error",
			};
		case "start":
			return {
				...state,
				status: "active",
				// sec: state.questions.length * SECS_PER_Q,
			};
		case "newAnswer":
			const question = state.questions[state.index];
			return {
				...state,
				answer: action.payload,
				points:
					action.payload === question.correctOption
						? state.points + question.points
						: state.points,
			};
		case "nextQuestion":
			return { ...state, index: state.index + 1, answer: null };
		case "finish":
			return { ...state, status: "finished" };
		case "restart":
			return { ...initialState, questions: state.questions, status: "ready" };
		// case "tick":
		// 	return {
		// 		...state,
		// 		sec: state.sec - 1,
		// 		status: state.sec === 0 ? "finished" : state.status,
		// 	};
		default:
			throw new Error("Unknown action");
	}
}

export default function App() {
	const [{ questions, status, index, answer, points, sec }, dispatch] =
		useReducer(reducer, initialState);
	const numQuestions = questions.length;
	const maxPP = questions.reduce((prev, cur) => prev + cur.points, 0);

	useEffect(() => {
		fetch("http://localhost:8000/questions")
			.then((res) => res.json())
			.then((data) => dispatch({ type: "dataReceived", payload: data }))
			.catch(() => dispatch({ type: "dataFailed" }));
	}, []);

	return (
		<div className="app">
			<Header />
			<Main>
				{status === "loading" && <Loader />}
				{status === "error" && <Error />}
				{status === "ready" && (
					<StartScreen
						numQuestions={numQuestions}
						dispatch={dispatch}
						onStart={() => dispatch({ type: "start" })}
					/>
				)}
				{status === "active" && (
					<>
						<Progress
							index={index}
							numQuestions={numQuestions}
							points={points}
							maxPP={maxPP}
							answer={answer}
						/>
						<Q
							question={questions[index]}
							dispatch={dispatch}
							answer={answer}
						/>
						{/* <Footer> */}
							{/* <Timer dispatch={dispatch} sec={sec} /> */}

							<NextButton
								dispatch={dispatch}
								answer={answer}
								numQuestions={numQuestions}
								index={index}
							/>
						{/* </Footer> */}
					</>
				)}

				{status === "finished" && (
					<Finish points={points} maxPP={maxPP} dispatch={dispatch} />
				)}
			</Main>
		</div>
	);
}
