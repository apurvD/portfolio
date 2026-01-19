import React from 'react'

export default function CodeCart() {
    return (
        <main>
            <section className="section-container">
                <div className="card">
                    <h1 className="text-2xl font-bold">CodeCart – Barcode‑Enabled Shopping & Inventory System</h1>
                    <p className="text-gray-700 mt-2">
                        A dual‑interface software solution designed to streamline the shopping and checkout experience for customers while providing retailers with a powerful, web‑based inventory management system.
                    </p>
                    <img
                        src="../images/codecart_logo.png"
                        alt="CodeCart Application"
                        className="my-4"
                    />

                    <h2 className="text-xl font-semibold mt-4">Overview</h2>
                    <p className="text-gray-700">
                        CodeCart addresses the inefficiencies of traditional supermarket checkout processes, especially during peak hours.
                        By integrating barcode scanning directly into a mobile application, customers can scan items as they shop,
                        automatically adding them to a digital cart. This reduces wait times, minimizes manual scanning at checkout,
                        and enhances the overall shopping experience.
                    </p>
                    <p className="text-gray-700 mt-2">
                        On the retailer side, CodeCart includes a robust web‑based Inventory Management System (IMS) that provides
                        real‑time access to product data, stock levels, sales analytics, and transaction history. The system generates
                        automated billing numbers and ensures smooth, accurate, and fast checkout processing.
                    </p>

                    <h2 className="text-xl font-semibold mt-4">Key Features</h2>
                    <ul className="list-disc list-inside ml-4 text-gray-700">
                        <li>
                            <strong>Mobile barcode scanning:</strong> Customers scan product barcodes using the app, instantly adding items to their cart.
                        </li>
                        <li>
                            <strong>Real‑time cart updates:</strong> Users can view quantities, pricing, and totals as they shop.
                        </li>
                        <li>
                            <strong>Swift checkout:</strong> After scanning all items, customers proceed to payment with an automatically generated billing number.
                        </li>
                        <li>
                            <strong>Retailer Inventory Management System:</strong> A web‑based dashboard for managing stock, product details, and sales.
                        </li>
                        <li>
                            <strong>Point‑of‑Sale integration:</strong> Streamlines traditional POS workflows with automated data syncing.
                        </li>
                        <li>
                            <strong>Transaction history & analytics:</strong> Retailers can track sales, monitor trends, and optimize inventory.
                        </li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-4">Technologies</h2>
                    <p className="text-gray-700">
                        React Native, Expo Go, Node.js, REST APIs, Mobile Barcode Scanning SDKs, MySQL, PHP
                    </p>
                    <div className="mobile-screenshots">
                        <img src="/images/mobile_1.png" alt="App Screenshot 1"/>
                    </div>

                    <p style={{ textAlign: 'center' }}>The mobile application is built using React Native with Expo Go, enabling seamless development and testing on both Android and iOS devices. It supports Android devices running Android 10 or higher.</p>
                    <div className="mobile-screenshots">
                        <img src="/images/mobile_2.jpeg" alt="App Screenshot 1" className="mobile-shot"/>
                        <img src="/images/mobile_3.jpeg" alt="App Screenshot 1" className="mobile-shot"/>
                    </div>

                    <p  style={{ textAlign: 'center' }}> Products can be scanned from the mobile app using the device camera or can be manually added.</p>
                    <div className="mobile-screenshots">
                        <img src="/images/Westside.jpeg" alt="App Screenshot 1" className="mobile-shot"/>
                        <img src="/images/mobile_4.jpeg" alt="App Screenshot 1" className="mobile-shot"/>
                    </div>
                      <p>The backend uses a MySQL database with PHP for server‑side logic. The retailer-facing web application is also developed in PHP, communicating with the server over HTTP to fetch and update inventory data. All data exchanged between the mobile app, web app, and server is serialized in JSON for efficient and structured communication.</p>

                      <h2 className="text-xl font-semibold mt-4">Web Application visuals and demo:</h2>
                    <div className="web-app-images">
                        <img src="/images/codecart_signup.png" alt="App Screenshot sign up"/>
                    </div>
                    <p style={{ textAlign: 'center' }}>New account creation for retailers</p>
                    <div className="web-app-images">
                        <img src="/images/codecart_architecture.png" alt="App Screenshot sign up"/>
                    </div>
                    <p style={{ textAlign: 'center' }}>System architecture</p>
                    <div className="web-app-images">
                        <img src="/images/codecart_dashboard.png" alt="App Screenshot sign up"/>
                    </div>
                    <p style={{ textAlign: 'center' }}>App dashboard for retailers</p>
                    <div className="web-app-images">
                        <img src="/images/phpmyadmin_products.png" alt="App Screenshot sign up"/>
                    </div>
                    <p style={{ textAlign: 'center' }}>Sample PHPMyadmin screen for admins</p>
                </div>
            </section>
        </main>
    )
}
