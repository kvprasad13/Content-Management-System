import NavBar from './NavBar.js';
import ArticlesInfo from './ArticlesInfo.js';
import articles from '../Data/ArticlesData.js';
const NavBarArticlesInfo = () => {
    
    return <div>
        <NavBar></NavBar>
        <ArticlesInfo articles={articles}></ArticlesInfo>
    </div>
}
export default NavBarArticlesInfo;