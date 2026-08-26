const questions = [
	{
		id: 1,
		question: "Thủ đô của Việt Nam là gì?",
		options: ["Hà Nội", "Huế", "Đà Nẵng", "TP. Hồ Chí Minh"],
		correctAnswer: 0,
		prize: 100000,
	},

	{
		id: 2,
		question: "React được phát triển bởi công ty nào?",
		options: ["Google", "Meta", "Microsoft", "Amazon"],
		correctAnswer: 1,
		prize: 200000,
	},

	{
		id: 3,
		question: "JavaScript được sử dụng chủ yếu để làm gì?",
		options: [
			"Lập trình giao diện và logic web",
			"Thiết kế ảnh",
			"Soạn thảo văn bản",
			"Chỉnh sửa video",
		],
		correctAnswer: 0,
		prize: 300000,
	},

	{
		id: 4,
		question: "HTML là viết tắt của gì?",
		options: [
			"HyperText Markup Language",
			"HighText Machine Language",
			"HyperTool Multi Language",
			"HomeText Markup Language",
		],
		correctAnswer: 0,
		prize: 400000,
	},

	{
		id: 5,
		question: "Hook nào dùng để quản lý state trong React?",
		options: ["useEffect", "useState", "useRef", "useContext"],
		correctAnswer: 1,
		prize: 500000,
	},

	{
		id: 6,
		question: "Hook nào thường dùng để xử lý side effect?",
		options: ["useState", "useRef", "useEffect", "useMemo"],
		correctAnswer: 2,
		prize: 600000,
	},

	{
		id: 7,
		question: "Phương thức nào dùng để thêm phần tử vào cuối mảng?",
		options: ["pop()", "shift()", "push()", "slice()"],
		correctAnswer: 2,
		prize: 700000,
	},

	{
		id: 8,
		question: "CSS dùng để làm gì?",
		options: [
			"Xử lý database",
			"Tạo API",
			"Trang trí giao diện",
			"Xử lý server",
		],
		correctAnswer: 2,
		prize: 800000,
	},

	{
		id: 9,
		question: "HTTP status code 404 có nghĩa là gì?",
		options: [
			"Success",
			"Unauthorized",
			"Not Found",
			"Server Error",
		],
		correctAnswer: 2,
		prize: 900000,
	},

	{
		id: 10,
		question: "JSON thường được sử dụng để làm gì?",
		options: [
			"Lưu trữ và trao đổi dữ liệu",
			"Thiết kế giao diện",
			"Biên dịch CSS",
			"Chạy database",
		],
		correctAnswer: 0,
		prize: 1000000,
	},
];

export default questions;