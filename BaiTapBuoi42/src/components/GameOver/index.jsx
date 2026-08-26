function GameOver({ money, onRestart }) {
	return (
		<div className="game-over">
			<h1>Game Over!</h1>

			<p>
				Bạn đã giành được:
				<strong>
					{money.toLocaleString("vi-VN")} đ
				</strong>
			</p>

			<button onClick={onRestart}>
				Chơi lại
			</button>
		</div>
	);
}

export default GameOver;