import styled from "styled-components";

export const Container = styled.div` 
    background-color: #ffffff;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;

    

    .container-top{
        display: grid;
        grid-gap: 10px 30%;
        grid-template-areas: 
        'tittle tittle'
        'items items-price'
        'delivery-tax delivery-tax-price';
         
        

        .tittle{
           grid-area:tittle;
           font-size: 20px;
           font-weight: 20px;
           margin-bottom: 20px;
           font-weight: 700;
           background-color: #484848;
           color: #fff;
           width: 100%;
            padding: 15px;
            text-align: center;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
        }

        .items{
           grid-area:items;
           padding-left: 20px;
        }

        .items-price{
           grid-area: items-price;
           padding-right: 20px;
        }

        .delivery-tax{
           grid-area:delivery-tax;
           padding-left: 20px;
        }

        .delivery-tax-price{
           grid-area:delivery-tax-price;
           padding-right: 20px;
        }
    }

    .container-Bottom{
        display: flex;
        justify-content: space-between;
        font-size: 20px;     
        margin-top: 24px;
        padding: 20px;
        
        *{
            font-weight: 700;
        }
        
    }
`;