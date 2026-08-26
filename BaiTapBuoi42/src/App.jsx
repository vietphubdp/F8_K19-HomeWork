import { useState } from "react";

import questions from "./data/questions";

import { AnswerList, GameOver, MoneyBoard, Question } from "./components";

import "./App.css";

function App() {
	// Đang ở câu hỏi nào?
	const [currentQuestion, setCurrentQuestion] = useState(0);

	// Người chơi đang chọn đáp án nào?
	const [selectedAnswer, setSelectedAnswer] = useState(null);

	// Đã bấm "Chốt đáp án" chưa?
	const [isAnswered, setIsAnswered] = useState(false);

	// Game kết thúc chưa?
	const [gameOver, setGameOver] = useState(false);

	// Số tiền hiện tại
	const [money, setMoney] = useState(0);

	// Lấy câu hỏi hiện tại
	const question = questions[currentQuestion];

	// =========================
	// Người chơi chọn đáp án
	// =========================
	const handleSelectAnswer = (index) => {
		// Nếu đã chốt thì không cho chọn nữa
		if (isAnswered) {
			return;
		}

		setSelectedAnswer(index);
	};

	// =========================
	// Chốt đáp án
	// =========================
	const handleSubmitAnswer = () => {
		// Chưa chọn đáp án
		if (selectedAnswer === null) {
			alert("Vui lòng chọn một đáp án!");
			return;
		}

		// Đánh dấu đã chốt
		setIsAnswered(true);

		// Kiểm tra đáp án
		if (selectedAnswer === question.correctAnswer) {
			// Đúng
			setMoney(question.prize);
		} else {
			// Sai
			setTimeout(() => {
				setGameOver(true);
			}, 1000);
		}
	};

	// =========================
	// Sang câu tiếp theo
	// =========================
	const handleNextQuestion = () => {
		// Nếu đang ở câu cuối
		if (currentQuestion === questions.length - 1) {
			setGameOver(true);
			return;
		}

		// Sang câu tiếp
		setCurrentQuestion((prev) => prev + 1);

		// Reset đáp án
		setSelectedAnswer(null);

		// Cho phép chọn lại
		setIsAnswered(false);
	};

	// =========================
	// Chơi lại
	// =========================
	const handleRestart = () => {
		setCurrentQuestion(0);
		setSelectedAnswer(null);
		setIsAnswered(false);
		setGameOver(false);
		setMoney(0);
	};

	// Nếu game kết thúc
	if (gameOver) {
		return (
			<div className="container">
				<GameOver
					money={money}
					onRestart={handleRestart}
				/>
			</div>
		);
	}

	return (
		<div className="container">
			<div className="game">
				<Question
					questionNumber={currentQuestion + 1}
					question={question.question}
				/>

				<AnswerList
					options={question.options}
					selectedAnswer={selectedAnswer}
					onSelectAnswer={handleSelectAnswer}
					isAnswered={isAnswered}
					correctAnswer={question.correctAnswer}
				/>

				<div className="actions">
					{!isAnswered ? (
						<button onClick={handleSubmitAnswer}>
							Chốt đáp án
						</button>
					) : selectedAnswer === question.correctAnswer ? (
						<button onClick={handleNextQuestion}>
							Câu tiếp theo
						</button>
					) : null}
				</div>
			</div>

			<MoneyBoard
				questions={questions}
				currentQuestion={currentQuestion}
			/>
		</div>
	);
}

export default App;