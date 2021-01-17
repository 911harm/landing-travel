import React, { useState } from 'react'
import styled from 'styled-components'
import { useLightbox } from "simple-react-lightbox"
import LightBox from '../LightBox'
import SForm from './SForm'

const FormStyled = styled.div`
.form{
	width:300px;
	padding:16px;
	border-radius:10px;
	margin:auto;
    background-color:#ccc;
    label{
	    width:72px;
	    font-weight:bold;
	    display:inline-block;
    }
    input{
        width:180px;
        padding:3px 10px;
        border:1px solid #f6f6f6;
        border-radius:3px;
        background-color:#f6f6f6;
        margin:8px 0;
        display:inline-block;
    }
    .submit{
        width:100%;
        padding:8px 16px;
        margin-top:32px;
        border:1px solid #000;
        border-radius:5px;
        display:block;
        color:#fff;
        background-color:#000;
        &:hover{
            cursor:pointer;
            background-color:navy;
        }
    }
}
.SRLWrapper{
    display:none;
}
 
`

export default function Form() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [age, setAge] = useState("")
    const { openLightbox, closeLightbox } = useLightbox();
    const submit = (e) => {
        e.preventDefault()
        console.log(name, email, phone, age)
        // message ligthbox
        openLightbox(0);
        setTimeout(()=>closeLightbox(),5000)
        setName("")
        setEmail("")
        setPhone("")
        setAge("")
    }
    return (
        <FormStyled>
            <form className="form" onSubmit={submit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input onChange={(e) => setName(e.target.value)} value={name} type="text" name="name" placeholder="Name" required />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="email" placeholder="email" required />
                </div>
                <div>
                    <label htmlFor="Phone">Phone</label>
                    <input onChange={(e) => setPhone(e.target.value)} value={phone} type="tel" name="Phone" placeholder="Phone" required />
                </div>
                <div>
                    <label htmlFor="Age">Age</label>
                    <input onChange={(e) => setPhone(e.target.value)} value={phone} type="number" name="Age" placeholder="Age" min={18} max={100} required />

                </div>
                <div>
                    <button className="submit" type="submit">Send</button>
                </div>

            </form>
            <SForm></SForm>
            <div className="SRLWrapper">
                <LightBox></LightBox>
            </div>
        </FormStyled>
    )
}