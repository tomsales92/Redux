import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdDelete, MdRemoveCircle, MdAddCircle } from 'react-icons/md'

import './style.css';
import { removeReserve, updateAmountRequest } from '../../store/modules/reserve/actions'

export default function Reservas() {
  const dispatch = useDispatch();
  const reserves = useSelector(state => state.reserve);
  
  function handleRemove(id) {
    dispatch(removeReserve(id))
  }

  function decrementeAmount(trip) {
    dispatch(updateAmountRequest(trip.id, trip.amount - 1))
  }

  function incrementeAmount(trip) {
    dispatch(updateAmountRequest(trip.id, trip.amount + 1))
  }

 return (
   <>
   <div>
      <h1 className="title">Você solicitou {reserves.length} reserva</h1>
      {reserves.map(reserve => (
         <div className="reservas" key={reserve.id}>
         <img
           src={reserve.image}
           alt={reserve.title}
           />
           <strong>{reserve.title}</strong>

           <div id="amount">
              <button type="button" onClick={()=> decrementeAmount(reserve)}>
                <MdRemoveCircle size={25} color="#191919" />
              </button>
              <input type="text" readOnly value={reserve.amount} />
              <button type="button" onClick={()=>incrementeAmount(reserve)}>
                <MdAddCircle size={25} color="#191919" />
              </button>
           </div>

           <button
             type="button"
             onClick={()=>handleRemove(reserve.id)}>
             <MdDelete size={20} color="#c53030" />
           </button>
       </div>
      ))}
     

      <footer>
        <button type="button">Solicitar Reservas</button>
      </footer>
   </div>
   </>
 );
}