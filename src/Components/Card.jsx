import React, { useEffect } from 'react'
import Swal from 'sweetalert2'
import ajaib from "../Media/Images/Shorts/ajaib.jpg";
import sawan from "../Media/Images/Shorts/sawan.jpg";


const Card = () => {
    const banis = [
        "Guru guru",
        "Kone kahe",
        "Dhane dhane",
        "Kirpal yahi",
        "Din a bandu",
        "Apana koina",
        "Sateguru mera yera, viche rea"
    ]
    const mastersImages = [
        ajaib,
        sawan
    ]
    const mastersImagesLastPosition = mastersImages.length - 1
    // useEffect(() => {
    //     const Toast = Swal.mixin({
    //         toast: true,
    //         position: 'top-end',
    //         showConfirmButton: false,
    //         timer: 3000,
    //         timerProgressBar: true,
    //         didOpen: (toast) => {
    //           toast.addEventListener('mouseenter', Swal.stopTimer)
    //           toast.addEventListener('mouseleave', Swal.resumeTimer)
    //         }
    //       })
          
    //       Toast.fire({
    //         icon: 'success',
    //         title: 'Signed in successfully'
    //       })
    //   return () => {
    //   }
    // }, [])
    
  return (
    <>
        <div className="overflow-auto bg-dark-carmin container-fluid w-100" style={{ height: "100vh" }}>
            <div className="row justify-content-center">
                {
                    banis.map( (bani, index) => (
                        <div key={index} className="bg-light col-lg-1 col-md-3 col-sm-6 m-1 p-2 d-flex aling-items-center flex-column">
                            <span className='bg-carmin text-light text-center p-2 rounded mb-2'>
                                {bani}
                            </span>
                            <section >            
                                {
                                Math.floor(Math.random(0, 1) * 10) * mastersImagesLastPosition > 5 ? (
                                    <>
                                        <img className='w-100' src={ajaib} alt="" />
                                    </>
                                ) : 
                                    <>
                                        <img className='w-100' src={sawan} alt="" />
                                    </>
                                }
                            </section>
                        </div>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default Card