import '../src/styles.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from "react";
function MyApp({ Component, pageProps }) {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    return <Component {...pageProps} />
}

export default MyApp
