import Navbar from '../../components/navbar/Navbar';
import './home.scss';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../../components/footer/Footer';

export default function Home({ type }) {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomList = async () => {
      try {
        const res = await axios.get(
          `lists${type ? '?type=' + type : ''}${
            genre ? '&genre=' + genre : ''
          }`,
          {
            headers: {
              token:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzE0ODMzNzBhNjEyMDdmNzMxMTZiZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDIxOTgwOCwiZXhwIjoxNjc0NjUxODA4fQ.uNmhfOyNwVF7rKTg6SiS8_7hsWrozE_fsCMfKpQjpaM',
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomList();
  }, [genre, type]);
  console.log(lists);


  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list) => (
        <List list={list} key={list._id} />
      ))}
      <Footer />
    </div>
  );
}
