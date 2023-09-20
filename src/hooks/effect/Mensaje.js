import React, { useEffect, useState } from 'react';

export const Mensaje = () => {
    const [coordenadas, setCoordenadas] = useState({ x: null, y: null });
    //Implementamos useEffect con cleanup. No tiene ninguna dependencia (en su segundo parámetro) por lo cual
    // este useEffect se va ejecutar solamente cuando el componente se ejecute por primera vez.
    useEffect(() => {
    console.log('Componente montado...');
    
    //Encapsulamos la funcionalidad de las coordenadas en una función.
    const mouseMove = (e) => {
    const coordenadas = ({ x: e.x, y: e.y });
    setCoordenadas({ x: e.clientX, y: e.clientY });
    console.log(coordenadas);
    }

    //Obtenemos las coordenadas X y Y del mouse y las mostramos en la consola del navegador. Mandamos llamar
    // la función mouseMove
    window.addEventListener('mousemove', mouseMove);

    return () => {
    //Hacemos la limpieza del componente. Removemos el listener que se creó al montar el componente.
    window.removeEventListener('mousemove', mouseMove);
    console.log('Componente desmontado...');
    }
    }, []);
    return (
        <div>
        <h1>Coordenadas del Mouse</h1>
        <p>Coordenada X: {coordenadas.x}</p>
        <p>Coordenada Y: {coordenadas.y}</p>
      </div>
    )
   }