import './Footer.css'

const Footer = () => {
  return ( 
    <div className="footer">
      <div className="phantom" />
      <div className="style">
        <p>&copy; {new Date().getFullYear()} Andy Jia Xing Li | Charlie Miller | Jian Chen | John Diket | Richard Williams | Vy Tran | Alexander Franco</p>
      </div>
    </div> 
  );
}
 
export default Footer;