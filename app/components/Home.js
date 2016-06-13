import React from 'react';

class Home extends React.Component {
  render(){
    return(
      <div style={{textAlign:"center"}}>
        <h2 className="text-center">
        Search By Actors Id
        </h2>
        <span>Try a couple of the actors names below:</span>

        <li>1742838088</li>
        <li>2425816379</li>
        <li>8141767143</li>
        <li>5452085277</li>
        <li>9871250883</li>
        <li>3313448899</li>
        <li>3482062183</li>
        <li>7078028660</li>
        <li>5348815589</li>
        <li>1790082197</li>
        <li>5133874291</li>
        <li>2239607891</li>
        <li>1742838088</li>
        <li>2425816379</li>
        <li>1790082197</li>
        <li>5133874291</li>
        <li>Or try one of your own.</li>

        <h2>Enjoy!</h2>
        <h2>Feel free to add likes to actors, and leave them comments.</h2>

        <footer>
          <hr/>
          <span style={{float:"left"}}>Made by J. Tanner Porter </span>
          <div style={{float:"right"}}>
            <div>Phone: 801-623-7839</div>
            <div>Email: <a href="mailto:jtporter9@gmail.com">jtporter9@gmail.com</a></div>
            <div>Site: <a href="jtannerporter.com">jtannporter.com</a></div>
           </div>

        </footer>

      </div>
      )
  }
}

export default Home;
