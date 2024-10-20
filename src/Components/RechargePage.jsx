import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RiMenuFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom'; 

const RechargePage = () => {
    const location = useLocation();
    const { mobileNumber, sim } = location.state || {};

    // Mapping for SIM icons and details
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
               
                    <div className="col-md-5 mb-3" >
                        <div className="card shadow">
                            <div className="card-body">
                                <span className="badge bg-danger text-white">Exclusive 50% Off </span>
                                <h4 className="mt-2 text-primary">₹299 <small> <del>₹579</del></small></h4>
                                <p>VALIDITY: <strong>56 days </strong></p>
                                <p>DATA: <strong> 1.5 GB/day </strong></p>
                                <p>Voice: <strong> Unlimited </strong></p>
                                <p>SMS: <strong> 100/day </strong></p>
                           

                                {/* Subscriptions Section */}
                                <p className="mb-2"><strong>Subscriptions:</strong></p>
                                <div className="d-flex justify-content-center">
                                    <img 
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Jio_TV_logo.svg/1200px-Jio_TV_logo.svg.png" 
                                        alt="JioTv" 
                                        width={25} 
                                        height={25} 
                                    />
                                    <img 
                                        src="https://upload.wikimedia.org/wikipedia/commons/1/14/Jiocinema.png" 
                                        alt="Jio" 
                                        className='rounded mx-1'
                                        width={24} 
                                        height={25} 
                                    />
                                  
                                      <img 
                                        src="https://play-lh.googleusercontent.com/kl-7LqnjbT0onFUgWNrcz06oRXovfvO_GVYZoLW1jNwl8NlpFx8NCwKgXuvp1hbWdZI"
                                        alt="JioSavan" 
                                        className='rounded mx-1'
                                        width={27} 
                                        height={28} 
                                    />    
                                     </div>
                                <button className="btn btn-primary w-100 mt-3">Recharge</button>
                           </div>
                         </div>
                     </div>
                    <div className="col-md-5 mb-3" >
                        <div className="card shadow">
                            <div className="card-body">
                                <span className="badge bg-danger text-white">Exclusive 50% Off</span>
                                <h4 className="mt-2 text-primary">₹333 <small><del>₹666</del></small></h4>
                                <p>VALIDITY: <strong>70 days </strong></p>
                                <p>DATA: <strong> 1.5 GB/day </strong></p>
                                <p>Voice: <strong> Unlimited </strong></p>
                                <p>SMS: <strong> 100/day </strong></p>
                                <b className='text-danger'> Unlimited True 5G Data </b>

                                {/* Subscriptions Section */}
                                <p className="mb-2"><strong>Subscriptions:</strong></p>
                                <div className="d-flex justify-content-center">
                                    <img 
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Jio_TV_logo.svg/1200px-Jio_TV_logo.svg.png" 
                                        alt="JioTv" 
                                        width={25} 
                                        height={25} 
                                    />
                                    <img 
                                        src="https://upload.wikimedia.org/wikipedia/commons/1/14/Jiocinema.png" 
                                        alt="Jio" 
                                        className='rounded mx-1'
                                        width={24} 
                                        height={25} 
                                    />
                                   <img 
                                        src="https://play-lh.googleusercontent.com/kl-7LqnjbT0onFUgWNrcz06oRXovfvO_GVYZoLW1jNwl8NlpFx8NCwKgXuvp1hbWdZI"
                                        alt="JioSavan" 
                                        className='rounded mx-1'
                                        width={27} 
                                        height={28} 
                                    />
                                     <img 
                                        src="https://toppng.com/uploads/preview/zee5-movies-tv-shows-live-tv-originals-zee5-app-download-free-11562989787ccp8imbuyt.png"
                                        alt="ZeeTv" 
                                        className='rounded mx-1'
                                        width={25} 
                                        height={25} 
                                    />
                                    
                                </div>

                                <button className="btn btn-primary w-100 mt-3">Recharge</button>
                            </div>
                        </div>
                    </div>
                
                    <div className="col-md-5 mb-3" >
                        <div className="card shadow">
                            <div className="card-body">
                                <span className="badge bg-danger text-white">TRENDING </span>
                                <h4 className="mt-2 text-primary">₹399 <small><del>₹799</del></small></h4>
                                <p>VALIDITY: <strong>84 days </strong></p>
                                <p>DATA: <strong> 1.5 GB/day </strong></p>
                                <p>Voice: <strong> Unlimited </strong></p>
                                <p>SMS: <strong> 100/day </strong></p>
                                <b className='text-danger'> Unlimited True 5G Data </b>

                                {/* Subscriptions Section */}
                                <p className="mb-2"><strong>Subscriptions:</strong></p>
                                <div className="d-flex justify-content-center">
                                    <img 
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Jio_TV_logo.svg/1200px-Jio_TV_logo.svg.png" 
                                        alt="JioTv" 
                                        width={25} 
                                        height={25} 
                                    />
                                    <img 
                                        src="https://upload.wikimedia.org/wikipedia/commons/1/14/Jiocinema.png" 
                                        alt="Jio" 
                                        className='rounded mx-1'
                                        width={24} 
                                        height={25} 
                                    />
                                    <img 
                                        src="https://static-00.iconduck.com/assets.00/netflix-icon-icon-1024x1024-w4ni4f6d.png" 
                                        alt="Netflix" 
                                        className='rounded mx-1'
                                        width={25} 
                                        height={25} 
                                    />
                                       <img 
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBWq5jCuRzx7qQ1P7WX7t1lCFMHHQB_rIVMw&s"
                                        alt="Prime" 
                                        className='rounded'
                                        width={25} 
                                        height={25} 
                                    />
                                      <img 
                                        src="https://play-lh.googleusercontent.com/kl-7LqnjbT0onFUgWNrcz06oRXovfvO_GVYZoLW1jNwl8NlpFx8NCwKgXuvp1hbWdZI"
                                        alt="JioSavan" 
                                        className='rounded mx-1'
                                        width={27} 
                                        height={28} 
                                    />
                                    
                                </div>

                                <button className="btn btn-primary w-100 mt-3">Recharge</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 mb-3" >
                        <div className="card shadow">
                            <div className="card-body">
                                <span className="badge bg-danger text-white">POPULAR PLAN </span>
                                <h4 className="mt-2 text-primary">₹199 <small><del>₹399</del></small></h4>
                                <p>VALIDITY: <strong>28 days </strong></p>
                                <p>DATA: <strong> 2.5 GB/day </strong></p>
                                <p>Voice: <strong> Unlimited </strong></p>
                                <p>SMS: <strong> 100/day </strong></p>
                                <b className='text-danger'> Unlimited True 5G Data </b>

                                {/* Subscriptions Section */}
                                <p className="mb-2"><strong>Subscriptions:</strong></p>
                                <div className="d-flex justify-content-center">
                                    <img 
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Jio_TV_logo.svg/1200px-Jio_TV_logo.svg.png" 
                                        alt="JioTv" 
                                        width={25} 
                                        height={25} 
                                    />
                                    <img 
                                        src="https://upload.wikimedia.org/wikipedia/commons/1/14/Jiocinema.png" 
                                        alt="Jio" 
                                        className='rounded mx-1'
                                        width={24} 
                                        height={25} 
                                    />
                        
                                      <img 
                                        src="https://play-lh.googleusercontent.com/kl-7LqnjbT0onFUgWNrcz06oRXovfvO_GVYZoLW1jNwl8NlpFx8NCwKgXuvp1hbWdZI"
                                        alt="JioSavan" 
                                        className='rounded mx-1'
                                        width={27} 
                                        height={28} 
                                    />
                                       <img 
                                        src="https://cdn.freelogovectors.net/wp-content/uploads/2021/12/sonyliv-logo-freelogovectors.net_.png"
                                        alt="SonyLIV" 
                                        className='rounded mx-0'
                                        width={25} 
                                        height={25} 
                                    />
                                   
                                   
                                     <img 
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnTXuRWfQ8pt_uT7Q1001vRxQc52T09lBkaQ&s"
                                        alt=""Hotstar
                                        className='rounded mx-1'
                                        width={25} 
                                        height={25} 
                                    />
                                </div>
                                <button className="btn btn-primary w-100 mt-3">Recharge</button>
                            </div>                      
                        </div>
                    </div>
                    <div className="col-md-5 mb-3" >
                        <div className="card shadow">
                            <div className="card-body">
                                <span className="badge bg-danger text-white">BEST 5G PLAN </span>
                                <h4 className="mt-2 text-primary">₹459<small> <del> ₹999</del></small></h4>
                                <p>VALIDITY: <strong> 98 days </strong></p>
                                <p>DATA: <strong> 2 GB/day </strong></p>
                                <p>Voice: <strong> Unlimited </strong></p>
                                <p>SMS: <strong> 100/day </strong></p>
                                <b className='text-danger'> Unlimited True 5G Data </b>

                                {/* Subscriptions Section */}
                                <p className="mb-2"><strong>Subscriptions:</strong></p>
                                <div className="d-flex justify-content-center">
                                    <img 
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Jio_TV_logo.svg/1200px-Jio_TV_logo.svg.png" 
                                        alt="JioTv" 
                                        width={25} 
                                        height={25} 
                                    />
                                    <img 
                                        src="https://upload.wikimedia.org/wikipedia/commons/1/14/Jiocinema.png" 
                                        alt="Jio" 
                                        className='rounded mx-1'
                                        width={24} 
                                        height={25} 
                                    />
                                       <img 
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBWq5jCuRzx7qQ1P7WX7t1lCFMHHQB_rIVMw&s"
                                        alt="Prime" 
                                        className='rounded'
                                        width={25} 
                                        height={25} 
                                    />
                                      <img 
                                        src="https://play-lh.googleusercontent.com/kl-7LqnjbT0onFUgWNrcz06oRXovfvO_GVYZoLW1jNwl8NlpFx8NCwKgXuvp1hbWdZI"
                                        alt="JioSavan" 
                                        className='rounded mx-1'
                                        width={27} 
                                        height={28} 
                                    />
                                     
                                    <img 
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3oloFahb_1dqL4CV9CKD0EL-9KfVK1QBDHQ&s"
                                        alt="FanCode" 
                                        className='rounded mx-1'
                                        width={25} 
                                        height={25} 
                                    />
                                      <img 
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnTXuRWfQ8pt_uT7Q1001vRxQc52T09lBkaQ&s"
                                        alt=""Hotstar
                                        className='rounded mx-1'
                                        width={25} 
                                        height={25} 
                                    />
                                </div>
                                <button className="btn btn-primary w-100 mt-3">Recharge</button>
                            </div>                      
                        </div>
                    </div>
                    <div className="col-md-5 mb-3" >
                        <div className="card shadow">
                            <div className="card-body">
                                <span className="badge bg-danger text-white">Special </span>
                                <h4 className="mt-2 text-primary">₹1499<small> <del>₹3599</del></small></h4>
                                <p>VALIDITY: <strong>365 days </strong></p>
                                <p>DATA: <strong> 2.5 GB/day </strong></p>
                                <p>Voice: <strong> Unlimited </strong></p>
                                <p>SMS: <strong> 100/day </strong></p>
                                <b className='text-danger'> Unlimited True 5G Data </b>

                                {/* Subscriptions Section */}
                                <p className="mb-2"><strong>Subscriptions:</strong></p>
                                <div className="d-flex justify-content-center">
                                    <img 
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Jio_TV_logo.svg/1200px-Jio_TV_logo.svg.png" 
                                        alt="JioTv" 
                                        width={25} 
                                        height={25} 
                                    />
                                    <img 
                                        src="https://upload.wikimedia.org/wikipedia/commons/1/14/Jiocinema.png" 
                                        alt="Jio" 
                                        className='rounded mx-1'
                                        width={24} 
                                        height={25} 
                                    />
                                     <img 
                                        src="https://static-00.iconduck.com/assets.00/netflix-icon-icon-1024x1024-w4ni4f6d.png" 
                                        alt="Netflix" 
                                        className='rounded mx-1'
                                        width={25} 
                                        height={25} 
                                    />
                                       <img 
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBWq5jCuRzx7qQ1P7WX7t1lCFMHHQB_rIVMw&s"
                                        alt="Prime" 
                                        className='rounded'
                                        width={25} 
                                        height={25} 
                                    />
                                      <img 
                                        src="https://play-lh.googleusercontent.com/kl-7LqnjbT0onFUgWNrcz06oRXovfvO_GVYZoLW1jNwl8NlpFx8NCwKgXuvp1hbWdZI"
                                        alt="JioSavan" 
                                        className='rounded mx-1'
                                        width={27} 
                                        height={28} 
                                    />
                                       <img 
                                        src="https://cdn.freelogovectors.net/wp-content/uploads/2021/12/sonyliv-logo-freelogovectors.net_.png"
                                        alt="SonyLIV" 
                                        className='rounded mx-0'
                                        width={25} 
                                        height={25} 
                                    />
                                     <img 
                                        src="https://toppng.com/uploads/preview/zee5-movies-tv-shows-live-tv-originals-zee5-app-download-free-11562989787ccp8imbuyt.png"
                                        alt="ZeeTv" 
                                        className='rounded mx-1'
                                        width={25} 
                                        height={25} 
                                    />
                                    <img 
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3oloFahb_1dqL4CV9CKD0EL-9KfVK1QBDHQ&s"
                                        alt="FanCode" 
                                        className='rounded mx-1'
                                        width={25} 
                                        height={25} 
                                    />
                                     <img 
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnTXuRWfQ8pt_uT7Q1001vRxQc52T09lBkaQ&s"
                                        alt=""Hotstar
                                        className='rounded mx-1'
                                        width={25} 
                                        height={25} 
                                    />
                                </div>
                                <button className="btn btn-primary w-100 mt-3">Recharge</button>
                            </div>                      
                        </div>
                    </div>
                    <div className="col-md-5 mb-3" >
                        <div className="card shadow">
                            <div className="card-body">
                                <span className="badge bg-danger text-white">Exclusive 50% Off </span>
                                <h4 className="mt-2 text-primary">₹225<small> <del> ₹449</del></small></h4>
                                <p>VALIDITY: <strong>28 days </strong></p>
                                <p>DATA: <strong> 3 GB/day </strong></p>
                                <p>Voice: <strong> Unlimited </strong></p>
                                <p>SMS: <strong> 100/day </strong></p>
                                <b className='text-danger'> Unlimited True 5G Data </b>

                                {/* Subscriptions Section */}
                                <p className="mb-2"><strong>Subscriptions:</strong></p>
                                <div className="d-flex justify-content-center">
                                    <img 
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Jio_TV_logo.svg/1200px-Jio_TV_logo.svg.png" 
                                        alt="JioTv" 
                                        width={25} 
                                        height={25} 
                                    />
                                    <img 
                                        src="https://upload.wikimedia.org/wikipedia/commons/1/14/Jiocinema.png" 
                                        alt="Jio" 
                                        className='rounded mx-1'
                                        width={24} 
                                        height={25} 
                                    />
                                    
                                    <img 
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3oloFahb_1dqL4CV9CKD0EL-9KfVK1QBDHQ&s"
                                        alt="FanCode" 
                                        className='rounded mx-1'
                                        width={25} 
                                        height={25} 
                                    />
                                     <img 
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnTXuRWfQ8pt_uT7Q1001vRxQc52T09lBkaQ&s"
                                        alt=""Hotstar
                                        className='rounded mx-1'
                                        width={25} 
                                        height={25} 
                                    />
                                </div>
                                <button className="btn btn-primary w-100 mt-3">Recharge</button>
                            </div>                      
                        </div>
                    </div>
                    <div className="col-md-5 mb-3" >
                        <div className="card shadow">
                            <div className="card-body">
                                <span className="badge bg-danger text-white">POPULAR PLAN </span>
                                <h4 className="mt-2 text-primary">₹499<small> <del>₹1199</del></small></h4>
                                <p>VALIDITY: <strong>84 days </strong></p>
                                <p>DATA: <strong> 3 GB/day </strong></p>
                                <p>Voice: <strong> Unlimited </strong></p>
                                <p>SMS: <strong> 100/day </strong></p>
                                <b className='text-danger'> Unlimited True 5G Data </b>

                                {/* Subscriptions Section */}
                                <p className="mb-2"><strong>Subscriptions:</strong></p>
                                <div className="d-flex justify-content-center">
                                    <img 
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Jio_TV_logo.svg/1200px-Jio_TV_logo.svg.png" 
                                        alt="JioTv" 
                                        width={25} 
                                        height={25} 
                                    />
                                    <img 
                                        src="https://upload.wikimedia.org/wikipedia/commons/1/14/Jiocinema.png" 
                                        alt="Jio" 
                                        className='rounded mx-1'
                                        width={24} 
                                        height={25} 
                                    />
                                      <img 
                                        src="https://static-00.iconduck.com/assets.00/netflix-icon-icon-1024x1024-w4ni4f6d.png" 
                                        alt="Netflix" 
                                        className='rounded mx-1'
                                        width={25} 
                                        height={25} 
                                    />
                                       <img 
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBWq5jCuRzx7qQ1P7WX7t1lCFMHHQB_rIVMw&s"
                                        alt="Prime" 
                                        className='rounded'
                                        width={25} 
                                        height={25} 
                                    />
                                      <img 
                                        src="https://play-lh.googleusercontent.com/kl-7LqnjbT0onFUgWNrcz06oRXovfvO_GVYZoLW1jNwl8NlpFx8NCwKgXuvp1hbWdZI"
                                        alt="JioSavan" 
                                        className='rounded mx-1'
                                        width={27} 
                                        height={28} 
                                    />
                                     
                                     <img 
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3oloFahb_1dqL4CV9CKD0EL-9KfVK1QBDHQ&s"
                                        alt="FanCode" 
                                        className='rounded mx-1'
                                        width={25} 
                                        height={25} 
                                    />
                                     <img 
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnTXuRWfQ8pt_uT7Q1001vRxQc52T09lBkaQ&s"
                                        alt=""Hotstar
                                        className='rounded mx-1'
                                        width={25} 
                                        height={25} 
                                    />
                                     
                                </div>
                                <button className="btn btn-primary w-100 mt-3">Recharge</button>
                            </div>                      
                        </div>
                    </div>
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
