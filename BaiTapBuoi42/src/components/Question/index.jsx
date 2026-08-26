function Question({ questionNumber, question }) {
	return (
		<div className="question">
			<p>Câu {questionNumber}</p>

			<h2>{question}</h2>
		</div>
	);
}

export default Question;