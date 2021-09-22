import TinderCards from '../../components/TinderCards/TinderCards'
import './bookmarkpage.css';

const BookmarkPage = () => {
  return ( 
    <div className="BookmarkPage">
      <h1 className="header">Dogs You Like!</h1>
      <div className="card-container">
        <TinderCards />
        <TinderCards />
        <TinderCards />
        <TinderCards />
        <TinderCards />
        <TinderCards />
        <TinderCards />
        <TinderCards />
        <TinderCards />
      </div>
    </div>
   );
}
 
export default BookmarkPage;