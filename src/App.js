import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import background1 from './assets/bg1.jpg'
import background3 from './assets/bg2.jpg'

const App = () => {
    return (
        <>
            <Header
                title
                descr
            />
            <Layout
                title
                descr
                urlBg={background1}
                colorBg
            /><Layout
                title
                descr
                colorBg={'red'}
            /><Layout
                title
                descr
                urlBg={background3}
                colorBg
            />
            <Footer />
        </>
    )
}


export default App;