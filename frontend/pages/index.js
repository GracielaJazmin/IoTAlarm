import React from 'react'
import Head from 'next/head'
import Registro from '../pages/registro'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"></link>
    </Head>
    
    <div className="container-all col-md-12 m-5">
      <div className ="container form m-5">

        <img src="/login-png-1.png" className="img-thumbnail m-5" alt="Responsive image"></img>
        
        <h1 className="">Iniciar Sesion</h1>
          <form>
            <div className="form-group">
              <label forhtml="exampleInputEmail1">Email</label>
              <input className="form-control" type="email" id="email" placeholder="Enter email"></input>
            </div>

            <div class="form-group">
              <label forhtml ="exampleInputEmail1"> Contraseña</label>
              <input className="form-control" type="password" id="password" placeholder="Enter contraseña"></input>              
            </div>            
          </form>

          <input type ="submit" className="btn btn-primary mb-5" value = "iniciar"></input>
          
          <span className = "text-footer">¿Aún no te has registrado?
          <a href= "/registro">Registrate</a></span>
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

export default Home
