import './Page404.css'
import NavButton from "../../components/NavButton/NavButton";


const Page404 = () => {
    return <main className={'Page404'}>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <NavButton to='/'>Return to Home</NavButton>
    </main>
}
export default Page404;