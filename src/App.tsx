import React from 'react'
import bgimg from './assets/layered-waves-haikei.svg'
import styled from 'styled-components'
const App = () => {
  return (
    <>
     <Wrapper className='solar-system'>
      <div className="sun"></div>
      <div className="mars"></div>
      <div className="venus"></div>
      <div className="earth">
        {/* <div className="moon"></div> */}
      </div>
      <div className="jupiter"></div>
      <div className="saturm"></div>
      <div className="pluto"></div>
     </Wrapper>
    </>

  )
}
const Wrapper=styled.div`
position: relative;
transition: all 0.4s ease-in-out;
.sun{
  position: absolute;
  top: 0%;
  left: 0%;
  transform: translate(-50%,-50%);
  border-radius:50%;
  width:70px;
  height:70px;
  background: radial-gradient(circle at center, #ffc107, #ff9800, #c62828);
box-shadow: 0px 0px 50px rgba(255, 152, 0, 0.5), 0px 0px 100px rgba(255, 87, 34, 0.5), 0px 0px 150px rgba(198, 40, 40, 0.5), 0px 0px 200px rgba(244, 67, 54, 0.5);
}
.earth,.moon,.mars,.jupiter,.pluto,.venus,.saturm{
  position: absolute;
  border-radius: 50%;
  border: 1px solid #fff;
  /* border-style: solid; */
  /* border-width: 1px; */
  /* border-color:#fff transparent transparent transparent; */
}
.mars{
  top: calc(50% - 60px);
  left: calc(50% - 60px);
  width: 120px;
  height: 120px;
  animation: orbit 10.2s linear infinite;
  &::before{
  content: "";
   position: absolute;
   top: 15%;
   right: 1%;
   width: 20px;
   height:20px;
   border-radius:50%;
   background: radial-gradient(circle at center, #8b0f00, #d47350 40%, #fdf3ec 75%, #fff);

}
}
.earth{
  top: calc(50% - 150px);
  left: calc(50% - 150px);
  width: 300px;
  height: 300px;
  animation: orbit 30.2s linear infinite;
  &::before{
  content: "";
   position: absolute;
   top: 12%;
   right: 1%;
   width: 50px;
   height: 50px;
   border-radius:50%;
   background: radial-gradient(circle at center, #006699, #0099cc 20%, #00ccff 40%, #ffffff 60%);
box-shadow: 0px 0px 30px 7px rgba(255,255,255,0.8) inset, 0px 0px 100px 20px rgba(255,255,255,0.5) inset;
}
}
.moon{
  top: 1%;
  right:-10%;
  width: 75px;
  height: 75px;
  animation: orbit 1.5s linear infinite;
  &::before{
  content: "";
   position: absolute;
   top: 7%;
   right: 1%;
   width: 20px;
   height: 20px;
   border-radius:50%;
   background-color: aqua;
}
}


.jupiter{
  top: calc(50% - 200px);
  left: calc(50% - 200px);
  width: 400px;
  height: 400px;
  animation: orbit 40.2s linear infinite;
  &::before{
  content: "";
   position: absolute;
   top: 15%;
   right: 1%;
   width: 60px;
   height: 60px;
   border-radius:50%;
   background: radial-gradient(circle at center, #e6bb57, #daa03d 20%, #b37400 40%, #9f5302 60%);
box-shadow: 0px 0px 30px 7px rgba(255,255,255,0.8) inset, 0px 0px 100px 20px rgba(255,255,255,0.5) inset;
}
}

.venus{
  top: calc(50% - 90px);
  left: calc(50% - 90px);
  width: 180px;
  height: 180px;
  animation: orbit 20.2s linear infinite;
  &::before{
  content: "";
   position: absolute;
   top: 10%;
   right: 1%;
   width: 30px;
   height: 30px;
   border-radius:50%;
   background: radial-gradient(circle at center, #e5b668, #dc9745 30%, #c84a05 60%, #19090f);
box-shadow: 0px 0px 50px 10px rgba(255,255,255,0.8) inset, 0px 0px 100px 20px rgba(255,255,255,0.5) inset;
}
}

.saturm{
  top: calc(50% - 250px);
  left: calc(50% - 250px);
  width: 500px;
  height: 500px;
  animation: orbit 50.2s linear infinite;
  &::before{
  content: "";
   position: absolute;
   top: 20%;
   right: 1%;
   width: 70px;
   height: 70px;
   border-radius:50%;
   background: radial-gradient(circle at center, #e6bb57, #daa03d 20%, #b37400 40%, #9f5302 60%);
box-shadow: 0px 0px 30px 7px rgba(255,255,255,0.8) inset, 0px 0px 100px 20px rgba(255,255,255,0.5) inset;
}
}

.pluto{
  top: calc(50% - 300px);
  left: calc(50% - 300px);
  width: 600px;
  height: 600px;
  animation: orbit 60.2s linear infinite;
  &::before{
  content: "";
   position: absolute;
   top: 29%;
   right: 1%;
   width: 30px;
   height: 30px;
   border-radius:50%;
   background: radial-gradient(circle at center, #b29d9c, #8f7e7d 20%, #5e4947 40%, #2a221f 60%);
box-shadow: 0px 0px 30px 7px rgba(255,255,255,0.8) inset, 0px 0px 100px 20px rgba(255,255,255,0.5) inset;
}
}
@keyframes orbit {
  to{
    transform: rotate(360deg);
  }
}
`
export default App