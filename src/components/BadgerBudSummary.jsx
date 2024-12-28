import { Button, Card, Carousel, Col, Row } from "react-bootstrap"
import BadgerBudsAdoptable from "./nav/pages/BadgerBudsAdoptable";
import { useState } from "react";

export default function BadgerBudSummary ({ id, name, imgIds, gender, breed, age, description, types,savetoandcheck,adopted}) {
    const baseUrl = 'https://raw.githubusercontent.com/CS571-F24/hw5-api-static-content/main/cats/';
    const [detail, setDetail] = useState(false);
    const handleShowDetails = () =>{
       if (types === 'typea'){ setDetail(!detail);}
       
      
    }
    
    return  <Card style={{margin: "0.25rem"}}>
        <Carousel>
        {imgIds.map((imgId) => (<Carousel.Item key={imgId}>
          <img
            key={imgId} // 使用 imgId 作为唯一的 key
            src={`${baseUrl}${imgId}`} // 动态构建 URL
            alt={`Cat with ID ${imgId}`}
           
           
          /> </Carousel.Item>
        ))}</Carousel>
        <h2> {name}</h2>
        {detail && (
                <div style={{ padding: '1rem', backgroundColor: '#e9ecef', borderTop: '1px solid #dee2e6' }}>
                    <h4>Details:</h4>
                    <p><strong>Gender:</strong> {gender}</p>
                    <p><strong>Age:</strong> {age}</p>
                    <p><strong>Breed:</strong> {breed}</p>
                    <p><strong></strong> {description}</p>
                </div>
            )}
        <div style={{ backgroundColor: '#f8f9fa', padding: '0.5rem', borderTop: '1px solid #dee2e6' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button variant="primary" onClick={(types === 'typea') ? handleShowDetails : adopted}>{(types === 'typea') ? (detail ? 'Show less' : 'Show more') : 'adopt'}</Button>
                    <Button variant="secondary" onClick={savetoandcheck}>{(types === 'typea') ? 'Save' : 'unselect'}</Button>
                </div>
            </div>
    </Card>
}
;