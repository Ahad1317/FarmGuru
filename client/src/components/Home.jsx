import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../public/animation.json';
import '../App.css'
import { NavLink } from 'react-router-dom';
const Home = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

      
  return (
    <div>
        <section id="home">
            <div className="comtainer">
                <div className="row justify-content-center">
                    <div className="col-md-7">
                        <h1 className="display-4 custom-margin-top fw-bolder mb-4 text-center text-white custom-margin-left">FARM GURU</h1>
                        <p className="lead fs-3 text-white">Introducing FarmGuru: Your all-in-one solution for:
                        <ul className='mt-3'>
                          <li>Community: Post your question for crops, receive help from community.
                            </li>
                            <li>Plant Care: Take a picture of your crop and receive treatment advice.
                            </li>
                            <li>Call Assist: Call our 24/7 customer care support to get assist for your crop.
                            </li></ul></p>
                            <div className="buttons d-flex justify-content-center">
                                <NavLink className="btn btn-light me-4 rounded-pill px-4 py-2 nav-link active ms-4 fs-4 text-black" aria-current="page" to="/shelf">Post my query</NavLink>
                            </div>
                    </div>
                    <div className="col-md-4 mt-5">
            <Lottie options={defaultOptions} />
          </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Home