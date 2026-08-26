function AnswerList({
	options,
	selectedAnswer,
	onSelectAnswer,
	isAnswered,
	correctAnswer,
}) {
	return (
		<div className="answers">
			{options.map((option, index) => {
				let className = "answer";

				// Nếu đã chốt đáp án
				if (isAnswered) {
					// Đáp án đúng
					if (index === correctAnswer) {
						className += " correct";
					}

					// Đáp án người chơi chọn nhưng sai
					if (
						index === selectedAnswer &&
						index !== correctAnswer
					) {
						className += " wrong";
					}
				} else if (index === selectedAnswer) {
					// Đang chọn đáp án nhưng chưa chốt
					className += " selected";
				}

				return (
					<button
						key={index}
						className={className}
						onClick={() => onSelectAnswer(index)}
						disabled={isAnswered}
					>
						<span>
							{String.fromCharCode(65 + index)}.
						</span>

						{option}
					</button>
				);
			})}
		</div>
	);
}

export default AnswerList;