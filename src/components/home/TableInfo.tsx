import { FC } from 'react';

export interface commitInfo{
  commitId : string;
  commitMessage : string;
  emailCommiter : string;
  date : string;
  owner: string;
}

export interface Props {
  commitsInformation  : commitInfo[],
}

export const TableInfo : FC<Props> = ({commitsInformation}) => {
  return (
    <table>
      <thead>
        <tr>

          <th scope="row">Commit Id</th>
          <th scope="row">Commit Message</th>
          <th scope="row">Email Commiter</th>
          <th scope="row">Date</th>
          <th scope="row">Owner</th>
        </tr>
      </thead>
      
      <tbody>
        {
          commitsInformation.map(commit=>(
            <tr>
              <td>{commit.commitId}</td>
              <td>{commit.commitId}</td>
              <td>{commit.commitId}</td>
              <td>{commit.commitId}</td>
              <td>{commit.commitId}</td>
            </tr>
          ))
        }
        
      </tbody>
        
        
    </table>
  )
}
