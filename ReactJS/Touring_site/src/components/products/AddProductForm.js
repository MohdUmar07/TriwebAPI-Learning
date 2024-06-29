import { useRef } from 'react';

import Styles from './AddProductForm.module.css'
import CustomWrapper from '../layouts/CustomWrapper'


function AddProductForm(props) {
    const product_name_ref = useRef();
    const image_ref = useRef();
    const price_ref = useRef();
    const description_ref = useRef();

    function SubmitHandler(event) {
        event.preventDefault();
        const product_name = product_name_ref.current.value;
        const image = image_ref.current.value;
        const price = price_ref.current.value;
        const description = description_ref.current.value;
       
        const product = {
            product_name,
            image,
            price,
            description
        }

        props.addProductHandler(product)
        

    }
    return <CustomWrapper>
        <form className={Styles.form} onSubmit={SubmitHandler}>

            <div className={Styles.group}>
                <label htmlFor="product_name">Product Name</label>
                <input type="text" placeholder="" id="product_name" ref={product_name_ref} />

            </div>
            <div className={Styles.group}>
                <label htmlFor="image">Image</label>
                <input type="text" placeholder="" id="image" ref={image_ref} />

            </div>
            <div className={Styles.group}>
                <label htmlFor="price">Price</label>
                <input type="text" placeholder="" id="price" ref={price_ref}/>

            </div>
            <div className={Styles.group}>
                <label htmlFor="description">Description</label>
                <textarea rows="5" id="description" ref={description_ref} />

            </div>
            <div >
                <button className={Styles.btn}>Submit</button>
            </div>
        </form>
    </CustomWrapper>
}

export default AddProductForm;