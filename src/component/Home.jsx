import React from 'react'
import "../styles/home.css"

const Home = () => {
  return (
    <div>
      {/* <h1>Home Page</h1> */}
      <div>
        <img className='glaimg' src={"/images/img1.jpeg"} alt="" />
        {/* <div className='transdiv'>
        <h1>Digital Library</h1>
        <p className='para'>When the Libraries are closed, use our convenient book drops to return materials. Visit our Digital Library for 24/7 access to eBooks, audiobooks, magazines, movies, music, learning and more.</p>
      </div> */}
      </div>
      <div className='transdiv'>
        <h3 className='digital' style={{fontFamily:"-moz-initial", fontSize:"xxx-large"}}>Digital Library</h3>
        <p className='para'>When the Libraries are closed, use our convenient book drops to return materials. Visit our Digital <br/> Library for 24/7 access to eBooks, audiobooks, magazines, movies, music, learning and more.</p>
      </div>

    
      <div>
        <img className='secdiv' src={"./images/lastimg.jpeg"} alt="" />
      </div>

      <div className='transdiv1'>
        <p className='details'>ABOUT</p>
        <h2 className='details' style={{fontFamily:"-moz-initial", fontSize:"xxx-large" , fontWeight:500 , textDecoration:"underline"}}>Cos Cob Library Renovation</h2>
        <p className='details' style={{fontSize:"large"}}>Greenwich Library recently announced a new plan for the much-anticipated Cos Cob <br/> Branch Library renovation. The revised plan considers ideas raised by the community to <br/> expand the community room for greater program capacity, increase space dedicated to <br/> children’s services, and enhance the collections to make it a go-to destination. </p>
      </div>

      <div>
        <img className='greenimg' src={"./images/img3.png"} alt="" />
      </div>
      <div >
      <h2 className='janu' style={{fontFamily:"-moz-initial", fontSize:"xxx-large" , fontWeight:"normal"}}>January Events</h2>
      <p className='pa'>These printable one-page calendars for each Greenwich Library branch are fridge-ready.</p>
      <button className='janu1'>Get Printable Calendars</button>
      </div>
    
      <div>
         <img className='lib' src={"./images/img4.jpeg"} alt="" />
      </div>
      <div className='transdiv2'>
         <p className='details1'>EXPLORE</p>
         <h2 className='details1' style={{fontFamily:"-moz-initial", fontSize:"xxx-large" , fontWeight:500 , textDecoration:"underline"}}>Peterson Business Collection</h2>
         <p className='details1' style={{fontSize:"large"}}>Our Peterson Business Collection offers support for job seekers, entrepreneurs, small <br/> businesses, and nonprofits. The Library also provides financial literacy resources for <br/> individuals of all skill levels. Access our business databases to get started. Make sure to <br/> check out our business workshops too!</p>
      </div>
    </div>
  )
}

export default Home
