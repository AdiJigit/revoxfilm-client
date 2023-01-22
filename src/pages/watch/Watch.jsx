import './watch.scss';
import { BiArrowBack } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom';
import Footer from '../../components/footer/Footer';

export default function Watch() {
  const location = useLocation();
  const movie = location.state.movie;
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <BiArrowBack size={20} />
          Home
        </div>
      </Link>
      <div className="wrapper-iframe">
        <div>
          <iframe
            width="560"
            height="315"
            src={movie?.youtubeTrailer}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="iframe"
          ></iframe>
        </div>
        <div>
          <h1>Trailer</h1>
          <h2>{movie.title}</h2>
          <p>{movie.desc}</p>
          <p>Genre: {movie.genre}</p>
          <p>Limit: +{movie.limit}</p>
        </div>
      </div>
      <h1 className='video-title'>Watch full movie</h1>
      <div className="wrapper-video">
        <video className="video" progress controls src={movie.video} />
      </div>
      <Footer />
    </div>
  );
}
