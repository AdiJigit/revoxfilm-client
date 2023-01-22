import './listitem.scss';
import { BsFillPlayFill } from 'react-icons/bs';
import { BiLike } from 'react-icons/bi';
import { BiDislike } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  console.log(item);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get('/movies/find/' + item, {
          headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzE0ODMzNzBhNjEyMDdmNzMxMTZiZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDIxOTgwOCwiZXhwIjoxNjc0NjUxODA4fQ.uNmhfOyNwVF7rKTg6SiS8_7hsWrozE_fsCMfKpQjpaM',
          },
        });
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

  return (
    <Link to={{ pathname: '/watch' }} state={{ movie: movie }}>
      <div
        className="listItem"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      >
        <img src={movie?.imgSm} alt="listItem" />
        {isHovered && (
          <>
            <video src={movie?.trailer} autoPlay={true} loop muted />
            <div className="itemInfo">
              <div className="icons">
                <BsFillPlayFill size={20} className="icon" />
                <IoMdAdd size={20} className="icon" />
                <BiLike size={20} className="icon" />
                <BiDislike size={20} className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{movie?.duration}</span>
                <span className="limit">+{movie?.limit}</span>
                <span>{movie?.year}</span>
              </div>
              <div className="desc">{movie?.desc}</div>
              <div className="genre">{movie?.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}
