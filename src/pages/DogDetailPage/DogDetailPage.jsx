import './dogdetailpage.css'
import AdoptForm from '../../components/AdoptForm/AdoptForm'

const DogDetailPage = () => {
  return (  
    <div className="DogDetailPage">
      <h1 className="header">Detail Page</h1>

      <div className="datePicker">
        <AdoptForm />
      </div>
      
    </div>
  );
}

export default DogDetailPage;