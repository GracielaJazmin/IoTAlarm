import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'


const Registro = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"></link>
    </Head>
    <Nav/>
    <div className="container">
      <div className ="container form col-12 col-md-12 col-ms-12">
      <img src="/login-png-1.png" className="img-thumbnail" alt="Responsive image"></img>
      <h1>Registro</h1>
      <form>
        <label forhtml="">Email</label>
        <input type = "text"></input>
        <label forhtml =""> Contraseña</label>
        <input type = "password"></input>
        <input type ="submit" className="btn btn-primary" value = "iniciar"></input>
        </form>
        <span className = "text-footer">¿Aún no te has registrado?
        <a href= "/index">Regresar</a></span>
      </div>
    </div>


    <style jsx> {`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        
      }
      .img-thumbnail{
        width:100px;
        heigth1:100px;

      }
      
      .name{
        width: 411px;
      }

    `}</style>
  </div>
)

export default Registro
