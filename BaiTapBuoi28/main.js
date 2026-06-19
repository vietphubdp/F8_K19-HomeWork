// ==========================================
// CẤU HÌNH API
// ==========================================
const API_LOGIN = "https://dummyjson.com/auth/login";
const API_PROFILE = "https://dummyjson.com/auth/me";
const API_REFRESH = "https://dummyjson.com/auth/refresh";

// ==========================================
// KHAI BÁO PHẦN TỬ DOM
// ==========================================
const loginContainer = document.getElementById("login-container");
const profileContainer = document.getElementById("profile-container");
const loginForm = document.getElementById("login-form");
const loginError = document.getElementById("login-error");
const profileData = document.getElementById("profile-data");
const logoutBtn = document.getElementById("logout-btn");

// ==========================================
// ĐĂNG NHẬP
// Tài khoản test: emilys / emilyspass
// ==========================================
loginForm.addEventListener("submit", async (e) => {
	e.preventDefault();
	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;

	try {
		const response = await fetch(API_LOGIN, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				username,
				password,
				// Access Token có thời hạn 1 phút để kiểm thử Refresh Token
				expiresInMins: 1,
			}),
		});

		if (!response.ok) {
			throw new Error("Sai tài khoản hoặc mật khẩu!");
		}

		const data = await response.json();

		// Lưu Access Token và Refresh Token
		localStorage.setItem("accessToken", data.accessToken);
		localStorage.setItem("refreshToken", data.refreshToken);

		// Chuyển sang giao diện Profile
		redirectToProfile();
	} catch (error) {
		loginError.innerText = error.message;
	}
});

function redirectToProfile() {
	loginContainer.style.display = "none";
	profileContainer.style.display = "block";
	loadProfileData();
}

// ==========================================
// GỬI REQUEST KÈM TOKEN
// TỰ ĐỘNG REFRESH KHI TOKEN HẾT HẠN
// ==========================================
async function fetchWithAuth(url, options = {}) {
	let accessToken = localStorage.getItem("accessToken");

	// Thêm Access Token vào Header
	options.headers = {
		...options.headers,
		Authorization: `Bearer ${accessToken}`,
	};

	// Gửi request
	let response = await fetch(url, options);

	// Nếu Access Token hết hạn
	if (response.status === 401) {
		console.warn("Access Token hết hạn. Tiến hành refresh...");

		const refreshToken = localStorage.getItem("refreshToken");

		if (!refreshToken) {
			handleLogout();
			throw new Error(
				"Không tìm thấy Refresh Token. Vui lòng đăng nhập lại.",
			);
		}

		// Lấy Access Token mới
		const refreshResponse = await fetch(API_REFRESH, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				refreshToken,
				expiresInMins: 1,
			}),
		});

		if (refreshResponse.ok) {
			const refreshData = await refreshResponse.json();

			// Cập nhật token mới
			localStorage.setItem("accessToken", refreshData.accessToken);

			if (refreshData.refreshToken) {
				localStorage.setItem("refreshToken", refreshData.refreshToken);
			}

			// Gửi lại request ban đầu
			options.headers.Authorization = `Bearer ${refreshData.accessToken}`;

			response = await fetch(url, options);
		} else {
			// Refresh Token không còn hợp lệ
			handleLogout();
			throw new Error("Phiên đăng nhập đã hết hạn.");
		}
	}

	return response;
}

// ==========================================
// LẤY THÔNG TIN NGƯỜI DÙNG
// ==========================================
async function loadProfileData() {
	try {
		// Gọi API bằng hàm hỗ trợ xác thực
		const response = await fetchWithAuth(API_PROFILE, { method: "GET" });

		if (response.ok) {
			const data = await response.json();

			// Hiển thị thông tin người dùng
			profileData.innerHTML = `
                <img src="${data.image}" alt="Avatar" style="width: 80px; border-radius: 50%; box-shadow: 0 2px 5px rgba(0,0,0,0.2); margin-bottom: 10px;">
                <p><strong>Xin chào:</strong> ${data.firstName} ${data.lastName}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Chức vụ:</strong> ${data.company.title} tại ${data.company.name}</p>
                <p style="color: green; margin-top: 15px;">✔ Đã lấy dữ liệu thành công!</p>
            `;
		} else {
			profileData.innerHTML = `<p style="color: red;">Lỗi khi tải dữ liệu người dùng.</p>`;
		}
	} catch (error) {
		console.error(error);
		profileData.innerHTML = `<p style="color: red;">Đã xảy ra lỗi: ${error.message}</p>`;
	}
}

// ==========================================
// ĐĂNG XUẤT
// ==========================================
function handleLogout() {
	localStorage.removeItem("accessToken");
	localStorage.removeItem("refreshToken");

	loginContainer.style.display = "block";
	profileContainer.style.display = "none";

	loginForm.reset();
	loginError.innerText = "";
}

logoutBtn.addEventListener("click", handleLogout);

// ==========================================
// KHỞI TẠO TRẠNG THÁI TRANG
// ==========================================
window.onload = () => {
	if (localStorage.getItem("accessToken")) {
		// Nếu đã đăng nhập thì chuyển thẳng đến Profile
		redirectToProfile();
	}
};
