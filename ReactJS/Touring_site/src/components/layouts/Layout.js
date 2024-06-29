import MainMenu from "./MainMenu";
import Styles from './Layout.module.css'

function Layout (props){
    return <div className={Styles.main}>
        <main><MainMenu></MainMenu></main>
        {props.children}
    </div>
}

export default Layout;