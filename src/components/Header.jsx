const base = import.meta.env.BASE_URL

export default function Header(){
    return(
        <header>
            <img src={`${base}images/logo.png`} alt="Globe" />
            <h1>Frida Berge</h1>
        </header>
    )
}