-- Tao bang
CREATE TABLE IF NOT EXISTS customer (
    id serial primary key,
    name text,
    age int,
    address text,
    created_at timestamptz default now(),
    created_by int,
    modified_at timestamptz,
    modified_by int,
    deleted_at timestamptz,
    deleted_by int,
    active bool default true
);

-- Them du lieu
INSERT INTO customer (name, age, address, created_by, modified_by)
VALUES
('Vo Pham Viet Phu', 21, 'Binh Dinh', 1, 1),
('Nguyen Minh An', 24, 'Ha Noi', 1, 1),
('Tran Quoc An', 32, 'Ha Noi', 1, 1 ),
('Le Hoang Nam', 27, 'Da Nang', 1, 1),
('Pham Thanh Tung', 35, 'Hai Phong', 1, 1),
('Nguyen Thi Mai', 29, 'Can Tho', 1, 1),
('Vo Thanh Long', 41, 'Binh Duong', 1, 1),
('Tran Ngoc Han', 23, 'Da Lat', 1, 1),
('Le Minh Khoa', 38, 'Ho Chi Minh', 1, 1),
('Pham Gia Bao', 26, 'Quang Ninh', 1, 1),
('Nguyen Hoang Anh', 31, 'Hue', 1, 1),
('Do Thanh Dat', 22, 'Nha Trang', 1, 1),
('Bui Van Hung', 45, 'Nghe An', 1, 1),
('Dang Thi Ngoc', 28, 'Vung Tau', 1, 1),
('Hoang Duc Manh', 36, 'Bac Ninh', 1, 1);

-- Khach hang tren 30 tuoi
SELECT * FROM customer WHERE age > 30;

-- Khach hang dang hoat dong
SELECT * FROM customer WHERE active = true;

-- Khach hang o Ha Noi
SELECT * FROM customer WHERE address = 'Ha Noi';

-- Khach hang co ten chua chu An
SELECT * FROM customer WHERE name LIKE '%An%';

-- Them cot email, phone, gender
ALTER TABLE customer
    ADD COLUMN phone text,
    ADD COLUMN email text,
    ADD COLUMN gender text;

-- Them thong tin khach hang tai cac cot vua them
UPDATE customer
SET
    email = 'vietphu@gmail.com',
    phone = '0123456789',
    gender = 'Male'
WHERE id = 1;

UPDATE customer
SET
    email = 'levancuong@gmail.com',
    phone = '0923456789',
    gender = 'Male'
WHERE id = 3;

-- Update thong tin khach hang, cap nhat them modified_at va modified_by
UPDATE customer
SET
    age = 20,
    address = 'Gia Lai',
    modified_at = now(),
    modified_by = 2
WHERE id = 1;

