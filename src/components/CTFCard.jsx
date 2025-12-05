import { ctfs } from "../data/ctfs";

export default function CTFCard() {
    return (
        <section className="section-block">
            <div className="section-head">
                <p className="eyebrow">Task breakdowns</p>
                <h2>Highlights</h2>
                <p className="muted">What stood out at events and who closed the tasks.</p>
            </div>

            <div className="ctf-card-grid">
                {ctfs.map((c, i) => (
                    <article className="ctf-card" key={i}>
                        <div className="ctf-card__header">
                            <h3>{c.name}</h3>
                            <span className="pill small">{c.categories}</span>
                        </div>
                        <p className="muted">{c.details.description}</p>

                        <div className="ctf-card__row">
                            <h4>Key tasks</h4>
                            <ul>
                                {c.details.tasks.map(t => <li key={t}>{t}</li>)}
                            </ul>
                        </div>

                        <div className="ctf-card__row">
                            <h4>Solved by</h4>
                            <ul className="tags">
                                {c.details.solvedBy.map(s => <li key={s}>{s}</li>)}
                            </ul>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
