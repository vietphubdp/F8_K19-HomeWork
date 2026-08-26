function MoneyBoard({ questions, currentQuestion }) {
	return (
		<div className="money-board">
			<h3>Tiền thưởng</h3>

			{[...questions].reverse().map((question, index) => {
				const realIndex = questions.length - 1 - index;

				return (
					<div
						key={question.id}
						className={
							realIndex === currentQuestion
								? "money active"
								: "money"
						}
					>
						<span>Câu {realIndex + 1}</span>

						<span>
							{question.prize.toLocaleString("vi-VN")} đ
						</span>
					</div>
				);
			})}
		</div>
	);
}

export default MoneyBoard;