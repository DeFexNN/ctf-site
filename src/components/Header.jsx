export default function Header() {
    return (
        <header className="hero" id="top">
            <div className="hero__nav">
                <nav className="nav">
                    <a href="#members">Members</a>
                    <a href="#ctfs">CTF</a>
                    <a href="#contacts">Contacts</a>
                </nav>
            </div>

            <div className="hero__body">
                <p className="eyebrow">CTF Offensive & Research Team</p>
                <h1>518 Imposter CTF crew</h1>
                <p className="lede">
                    Our team works across Web, Pwn, Network Security, and Forensics.  
                    We deliver fast retros, optimize exploits, and document clear technical notes.
                </p>

                <div className="hero__meta">
                    <div className="pill">Ukraine</div>
                    <div className="pill pill--outline">Web · Pwn · Forensics</div>
                    <div className="pill">Top 10 finish</div>
                </div>

                <div className="hero__actions">
                    <a className="btn primary" href="#ctfs">Results</a>
                    <a className="btn ghost" href="#members">Meet the crew</a>
                </div>
            </div>
        </header>
    );
}
