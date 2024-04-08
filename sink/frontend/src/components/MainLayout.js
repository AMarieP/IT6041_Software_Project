import Navbar from './Navbar'
import Content from './Content';

const MainLayout = ({ children }) => {
    return (
        <div style={{ display: 'flex' }}>
            <Navbar />
            <Content>{children}</Content>
        </div>
    );
};

export default MainLayout