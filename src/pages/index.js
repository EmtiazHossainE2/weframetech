import Layout from '@/components/Layout/Layout';
import SummaryCard from '@/components/MainPage/SummaryCard';
import TaskManagement from '@/components/MainPage/TaskManagement';

const Home = () => {
  return (
    <Layout>
      <div className="">
        {/* Summary card  */}
        <SummaryCard/>
        
        {/* All Task Cards   */}
        {/* <AllTask/> */}
        <TaskManagement/>
      </div>
    </Layout>
  );
};

export default Home;
