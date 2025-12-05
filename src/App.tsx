import "./App.css";

import Header from "./components/Header";
import Members from "./components/Members";
import CTFTable from "./components/CTFTable";
import CTFCard from "./components/CTFCard";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div className="page">
            <div className="grid-overlay" aria-hidden="true" />

            <Header />

            <main className="content">
                <Members />
                <CTFTable />
                <CTFCard />
                <Contacts />
            </main>

            <Footer />
        </div>
    );
}
