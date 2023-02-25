import React from 'react';
import { ServiceCard } from './ServiceCard'

export const Services = () => {
  return (
    <section className='wrapper-servicios viewport' id="servicios">
        <h1>Servicios</h1>
        <section className="servicios">
            <ServiceCard />
        </section>
    </section>
  )
}