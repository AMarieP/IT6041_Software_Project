import Navbar from './Navbar';
import Content from './Content';

const MainLayout = ({ children }) => {
  return (
    <div style={styles.container}>
      <Navbar />
      <div style={styles.content}>
        <Content>{children}</Content>
      </div>
    </div>
  );
};

export default MainLayout;

const styles = {
  container: {
    display: 'flex',
  },
  content: {
    flexGrow: 1, 
    padding: '20px', 
    marginLeft: '20%', 
  },
};