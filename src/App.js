
import './App.css';

function App() {
  return (
    <div>
      <header>
        <div className="headerbox">
        <h5>Start Bootstrap</h5>
        <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li className='blogtext'>Blog</li>
        </ul>
        </div>
      </header>


    <section>
      <div className='container-fluid'>
        <h1>Welcome o Blog Home!</h1>
        <p className='bootstraptext'>A Bootstrap 5 starter layout for your next blog homepage</p>
      </div>

    <div className='container1'>
      <div className='boxright'>
        <div className='boxtop'>
          <span className='size'>850 x 350</span>
        </div>
        <p className='textjanuary'>January 1, 2023</p>
        <h4>Featured Post Title</h4>
        <p className='paragrap'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a <br />
         laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!
        </p>
            <button className='readmore'>Read more</button>
      </div>

      <div className='containerright'>
        <div className='search'>
          <div className='searchdiv'>
            <span className='textsearch'>Search</span>
          </div>
          <div className='enter'>
             <span>Enter search team</span>
            <button className='go'>Go!</button>
          </div>
        </div>
        <div className='search'>
          <div className='searchdiv'>
            <span className='textsearch'>Categories</span>
          </div>
          <div className='linkbox'>
            <div className='html'>
              <a href="javascript:void(0);">Web Design</a>
              <a href="javascript:void(0);">HTML</a>
              <a href="javascript:void(0);">Freebies</a>
              <a href="javascript:void(0);">JavaScript</a>
              <a href="javascript:void(0);">Css</a>
              <a href="javascript:void(0);">Tutorials</a>
            </div>
          </div>
        </div>
        <div className='search'>
          <div className='searchdiv'>
            <span className='textsearch'>Side Widget</span>
          </div>
          <div>
            <p className='sidetext'>You can put anything you want inside of these side <br />
             widgets. They are easy to use, and feature the <br />
              Bootstrap 5 card component!</p>
          </div>
        </div>
      </div>
    </div>
    </section>

    <section>
      <div className='container2'>
        <div className='middlebox'>
          <div className='middletop'> 
            <span className='size2'>700 x 350</span></div>
          <div>
          <p className='textjanuary'>January 1, 2023</p>
          <h4>Post Title</h4>
          <p className='paragrap'>
          Lorem ipsum dolor sit amet, consectetur adipisicing <br />
           elit. Reiciendis aliquid atque, nulla.
          </p>
          <div>
          <button className='readmore'>Read more</button>
          </div>
          </div>
        </div>

        <div className='middlebox'>
          <div className='middletop'> 
            <span className='size2'>700 x 350</span></div>
          <div>
          <p className='textjanuary'>January 1, 2023</p>
          <h4>Post Title</h4>
          <p className='paragrap'>
          Lorem ipsum dolor sit amet, consectetur adipisicing <br />
           elit. Reiciendis aliquid atque, nulla.
          </p>
          <div>
          <button className='readmore'>Read more</button>
          </div>
          </div>
        </div>
      </div>
      <div className='container2'>
        <div className='middlebox'>
          <div className='middletop'> 
            <span className='size2'>700 x 350</span></div>
          <div>
          <p className='textjanuary'>January 1, 2023</p>
          <h4>Post Title</h4>
          <p className='paragrap'>
          Lorem ipsum dolor sit amet, consectetur adipisicing <br />
           elit. Reiciendis aliquid atque, nulla.
          </p>
          <div>
          <button className='readmore'>Read more</button>
          </div>
          </div>
        </div>

        <div className='middleboxright'>
          <div className='middletop'> 
            <span className='size2'>700 x 350</span></div>
          <div>
          <p className='textjanuary'>January 1, 2023</p>
          <h4>Post Title</h4>
          <p className='paragrap'>
          Lorem ipsum dolor sit amet, consectetur adipisicing <br />
           elit. Reiciendis aliquid atque, nulla? Quos cum ex quis <br />
            soluta, a laboriosam.
          </p>
          <div>
          <button className='readmore'>Read more</button>
          </div>
          </div>
        </div>
      </div>
    </section>
<div className='bottombox'>
  <div className='botbox'>
        <p>Newer</p>
        <p className='one'>1</p>
        <p className='blue'>2</p>
        <p className='blue'>3</p>
        <p>...</p>
        <p className='blue'>15</p>
        <p className='blue'>Older</p>
   </div>
</div>

   <footer>
    <div className='footerbox'>
       <p>Copyright © Your Website 2023</p>
    </div>
   </footer>
    </div>
  );
}

export default App;
