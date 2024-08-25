import React from 'react'
import './App.css'

function App() {
  return( 
    <body class="d-flex flex-column h-100">
    <main class="flex-shrink-0">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container px-5">
            <img style={{width:'60px',height:'50px'}} src="src/images/iphone-removebg-preview.png" alt="" />

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item"><a class="nav-link" href="index.html">Store</a></li>
                        <li class="nav-item"><a class="nav-link" href="about.html">Mac</a></li>
                        <li class="nav-item"><a class="nav-link" href="contact.html">iphone</a></li>
                        <li class="nav-item"><a class="nav-link" href="pricing.html">ipad</a></li>
                        <li class="nav-item"><a class="nav-link" href="faq.html">Watch</a></li>
                        <li class="nav-item"><a class="nav-link" href="faq.html">Airpod</a></li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdownBlog" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Accessories</a>
                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                                <li><a class="dropdown-item" href="blog-home.html">Blog Home</a></li>
                                <li><a class="dropdown-item" href="blog-post.html">Blog Post</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdownPortfolio" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Service</a>
                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownPortfolio">
                                <li><a class="dropdown-item" href="portfolio-overview.html">Portfolio Overview</a></li>
                                <li><a class="dropdown-item" href="portfolio-item.html">Portfolio Item</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
        <header class="bg-dark py-5">
            <div class="container px-5">
                <div class="row gx-5 align-items-center justify-content-center">
                    <div class="col-lg-8 col-xl-7 col-xxl-6">
                        <div class="my-5 text-center text-xl-start">
                            <h1 class="display-5 fw-bolder text-white mb-2">Store. The best way to buy the products you love.
                            </h1>
                            <p class="lead fw-normal text-white-50 mb-4">The latest. Take a look at what’s new right now.</p>
                            <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                {/* <a class="btn btn-primary btn-lg px-4 me-sm-3" href="#features">Buy Now</a> */}
                                <a class="btn btn-outline-light btn-lg px-4" href="#!">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><video autoplay loop muted plays-inline class="img-fluid rounded-3 my-5" src="src/images/xlarge_2x.mp4" controls autoPlay ></video></div>
                </div>
            </div>                                                                                                 
        </header>
     
       
        <div className='bg-dark'>
            <div>
                <video loop style={{width:'100%'}} src="src/images/tittanium.mp4" muted autoPlay ></video>
                 
            </div>
        </div>
        <br /><br />
      {/* -----------col----------- */}
         <div class="row ">
            <div className="col-3  "><img  style={{height:'400px' ,width:'300px'}} src="https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=90&crop=false" alt="" />
            
            </div>
            <div className="col-3 "><img style={{height:'500px',width:'400px'}} src="https://www.apple.com/v/macbook-air/s/images/meta/macbook_air_mx__ez5y0k5yy7au_og.png" alt="" /></div>
            <div className="col-3 "><img  style={{height:'400px' ,width:'400px'}} src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT3D3ref_VW_34FR+watch-case-44-aluminum-midnight-cell-se_VW_34FR+watch-face-44-aluminum-midnight-se_VW_34FR?wid=752&hei=720&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=ajJYOEQxYjNlejNwbWNnSU16d0NYaWhSbVIzRFJTYlp1MEk4OWNDaTcvNTlEbzMrd1Z5SUpEd0hiT0ZLRlZGNHVDTzRRaC84T1VMbXJRN05SRldIelBRWnNWZWtLcTZCYVRER3FsWWowaTk5RG8zK3dWeUlKRHdIYk9GS0ZWRjR4cVNUNDJadDNVSmRncE9SalAvZ24zZmdHMUt6VFlqa3BpV2VBOUNycGdrcDIxSk5peW5HTWQ0c004MmJwMkNtdGl6SHg4ZE5NYmlWSVQ5akRTdGpCZkNDUmN0SlpnYXpQNFNTbUVsbTlnST0=" alt="" /></div>
            <div className="col-3 "><img style={{height:'500px',width:'400px'}} src="src/images/apple_ipad-pro-spring21_hero_04202021_big.jpg.large-removebg-preview.png" alt="" /></div>
         </div>

      {/* ----------------- */}
      <br /><br /><br />
      <video loop style={{width:'100%',height:'100%'}} src="src/images/15pro.mp4" controls  autoPlay></video>
      {/*=========================================== card======================================= */}
      <div class="row gx-5 mt-3">
                    <div  class="col-lg-4 mb-5">
                        <div class="card h-100 shadow border-0">
                            <img style={{height:'100%',width:'650px'}} class="card-img-top" src="src/images/iphone-15-pro-gray-removebg-preview.png" alt="..." />
                            <div class="card-body p-4">
                            <div class="badge bg-primary bg-gradient rounded-pill mb-2">New</div>
                                <h5>iPhone 15 Pro in Natural Titanium</h5>
                                <span class="fa fa-star  text-warning"></span>
                                 <span class="fa fa-star  text-warning"></span>
                                 <span class="fa fa-star  text-warning"></span>
                                <span class="fa fa-star text-warning"></span>
                                <span class="fa fa-star text-warning"></span>
                            </div>
                            <div  className='mb-5'><button className='rounded fw-bolder p-2 ms-4 w-25 bg-danger text-light '>Buy</button> <span><button  className='rounded fw-bolder p-2 ms-4 w-50 bg-primary text-light'>Add to Cart</button></span></div>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-5">
                        <div class="card h-100 shadow border-0">
                            <img style={{height:'100%',width:'100%'}} class="card-img-top" src="https://www.imagineonline.store/cdn/shop/files/MacBook_Pro_16_in_M3_Pro_Max_Space_Black_PDP_Image_Position_1__en-IN_99aef8f1-612a-41cc-b5a8-4b7e25b1619f.jpg?v=1698727248&width=1445" alt="..." />
                            <div class="card-body p-4">
                                <div class="badge bg-primary bg-gradient rounded-pill mb-2">New</div>
                                <h5>
                                Mac Book Pro M3 Pro</h5>
                                <span class="fa fa-star  text-warning"></span>
                                 <span class="fa fa-star  text-warning"></span>
                                 <span class="fa fa-star  text-warning"></span>
                                <span class="fa fa-star text-warning"></span>
                                <span class="fa fa-star text-warning"></span>
                                <div className='mt-4'><button className='rounded fw-bolder p-2 ms-4 w-25 bg-danger text-light '>Buy</button> <span><button  className='rounded fw-bolder p-2 ms-4 w-50 bg-primary text-light'>Add to Cart</button></span></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-5">
                        <div class="card h-100 shadow border-0">
                            <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcThHcSdIAfZ4ZWB9dwi6leR2cEvdZFe0wSbbLEu5oyVGsWeadSdeXy9E3SIvoHdNmOIq811-lwAjJ4W-DFoyjXDLzy2kbEYeQUdd8xnGYYP6LnY0TlLPSh07SbHeKdThoC5CrjPuw&usqp=CAc" alt="..." />
                            <div class="card-body p-4">
                                <div class="badge bg-primary bg-gradient rounded-pill mb-2">New</div>
                               <h5>ipad pro 13</h5>
                               <span class="fa fa-star  text-warning"></span>
                                 <span class="fa fa-star  text-warning"></span>
                                 <span class="fa fa-star  text-warning"></span>
                                <span class="fa fa-star text-warning"></span>
                                <span class="fa fa-star text-warning"></span>
                            </div>
                            <div className='mb-5'><button className='rounded fw-bolder p-2 ms-4 w-25 bg-danger text-light '>Buy</button> <span><button  className='rounded fw-bolder p-2 ms-4 w-50 bg-primary text-light'>Add to Cart</button></span></div>
                        </div>
                    </div>
                </div>

                {/* ========================== */}

                <h2 className='ms-5'> Take a closer look.</h2>
                <img className='mx-auto d-block' src="https://www.apple.com/in/iphone-15/images/overview/closer-look/all_colors__d4w03v51nwcy_large.jpg" alt="" />
                <br />
               <h2 className='ms-5'>Explore the full story.</h2>
               <br />
               <h3 className='text-center fw-bolder '>Dynamic Island.
               For when things just pop up.</h3>
               <img className='mx-auto d-block' style={{width:'400px'}} src="https://www.apple.com/v/iphone-15/c/images/overview/dynamic-island/dynamic_island_hw__bq0da9ahwxpy_large.png" alt="" />

               <h1 className='ms-5  fw-bolder'>Colour through <br />
                and through. <br />
                Tough all around.</h1>
                <br />
                <video className='img-fluid rounded-3 my-5' style={{width:'100%',height:'300px'}} loop src="src/images/latest.mp4"  autoPlay></video>
                <div className='row ms-5 '>
                    <div className="col-4  "><img src="https://www.apple.com/v/iphone-15/c/images/overview/design/icon_ceramic_shield__c8mbdapug0sy_large.png" alt="" />
                    <h5>Dependably durable. <br />
The Ceramic Shield <br />
front is tougher than <br />
any smartphone glass.</h5></div>
                    <div className="col-4  "><img src="https://www.apple.com/v/iphone-15/c/images/overview/design/icon_water__fs03bred1b6m_large.png" alt="" />
                    <h5>Remarkably resistant. <br />
                    iPhone is splash, water <br /> and dust resistant. What <br /> a relief.</h5></div>
                    <div className="col-4"><img src="https://www.apple.com/v/iphone-15/c/images/overview/design/icon_enclosure__d6lgjx8ucjwy_large.png" alt="" />
                    <h5>Truly tough. <br />
The aerospace-grade <br /> aluminium  enclosure is <br />
super strong and light.</h5></div>
                </div>
      {/* ==================================================================================== */}
        <div class="py-5 bg-light">
            <div class="container px-5 my-5">
                <div class="row gx-5 justify-content-center">
                    <div class="col-lg-10 col-xl-7">

                        <div class="text-center">
                            <div class="fs-4 mb-4 fst-italic">"Working with Start Bootstrap templates has saved me tons of development time when building new projects! Starting with a Bootstrap template just makes things easier!"</div>
                            <div class="d-flex align-items-center justify-content-center">
                                <img class="rounded-circle me-3" src="https://dummyimage.com/40x40/ced4da/6c757d" alt="..." />
                                <div class="fw-bold">
                                    Tom Ato
                                    <span class="fw-bold text-primary mx-1">/</span>
                                    CEO, Pomodoro
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
        <section class="py-5">
            <div class="container px-5 my-5">
                <div class="row gx-5 justify-content-center">
                    <div class="col-lg-8 col-xl-6">
                        <div class="text-center">
                            <h2 class="fw-bolder">Get the highlights.</h2>
                            <p class="lead fw-normal text-muted mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque fugit ratione dicta mollitia. Officiis ad.</p>
                        </div>
                    </div>
                </div>
                <div class="row gx-5">
                    <div class="col-lg-4 mb-5">
                        <div class="card h-100 shadow border-0">
                            <video loop class="card-img-top" src="src/images/high1.mp4" controls autoPlay></video>
                            <div class="card-body p-4">
                                <div class="badge bg-primary bg-gradient rounded-pill mb-2">News</div>
                                <a class="text-decoration-none link-dark stretched-link" href="#!"><h5 class="card-title mb-3">Blog post title</h5></a>
                                <p class="card-text mb-0">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <div class="card-footer p-4 pt-0 bg-transparent border-top-0">
                                <div class="d-flex align-items-end justify-content-between">
                                    <div class="d-flex align-items-center">
                                        <img class="rounded-circle me-3" src="https://dummyimage.com/40x40/ced4da/6c757d" alt="..." />
                                        <div class="small">
                                            <div class="fw-bold">Kelly Rowan</div>
                                            <div class="text-muted">March 12, 2023 &middot; 6 min read</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-5">
                        <div class="card h-100 shadow border-0">
                            <img class="card-img-top" src="https://dummyimage.com/600x350/adb5bd/495057" alt="..." />
                            <div class="card-body p-4">
                                <div class="badge bg-primary bg-gradient rounded-pill mb-2">Media</div>
                                <a class="text-decoration-none link-dark stretched-link" href="#!"><h5 class="card-title mb-3">Another blog post title</h5></a>
                                <p class="card-text mb-0">This text is a bit longer to illustrate the adaptive height of each card. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <div class="card-footer p-4 pt-0 bg-transparent border-top-0">
                                <div class="d-flex align-items-end justify-content-between">
                                    <div class="d-flex align-items-center">
                                        <img class="rounded-circle me-3" src="https://dummyimage.com/40x40/ced4da/6c757d" alt="..." />
                                        <div class="small">
                                            <div class="fw-bold">Josiah Barclay</div>
                                            <div class="text-muted">March 23, 2023 &middot; 4 min read</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-5">
                        <div class="card h-100 shadow border-0">
                            <img class="card-img-top" src="https://dummyimage.com/600x350/6c757d/343a40" alt="..." />
                            <div class="card-body p-4">
                                <div class="badge bg-primary bg-gradient rounded-pill mb-2">News</div>
                                <a class="text-decoration-none link-dark stretched-link" href="#!"><h5 class="card-title mb-3">The last blog post title is a little bit longer than the others</h5></a>
                                <p class="card-text mb-0">Some more quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <div class="card-footer p-4 pt-0 bg-transparent border-top-0">
                                <div class="d-flex align-items-end justify-content-between">
                                    <div class="d-flex align-items-center">
                                        <img class="rounded-circle me-3" src="https://dummyimage.com/40x40/ced4da/6c757d" alt="..." />
                                        <div class="small">
                                            <div class="fw-bold">Evelyn Martinez</div>
                                            <div class="text-muted">April 2, 2023 &middot; 10 min read</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <aside class="bg-primary bg-gradient rounded-3 p-4 p-sm-5 mt-5">
                    <div class="d-flex align-items-center justify-content-between flex-column flex-xl-row text-center text-xl-start">
                        <div class="mb-4 mb-xl-0">
                            <div class="fs-3 fw-bold text-white">New products, delivered to you.</div>
                            <div class="text-white-50">Sign up for our newsletter for the latest updates.</div>
                        </div>
                        <div class="ms-xl-4">
                            <div class="input-group mb-2">
                                <input class="form-control" type="text" placeholder="Email address..." aria-label="Email address..." aria-describedby="button-newsletter" />
                                <button class="btn btn-outline-light" id="button-newsletter" type="button">Sign up</button>
                            </div>
                            <div class="small text-white-50">We care about privacy, and will never share your data.</div>
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    </main>
   
    <footer class="bg-dark py-4 mt-auto">
        <div class="container px-5">
            <div class="row align-items-center justify-content-between flex-column flex-sm-row">
                <div class="col-auto"><div class="small m-0 text-white">Copyright &copy; Your Website 2023</div></div>
                <div class="col-auto">
                    <a class="link-light small" href="#!">Privacy</a>
                    <span class="text-white mx-1">&middot;</span>
                    <a class="link-light small" href="#!">Terms</a>
                    <span class="text-white mx-1">&middot;</span>
                    <a class="link-light small" href="#!">Contact</a>
                </div>
            </div>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
  
    <script src="js/scripts.js"></script>

      
    </body>
  )
 
}

export default App