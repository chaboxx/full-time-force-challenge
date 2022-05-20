import { FC, useState } from 'react';
import { TableInfo ,commitInfo } from '../components/home/TableInfo';
import { Navbar } from '../components/ui/Navbar';
import { useApi } from '../hooks/useApi';
// import { Link } from 'react-router-dom';

const commitsInformation : commitInfo[] = [{
  commitId: "123",
  commitMessage: "12321",
  owner:"yo",
  emailCommiter:"sdsd",
  date: "sdsd",
}]


export const HomeScreen : FC = () => {
  

  const [commitsInformationData, setCommitsInformationData] = useState([]);

  const { getCommitData } = useApi();
  

  return (
    <>
      <Navbar/>
      <main className="home_screen_container">
        <div className="home_screen_conten_container">
          <div>

            <button>Default {"(This Proyect)"}</button>
          </div>
          <div>
            <input type="text"/>
            <button>Search Commits by Url</button>
          </div>
        </div>

        
        <TableInfo commitsInformation={commitsInformation}/>

      </main>
    </>
  )
}
