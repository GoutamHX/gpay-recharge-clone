import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RiMenuFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom'; 
import { QRCodeSVG } from 'qrcode.react';



const RechargePage = () => {
    const location = useLocation();
    const { mobileNumber, sim } = location.state || {}; 
  
    const [amount, setAmount] = useState('');  
    const [show, setShow] = useState("");
    const [showQRCode, setShowQRCode] = useState(false); 
    // UPI details (replace with your actual details)
    const upiId = "mrgoutam08@ybl";  // Replace with your UPI ID
    const payeeName = "Prepaid Recharge";  // Replace with your payee name (this could be dynamic)

    // Customize transaction note
    const transactionNote = `Diwali Dhamaka Recharge ${mobileNumber || ''}`;

    // Handle the "Recharge" button click
    const handleRecharge = (selectedAmount, index) => {
        if (!selectedAmount || selectedAmount <= 0) {
            alert('Please enter a valid amount.');
            return;
        }
  
        // Generate the UPI URL
        const upiURL = `upi://pay?pa=${upiId}&pn=Prepaid%20Recharge%20for%20${mobileNumber || 'Unknown'}&am=${selectedAmount}&cu=INR&tn=${encodeURIComponent(transactionNote)}`;
    
        // Log the generated URL for debugging
        console.log("Generated UPI URL:", upiURL);
        
        // Set the recharge amount and show the QR code
        setAmount(selectedAmount);
        setShowQRCode(true);  // Make sure QR code is shown
        setShow(index);  // Set the selected index to show the QR code for that index
    };
   
    const simDetails = {
        Jio: {
            icon: "https://rilstaticasset.akamaized.net/sites/default/files/2024-03/JPEG_Download_Jio-Logo-Colour-Navi-Midnight.jpg",
            name: "Jio Prepaid"
        },
        Airtel: {
            icon: "https://logos-world.net/wp-content/uploads/2020/11/Airtel-Emblem-700x394.png",
            name: "Airtel Prepaid"
        },
        VI: {
            icon: "https://logowik.com/content/uploads/images/vi-vodafone-idea6610.jpg",
            name: "VI Prepaid"
        },
        Bsnl: {
            icon: "https://download.logo.wine/logo/Bharat_Sanchar_Nigam_Limited/Bharat_Sanchar_Nigam_Limited-Logo.wine.png",
            name: "BSNL Prepaid"
        }
    };
    const selectedSim = sim && simDetails[sim] ? simDetails[sim] : { name: "Jio Prepaid" };
    const rechargeOptions = [
        {
            id: 1,
            title: 'Exclusive 50% off',
            amount: 11,
            oldAmount :579,
            validity: '56 days',
            data: '1.5 GB/day',
            subscriptions: [
                "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Jio_TV_logo.svg/1200px-Jio_TV_logo.svg.png",
                "https://upload.wikimedia.org/wikipedia/commons/1/14/Jiocinema.png",
                "https://play-lh.googleusercontent.com/kl-7LqnjbT0onFUgWNrcz06oRXovfvO_GVYZoLW1jNwl8NlpFx8NCwKgXuvp1hbWdZI"
            ]
        },
        {
            id: 2,
            title:'Exclusive 50% off',
            amount: 333,
            oldAmount:666,
            validity: '70 days',
            data: '1.5 GB/day',
            subscriptions: [
                "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Jio_TV_logo.svg/1200px-Jio_TV_logo.svg.png",
                "https://upload.wikimedia.org/wikipedia/commons/1/14/Jiocinema.png",
                "https://play-lh.googleusercontent.com/kl-7LqnjbT0onFUgWNrcz06oRXovfvO_GVYZoLW1jNwl8NlpFx8NCwKgXuvp1hbWdZI",
                 "https://toppng.com/uploads/preview/zee5-movies-tv-shows-live-tv-originals-zee5-app-download-free-11562989787ccp8imbuyt.png"
               
            ]
        },
        {
            id: 3,
            title:'TRENDING',
            amount: 399,
            oldAmount:799,
            validity: '84 days',
            data: '1.5 GB/day',
            subscriptions: [
                "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Jio_TV_logo.svg/1200px-Jio_TV_logo.svg.png",
                   "https://upload.wikimedia.org/wikipedia/commons/1/14/Jiocinema.png",
                "https://play-lh.googleusercontent.com/kl-7LqnjbT0onFUgWNrcz06oRXovfvO_GVYZoLW1jNwl8NlpFx8NCwKgXuvp1hbWdZI",
                 "https://static-00.iconduck.com/assets.00/netflix-icon-icon-1024x1024-w4ni4f6d.png",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBWq5jCuRzx7qQ1P7WX7t1lCFMHHQB_rIVMw&s",
               
            ]
        },
        {
            id: 4,
            title:'POPULAR PLAN',
            amount: 199,
            oldAmount:399,
            validity: '28 days',
            data: '2.5 GB/day',
            subscriptions: [
               "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Jio_TV_logo.svg/1200px-Jio_TV_logo.svg.png", //ji tv 
                   "https://upload.wikimedia.org/wikipedia/commons/1/14/Jiocinema.png", // jio cenima
                "https://play-lh.googleusercontent.com/kl-7LqnjbT0onFUgWNrcz06oRXovfvO_GVYZoLW1jNwl8NlpFx8NCwKgXuvp1hbWdZI", //jiosavn
                "https://cdn.freelogovectors.net/wp-content/uploads/2021/12/sonyliv-logo-freelogovectors.net_.png", //sony 
               " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnTXuRWfQ8pt_uT7Q1001vRxQc52T09lBkaQ&s" //hostar

            ]
        },
        {
            id: 5,
            title:'BEST 5G PLAN',
            amount: 459,
            oldAmount:999,
            validity: '98 days',
            data: '2 GB/day',
            subscriptions: [
                "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Jio_TV_logo.svg/1200px-Jio_TV_logo.svg.png", //ji tv 
                "https://upload.wikimedia.org/wikipedia/commons/1/14/Jiocinema.png", // jio cenima
                "https://play-lh.googleusercontent.com/kl-7LqnjbT0onFUgWNrcz06oRXovfvO_GVYZoLW1jNwl8NlpFx8NCwKgXuvp1hbWdZI", //jiosavn
                " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnTXuRWfQ8pt_uT7Q1001vRxQc52T09lBkaQ&s", //hostar
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3oloFahb_1dqL4CV9CKD0EL-9KfVK1QBDHQ&s", //FC
               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBWq5jCuRzx7qQ1P7WX7t1lCFMHHQB_rIVMw&s" // Prime

            ]
        },
        {
            id: 6,
            title:'SPECIAL',
            amount: 1499,
            oldAmount:3599,
            validity: '365 days',
            data: '2.5 GB/day',
            subscriptions: [
               "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Jio_TV_logo.svg/1200px-Jio_TV_logo.svg.png", //ji tv 
                "https://upload.wikimedia.org/wikipedia/commons/1/14/Jiocinema.png", // jio cenima
                "https://play-lh.googleusercontent.com/kl-7LqnjbT0onFUgWNrcz06oRXovfvO_GVYZoLW1jNwl8NlpFx8NCwKgXuvp1hbWdZI", //jiosavn
                " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnTXuRWfQ8pt_uT7Q1001vRxQc52T09lBkaQ&s", //hostar
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3oloFahb_1dqL4CV9CKD0EL-9KfVK1QBDHQ&s", //FC
               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBWq5jCuRzx7qQ1P7WX7t1lCFMHHQB_rIVMw&s" ,// Prime
                "https://toppng.com/uploads/preview/zee5-movies-tv-shows-live-tv-originals-zee5-app-download-free-11562989787ccp8imbuyt.png" ,// Zee
               " https://static-00.iconduck.com/assets.00/netflix-icon-icon-1024x1024-w4ni4f6d.png", // Netflix
               "https://cdn.freelogovectors.net/wp-content/uploads/2021/12/sonyliv-logo-freelogovectors.net_.png" // Sony
            ]
        },
        {
            id: 7,
            title:'Exclusive 50% off',
            amount: 225,
            oldAmount:449,
            validity: '28 days',
            data: '3 GB/day',
            subscriptions: [
                "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Jio_TV_logo.svg/1200px-Jio_TV_logo.svg.png", //ji tv 
                "https://upload.wikimedia.org/wikipedia/commons/1/14/Jiocinema.png", // jio cenima
                " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnTXuRWfQ8pt_uT7Q1001vRxQc52T09lBkaQ&s", //hostar
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3oloFahb_1dqL4CV9CKD0EL-9KfVK1QBDHQ&s", //FC
            ]
        },
        {
            id: 8,
            title:'POPULAR PLAN',
            amount: 449,
            oldAmount:1199,
            validity: '84 days',
            data: '3 GB/day',
            subscriptions: [
                "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Jio_TV_logo.svg/1200px-Jio_TV_logo.svg.png", //ji tv 
                "https://upload.wikimedia.org/wikipedia/commons/1/14/Jiocinema.png", // jio cenima
                "https://play-lh.googleusercontent.com/kl-7LqnjbT0onFUgWNrcz06oRXovfvO_GVYZoLW1jNwl8NlpFx8NCwKgXuvp1hbWdZI", //jiosavn
                " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnTXuRWfQ8pt_uT7Q1001vRxQc52T09lBkaQ&s", //hostar
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3oloFahb_1dqL4CV9CKD0EL-9KfVK1QBDHQ&s", //FC

                "https://toppng.com/uploads/preview/zee5-movies-tv-shows-live-tv-originals-zee5-app-download-free-11562989787ccp8imbuyt.png" ,// Zee
               " https://static-00.iconduck.com/assets.00/netflix-icon-icon-1024x1024-w4ni4f6d.png", // Netflix

            ]
        },
    ];

    return (
        <div className="container-fluid"  style={{background:"aliceblue"}}>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                        <div className="d-flex align-items-center">
                        <RiMenuFill  className="text-primary me-3" size={24} />
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

            <div className="navbar navbar-light bg-light">
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                    {sim && simDetails[sim] && simDetails[sim].icon && (
                        <img 
                            src={simDetails[sim].icon} 
                            alt={`${sim} Icon`} 
                            width={35} 
                            height={35} 
                            className="me-2"
                        />
                    )}

                        <div className="d-flex flex-column">
                            <b style={{ color: "darkblue" }}>Recharge for: +91{mobileNumber}</b>
                            <small className='text-start text-secondary'>{selectedSim.name}</small>
                        </div>
                    </div>
                    <small className="navbar-text text-secondary" > <Link to="/"  style={{textDecoration:"none"}}>   Change
                    </Link>
                      
                    </small>
                </div>
            </div>

            <div className="px-2 my-0 py-3">
                <h1 className=' text-center fs-5'>
                    Google Pay <strong className='text-danger'> Diwali </strong> Offer 🪔 + OTTs Free
                </h1>
            </div>

            <div className="text-center my-2 ">
                <img 
                    src="https://cdn.shopify.com/s/files/1/0674/9641/1314/files/ott_free_480x480.png?v=1728269083" 
                    alt="Google Pay Festive Offer" 
                    className="img-fluid" width='100%' height='80px'
                />
            </div>

            {/* Recharge Options */}
            
            <div className="row justify-content-center">
            {
                rechargeOptions.map((val,index)=>(
                    <div className="col-md-5 mb-3" >
                    <div className="card shadow">
                        <div className="card-body">
                            <span className="badge bg-danger text-white"> {val.title}</span>
                            <h4 className="mt-2 text-primary">₹{val.amount} <small> <del>₹{val.oldAmount}</del></small></h4>
                            <p>VALIDITY: <strong>{val.validity} </strong></p>
                            <p>DATA: <strong> {val.data} </strong></p>
                            <p>Voice: <strong> Unlimited </strong></p>
                            <p>SMS: <strong> 100/day </strong></p>
                       

                            {/* Subscriptions Section */}
                            <p className="mb-2"><strong>Subscriptions:</strong></p>
                            <div className="d-flex justify-content-center">
                                {val.subscriptions.map((img)=>{
                                    return  <img 
                                    className='rounded mx-1'
                                    // style={{margin:'2px'}}
                                    src={img} 
                                    alt="JioTv" 
                                    width={25} 
                                    height={25} 
                                />
                                })}
                               
                                 </div>
                           {/* Recharge button using your classes */}
                    <button
                        className="btn btn-primary w-100 mt-3"
                        onClick={() => handleRecharge(val.amount,index)}  
                    >
                        Recharge
                    </button>
                      
            {/* Conditionally render the QR code */}
            {show === index && showQRCode && (
                <div style={{ marginTop: '20px' }}>
                    <h3>Scan the QR Code to Pay</h3>
                    <QRCodeSVG 
                        value={`upi://pay?pa=${upiId}&pn=Prepaid%20Recharge%20for%20${mobileNumber || 'Unknown'}&am=${amount}&cu=INR&tn=${encodeURIComponent(transactionNote)}`} 
                        size={256} 
                        level="H" 
                    />
                </div>
            )}
              </div>
                     </div>
                 </div>
                ))
            }
            </div>
            <div className="text-center my-2 ">           
               <img 
                  src="https://cdn.shopify.com/s/files/1/0900/5770/3738/files/gpayfooter.png?v=1728268793" 
                  alt="Google Pay Festive Offer" 
                  className="img-fluid" width='100%' height='50px'
              />
          </div>
            </div>
    );
};

export default RechargePage;
