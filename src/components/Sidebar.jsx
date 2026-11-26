const base = import.meta.env.BASE_URL

export default function Sidebar(){
    return(
        <div className="sidebar">
            <section className = "timeline">
                <h1>Making this website</h1>
                <h1>Working on cruice ship</h1>
                <h1>Exchange Hong Kong</h1>
                <h1>Bachelor degree</h1>
            </section>
            <section className = "socials">
                <a href="https://www.linkedin.com/in/fridatberge">LINKEDIN</a>
                <a href="https://github.com/fridaberge">GITHUB</a>
                <a href="https://www.instagram.com/fridatberge/">INSTAGRAM</a>
            </section>
        </div>
    )
}