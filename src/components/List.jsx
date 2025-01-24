import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { getAllTaskAPI } from '../server/allAPI';


const List = () => {

//  const [allTasks, setAllTasks] = useState([]);

    // const getallTasks = async () => {
    //     try {
    //       const result = await getAllTaskAPI();
    //       if (result.status >= 200 && result.status < 300) {
    //         setAllTasks(result.data);
    //       }
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   };
    // useEffect(() => {
    //     getallBooks();
    //   },[])

  return (
    <div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>title</th>
          <th>description</th>
          <th>deadline</th>
          <th>level</th>
          <th>status</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
      
     
        <tr>

          <td>Task1</td>
          <td>description</td>
          <td>deadline</td>
          <td>@level</td>
          <td>status</td>
          <td> 
            <Button  className="btn btn-info">
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Button>
                    <Button  className="btn btn-danger">
                      <i className="fa-solid fa-trash"></i>
                    </Button></td>
        </tr>
        </tbody>
        </Table>
    </div>
  )
}

export default List