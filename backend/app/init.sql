CREATE TABLE campaigns (
    id SERIAL PRIMARY KEY,
    name TEXT,
    status TEXT,
    clicks INTEGER,
    cost REAL,
    impressions INTEGER
);

INSERT INTO campaigns (name, status, clicks, cost, impressions) VALUES
('Summer Sale', 'Active', 150, 45.99, 1000),
('Black Friday', 'Paused', 320, 89.50, 2500),
('Winter Promo', 'Active', 180, 55.20, 1200),
('Clearance', 'Paused', 90, 20.00, 500),
('New Year Blast', 'Active', 250, 75.00, 2000),
('Diwali Sale', 'Active', 300, 95.75, 2300),
('Holi Discounts', 'Paused', 110, 30.25, 800),
('Monsoon Offers', 'Active', 170, 40.50, 900),
('Flash Deals', 'Paused', 210, 65.99, 1500),
('Weekend Bonanza', 'Active', 190, 50.00, 1100);