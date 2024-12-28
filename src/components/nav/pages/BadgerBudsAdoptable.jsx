import React, { useContext } from 'react';
import BadgerBudSummary from '../../BadgerBudSummary'
import BadgerBudsDataContext from '../../../contexts/BadgerBudsDataContext'
import { Col, Row } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';

export default function BadgerBudsAdoptable(props) {
    const buds = useContext(BadgerBudsDataContext);
    const[buddies, setBuddies] = useState(buds);
    useEffect(() => {
        const savedCatIds = JSON.parse(sessionStorage.getItem("savedCatIds")) || [];
        setBuddies(buds.filter(buddy => !savedCatIds.includes(buddy.id)));
    }, [buds]);
    const savetoandcheck = (catid,catname) =>{
        const savedCatIds = JSON.parse(sessionStorage.getItem('savedCatIds')) || [];
        if (!savedCatIds.includes(catid)) {
            // 添加猫的 ID 到 savedCatIds
            savedCatIds.push(catid);
            sessionStorage.setItem('savedCatIds', JSON.stringify(savedCatIds)); // 更新 sessionStorage
            
            // 提示用户
            alert(`${catname} has been added to your basket!`);
            console.log(buddies)
        } else {
            alert(`${catname} is already in your basket!`);
        }
        setBuddies(buddies.filter(buddy => buddy.id !== catid))
    

    }
    return <div><Row>
        <h1>Available Badger Buds</h1>
        <p>The following cats are looking for a loving home! Could you help?</p>
        {Array.isArray(buddies) && buddies.length > 0 ? ( // 确保 buds 是数组并且有数据
                    buddies.map(cat => (
                        <Col xs={12} md={4} lg={3} xxl={2} key={cat.id}>
                            <BadgerBudSummary 
                            id={cat.id}
                            name={cat.name}
                            imgIds={cat.imgIds}
                            gender={cat.gender}
                            breed={cat.breed}
                            age={cat.age}
                            description={cat.description}
                            types='typea'
                            savetoandcheck = {() => savetoandcheck(cat.id, cat.name)}
                            />
                        </Col>
                    ))
                ) : (
                    <p>No available badger buds at the moment.</p> // 提示信息
                )}
        </Row>
    </div>
}