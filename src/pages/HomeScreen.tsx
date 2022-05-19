import { FC } from 'react';
import { Props, TableInfo ,commitInfo } from '../components/home/TableInfo';
import { Navbar } from '../components/ui/Navbar';
// import { Link } from 'react-router-dom';


const commitsInformation : commitInfo[] = [{
  commitId: "123",
  commitMessage: "12321",
  owner:"yo",
  emailCommiter:"sdsd",
  date: "sdsd",
}]
export const HomeScreen : FC = () => {
  return (
    <main>
      <Navbar/>
      <section>
        <div>
          <div>

            <button>Default {"(This Proyect)"}</button>
          </div>
          <div>
            <input type="text"/>
            <button>Search Commits by Url</button>
          </div>
        </div>

        
        <TableInfo commitsInformation={commitsInformation}/>

      </section>
    </main>
  )
}
