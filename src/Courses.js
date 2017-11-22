import React from 'react'

const Courses = () => (
    <div role="main">

      <div className="jumbotron">
        <div className="container">
        <h1 className="display-3">Courses</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-4" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p className="lead">
            <div class="input-group input-group-lg">
            <input type="text" class="form-control" placeholder="Find courses" aria-label="Username" aria-describedby="sizing-addon1" />
            </div>
            </p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>Colleges, Schools and Programs</h2>
            <p>Explore courses by College metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
            <p><a className="btn btn-secondary" href="/" role="button">Find courses &raquo;</a></p>
          </div>
          <div className="col-md-4">
            <h2>General Education</h2>
            <p>Find Courses and Register! Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
            <p><a className="btn btn-secondary" href="/courses" role="button">Connect with Adviser &raquo;</a></p>
          </div>
          <div className="col-md-4">
            <h2>Archive</h2>
            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            <p><a className="btn btn-secondary" href="#" role="button">View Course Catalog &raquo;</a></p>
          </div>
        </div>


      </div>

    </div>
)

export default Courses;