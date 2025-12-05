import { ctfs } from "../data/ctfs";

export default function CTFTable() {
    return (
        <section id="ctfs" className="section-block">
            <div className="section-head">
                <p className="eyebrow">Results</p>
                <h2>Our CTFs</h2>
                <p className="muted">Quick stats for recent events we played.</p>
            </div>

            <div className="table-wrap">
                <table className="ctf-table">
                    <thead>
                        <tr>
                            <th>Назва</th>
                            <th>Date</th>
                            <th>Teams</th>
                            <th>Place</th>
                            <th>Categories</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ctfs.map((c, i) => (
                            <tr key={i}>
                                <td>{c.name}</td>
                                <td>{c.date}</td>
                                <td>{c.teams}</td>
                                <td><span className="place">{c.place}</span></td>
                                <td>{c.categories}</td>
                                <td>
                                    {c.link ? <a href={c.link}>writeup</a> : <span className="muted">soon</span>}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
