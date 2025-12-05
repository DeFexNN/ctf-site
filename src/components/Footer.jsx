export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__inner">
                <div className="footer__links">
                    <a href="#top">Top</a>
                    <a href="#members">Members</a>
                    <a href="#ctfs">CTF</a>
                </div>
                <p className="muted">© {new Date().getFullYear()} 518 Imposter. victory isn’t optional — methods are.</p>
            </div>
        </footer>
    );
}
