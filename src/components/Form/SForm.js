import React from 'react';
import { useLightbox } from "simple-react-lightbox"
import LightBox from '../LightBox'
import { useForm } from 'react-hook-form';
import styled from 'styled-components'
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
    .error{
        color: red;
        text-align: right;
        font-size: .7em;
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

export default function SForm() {
    const { register, handleSubmit, errors, reset } = useForm();
    const { openLightbox, closeLightbox } = useLightbox();
    const onSubmit = (data) => {
        console.log(data)
        openLightbox(0);
        reset();
        setTimeout(() => closeLightbox(), 5000)
    };

    return (
        <FormStyled>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="Name">Name</label>
                    <input type="text" placeholder="Name" name="Name" ref={register({ required: true, minLength: 2, maxLength: 80 })} />
                    {errors.Name && errors.Name.type === "required" && <p className="error">This is required</p>}
                    {errors.Name && errors.Name.type === "minLength" && <p className="error">This is field required min length to 2</p>}
                    {errors.Name && errors.Name.type === "maxLength" && <p className="error">This is field required max length to 80</p>}
                </div>
                <div>
                    <label htmlFor="Email">Email</label>
                    <input type="text" placeholder="Email" name="Email" ref={register({ required: true, pattern: /^\S+@\S+$/i })} />
                    {errors.Email && errors.Email.type === "required" && <p className="error">This is required</p>}
                    {errors.Email && errors.Email.type === "pattern" && <p className="error">Invalid email </p>}
                </div>
                <div>
                    <label htmlFor="Phone">Phone</label>
                    <input type="tel" placeholder="Phone" name="Phone" ref={register({ required: true, minLength: 6, maxLength: 15 })} />
                    {errors.Phone && errors.Phone.type === "required" && <p className="error">This is required</p>}
                    {errors.Phone && errors.Phone.type === "minLength" && <p className="error">This is field required min length to 6</p>}
                    {errors.Phone && errors.Phone.type === "maxLength" && <p className="error">This is field required max length to 15</p>}
                </div>
                <div>
                    <label htmlFor="Age">Age</label>
                    <input type="number" placeholder="+18" name="Age" ref={register({ required: true, max: 100, min: 18 })} />
                    {errors.Age && errors.Age.type === "required" && <p className="error">This is required</p>}
                    {errors.Age && errors.Age.type === "min" && <p className="error">You must be over than 18 years old</p>}
                    {errors.Age && errors.Age.type === "max" && <p className="error">You must be less than 100 years old</p>}
                </div>
                <input className="submit" type="submit" value="Send" />
            </form>
            <div className="SRLWrapper">
                <LightBox></LightBox>
            </div>
        </FormStyled>
    )
}