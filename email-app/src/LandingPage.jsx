import React from 'react'
import {useState, useEffect} from 'react'
import './index.css'

const EmailHead = (props)=>{
  const name = props.from.name;
  const email = "<"+props.from.email+">";
  const subject = props.subject;
  const short_description = props.short_description;
  return(
    <div className="emailCard">
      <div className='avatar'>
        <p>{name.charAt(0).toUpperCase()}</p>
      </div>
      <div className='emailDetails'>
        <p>From : <strong>{name} {email}</strong></p>
        <p>Subject : <strong>{subject}</strong></p>
        <p>{short_description}</p>
      </div>
    </div>
  )
}

function LandingPage() {

  const [emailHead,setEmailHead] = useState([]);

    useEffect (() =>{
        getEmailHead();
    },[])

    async function getEmailHead(){
        const data = await fetch("https://flipkart-email-mock.now.sh/");
        const json = await data.json();
        setEmailHead(json?.list);
    }

  return (
    <div className="emailListing">
      {
        emailHead.map((email)=>{
          return <EmailHead {...email} />
        })
      }
    </div>
  )
}

export default LandingPage