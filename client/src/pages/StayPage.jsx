import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from "../utils/axios";
import Carousel from 'react-bootstrap/Carousel';
import { checkIsAuth } from '../redux/features/auth/authSlice';
import styles from "../styles/stayPage.module.scss"
import { useSelector } from 'react-redux';

export const StayPage = () => {
  const isAuth = useSelector(checkIsAuth)
  const [stay, setStay]= useState({})
  const [images, setImages] = useState([])
  const params = useParams()

  const fetchStay = useCallback(async () => {
    const { data } = await axios.get(`/stay/${params.id}`)
    setStay(data)
    setImages(data.imageUrl)
    
}, [params.id])

useEffect(() => {
    fetchStay()
  
}, [fetchStay])





  return (
    <div className={styles.container}>
      <div className={styles.card}>
      <Carousel>
            {images.map((imgUrl, idx)=>(
              <Carousel.Item className={styles.itemCarousel} key={idx}>
                <img  className="d-block w-80" src={imgUrl} alt="img"/>
              </Carousel.Item>
            ))}
          </Carousel>
          <div className={styles.descripcion}>
              <div className={styles.flex}>
                 <h4>{stay.title}</h4>
                  <div className={styles.details}>
                     <p>{stay.price} $/night</p>
                     <p>{stay.area} m²</p>
                  </div>
                  <div className={styles.adresse}>{stay.direction}</div>
                  <p>{stay.descriptionLong}</p>
                  {isAuth && (
                    <button className={styles.btn}>
                      Send a message to the host
                    </button>
                  )}
                   {!isAuth && (
                    <button  className={styles.btn}><Link to = {"/login"}>
                      Log in to write a message
                      </Link></button>
                  )}
              </div>
          </div>
      </div>
    </div> 
  )
}


