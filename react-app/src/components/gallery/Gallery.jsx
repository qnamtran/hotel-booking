import React from 'react'
import "./gallery.css"
import "../../styles/styles.css"

const Gallery = () => {
  return (
    <div className="gallery">
        <div className="galleryContainer">
            <h1 className='mainTitle'>Gallery</h1>
            <div className="imageList">
                <div className="imageItem">
                    <img src="https://a0.muscache.com/im/pictures/airflow/Hosting-1015487761074565473/original/cf9a4eb1-76e2-4d87-b8e0-97b6a3871eac.jpg?im_w=1200" alt="" />
                </div>
                <div className="imageItem">
                    <img src="https://a0.muscache.com/im/pictures/airflow/Hosting-1015487761074565473/original/90df2b93-ab01-46ee-a488-cc72fe174775.jpg?im_w=1440" alt="" />
                </div>
                <div className="imageItem">
                    <img src="https://a0.muscache.com/im/pictures/airflow/Hosting-1015487761074565473/original/e45a2b53-77eb-458c-a590-abb84781a89d.jpg?im_w=1440" alt="" />
                </div>
                <div className="imageItem">
                    <img src="https://a0.muscache.com/im/pictures/airflow/Hosting-1015487761074565473/original/d2d93f7f-49dd-46e7-934f-e5eccc335766.jpg?im_w=1440" alt="" />
                </div>
                <div className="imageItem">
                    <img src="https://a0.muscache.com/im/pictures/airflow/Hosting-1015487761074565473/original/0b2885d1-9518-493c-ac97-cd5098fde42b.jpg?im_w=1440" alt="" />
                </div>
                <div className="imageItem">
                    <img src="https://a0.muscache.com/im/pictures/airflow/Hosting-1015487761074565473/original/e86a161e-5326-4a49-a1bf-455014fc0871.jpg?im_w=1440" alt="" />
                </div>
                <div className="imageItem">
                    <img src="https://a0.muscache.com/im/pictures/airflow/Hosting-1015487761074565473/original/3d6ade1e-fcd7-407e-9a78-359a470011cc.jpg?im_w=1440" alt="" />
                </div>
                <div className="imageItem">
                    <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1015487761074565473/original/e20a08db-aa15-4a98-90b5-1616ed542cdc.jpeg?im_w=1440" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gallery