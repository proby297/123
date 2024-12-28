import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import BadgerBudsAdoptable from "./nav/pages/BadgerBudsAdoptable"
import BadgerBudSummary from "./BadgerBudSummary"
import BadgerBudsNavbar from "./nav/BadgerBudsNavbar";
import BadgerBudsDataContext from "../contexts/BadgerBudsDataContext";

export default function BadgerBuds() {

    const [buds, setBuds] = useState([]);
   
    useEffect(() => {
        fetch('https://cs571.org/rest/f24/hw5/buds', {
            headers: {
                "X-CS571-ID": CS571.getBadgerId()
            }
        })
            .then(res => res.json())
            .then(cats => {
                setBuds(cats)
            })
    }, []);

    console.log(buds)
    
    

    return <div>
        <BadgerBudsDataContext.Provider value={buds}>
        <BadgerBudsNavbar />
        <div style={{ margin: "1rem" }}>
            
                <Outlet />
             
           
        </div>   
        </BadgerBudsDataContext.Provider>
    </div>
}