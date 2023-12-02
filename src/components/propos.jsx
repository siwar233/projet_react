import React from "react";
import Naavbar from "./naavbar";
function Propos() {
    return (
        <>
        <Naavbar/>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            height: '100vh',
          
          }}>
            <div style={{ border: '2px solid #fff', padding: '20px', borderRadius: '10px', maxWidth: '600px', backgroundColor:'white' }}>
            <h1>A propos de notre marque</h1>
           <p>À BenGhorbel, nous sommes fiers de vous présenter une collection unique de produits artisanaux et de tapis, 100% tunisiens.
           Notre histoire est tissée avec la richesse culturelle et l'authenticité de la Tunisie, 
          et nous sommes ravis de partager avec vous ces trésors uniques, directement issus du talent exceptionnel de nos artisans locaux.</p> 

            <h4>Notre Histoire</h4>

            <p>Fondée sur les rives de la Méditerranée, BenGhorbel a émergé de notre profonde admiration pour l'artisanat tunisien.
            Notre voyage nous a guidés à travers les souks animés, à la rencontre de tisserands et d'artisans,
            chacun apportant sa contribution à l'héritage artisanal exceptionnel de la Tunisie.</p>

            <h4>Une Collection 100% Tunisienne</h4>
            <p>Explorez notre collection exclusive de tapis et d'articles artisanaux, chacun reflétant l'âme et la créativité de la Tunisie. 
            Chaque achat que vous faites chez nous célèbre non seulement l'art et la culture tunisiens mais également le savoir-faire exceptionnel de nos artisans.</p>
            </div>
        </div>
        </>
    )
}
export default Propos;