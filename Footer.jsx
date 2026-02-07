 const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-top">
                <ul className="list-container">
                    <li className="list-item">Fitness Dashboard</li>
                    <li className="list-item">Services</li>
                </ul>
                <ul>
                    <li className="list-item">Watch Videos</li>
                    <li className="list-item">Discord</li>
                </ul>
                <ul>
                    <li className="list-item">Privacy Policy</li>
                    <li className="list-item">Terms & Conditions</li>

                </ul>
            </div>
            <div className="footer-bottom">
                <p>© 2024 Fitness Dashboard. All Rights Reserved. </p>
                <div className="icon-container">
                    <a href="#" className="icon-link">🎮</a>
                    <a href="#" className="icon-link">🐦</a>
                    <a href="#" className="icon-link">💻</a>
                    <a href="#" className="icon-link">🏀</a>
                </div>
            </div>
        </footer>
    )
};