export default function MemberCard({ nick, role, about }) {
    return (
        <div className="member-card">
            <div className="member-card__top">
                <span className="pulse" aria-hidden="true" />
                <h3>{nick}</h3>
            </div>
            <p className="role">{role}</p>
            <p className="about">{about}</p>
        </div>
    );
}
