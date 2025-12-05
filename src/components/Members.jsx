import MemberCard from "./MemberCard";
import { members } from "../data/members";

export default function Members() {
    return (
        <section id="members" className="section-block">
            <div className="section-head">
                <p className="eyebrow">Team roster</p>
                <h2>Members</h2>
                <p className="muted">People covering domains when the clock is ticking.</p>
            </div>

            <div className="grid members-grid">
                {members.map(m => (
                    <MemberCard
                        key={m.nick}
                        nick={m.nick}
                        role={m.role}
                        about={m.about}
                    />
                ))}
            </div>
        </section>
    );
}
