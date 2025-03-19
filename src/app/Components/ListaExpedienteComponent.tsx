'use client'
import React from 'react'
import { Expediente } from '../Models/Expediente'
import Link from 'next/link'
import { useExpedienteContext } from '../Provider/ProviderExpediente'


interface ExpedienteLista{
    expedientes: Expediente[];
  //  const expedientes = Expedientes || [];
}

export default function ListaExpedienteComponent({expedientes}:ExpedienteLista) {
   const {
    setIdExpediente,id_expediente,
    setId,id_Usuario,
    setNumero_expediente,numero_expediente,
    setNombre_establecimiento,nombre_establecimiento,
    setRegion_sanitaria,region_sanitaria,
    setUnidadArea,unidad_area,
    setEstado,estado,
    setFecha_creacion,fecha_creacion,
    setDepartamento,departamento,
    setObservaciones,observaciones,
    expediente,setExpediente,
    eliminarExpediente,
    actualizarExpediente,
    agregarExpediente
    
} =useExpedienteContext();

if (Array.isArray(expedientes)) {
  const datosMapeados = expedientes.map(item => item.numero_expediente);
} else {
  console.log('Los datos no son un array o están undefined');
}

  return (
    <div>
        <ul>
        {
        
        expedientes.map((item:Expediente) => (
            <li key={item.id_expediente}>
              
                {item.numero_expediente} - {item.nombre_establecimiento} - {item.region_sanitaria} - {item.unidad_area} 
              

              <button type='button' className='btn btn-info btn-sm' onClick={()=>
                actualizarExpediente(item.id_expediente,
                                     item.id_Usuario,
                                     item.numero_expediente,
                                     item.nombre_establecimiento,
                                     item.region_sanitaria,
                                     item.unidad_area,
                                     item.estado,
                                     item.fecha_creacion,
                                     item.departamento,
                                     item.observaciones)}>Editar</button>
              <button type='button' className='btn btn-danger btn-sm' onClick={()=>eliminarExpediente(item.id_expediente)}>Eliminar</button>
            </li>

          ))
       
        }
      </ul>
    </div>
  )
}
